# Vaishaly S — Portfolio Website
## Step-by-step guide (no technical knowledge needed)

---

## QUICK REFERENCE — Where each file goes

| What | Folder | File name to use |
|---|---|---|
| Hero background image | `assets/images/hero/` | `hero.jpg` |
| Your portrait photo | `assets/images/about/` | `portrait.jpg` |
| Your resume PDF | `assets/` | `resume.pdf` |
| Project images | `assets/images/portfolio/<project-folder>/` | any name |

---

## HOW TO ADD YOUR RESUME PDF

This is the most important step — the Download Resume button will not work until you do this.

**Step 1** — Find your resume file on your computer (it must be a PDF).

**Step 2** — Rename it to exactly: `resume.pdf`
- Right-click the file → Rename → type `resume.pdf` → press Enter.

**Step 3** — Copy it into this folder:
```
C:\Users\rh2\vaishaly-portfolio\assets\
```
You will see a file called `PLACE_RESUME_HERE.txt` there — that is just a marker. Paste your `resume.pdf` next to it.

**Step 4** — Open `index.html` in Notepad (right-click → Open with → Notepad).

**Step 5** — Press Ctrl+F and search for:
```
Resume upload coming soon
```

**Step 6** — You will see a block. Replace this entire section:
```html
<p style="...">Resume upload coming soon</p>
```
With these two lines:
```html
<a href="assets/resume.pdf" download="Vaishaly_S_Resume.pdf" class="btn btn--primary">Download Resume</a>
<a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">View Resume</a>
```

**Step 7** — Save the file (Ctrl+S). Refresh browser (F5). The buttons will now work.

---

## HOW TO ADD YOUR HERO BACKGROUND IMAGE

**Step 1** — Choose a fashion photo (lookbook, flat-lay, editorial style — landscape/wide works best).

**Step 2** — Rename the file to exactly: `hero.jpg`

**Step 3** — Copy it into:
```
C:\Users\rh2\vaishaly-portfolio\assets\images\hero\
```

**Step 4** — Refresh browser (F5). The background image will appear.

Recommended size: 1920×1080 pixels or larger.

---

## HOW TO ADD YOUR PORTRAIT PHOTO

**Step 1** — Choose a clear professional photo of yourself.

**Step 2** — Rename it to exactly: `portrait.jpg`

**Step 3** — Copy it into:
```
C:\Users\rh2\vaishaly-portfolio\assets\images\about\
```

**Step 4** — Refresh browser (F5). Your photo will appear in the About section.

Recommended size: 800×1000 pixels (portrait/vertical).

---

## HOW TO ADD PROJECT IMAGES

Each project has its own folder. Drop images into the right folder and the slideshow will show them.

**Step 1** — Open:
```
C:\Users\rh2\vaishaly-portfolio\assets\images\portfolio\
```

**Step 2** — Open the project folder you want to update. Current folders:

| Project | Folder name |
|---|---|
| Nautica Kidswear | `nautica-kidswear-ss25` |
| House of Pataudi Sportsline | `house-of-pataudi-sportsline` |
| Marks & Spencer Exports | `ms-womenswear-exports` |
| French Connection Womenswear | `french-connection-womenswear` |
| Gap & Banana Republic Menswear | `gap-banana-republic-menswear` |
| YK & Sangria Kidswear | `yk-sangria-kidswear` |
| Ann Taylor / J.Jill / Loft | `ann-taylor-jjill-loft-women` |

**Step 3** — Copy your images into that folder. You can add as many as you like (3–10 is ideal).

**Step 4** — To register a new cover image or new gallery images, open:
```
C:\Users\rh2\vaishaly-portfolio\js\data.js
```
in Notepad, find the project by name, and update the `coverImage` or `images` array.

---

## CURRENT PORTFOLIO TABS

- 01 — Womenswear
- 02 — Menswear
- 03 — Kidswear
- 04 — Graphic / Print
- 05 — Tech Packs
- 06 — Collage Works

---

## HOW TO EDIT YOUR NAME, EMAIL OR PHONE

**Step 1** — Open `js/data.js` in Notepad.

**Step 2** — At the very top, find:
```
const siteConfig = {
  name:     'Vaishaly S',
  email:    'svaishaly.1@gmail.com',
  phone:    '+91 7397310071',
```

**Step 3** — Change any value inside the single quotes.

**Step 4** — Save (Ctrl+S) and refresh browser (F5).

---

## HOW TO PREVIEW THE SITE

1. Open `C:\Users\rh2\vaishaly-portfolio`
2. Double-click `index.html`
3. It opens in your browser — that is your website.
4. After any edit, press **F5** to refresh.

---

## LIVE WEBSITE (GITHUB PAGES)

URL: https://svaishaly1.github.io/

After making changes locally, the files need to be pushed to GitHub for the live site to update. Ask for help with this step when ready.

---

## TROUBLESHOOTING

**Download Resume button not working**
→ You have not placed `resume.pdf` in the `assets/` folder yet. Follow the "HOW TO ADD YOUR RESUME PDF" steps above.

**Image is not showing**
→ Check the file name is spelled exactly right, including `.jpg` at the end.
→ Make sure the file is in the correct folder.
→ Press Ctrl+F5 (hard refresh) in the browser.

**Site looks old after edits**
→ Press Ctrl+F5 instead of just F5.
