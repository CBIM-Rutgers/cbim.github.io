"""
Crawl papers where Dimitris Metaxas and his students (alumni 2024-2026) are authors.
Uses SerpAPI Google Scholar. Outputs _data/cbim_papers.yaml with venue normalization.
Requires: GOOGLE_SCHOLAR_API_KEY (SerpAPI), optional METAXAS_GSID (default: a7VNhCIAAAAJ).
Run from repo root: python scripts/citations/crawl_cbim_papers.py
"""

import csv
import os
import re
from pathlib import Path

from dotenv import load_dotenv

try:
    from serpapi import GoogleSearch
except ImportError:
    raise SystemExit(
        "Missing package: run  pip install google-search-results  (or  pip install -r scripts/citations/requirements.txt  from repo root)"
    )

load_dotenv()

# Default: Dimitris N. Metaxas (Rutgers)
METAXAS_GSID = os.environ.get("METAXAS_GSID", "a7VNhCIAAAAJ")
API_KEY = os.environ.get("GOOGLE_SCHOLAR_API_KEY", "")
REPO_ROOT = Path(__file__).resolve().parents[2]
ALUMNI_CSV = REPO_ROOT / "cbim_alumni.csv"
MEMBERS_CSV = REPO_ROOT / "cbim_members.csv"
OUTPUT_YAML = REPO_ROOT / "_data" / "cbim_papers.yaml"

# Papers to exclude (title contains any of these; e.g. not actually co-authored by Metaxas)
TITLE_BLOCKLIST = ("TokenSeek",)

# Venues to detect (order matters for first match)
VENUE_PATTERNS = [
    ("ICML", re.compile(r"\bICML\b", re.I)),
    ("ICLR", re.compile(r"\bICLR\b", re.I)),
    ("NeurIPS", re.compile(r"\bNeurIPS\b", re.I)),
    ("NeurIPS", re.compile(r"\bNIPS\b", re.I)),
    ("CVPR", re.compile(r"\bCVPR\b", re.I)),
    ("ECCV", re.compile(r"\bECCV\b", re.I)),
    ("ICCV", re.compile(r"\bICCV\b", re.I)),
    ("MICCAI", re.compile(r"\bMICCAI\b", re.I)),
    ("WACV", re.compile(r"\bWACV\b", re.I)),
    ("AAAI", re.compile(r"\bAAAI\b", re.I)),
]


def extract_gsid_from_url(url: str):
    if not url or "scholar.google.com" not in url:
        return None
    m = re.search(r"[?&]user=([A-Za-z0-9_-]+)", url)
    return m.group(1) if m else None


def get_alumni_2024_2026() -> tuple[list[str], set[str]]:
    """Returns (list of gsids, set of lowercase student last names for matching)."""
    gsids = []
    student_last_names: set[str] = set()
    if not ALUMNI_CSV.exists():
        return gsids, student_last_names
    with open(ALUMNI_CSV, newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        rows = list(reader)
    for i, row in enumerate(rows):
        if i <= 1 or len(row) < 5:
            continue
        name = (row[0] or "").strip()
        if not name:
            continue
        try:
            year = int((row[2] or "0").strip()) if row[2] else 0
        except ValueError:
            year = 0
        if year not in (2024, 2025, 2026):
            continue
        parts = name.split()
        if parts:
            student_last_names.add(parts[-1].lower())
        scholar_url = (row[4] or "").strip()
        gsid = extract_gsid_from_url(scholar_url)
        if gsid and gsid not in gsids:
            gsids.append(gsid)

    # Add current members (First line = name) so papers with them count too
    if MEMBERS_CSV.exists():
        with open(MEMBERS_CSV, newline="", encoding="utf-8") as f:
            reader = csv.reader(f)
            rows = list(reader)
        for i, row in enumerate(rows):
            if i == 0 or len(row) < 2:
                continue
            name = (row[1] or "").strip()
            if name:
                parts = name.split()
                if parts:
                    student_last_names.add(parts[-1].lower())
    return gsids, student_last_names


def paper_has_metaxas(authors: list[str]) -> bool:
    """True if any author string looks like Dimitris Metaxas."""
    for a in authors:
        if a and "metaxas" in a.lower():
            return True
    return False


def paper_has_student(authors: list[str], student_last_names: set[str]) -> bool:
    """True if any author's last name is in the student set."""
    for a in authors:
        if not a:
            continue
        parts = a.strip().split()
        if parts and parts[-1].lower() in student_last_names:
            return True
    return False


def normalize_venue(publisher: str):
    if not publisher:
        return None
    for venue, pat in VENUE_PATTERNS:
        if pat.search(publisher):
            return venue
    return None


def year_from_publisher(publisher: str) -> str | None:
    """Extract conference year from publisher (e.g. 'CVPR 2025' -> '2025'); else None."""
    if not publisher:
        return None
    # Match venue name followed by 4-digit year (20xx)
    m = re.search(
        r"(CVPR|ICCV|ECCV|ICML|ICLR|NeurIPS|NIPS|AAAI|WACV)\s*(20\d{2})",
        publisher,
        re.I,
    )
    if m:
        return m.group(2)
    return None


def fetch_author_articles(gsid: str) -> list[dict]:
    params = {
        "engine": "google_scholar_author",
        "api_key": API_KEY,
        "author_id": gsid,
        "num": 100,
    }
    try:
        result = GoogleSearch(params).get_dict()
        return result.get("articles") or []
    except Exception as e:
        print(f"  Warning: failed to fetch {gsid}: {e}")
        return []


def main():
    if not API_KEY:
        print("ERROR: Set GOOGLE_SCHOLAR_API_KEY (SerpAPI key) in .env")
        raise SystemExit(1)

    alumni_gsids, student_last_names = get_alumni_2024_2026()
    author_ids = [METAXAS_GSID] + alumni_gsids
    print(f"Fetching papers for {len(author_ids)} author(s) (Metaxas + alumni 2024-2026) ...")

    seen_ids: set[str] = set()
    papers: list[dict] = []

    for gsid in author_ids:
        print(f"  Author {gsid} ...")
        for work in fetch_author_articles(gsid):
            cid = (work.get("citation_id") or "").strip()
            if not cid or cid in seen_ids:
                continue
            seen_ids.add(cid)
            title = (work.get("title") or "").strip()
            if any(bl in title for bl in TITLE_BLOCKLIST):
                continue
            authors_str = work.get("authors") or ""
            authors = [
                a.strip()
                for a in authors_str.split(",")
                if a.strip() and a.strip() not in ("...", "…")
            ]
            if not paper_has_metaxas(authors):
                continue
            if not paper_has_student(authors, student_last_names):
                continue
            pub = (work.get("publication") or "").strip()
            year = year_from_publisher(pub) or (work.get("year") or "").strip()
            link = (work.get("link") or "").strip()
            date = f"{year}-01-01" if year else ""
            venue = normalize_venue(pub)
            papers.append({
                "id": cid,
                "title": title,
                "authors": authors,
                "date": date,
                "link": link or f"https://scholar.google.com/scholar?q=info:{cid}:scholar.google.com/",
                "publisher": pub or None,
                "venue": venue,
            })

    # Sort by date desc, then title
    papers.sort(key=lambda p: (p["date"] or "0000", p["title"] or ""), reverse=True)
    print(f"Keeping {len(papers)} papers that have both Metaxas and at least one student as authors.")

    # Write YAML
    import yaml
    OUTPUT_YAML.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_YAML, "w", encoding="utf-8") as f:
        f.write("# DO NOT EDIT, GENERATED AUTOMATICALLY by scripts/citations/crawl_cbim_papers.py\n\n")
        yaml.dump(papers, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
    print(f"Wrote {len(papers)} papers to {OUTPUT_YAML}")


if __name__ == "__main__":
    main()
