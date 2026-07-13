# GitHub Pages Deployment

This repository is configured to deploy the static Next.js site to GitHub Pages using GitHub Actions.

## What was added

- `next.config.ts`
  - Set `output: "export"` so the site can be exported as static HTML.
- `package.json`
  - Added `export` and `deploy` scripts:
    - `npm run build`
    - `npm run export`
    - `npm run deploy`
- `.github/workflows/deploy.yml`
  - Builds the site and deploys `out/` to the `gh-pages` branch.
  - Adds `CNAME` with `puffin-lab.com` so GitHub Pages knows your custom domain.

## How to publish

1. Commit and push your changes to `main`:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

2. Let GitHub Actions run.
   - The workflow will build and export the site to `out/`.
   - It will publish to the `gh-pages` branch automatically.

3. Configure GitHub Pages in repository settings:
   - Go to `Settings > Pages`.
   - Set the source to `gh-pages` branch.
   - The custom domain should be set to `puffin-lab.com`.

4. Configure DNS for `puffin-lab.com`.
   - If you want the bare domain, add these A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - If you want `www.puffin-lab.com`, add a CNAME record to `your-github-username.github.io`.

## After the first deploy

- Visit `https://puffin-lab.com` after the action completes.
- If the site does not appear immediately, wait a few minutes for DNS and GitHub Pages to update.

## Notes

- If your repo is private, GitHub Pages requires a paid plan or a public repo.
- The workflow uses the default `GITHUB_TOKEN`, so no additional secrets are needed.
