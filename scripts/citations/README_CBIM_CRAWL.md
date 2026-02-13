# CBIM publications crawl

`crawl_cbim_papers.py` fetches papers where **Dimitris Metaxas** and **alumni 2024–2026** are authors (via Google Scholar / SerpAPI), dedupes them, normalizes venues (ICML, ICLR, NeurIPS, CVPR, ECCV, ICCV, MICCAI, WACV, AAAI), and writes `_data/cbim_papers.yaml`. The site’s Publications page uses this file when present and supports filtering by conference and year and sorting by year or venue.

## Setup

1. Install deps (from repo root):
   ```bash
   pip install -r scripts/citations/requirements.txt
   ```
2. Get a [SerpAPI](https://serpapi.com/) key (Google Scholar is a supported engine).
3. Create a `.env` in the repo root (or set env vars):
   ```env
   GOOGLE_SCHOLAR_API_KEY=your_serpapi_key
   # optional: override Metaxas’s Google Scholar ID
   METAXAS_GSID=a7VNhCIAAAAJ
   ```

## Run

From repo root:

```bash
python scripts/citations/crawl_cbim_papers.py
```

- Reads `cbim_alumni.csv` and collects scholar IDs for alumni with year 2024, 2025, or 2026.
- Fetches articles for Metaxas (default ID `a7VNhCIAAAAJ`) and each of those alumni.
- Dedupes by citation ID, normalizes venue from the publication string, and writes `_data/cbim_papers.yaml`.

After a successful run, the Publications page will use `_data/cbim_papers.yaml` and the new filters/sort.
