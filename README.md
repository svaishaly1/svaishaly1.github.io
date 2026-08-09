# Vaishaly S Portfolio

Beginner-friendly update guide for this website.

## 1) Quick start
1. Open `C:\Users\rh2\vaishaly-portfolio`.
2. Double-click `index.html` to preview the site.
3. After any change, save the file and refresh browser (`F5`).

## 2) Exact file locations and names
- Hero image: `assets/images/hero/hero.jpg`
- Portrait image: `assets/images/about/portrait.jpg`
- Resume PDF: `assets/resume.pdf`
- Portfolio images: `assets/images/portfolio/<project-folder>/`

If an image is not visible, first check the file name matches exactly.

## 3) Current portfolio tabs
- Womenswear
- Menswear
- Kidswear
- Graphic / Print
- Tech Packs
- Collage Works

Note: `All Work` tab is intentionally removed.

## 4) Add or replace hero image
1. Copy your image into `assets/images/hero/`.
2. Rename it to exactly `hero.jpg`.
3. Refresh browser.

Recommended size: 1920x1080 or larger.

## 5) Add or replace portrait image
1. Copy your image into `assets/images/about/`.
2. Rename it to exactly `portrait.jpg`.
3. Refresh browser.

Recommended size: around 800x1000 (portrait orientation).

## 6) Add project images
1. Open `assets/images/portfolio/`.
2. Open the project folder (example: `house-of-pataudi-sportsline`).
3. Add files into that folder.
4. Set a card image by using `coverImage` in `js/data.js`.
5. Add multiple slideshow images in the `images` array in `js/data.js`.

You can add many images per project. Practical range: 3-10 images for fast loading.

## 7) Edit text/content
Main content file: `js/data.js`

You can safely edit:
- Name, email, phone, location (`siteConfig`)
- Portfolio categories (`portfolioCategories`)
- Project cards and case studies (`portfolioProjects`)

## 8) Existing project folders
- `ann-taylor-jjill-loft-women`
- `french-connection-womenswear`
- `gap-banana-republic-menswear`
- `house-of-pataudi-sportsline`
- `ms-womenswear-exports`
- `nautica-kidswear-ss25`
- `yk-sangria-kidswear`

## 9) Troubleshooting
- Image not showing:
  - Check file name and extension (`.jpg`, `.jpeg`, `.png`, `.webp`).
  - Check folder path is correct.
  - Refresh browser (`F5`).
- Site looks old after edits:
  - Hard refresh with `Ctrl+F5`.

## 10) GitHub Pages URL
Live site: `https://svaishaly1.github.io/`
