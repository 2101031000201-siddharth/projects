# Siddharth Rathod — Portfolio (React)

A basic React + Tailwind CSS portfolio built with Vite.

## Project structure

```
src/
  data.js              # all content (name, skills, projects, education...) — edit this to update the site
  App.jsx              # composes all sections
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
public/
  profile.jpg          # your photo
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages).

## Deploy to Vercel (same as your other projects)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite — just click Deploy.

## Notes

- To update your resume download button, replace `public/resume.pdf` with your actual resume file (the button in `Navbar.jsx` and `Hero.jsx` links to `/resume.pdf`).
- All text content (bio, skills, project links, education) lives in `src/data.js` — edit that one file to update the whole site.
