PORTFOLIO IMAGES FOLDER
=======================

Create one subfolder per project. The subfolder name must match
the project's "id" field in js/data.js.

EXAMPLE STRUCTURE:
  portfolio/
    nautica-kidswear-ss25/
      cover.jpg          ← shown on portfolio card + top of case study
      moodboard.jpg
      sketch-1.jpg
      final-1.jpg

    house-of-pataudi-sportsline/
      cover.jpg
      concept.jpg
      tech-pack.jpg
      final.jpg

    ms-womenswear-exports/
      cover.jpg
      ...

IMAGE GUIDELINES:
  Cover images:
    - Landscape or square, 1200×800px minimum
    - JPG or WebP for photography
    - PNG for flat sketches with white backgrounds

  Gallery images:
    - Any aspect ratio — the lightbox shows them at full resolution
    - Set fit: 'contain' in data.js for flat sketches and tech packs
    - Set fit: 'cover' in data.js for garment photography

  Tech packs / flat sketches:
    - PNG preferred (clean backgrounds, no compression artefacts)
    - Set fit: 'contain' so construction details are never cropped

UPDATING PATHS IN DATA.JS:
  After adding images, open js/data.js and update each project:

    coverImage: 'assets/images/portfolio/nautica-kidswear-ss25/cover.jpg',
    images: [
      { src: 'assets/images/portfolio/nautica-kidswear-ss25/moodboard.jpg', alt: 'Moodboard', fit: 'contain' },
      { src: 'assets/images/portfolio/nautica-kidswear-ss25/final-1.jpg',   alt: 'Final Product', fit: 'cover' },
    ],
