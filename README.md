# Vaishaly S - Portfolio Website

This file is the quick operating guide for the current portfolio version.

## Current status

- Resume download is enabled.
- Resume file path is `assets/resume.pdf`.
- Portfolio categories are:
  - Womenswear
  - Menswear
  - Kidswear
  - Graphic / Print
  - Tech Packs
  - College Works
- College Works currently contains only:
  - Graduation Project
  - Lakme Fashion Week
- Print Portfolio - Graphic is under Graphic / Print.

## Key files to edit

- `index.html`: section structure and static text.
- `js/data.js`: portfolio data, experience, categories, contact info.
- `js/main.js`: rendering logic, modal, gallery, PDF open behavior.
- `css/style.css`: visual styles.

## Resume setup

The site currently uses:

- Download button -> `assets/resume.pdf`
- View button -> `assets/resume.pdf`

To replace resume:

1. Keep your new file as PDF.
2. Rename it to `resume.pdf`.
3. Replace `assets/resume.pdf`.
4. Refresh browser.

## PDF project behavior

- PDF projects open from project modal preview.
- The website does not intentionally navigate away from portfolio page.
- If browser popup is blocked, user may see a popup warning.
- A message is shown in UI: PDF may take a few minutes to load completely.

## Update About / Experience content

### About intro

Edit the About paragraph directly in `index.html` under the About section.

### Experience entries and brand lists

Edit in `js/data.js` -> `const experienceItems = [...]`

For Myntra brand tags, update the `brands` array in the first experience object.

## Add or edit portfolio projects

Edit in `js/data.js` -> `const portfolioProjects = [...]`

Each project supports:

- `coverImage`
- `images` for image gallery
- `documents` for PDF items
- `category` for tab mapping

Project media is located in:

- `assets/images/portfolio/<project-folder>/`

## Local preview

1. Open project folder.
2. Open `index.html` in browser.
3. Refresh after edits.

## Publish to GitHub Pages

After local validation:

1. Commit changes.
2. Push to `main`.
3. Wait for GitHub Pages deployment.

Live URL:

- https://svaishaly1.github.io/

## Troubleshooting

### Resume button not working

- Confirm file exists at `assets/resume.pdf`.
- Hard refresh browser (Ctrl+F5).

### PDF does not open

- Allow popups for the site/browser tab.
- Try clicking again from project modal.

### Images not visible

- Confirm exact file path and extension.
- Confirm project object points to correct media path in `js/data.js`.
