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
  return { src: src, alt: alt, fit: fit || 'cover' };
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
  { id: 'collage-works', label: '06 — Collage Works' },
];


/* ============================================================
   PORTFOLIO PROJECTS
   Each object = one project card + case study.
   ============================================================ */
const portfolioProjects = [

  /* ----------------------------------------------------------
     PROJECT 1 — Myntra · Kidswear · Nautica
  ---------------------------------------------------------- */
  {
    id:          'nautica-kidswear-ss25',
    title:       'Nautica Kidswear',
    category:    'kidswear',        // must match a portfolioCategories id
    subcategory: 'casualwear',
    brand:       'Nautica',
    season:      'SS25',
    year:        '2025',
    role:        'Design Associate',
    company:     'Myntra',
    featured:    true,              // show in featured section on homepage

    description: 'End-to-end design development for the Nautica Kidswear seasonal range at Myntra — from trend research and moodboards through technical design, fit, vendor coordination and marketplace launch.',

    /*
     * IMAGES
     * coverImage — shown on the portfolio card and at the top of the case study
     * images     — shown in the gallery inside the case study
     *
     * To add images:
     *   1. Drop files into: assets/images/portfolio/nautica-kidswear-ss25/
     *   2. Update the paths below
     *   3. Set fit: 'contain' for flat sketches; 'cover' for photography
     */
    coverImage: '',
    images: [],

    process: {
      challenge:          'Delivering a commercially strong seasonal range for a premium international kidswear brand within fast-paced e-commerce timelines.',
      research:           'Analysed SS25 global kidswear trends, Nautica brand identity pillars, and Myntra consumer segment data to identify key design opportunities.',
      designDirection:    'Developed a nautical-inspired, bold-and-clean direction aligned with Nautica brand codes — accessible, confident, commercial.',
      development:        'Executed fabric and trim selection across tops, bottoms and outerwear; balanced design aspiration against cost and speed targets.',
      technicalExecution: 'Created comprehensive tech packs per style, managed fit sessions across size range, coordinated with vendors for sample approvals.',
      outcome:            'Seasonal range launched successfully on Myntra marketplace on schedule, contributing to overall Kidswear category growth.',
    },

    tags: ['kidswear', 'casualwear', 'woven', 'e-commerce', 'range-planning'],
  },


  /* ----------------------------------------------------------
     PROJECT 2 — Myntra · Menswear · House of Pataudi Sportsline
  ---------------------------------------------------------- */
  {
    id:          'house-of-pataudi-sportsline',
    title:       'House of Pataudi — Men\'s Sportsline',
    category:    'tech-packs',
    subcategory: 'sportswear',
    brand:       'House of Pataudi',
    season:      'AW24',
    year:        '2024',
    role:        'Design Associate',
    company:     'Myntra',
    featured:    true,

    description: 'Managed the complete product lifecycle for House of Pataudi Men\'s Sportsline — from initial concept and trend research through tech packs, fit approvals, vendor coordination and market launch.',

    coverImage: assetPath('house-of-pataudi-sportsline', 'COVER.JPG.jpeg'),
    images: buildSequenceImages(
      'house-of-pataudi-sportsline',
      '71ddda72-95b2-4d8f-ac4e-be2b3864d406-',
      1,
      40,
      '.jpeg',
      4,
      'House of Pataudi Men\'s Sportsline image',
      'cover'
    ),

    process: {
      challenge:          'Creating a credible premium sportswear line embodying House of Pataudi\'s distinctive Indian heritage positioning while meeting modern performance and commercial expectations.',
      research:           'Researched premium sportswear market dynamics, active lifestyle consumer behaviour, and heritage sportswear aesthetic references for direction-setting.',
      designDirection:    'Developed a direction blending contemporary sportswear construction with subtle heritage detailing — performance-led but elevated in positioning.',
      development:        'Sourced technical performance fabrics and premium trim; developed construction specifications suited to active-wear end use.',
      technicalExecution: 'Built full tech pack suite for the Sportsline including detailed measurements, construction specs, stitch types, label placements and fit comments per style.',
      outcome:            'Successful market launch of House of Pataudi Men\'s Sportsline on Myntra.',
    },

    tags: ['menswear', 'sportswear', 'performance', 'premium', 'tech-packs'],
  },


  /* ----------------------------------------------------------
     PROJECT 3 — Ambattur · Womenswear Exports · Marks & Spencer
  ---------------------------------------------------------- */
  {
    id:          'ms-womenswear-exports',
    title:       'Marks & Spencer — Woven Exports',
    category:    'collage-works',
    subcategory: 'woven',
    brand:       'Marks & Spencer',
    season:      'SS24',
    year:        '2024',
    role:        'Fashion Designer – Exports',
    company:     'Ambattur Clothing Ltd.',
    featured:    true,

    description: 'Designed woven shirts, tops and lightweight outerwear for Marks & Spencer export range — meeting international quality, fit and sustainability standards from moodboard to bulk approval.',

    coverImage: assetPath('ms-womenswear-exports', 'cover.jpg.jpg'),
    images: buildSequenceImages(
      'ms-womenswear-exports',
      'trend research_page-',
      2,
      26,
      '.jpg',
      4,
      'Marks & Spencer woven exports trend research page',
      'contain'
    ),

    process: {
      challenge:          'Meeting M&S\'s rigorous international quality, fit and sustainability requirements while maintaining production feasibility and competitive cost.',
      research:           'Reviewed M&S seasonal trend direction, brand quality standards documentation, and target customer profile for the range.',
      designDirection:    'Developed commercially strong woven silhouettes — clean, wearable, aligned with M&S core customer expectations.',
      development:        'Fabric and trim sourcing with sustainability compliance, construction planning, and costing to international price points.',
      technicalExecution: 'Created complete tech packs, conducted fit sessions, managed correction rounds and bulk approval sign-off process.',
      outcome:            'Range approved to M&S international quality standards and moved to bulk production.',
    },

    tags: ['womenswear', 'woven', 'exports', 'international', 'shirts', 'tops'],
  },


  /* ----------------------------------------------------------
     PROJECT 4 — Myntra · Womenswear · French Connection
  ---------------------------------------------------------- */
  {
    id:          'french-connection-womenswear',
    title:       'French Connection — Womenswear',
    category:    'womenswear',
    subcategory: 'casualwear',
    brand:       'French Connection',
    season:      'SS25',
    year:        '2025',
    role:        'Design Associate',
    company:     'Myntra',
    featured:    false,

    description: 'Seasonal womenswear range design for French Connection on Myntra — balancing the brand\'s distinctive graphic-led aesthetic with commercial relevance for the e-commerce platform.',

    coverImage: assetPath('french-connection-womenswear', 'COVER.JPG.jpg'),
    images: buildSequenceImages(
      'french-connection-womenswear',
      '1786296953532-4ba561bc-88d9-4e1e-953d-d13621d745f1_',
      5,
      38,
      '.jpg',
      0,
      'French Connection womenswear image',
      'cover'
    ),

    process: {
      challenge:          'Maintaining French Connection\'s bold brand personality while adapting to the commercial demands of a high-volume e-commerce catalogue.',
      research:           'Brand audit, seasonal trend direction, and Myntra consumer data review for womenswear positioning.',
      designDirection:    'On-brand seasonal range with commercial silhouettes, strong print and graphic direction.',
      development:        'Range planning, fabric and trim sourcing, print development coordination.',
      technicalExecution: 'Tech pack creation and sample approval process per style.',
      outcome:            'Seasonal range launched on Myntra marketplace.',
    },

    tags: ['womenswear', 'casualwear', 'e-commerce', 'prints', 'brand-adaptation'],
  },


  /* ----------------------------------------------------------
     PROJECT 5 — Ambattur · Menswear Exports · Gap / Banana Republic
  ---------------------------------------------------------- */
  {
    id:          'gap-banana-republic-menswear',
    title:       'Gap & Banana Republic — Menswear Exports',
    category:    'menswear',
    subcategory: 'shirts',
    brand:       'Gap / Banana Republic',
    season:      'SS23',
    year:        '2023',
    role:        'Fashion Designer – Exports',
    company:     'Ambattur Clothing Ltd.',
    featured:    false,

    description: 'Menswear woven shirts and casual wear designed for Gap and Banana Republic — international quality and fit standards, with strong focus on fabric performance and commercial silhouettes.',

    coverImage: assetPath('gap-banana-republic-menswear', 'COVER.JPG.jpg'),
    images: buildSequenceImages(
      'gap-banana-republic-menswear',
      'M&S Mens Shirt AW\'25_page-',
      2,
      25,
      '.jpg',
      4,
      'Gap and Banana Republic menswear image',
      'contain'
    ),

    process: {
      challenge:          'Designing for two distinct brand positionings simultaneously — Gap\'s accessible American casual vs. Banana Republic\'s elevated aesthetic — within shared production.',
      research:           'Reviewed both brand guidelines, seasonal reporting, and men\'s shirting market direction for the relevant seasons.',
      designDirection:    'Distinct design approaches per brand with shared production efficiency; menswear silhouettes calibrated for each brand\'s fit standard.',
      development:        'Woven shirt construction, fabric sourcing, trim selection and costing per brand.',
      technicalExecution: 'Full tech packs, multiple fit correction rounds and bulk approval coordination.',
      outcome:            'Export collections approved and moved to bulk production for both brands.',
    },

    tags: ['menswear', 'shirts', 'woven', 'exports', 'international', 'casualwear'],
  },


  /* ----------------------------------------------------------
     PROJECT 6 — Myntra · Kidswear · YK & Sangria
  ---------------------------------------------------------- */
  {
    id:          'yk-sangria-kidswear',
    title:       'YK & Sangria — Kids Collections',
    category:    'kidswear',
    subcategory: 'casualwear',
    brand:       'YK / Sangria',
    season:      'AW25',
    year:        '2025',
    role:        'Design Associate',
    company:     'Myntra',
    featured:    false,

    description: 'Simultaneous multi-brand kidswear range design across YK and Sangria labels — separate brand aesthetics and consumer positioning managed within shared production timelines.',

    coverImage: '',
    images: [],

    process: {
      challenge:          'Managing two distinct brand personalities simultaneously — YK\'s contemporary youthful positioning vs. Sangria\'s aspirational lifestyle direction.',
      research:           'Brand segmentation analysis and consumer data review for both labels on the Myntra platform.',
      designDirection:    'Parallel creative directions per label — differentiated yet aligned with shared production calendar.',
      development:        'Concurrent range development across both brands, coordinating fabric and trim selection to maximise efficiency.',
      technicalExecution: 'Separate tech pack suites and fit approvals per brand.',
      outcome:            'Both ranges launched on schedule on Myntra marketplace.',
    },

    tags: ['kidswear', 'casualwear', 'multi-brand', 'e-commerce', 'range-planning'],
  },


  /* ----------------------------------------------------------
     PROJECT 7 — Ambattur · Exports · Ann Taylor / J.Jill / Loft
  ---------------------------------------------------------- */
  {
    id:          'ann-taylor-jjill-loft-women',
    title:       'Ann Taylor, J.Jill & Loft — Womenswear',
    category:    'womenswear',
    subcategory: 'woven',
    brand:       'Ann Taylor / J.Jill / Loft',
    season:      'AW23',
    year:        '2023',
    role:        'Fashion Designer – Exports',
    company:     'Ambattur Clothing Ltd.',
    featured:    false,

    description: 'Woven tops and layering pieces for three American women\'s brands — premium detailing, fit precision and construction standards for the North American market.',

    coverImage: assetPath('ann-taylor-jjill-loft-women', 'COVER.JPG.jpg'),
    images: buildSequenceImages(
      'ann-taylor-jjill-loft-women',
      '1786296953532-4ba561bc-88d9-4e1e-953d-d13621d745f1_',
      40,
      58,
      '.jpg',
      0,
      'Ann Taylor, J.Jill and Loft womenswear image',
      'cover'
    ),

    process: {
      challenge:          'Meeting three distinct North American brand standards — Ann Taylor\'s polished workwear, J.Jill\'s relaxed premium, and Loft\'s accessible contemporary — in parallel.',
      research:           'Brand positioning research and seasonal direction review per label.',
      designDirection:    'Brand-specific silhouettes with shared construction expertise in woven tops and layering.',
      development:        'Fabric sourcing, trim selection and costing for North American price points.',
      technicalExecution: 'Tech packs, fit corrections and bulk approvals per brand.',
      outcome:            'Export collections approved and shipped to market for all three brands.',
    },

    tags: ['womenswear', 'woven', 'exports', 'international', 'tops', 'premium'],
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
    description: 'End-to-end ownership of Kidswear and Women\'s Wear portfolios. Drove 400% category growth through trend-led range planning and fast design execution. Led design across Nautica, French Connection, YK, Sangria and House of Pataudi.',
    brands:  ['Nautica', 'French Connection', 'YK', 'Sangria', 'House of Pataudi'],
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
