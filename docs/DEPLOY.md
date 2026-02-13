# Deploying to GitHub Pages

## If the site only shows the README

GitHub is serving your **repository** (the README) instead of the **built website** from the workflow.

**Fix:** Use the Actions deployment as the Pages source.

1. Open **https://github.com/CBIM-Rutger/cbim.github.io/settings/pages**
2. Under **Build and deployment**, find **Source**.
3. If it says **"Deploy from a branch"**, change it to **"GitHub Actions"**.
4. Save. The site should update within a minute to show the Next.js app (home, members, publications) instead of the README.

You do **not** need to choose a branch or folder when using GitHub Actions; the workflow uploads the built `out/` folder and that is what gets served.

---

## Fix "Creating Pages deployment failed" (404)

If the workflow fails with **HttpError: Not Found** or **Failed to create deployment (status: 404)**, GitHub Pages is not enabled or not set to use Actions. Do this **before** (or after) the first run:

### 1. Enable GitHub Pages and set source to Actions

1. Open: **https://github.com/CBIM-Rutger/cbim.github.io/settings/pages**
2. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions** (not "Deploy from a branch").
3. Save. No need to pick a branch or folder.

After this, re-run the workflow (Actions tab → "Deploy to GitHub Pages" → "Re-run all jobs"). The deploy step should succeed.

### 2. If the repo is in an organization

- The org must allow **Pages** (org **Settings** → **Pages**).
- If the org uses **Member privileges**, your role may need permission to publish Pages. An owner can enable it.

---

## One-time setup (checklist)

1. **Enable GitHub Pages with Actions** (see above).
2. **Branch:** The workflow runs on pushes to `main`. If your default branch is `master`, change `branches: ["main"]` in `.github/workflows/deploy.yml` to `["master"]`, or rename the branch to `main`.

## How it works

- Pushing to `main` (or running the workflow manually) triggers the workflow.
- The workflow runs `npm ci` and `npm run build`, which produces a static export in the `out/` folder.
- That folder is uploaded and deployed to GitHub Pages.

## Project site (subpath URL)

If the site is at `https://<user>.github.io/<repo-name>/` (e.g. `https://rutgers.github.io/cbim.github.io/`):

1. In `.github/workflows/deploy.yml`, in the **Build** step, uncomment and set:
   ```yaml
   env:
     BASE_PATH: /${{ github.event.repository.name }}
   ```
2. Redeploy.

## Local static build

To test the same build locally:

```bash
npm run build
# Serve the `out/` folder with any static server, e.g.:
npx serve out
```
