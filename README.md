# Olanrewaju Oredipe — portfolio

Personal portfolio and resume site. React + Vite, React Router, hosted on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

## Edit content

- Case studies and the "More work" gallery: `src/data/caseStudies.js`
- Resume and contact details: `src/data/profile.js`
- Images: `public/images/<project>/` (WebP). Add the size of any new image to `src/imageSizes.json`.
- The downloadable resume is `public/Olanrewaju-Oredipe-Resume.pdf`. If you change the resume text, regenerate it by
  opening `/resume` in Chrome, choosing Print, and saving as PDF (the page has print styles that fit it on one A4 page).

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. To use your own domain, add it under **Project → Settings → Domains**.

`vercel.json` sends every page URL to the app so links like `/projects/iwello` work when opened directly.
