# Mohammad Hammour: Portfolio Website

The source for **https://mhmdhammour.github.io**. Every change saved to the `main` branch rebuilds and republishes the site automatically, usually within two minutes.

You can make every edit below in your web browser on GitHub. You do not need to install anything.

## How to edit a file on GitHub

1. Open the file on github.com.
2. Click the pencil icon (Edit this file).
3. Make your change.
4. Click **Commit changes**, leave "Commit directly to the main branch" selected, and confirm.
5. Check the **Actions** tab. When the newest run shows a green tick, the live site is updated.

## Add a workshop or presentation

1. Go to `src/content/workshops/`.
2. Open any existing file, for example `2025-01-solo-taxonomy.md`, and copy its contents.
3. Click **Add file > Create new file**. Name it `YYYY-MM-short-title.md`, for example `2027-02-assessment-workshop.md`.
4. Paste and change the fields:

```yaml
---
title: Assessment That Shows Understanding
event: IB Day
host: Qatar IB Association of Schools (QIBA)
date: "2027-02"          # year and month, in quotes
role: Presenter          # Presenter, Co-presenter, or Co-facilitator
format: In person        # optional: In person or Virtual
participants: 45 teachers   # optional
---
```

5. Commit. The timeline sorts itself newest first.

**Adding a photo:** upload the image to `assets/raw/` with a descriptive name (for example `ib-day-2027-assessment.jpg`), then add these two lines to the workshop file and delete the `photoNeeded` line:

```yaml
image: ../../../assets/raw/ib-day-2027-assessment.jpg
imageAlt: Teachers sorting assessment examples during an IB Day workshop
```

The site resizes and compresses photos automatically. Never upload photos that show students' faces unless you have documented consent.

## Add an article or publication

Copy a file in `src/content/writing/`, rename it `YYYY-MM-short-title.md`, and edit the fields. `titleAr` is optional and shows the Arabic title under the English one. Set `featured: true` only for the item that should appear as the large card at the top (currently the dissertation).

## Add or change a job or external role

Each role is a file in `src/content/roles/`. The `group` field decides where it appears:

- `school`: Teaching page timeline
- `earlier`: Teaching page timeline, older roles
- `external`: "Beyond my school" cards on Leadership & Learning
- `research`: Writing & Research page

Set `draft: true` to hide a role without deleting it (the NEASC slot works this way).

## Change credentials

Degrees, IB workshops, certificates, and languages are all in one file: `src/content/credentials/credentials.json`. Keep the punctuation (quotes, commas, brackets) exactly as it is around your edits.

## Replace the CV

Upload the new PDF to the `public/` folder with exactly this name: `Mohammad-Hammour-CV.pdf`. GitHub will ask whether to replace the old file. Every "Download CV" button picks it up.

## Contact details and unfinished content

`src/site.config.ts` holds your email, LinkedIn, WhatsApp link, and tagline.

The same file has a `showTodos` switch. While it is `true`, missing content shows as dashed "To add" boxes. Set it to `false` to hide every unfinished item at once.

## Undo a mistake

Every commit is saved. Open the **Commits** list, find the last good version, and ask for help reverting it. Nothing is ever lost.

## For developers

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

Built with Astro (static output), plain CSS with custom properties in `src/styles/tokens.css`, and self-hosted fonts. No tracking scripts.
