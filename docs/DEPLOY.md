# Deploying to GitHub Pages

## One-time setup

1. **Enable GitHub Pages with Actions**
   - In the repo: **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Branch**
   - The workflow runs on pushes to `main`. If your default branch is `master`, either rename it to `main` or change `branches: ["main"]` in `.github/workflows/deploy.yml` to `["master"]`.

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
