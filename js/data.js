/**
 * ============================================================
 * VAISHALY S — APPAREL DESIGNER PORTFOLIO
 * Portfolio Data File
 *
 * ============================================================
 * HOW TO EDIT THIS FILE
 * ============================================================
 *
 * This is the single source of truth for all portfolio content.
 * Edit here to update: site info, projects, categories, expertise,
 * and professional experience — without touching any other file.
 *
 * ADDING A PROJECT:
 * 1. Copy an existing project object from portfolioProjects below
 * 2. Give it a unique id (use hyphens, no spaces)
 * 3. Add your images to /assets/images/portfolio/YOUR-PROJECT-ID/
 * 4. Update image paths in the object
 * 5. Set featured: true to show on the homepage
 *
 * ADDING IMAGES:
 * - Place images in: assets/images/portfolio/[project-id]/
 * - Supported: .jpg, .jpeg, .png, .webp, .gif
 * - Cover image: typically landscape or square (recommended 1200×800px)
 * - Gallery images: any ratio — the lightbox shows them at full size
 * - Set fit: 'contain' for flat sketches / tech packs (prevents cropping)
 * - Set fit: 'cover' for garment photography (fills the card)
 *
 * ============================================================
 */


/* ============================================================
   SITE CONFIGURATION
   Update personal details, headline, and social links here.
   ============================================================ */
const siteConfig = {
  name:     'Vaishaly S',
  title:    'Apparel Designer',
  email:    'svaishaly.1@gmail.com',
  phone:    '+91 7397310071',
  location: 'Bangalore, India',

  /*
   * Social links — add your URLs when ready.
   * Leave as empty string '' to hide the link.
   */
  linkedin:  '',     // e.g. 'https://linkedin.com/in/vaishaly-s'
  instagram: '',     // e.g. 'https://instagram.com/yourusername'

  /*
   * Resume PDF path — place your resume at assets/resume.pdf
   * Update this path if you rename the file.
   */
  resumePdf: 'assets/resume.pdf',

  /*
   * Open Graph / SEO — update og:url with your GitHub Pages URL
   * e.g. 'https://yourusername.github.io' or a custom domain
   */
  siteUrl: 'https://svaishaly1.github.io',
};


function assetPath(folder, fileName) {
  return 'assets/images/portfolio/' + folder + '/' + fileName;
}

function imageItem(src, alt, fit) {
  return { src: src, alt: alt, fit: fit || 'cover', type: 'image' };
}

function pdfItem(src, alt) {
  return { src: src, alt: alt || 'PDF document', fit: 'contain', type: 'pdf' };
}

function githubLfsMediaPath(path) {
  return 'https://media.githubusercontent.com/media/svaishaly1/svaishaly1.github.io/main/' + path;
}

function buildSequenceImages(folder, prefix, start, end, suffix, pad, altPrefix, fit) {
  const images = [];
  for (let index = start; index <= end; index += 1) {
    const fileNumber = String(index).padStart(pad, '0');
    const fileName = prefix + fileNumber + suffix;
    images.push(imageItem(assetPath(folder, fileName), altPrefix + ' ' + fileNumber, fit));
  }
  return images;
}


/* ============================================================
   PORTFOLIO CATEGORIES
   Controls the filter tabs in the portfolio section.
   id must match the 'category' field on each project.
   ============================================================ */
const portfolioCategories = [
  { id: 'womenswear',    label: '01 — Womenswear' },
  { id: 'menswear',      label: '02 — Menswear' },
  { id: 'kidswear',      label: '03 — Kidswear' },
  { id: 'graphic-print', label: '04 — Graphic / Print' },
  { id: 'tech-packs',    label: '05 — Tech Packs' },
  { id: 'college-works', label: '06 — College Works' },
];


/* ============================================================
   PORTFOLIO PROJECTS
   Each object = one project card + case study.
   ============================================================ */
const portfolioProjects = [
  {
    id: 'ms-t-41-ss25',
    title: 'M&S T-41 (SS 25)',
    category: 'womenswear',
    subcategory: 'casualwear',
    brand: 'Marks & Spencer',
    season: 'SS25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    description: 'Developed an SS\'25 casualwear capsule collection for Marks & Spencer, focusing on effortless, versatile styles designed for modern everyday dressing. The collection combined relaxed silhouettes with fresh seasonal colours, lightweight fabrics, contemporary details and subtle trend influences, balancing M&S\'s timeless aesthetic with a modern, commercially relevant approach.',
    coverImage: assetPath('M&S T-41 (SS 25)', 'COVER.JPG.jpg'),
    images: buildSequenceImages('M&S T-41 (SS 25)', '1786296953532-4ba561bc-88d9-4e1e-953d-d13621d745f1_', 5, 38, '.jpg', 0, 'M&S T-41 SS25', 'cover'),
    tags: ['womenswear', 'casualwear', 'capsule', 'marks-spencer'],
  },
  {
    id: 'ms-t-43-edit-aw25',
    title: 'M&S T-43-EDIT (AW 25)',
    category: 'womenswear',
    subcategory: 'partywear',
    brand: 'Marks & Spencer',
    season: 'AW25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    description: 'Developed the AW\'25 T-43 Edit, a casual partywear collection for Marks & Spencer, blending elevated occasion dressing with effortless, contemporary styling. The collection explored refined silhouettes, subtle statement details, seasonal colours, textures and versatile styling elements to create pieces that transition seamlessly from casual gatherings to party occasions, while maintaining M&S\'s polished and wearable aesthetic.',
    coverImage: assetPath('M&S T-43-EDIT (AW 25)', 'COVER.JPG.jpg'),
    images: buildSequenceImages('M&S T-43-EDIT (AW 25)', '1786296953532-4ba561bc-88d9-4e1e-953d-d13621d745f1_', 40, 58, '.jpg', 0, 'M&S T-43 Edit AW25', 'cover'),
    tags: ['womenswear', 'partywear', 'aw25', 'marks-spencer'],
  },
  {
    id: 'ms-t-43-edit-ss25',
    title: 'M&S T-43-EDIT (SS 25)',
    category: 'womenswear',
    subcategory: 'partywear',
    brand: 'Marks & Spencer',
    season: 'SS25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    description: 'Developed the SS\'25 T-43 Edit, a casual partywear collection for Marks & Spencer, focused on creating elevated yet versatile looks for modern social occasions. The collection combined contemporary silhouettes with seasonal colours, refined details, subtle surface interest and lightweight fabrications, balancing occasion appeal with effortless wearability and M&S\'s sophisticated aesthetic.',
    coverImage: assetPath('M&S T-43-EDIT (SS 25)', 'cover.jpg.jpg'),
    images: buildSequenceImages('M&S T-43-EDIT (SS 25)', 'trend research_page-', 2, 26, '.jpg', 4, 'M&S T-43 Edit SS25', 'contain'),
    tags: ['womenswear', 'partywear', 'ss25', 'marks-spencer'],
  },
  {
    id: 'aw24-jacket-rendered-sketches',
    title: 'AW\'24 Jacket Collection – Rendered Sketches',
    category: 'womenswear',
    subcategory: 'outerwear',
    brand: 'Concept Project',
    season: 'AW24',
    year: '2024',
    role: 'Apparel Designer',
    company: 'Independent',
    featured: false,
    description: 'A conceptual AW\'24 jacket collection developed through rendered sketches, exploring contemporary outerwear silhouettes, seasonal fabrications, layering and functional detailing. The collection focuses on balancing statement design with practical winter dressing, incorporating varied proportions, textures, colours and construction details to create a versatile and modern outerwear offering.',
    coverImage: assetPath('AW’24 Jacket Collection – Rendered Sketches', 'COVER.JPG.jpg'),
    images: buildSequenceImages('AW’24 Jacket Collection – Rendered Sketches', '1786299855343-727a2482-7cdc-4e54-8b36-dcf0b51478d8_', 2, 24, '.jpg', 0, 'AW24 Jacket Collection', 'cover'),
    tags: ['womenswear', 'outerwear', 'rendered-sketches'],
  },
  {
    id: 'chicos-frontline-collection',
    title: 'Chicos – Frontline Collection',
    category: 'womenswear',
    subcategory: 'premium-casual',
    brand: 'Chicos',
    season: 'Seasonal',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Exports',
    featured: false,
    description: 'Developed a contemporary collection for Chicos\' Frontline business, focusing on elevated, fashion-forward styles suited to the brand\'s core customer. The range balanced refined silhouettes, premium-looking fabrics, sophisticated colour palettes and considered detailing, with a strong focus on quality, design appeal and commercial relevance at a higher price point.',
    coverImage: assetPath('Chicos – Frontline Collection', 'cover.jpg'),
    images: buildSequenceImages('Chicos – Frontline Collection', 'women\'s wearpdf_page-', 2, 25, '.jpg', 4, 'Chicos Frontline', 'contain'),
    tags: ['womenswear', 'frontline', 'premium', 'exports'],
  },
  {
    id: 'chicos-outlet-collection',
    title: 'Chicos – Outlet Collection',
    category: 'womenswear',
    subcategory: 'commercial-casual',
    brand: 'Chicos',
    season: 'Seasonal',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Exports',
    featured: false,
    description: 'Developed a commercially driven collection for Chicos\' Outlet business, adapting the brand aesthetic to a more accessible price point. The range focused on versatile, wearable styles with simplified constructions, cost-conscious fabric and trim selections, and efficient design details while maintaining the brand\'s recognizable identity and strong visual appeal.',
    coverImage: assetPath('Chicos – Outlet Collection', 'cover.jpg'),
    images: buildSequenceImages('Chicos – Outlet Collection', 'Women\'s bottom_page-', 2, 29, '.jpg', 4, 'Chicos Outlet', 'contain'),
    tags: ['womenswear', 'outlet', 'commercial', 'exports'],
  },
  {
    id: 'loft-swim-cover-up-collection',
    title: 'LOFT – Swim Cover-Up Collection',
    category: 'womenswear',
    subcategory: 'resortwear',
    brand: 'LOFT',
    season: 'Summer',
    year: '2024',
    role: 'Apparel Designer',
    company: 'Exports',
    featured: false,
    description: 'Developed a swim cover-up collection for LOFT, blending effortless resort dressing with contemporary, feminine styling. The collection explored lightweight fabrics, relaxed silhouettes, versatile layering pieces and seasonal prints, designed to transition seamlessly from beachwear to casual summer dressing while maintaining LOFT\'s polished and approachable aesthetic.',
    coverImage: assetPath('LOFT – Swim Cover-Up Collection', 'COVER.JPG.jpg'),
    images: buildSequenceImages('LOFT – Swim Cover-Up Collection', 'SWIMCOVER UP_page-', 2, 19, '.jpg', 4, 'LOFT Swim Cover-Up', 'contain'),
    tags: ['womenswear', 'resortwear', 'cover-up', 'exports'],
  },
  {
    id: 'marks-spencer-shirts-aw25',
    title: 'Marks & Spencer –Shirts (AW 25)',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Marks & Spencer',
    season: 'AW25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    description: 'Developed the AW\'25 range plan for Marks & Spencer, translating seasonal trends and market insights into a commercially relevant product assortment. The range balanced M&S\'s core aesthetic of timeless, quality-led fashion with contemporary silhouettes, textures, colours and key seasonal trends. Focused on creating a cohesive product mix across categories, ensuring the right balance of core, fashion and statement pieces while considering customer relevance, commerciality and seasonal opportunities.',
    coverImage: assetPath('Marks & Spencer –Shirts (AW 25)', 'COVER.JPG.jpg'),
    images: buildSequenceImages('Marks & Spencer –Shirts (AW 25)', 'M&S Mens Shirt AW\'25_page-', 2, 25, '.jpg', 4, 'M&S Mens Shirts AW25', 'contain'),
    tags: ['menswear', 'shirts', 'range-plan', 'aw25'],
  },
  {
    id: 'white-stuff-shirts-aw25',
    title: 'White Stuff –Shirts (AW 25)',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'White Stuff',
    season: 'AW25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Exports',
    featured: false,
    description: 'Developed the AW\'25 Men\'s Shirt range plan for White Stuff, a UK lifestyle brand known for its relaxed, distinctive and effortlessly casual aesthetic. The range focused on balancing timeless shirt silhouettes with seasonal updates through contemporary checks, prints, textures, colours and fabrications. The assortment was planned to offer versatile, wearable pieces with a strong focus on comfort, quality and the brand\'s signature laid-back British character.',
    coverImage: assetPath('White Stuff –Shirts (AW 25)', 'cover.jpg.jpg'),
    images: buildSequenceImages('White Stuff –Shirts (AW 25)', 'AW\'25 whitestuff mens_page-', 2, 11, '.jpg', 4, 'White Stuff Mens Shirts AW25', 'contain'),
    tags: ['menswear', 'shirts', 'white-stuff', 'aw25'],
  },
  {
    id: 'house-of-pataudi-mens-range-plan',
    title: 'House of Pataudi – Men\'s Range Plan',
    category: 'menswear',
    subcategory: 'range-planning',
    brand: 'House of Pataudi',
    season: 'Seasonal',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    description: 'Developed the Men\'s range plan for House of Pataudi, a Myntra-owned brand co-founded with actor Saif Ali Khan. The range was designed to capture the brand\'s signature blend of contemporary Indian aesthetics and modern menswear, balancing heritage-inspired elements with versatile, fashion-forward silhouettes. Focused on creating a cohesive assortment across occasion, casual and everyday styles through refined colours, premium fabrications, prints, textures and thoughtful detailing, while maintaining strong commercial relevance for the Indian market.',
    coverImage: assetPath('House of Pataudi – Men’s Range Plan', 'COVER.JPG.jpeg'),
    images: buildSequenceImages('House of Pataudi – Men’s Range Plan', '71ddda72-95b2-4d8f-ac4e-be2b3864d406-', 1, 40, '.jpeg', 4, 'House of Pataudi Mens Range', 'cover'),
    tags: ['menswear', 'range-plan', 'heritage', 'premium'],
  },
  {
    id: 'marks-spencer-mens-bottoms-ss25',
    title: 'Marks & Spencer – Men\'s Bottoms SS\'25',
    category: 'menswear',
    subcategory: 'bottoms',
    brand: 'Marks & Spencer',
    season: 'SS25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: false,
    description: 'Developed the SS\'25 Men\'s Bottoms range for Marks & Spencer, translating seasonal trends and market insights into a commercially relevant assortment. Worked across silhouette development, fabric and colour direction, detailing and styling to create a balanced mix of core and fashion-led bottoms. Managed sample development through the product creation process, refining fit, construction, detailing and overall execution to align with M&S\'s quality standards and customer expectations.',
    coverImage: assetPath('Marks & Spencer – Men’s Bottoms SS’25  Range Planning & Sample Development', 'Menswear Portfolio_page-0001.jpg'),
    images: buildSequenceImages('Marks & Spencer – Men’s Bottoms SS’25  Range Planning & Sample Development', 'Menswear Portfolio_page-', 1, 22, '.jpg', 4, 'M&S Mens Bottoms SS25', 'contain'),
    tags: ['menswear', 'bottoms', 'ss25', 'sample-development'],
  },
  {
    id: 'marks-spencer-mens-bottoms-aw25',
    title: 'Marks & Spencer – Men\'s Bottoms AW\'25',
    category: 'menswear',
    subcategory: 'bottoms',
    brand: 'Marks & Spencer',
    season: 'AW25',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: false,
    description: 'Developed the AW\'25 Men\'s Bottoms range plan for Marks & Spencer, translating seasonal trends and consumer insights into a commercially balanced assortment. Focused on key winter silhouettes, fabrications, colours and detailing, combining timeless core styles with contemporary seasonal updates. The range was curated to deliver versatility, comfort and refined everyday dressing while staying aligned with M&S\'s quality-driven and understated aesthetic.',
    coverImage: assetPath('Marks & Spencer – Men’s Bottoms AW’25', '1786299213520-85274ebc-8be0-4257-965c-41a8a164cb05_1.jpg'),
    images: buildSequenceImages('Marks & Spencer – Men’s Bottoms AW’25', '1786299213520-85274ebc-8be0-4257-965c-41a8a164cb05_', 1, 32, '.jpg', 0, 'M&S Mens Bottoms AW25', 'cover'),
    tags: ['menswear', 'bottoms', 'aw25', 'range-plan'],
  },
  {
    id: 'rendered-projects',
    title: 'Rendered Projects',
    category: 'menswear',
    subcategory: '3d-rendering',
    brand: 'Concept Project',
    season: 'Portfolio',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Independent',
    featured: false,
    description: 'A selection of 3D-rendered fashion projects developed to translate design concepts into realistic digital representations. Explored silhouettes, fabric textures, colours, prints and garment detailing through digital rendering, with a focus on visualising the final product accurately and communicating design intent effectively.',
    coverImage: assetPath('Rendered Projects', 'Menswear Portfolio (1)_page-0001.jpg'),
    images: buildSequenceImages('Rendered Projects', 'Menswear Portfolio (1)_page-', 1, 8, '.jpg', 4, 'Rendered fashion project', 'contain'),
    tags: ['menswear', 'rendering', 'digital-visualisation'],
  },
  {
    id: 'french-connection-kids-aw26',
    title: 'French Connection-Kids (AW 26)',
    category: 'kidswear',
    subcategory: 'premium-kidswear',
    brand: 'French Connection',
    season: 'AW26',
    year: '2026',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    cardSize: 'large',
    description: 'An ultra-minimal, premium kidswear collection that redefines classic preppy and street-utility styles through rich autumnal textures, sophisticated color-blocking, and sleek, understated brand carriers.',
    coverImage: assetPath('French Connection-Kids (AW 26)', 'cover page.jpg'),
    images: buildSequenceImages('French Connection-Kids (AW 26)', 'AW\'26 Linesheet -French Connection- Drop 1 Boys_page-', 2, 55, '.jpg', 4, 'French Connection Kids AW26', 'contain'),
    tags: ['kidswear', 'aw26', 'premium', 'french-connection'],
  },
  {
    id: 'yk-christmas-newyear-graphic-line',
    title: 'YK – Christmas & New Year Capsule Collection | Graphic Line',
    category: 'kidswear',
    subcategory: 'graphic',
    brand: 'YK',
    season: 'Holiday',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: false,
    cardSize: 'large',
    description: 'Developed a festive Christmas & New Year capsule collection for YK, with a strong focus on graphic-led design. Created playful, youthful graphics inspired by festive motifs, celebrations and holiday elements, translating them into contemporary prints and placements suited to the brand\'s young customer. The collection balanced seasonal storytelling with commercially versatile styles, creating an energetic and celebratory graphic direction.',
    coverImage: assetPath('YK – Christmas & New Year Capsule Collection  Graphic Line', 'cover page.jpg'),
    images: buildSequenceImages('YK – Christmas & New Year Capsule Collection  Graphic Line', '1786298051197-010f94e7-e80a-4192-8fb8-74f2a9453059_', 2, 25, '.jpg', 0, 'YK Holiday Graphic Line', 'cover'),
    tags: ['kidswear', 'graphic-line', 'holiday-capsule'],
  },
  {
    id: 'hrx-kidswear',
    title: 'HRX – Kidswear',
    category: 'kidswear',
    subcategory: 'activewear',
    brand: 'HRX',
    season: 'Seasonal',
    year: '2025',
    role: 'Apparel Designer',
    company: 'Myntra',
    featured: true,
    cardSize: 'small',
    description: 'Developed a kidswear collection for HRX, translating the brand\'s energetic, performance-driven identity into functional and trend-forward styles for young consumers. The collection focused on comfortable silhouettes, active-inspired details, dynamic colour palettes, sporty graphics and versatile pieces designed to support movement while maintaining a contemporary, youthful aesthetic.',
    coverImage: assetPath('HRX – Kidswear', 'cover.jpg.jpg'),
    images: buildSequenceImages('HRX – Kidswear', 'HRX_page-', 2, 5, '.jpg', 4, 'HRX Kidswear', 'contain'),
    tags: ['kidswear', 'activewear', 'hrx'],
  },
  {
    id: 'gully-league-freelance-graphic',
    title: 'GULLY LEAGUE-FREELANCE-GRAPHIC',
    category: 'graphic-print',
    subcategory: 'graphics',
    brand: 'Freelance',
    season: 'Portfolio',
    year: '2025',
    role: 'Graphic Apparel Designer',
    company: 'Freelance',
    featured: false,
    description: 'Freelance graphic development work focused on bold visual storytelling, wearable placements and commercially adaptable print applications.',
    coverImage: assetPath('GULLY LEAGUE-FREELANCE-GRAPHIC', 'daf2b6cb-e864-4872-b361-fd13215eed34-0000.jpeg'),
    images: buildSequenceImages('GULLY LEAGUE-FREELANCE-GRAPHIC', 'daf2b6cb-e864-4872-b361-fd13215eed34-', 0, 8, '.jpeg', 4, 'Gully League Graphic', 'contain'),
    tags: ['graphic-print', 'freelance', 'print-development'],
  },
  {
    id: 'nautica-mens-techpack',
    title: 'Nautica Mens Techpack',
    category: 'tech-packs',
    subcategory: 'tech-pack',
    brand: 'Nautica',
    season: 'Portfolio',
    year: '2025',
    role: 'Technical Designer',
    company: 'Myntra',
    featured: false,
    description: 'Technical pack development for menswear styles, covering construction detail, measurements, trims and production-ready specification accuracy.',
    coverImage: assetPath('Nautica Mens Techpack', 'Menswear Portfolio (2)_page-0001.jpg'),
    images: buildSequenceImages('Nautica Mens Techpack', 'Menswear Portfolio (2)_page-', 1, 12, '.jpg', 4, 'Nautica Mens Techpack', 'contain'),
    tags: ['tech-packs', 'menswear', 'technical-design'],
  },
  {
    id: 'house-of-pataudi-techpack',
    title: 'House of Pataudi Techpack',
    category: 'tech-packs',
    subcategory: 'tech-pack',
    brand: 'House of Pataudi',
    season: 'Portfolio',
    year: '2025',
    role: 'Technical Designer',
    company: 'Myntra',
    featured: false,
    description: 'Detailed menswear technical pack series translating design intent into executable production specifications.',
    coverImage: assetPath('House of Pataudi Techpack', '1786300372660-1cddddf5-54d4-41a0-99d8-41a2ae78ca77_1.jpg'),
    images: buildSequenceImages('House of Pataudi Techpack', '1786300372660-1cddddf5-54d4-41a0-99d8-41a2ae78ca77_', 1, 9, '.jpg', 0, 'House of Pataudi Techpack', 'contain'),
    tags: ['tech-packs', 'menswear', 'technical-design'],
  },
  {
    id: 'graduation-project',
    title: 'Graduation Project',
    category: 'college-works',
    subcategory: 'academic',
    brand: 'College Work',
    season: 'Final Year',
    year: '2022',
    role: 'Student Designer',
    company: 'INIFD',
    featured: false,
    description: 'Graduation project portfolio presented in full PDF format. Click the preview to open and view full screen.',
    coverImage: '',
    images: [],
    documents: [pdfItem(githubLfsMediaPath('assets/images/portfolio/Graduation%20Project.pdf'), 'Graduation Project')],
    tags: ['college-works', 'academic', 'pdf'],
  },
  {
    id: 'lakme-fashion-week-college-work',
    title: 'Lakme Fashion Week',
    category: 'college-works',
    subcategory: 'academic',
    brand: 'College Work',
    season: 'Showcase',
    year: '2022',
    role: 'Student Designer',
    company: 'INIFD',
    featured: false,
    description: 'Lakme Fashion Week college presentation in PDF format. Click the preview to open and view full screen.',
    coverImage: '',
    images: [],
    documents: [pdfItem(githubLfsMediaPath('assets/images/portfolio/LAKME%20FASHION%20WEEK%20(1).pdf'), 'Lakme Fashion Week')],
    tags: ['college-works', 'fashion-week', 'pdf'],
  },
  {
    id: 'print-portfolio-graphic-college-work',
    title: 'Print Portfolio - Graphic',
    category: 'graphic-print',
    subcategory: 'print-portfolio',
    brand: 'Graphic Portfolio',
    season: 'Portfolio',
    year: '2022',
    role: 'Apparel Designer',
    company: 'INIFD',
    featured: false,
    description: 'Graphic print portfolio in PDF format. Click the preview to open and view full screen.',
    coverImage: '',
    images: [],
    documents: [pdfItem(githubLfsMediaPath('assets/images/portfolio/PRINT%20PORTFOLIO-GRAPHIC.pdf'), 'Print Portfolio Graphic')],
    tags: ['graphic-print', 'graphic', 'pdf'],
  },


  /* ----------------------------------------------------------
     PLACEHOLDER — Copy this block to add a new project
  ---------------------------------------------------------- */
  //
  // {
  //   id:          'your-project-id',         // Unique ID — no spaces, use hyphens
  //   title:       'Project Title',
  //   category:    'womenswear',              // Must match a portfolioCategories id
  //   subcategory: 'shirts',                  // Freeform — for your reference
  //   brand:       'Brand Name',
  //   season:      'SS25',
  //   year:        '2025',
  //   role:        'Your Role',
  //   company:     'Company Name',
  //   featured:    false,                     // true = appears on homepage
  //
  //   description: 'Short description of the project...',
  //
  //   // Cover image — shown on portfolio card
  //   coverImage: 'assets/images/portfolio/your-project-id/cover.jpg',
  //
  //   // Gallery images — shown in case study
  //   images: [
  //     { src: 'assets/images/portfolio/your-project-id/1.jpg', alt: 'Description', fit: 'cover' },
  //     { src: 'assets/images/portfolio/your-project-id/2.jpg', alt: 'Description', fit: 'contain' },
  //   ],
  //
  //   process: {
  //     challenge:          'What was the design challenge?',
  //     research:           'What research did you do?',
  //     designDirection:    'What was the creative direction?',
  //     development:        'How did you develop it?',
  //     technicalExecution: 'What technical work was involved?',
  //     outcome:            'What was the result?',
  //   },
  //
  //   tags: ['tag1', 'tag2', 'tag3'],
  // },

];


/* ============================================================
   EXPERTISE CARDS
   Shown in the Expertise section on the homepage.
   ============================================================ */
const expertiseItems = [
  {
    num:         '01',
    title:       'Trend Forecasting',
    description: 'Translating macro and micro trend signals into commercially viable design direction for each season.',
    accent:      false,
  },
  {
    num:         '02',
    title:       'Technical Design',
    description: 'Creating detailed technical drawings, specifications and documentation that production teams can execute with precision.',
    accent:      false,
  },
  {
    num:         '03',
    title:       'Tech Pack Creation',
    description: 'Building comprehensive tech packs with measurements, construction details, trim specifications and care labelling.',
    accent:      false,
  },
  {
    num:         '04',
    title:       'Fit & Sampling',
    description: 'Conducting thorough fit sessions, identifying and directing corrections, and improving first-sample approval rates.',
    accent:      false,
  },
  {
    num:         '05',
    title:       'Range Planning',
    description: 'Developing commercially balanced assortments across price, silhouette, fabric and colour — aligned with business targets.',
    accent:      false,
  },
  {
    num:         '06',
    title:       'Costing & Margin',
    description: 'Aligning design decisions with margin requirements, balancing creativity with cost efficiency throughout development.',
    accent:      false,
  },
  {
    num:         '07',
    title:       'Vendor Coordination',
    description: 'Managing relationships with factories and vendors to ensure sampling quality and production timelines are met.',
    accent:      false,
  },
  {
    num:         '08',
    title:       'Cross-Functional',
    description: 'Working fluidly with merchandising, sourcing, production and QA to move design from concept to consumer.',
    accent:      false,
  },
  {
    num:         '09',
    title:       'AI Integration',
    description: 'Leveraging AI tools to accelerate design research, concept development and creative exploration.',
    accent:      true,  // renders as dark accent card
  },
];


/* ============================================================
   PROFESSIONAL EXPERIENCE
   Shown in the Experience section.
   ============================================================ */
const experienceItems = [
  {
    role:    'Design Associate',
    company: 'Myntra',
    type:    'E-commerce',
    start:   'Feb 2025',
    end:     'Present',
    description: 'End-to-end ownership of the Kidswear portfolio, driving 400% category growth through trend-led range planning and fast design execution. Designed commercially viable collections across Kidswear, Womenswear, and Menswear Sportswear for the brand list below, balancing fashion trends, consumer insights, costing, and speed-to-market while maintaining each brand\'s unique identity.',
    brands:  ['Nautica', 'French Connection', 'YK', 'Sangria', 'House of Pataudi', 'Yellow Kite', 'Here & Now', 'HRX', 'Cuddleloom', 'Pixel Punk', 'BAESD', 'Dripteen', 'Wunderwoo', 'Sparkle Pop', 'Kalini'],
  },
  {
    role:    'Senior Executive / Freelance Designer',
    company: 'VNH – The Naidu Hall',
    type:    'Retail',
    start:   'Sep 2024',
    end:     'Jan 2025',
    description: 'Designed woven apparel collections for Kids and Women\'s Wear categories. Managed design execution from concept to production with focus on quality, fit and cost efficiency.',
    brands:  [],
  },
  {
    role:    'Fashion Designer – Exports',
    company: 'Ambattur Clothing Ltd.',
    type:    'Exports',
    start:   'Jan 2023',
    end:     'Aug 2024',
    description: 'Designed woven shirts, tops and outerwear for international brands. Led end-to-end product development from moodboards through bulk approvals, meeting international quality and fit standards. Coordinated with sourcing, production, sampling and QA teams.',
    brands:  ['Marks & Spencer', 'Mango', 'Gap', 'Banana Republic', 'Ann Taylor', 'J.Jill', 'Loft', 'Old Navy', 'Whitestuff'],
  },
  {
    role:    'Customer Relationship Officer',
    company: 'Tommy Hilfiger',
    type:    'Retail',
    start:   'Sep 2022',
    end:     'Jan 2023',
    description: 'Developed strong understanding of men\'s and women\'s fit, customer preferences and premium quality expectations. Contributed consumer insights that supported merchandising and product feedback processes.',
    brands:  [],
  },
];
