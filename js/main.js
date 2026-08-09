/**
 * ============================================================
 * VAISHALY S — APPAREL DESIGNER PORTFOLIO
 * Main Application Script
 *
 * Sections:
 * 01. Init & Bootstrap
 * 02. Loader
 * 03. Custom Cursor
 * 04. Navigation
 * 05. Smooth Scroll
 * 06. Hero Animations
 * 07. Scroll Reveal (Intersection Observer)
 * 08. Render: Expertise Cards
 * 09. Render: Experience Section
 * 10. Render: Portfolio Grid & Filters
 * 11. Project Modal
 * 12. Lightbox
 * 13. GSAP Animations (counters, process steps)
 * 14. Utilities
 * ============================================================
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     01. INIT & BOOTSTRAP
  ---------------------------------------------------------- */
  function init() {
    setCurrentYear();
    initLoader();
    initCursor();
    initNavigation();
    initSmoothScroll();
    initScrollReveal();
    renderExpertise();
    renderExperience();
    renderPortfolio();
    initModal();
    initLightbox();
    initGSAP();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ----------------------------------------------------------
     02. LOADER
  ---------------------------------------------------------- */
  function initLoader() {
    const loader   = document.getElementById('loader');
    const body     = document.body;

    if (!loader) return;

    // Remove loader after short delay (or on window load — whichever is later)
    const minDuration = 1100; // ms — minimum time loader is visible
    const startTime   = Date.now();

    function hide() {
      const elapsed = Date.now() - startTime;
      const wait    = Math.max(0, minDuration - elapsed);

      setTimeout(function () {
        loader.classList.add('is-done');
        body.classList.remove('is-loading');

        // Trigger hero entrance animations after loader fades
        setTimeout(triggerHeroReveal, 300);
      }, wait);
    }

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }
  }


  /* ----------------------------------------------------------
     06. HERO ANIMATIONS
     (defined before scroll reveal since it's called by loader)
  ---------------------------------------------------------- */
  function triggerHeroReveal() {
    const heroEls = document.querySelectorAll('.hero-reveal');
    heroEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ----------------------------------------------------------
     03. CUSTOM CURSOR
     Disabled automatically on touch/pointer-coarse devices via CSS.
  ---------------------------------------------------------- */
  function initCursor() {
    const cursor    = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');

    if (!cursor || !cursorDot) return;

    // Skip on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mx = 0, my = 0;
    let cx = 0, cy = 0;
    let rafId;

    // Track actual pointer
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      cursorDot.style.transform = 'translate(' + mx + 'px, ' + my + 'px)';
    }, { passive: true });

    // Lag the outer ring for premium feel
    function animateCursor() {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      cursor.style.transform = 'translate(' + cx + 'px, ' + cy + 'px)';
      rafId = requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // State changes
    function addCursorListeners() {
      document.querySelectorAll('a, button').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursor.classList.add('is-link'); });
        el.addEventListener('mouseleave', function () { cursor.classList.remove('is-link'); });
      });

      document.querySelectorAll('.portfolio-card').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursor.classList.add('is-hover'); });
        el.addEventListener('mouseleave', function () { cursor.classList.remove('is-hover'); });
      });
    }
    addCursorListeners();

    // Re-bind after dynamic content is added
    document.addEventListener('portfolioRendered', addCursorListeners);
  }


  /* ----------------------------------------------------------
     04. NAVIGATION
  ---------------------------------------------------------- */
  function initNavigation() {
    const nav       = document.getElementById('nav');
    const menuBtn   = document.getElementById('menuBtn');
    const navMobile = document.getElementById('navMobile');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks  = document.querySelectorAll('.nav-link');

    if (!nav) return;

    /* — Sticky / hide-on-scroll behaviour — */
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
      const y = window.scrollY;

      if (y > 80) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      // Hide on scroll down (past 200px), show on scroll up
      if (y > lastScroll && y > 200) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }
      lastScroll = y;
    }, { passive: true });

    /* — Mobile menu toggle — */
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        const isOpen = navMobile.classList.toggle('is-open');
        menuBtn.classList.toggle('active', isOpen);
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        navMobile.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    }

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    /* — Active link highlight — */
    const sections = document.querySelectorAll('section[id]');

    const sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + id);
          });
        }
      });
    }, { threshold: 0.25 });

    sections.forEach(function (s) { sectionObs.observe(s); });
  }


  /* ----------------------------------------------------------
     05. SMOOTH SCROLL
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href   = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }


  /* ----------------------------------------------------------
     07. SCROLL REVEAL (Intersection Observer)
  ---------------------------------------------------------- */
  function initScrollReveal() {
    // Respect reduced motion — reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
        .forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        const el    = entry.target;
        const delay = parseFloat(getComputedStyle(el).getPropertyValue('--delay') || '0') * 1000;

        setTimeout(function () {
          el.classList.add('is-visible');
        }, delay);

        obs.unobserve(el);
      });
    }, {
      threshold:  0.12,
      rootMargin: '0px 0px -48px 0px',
    });

    function observeRevealEls() {
      document.querySelectorAll('.reveal-up:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)')
        .forEach(function (el) { observer.observe(el); });
    }

    observeRevealEls();
    // Re-observe when portfolio grid re-renders
    document.addEventListener('portfolioRendered', observeRevealEls);
  }


  /* ----------------------------------------------------------
     08. RENDER: EXPERTISE CARDS
  ---------------------------------------------------------- */
  function renderExpertise() {
    const grid = document.getElementById('expertiseGrid');
    if (!grid || typeof expertiseItems === 'undefined') return;

    expertiseItems.forEach(function (item, i) {
      const card = document.createElement('div');
      const isAccent = item.accent;

      card.className = 'expertise-card reveal-up' + (isAccent ? ' expertise-card--accent' : '');
      card.style.setProperty('--delay', (i % 3 * 0.1) + 's');

      card.innerHTML =
        '<span class="card-num">' + sanitise(item.num) + '</span>' +
        '<h3>' + sanitise(item.title) + '</h3>' +
        '<p>' + sanitise(item.description) + '</p>';

      grid.appendChild(card);
    });
  }


  /* ----------------------------------------------------------
     09. RENDER: EXPERIENCE SECTION
  ---------------------------------------------------------- */
  function renderExperience() {
    const list = document.getElementById('expList');
    if (!list || typeof experienceItems === 'undefined') return;

    experienceItems.forEach(function (item, i) {
      const el = document.createElement('div');
      el.className = 'exp-item reveal-up';
      el.style.setProperty('--delay', (i * 0.12) + 's');

      const brandsHtml = item.brands && item.brands.length
        ? '<div class="exp-brand-list">' +
            '<span class="exp-brand-prefix">Brands:</span>' +
            item.brands.map(function (b) {
              return '<span class="exp-brand-tag">' + sanitise(b) + '</span>';
            }).join('') +
          '</div>'
        : '';

      el.innerHTML =
        '<div class="exp-role">' +
          '<h3>' + sanitise(item.role) + '</h3>' +
          '<span class="exp-company">' + sanitise(item.company) + '</span>' +
          '<p class="exp-desc">' + sanitise(item.description) + '</p>' +
          brandsHtml +
        '</div>' +
        '<div class="exp-meta">' +
          '<span class="exp-date">' + sanitise(item.start) + ' – ' + sanitise(item.end) + '</span>' +
          '<span class="exp-type">' + sanitise(item.type) + '</span>' +
        '</div>';

      list.appendChild(el);
    });
  }


  /* ----------------------------------------------------------
     10. RENDER: PORTFOLIO GRID & FILTERS
  ---------------------------------------------------------- */
  let currentFilter = 'all';

  function renderPortfolio() {
    const filterEl = document.getElementById('portfolioFilter');
    const gridEl   = document.getElementById('portfolioGrid');

    if (!filterEl || !gridEl) return;
    if (typeof portfolioCategories === 'undefined' || typeof portfolioProjects === 'undefined') return;

    const hasAllCategory = portfolioCategories.some(function (cat) { return cat.id === 'all'; });
    const defaultFilter = hasAllCategory
      ? 'all'
      : (portfolioCategories[0] ? portfolioCategories[0].id : 'all');
    currentFilter = defaultFilter;

    /* Render filter buttons */
    portfolioCategories.forEach(function (cat) {
      const btn = document.createElement('button');
      btn.className  = 'filter-btn' + (cat.id === defaultFilter ? ' is-active' : '');
      btn.textContent = cat.label;
      btn.dataset.filter = cat.id;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', cat.id === defaultFilter ? 'true' : 'false');

      btn.addEventListener('click', function () {
        currentFilter = cat.id;
        document.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        renderGrid(currentFilter);
      });

      filterEl.appendChild(btn);
    });

    /* Initial render */
    renderGrid(defaultFilter);
  }

  function renderGrid(filter) {
    const gridEl = document.getElementById('portfolioGrid');
    if (!gridEl) return;

    const filtered = filter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(function (p) { return p.category === filter; });

    // Fade out, clear, re-render, fade in
    gridEl.style.opacity = '0';
    gridEl.style.transition = 'opacity 0.2s ease';

    setTimeout(function () {
      gridEl.innerHTML = '';

      if (filtered.length === 0) {
        gridEl.innerHTML =
          '<div class="portfolio-empty">' +
            '<p>No projects in this category yet. Add your work to <code>js/data.js</code>.</p>' +
          '</div>';
      } else {
        filtered.forEach(function (project, i) {
          gridEl.appendChild(buildProjectCard(project, i));
        });
      }

      gridEl.style.opacity = '1';

      // Fire custom event so scroll-reveal & cursor re-observe new elements
      document.dispatchEvent(new CustomEvent('portfolioRendered'));
    }, 200);
  }

  function buildProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'portfolio-card reveal-up';
    card.style.setProperty('--delay', (index % 3 * 0.07) + 's');
    card.dataset.projectId = project.id;

    const hasImage = project.coverImage && project.coverImage.trim() !== '';
    const isFeatured = project.featured;

    /* Image / placeholder */
    const imgHtml = hasImage
      ? '<img src="' + sanitiseAttr(project.coverImage) + '" alt="' + sanitiseAttr(project.title) + '" loading="lazy">'
      : '<div class="card-ph">' +
          '<span class="card-ph-label">' + sanitise(project.title) + '</span>' +
          '<span class="card-ph-sub">Add image: assets/images/portfolio/' + sanitise(project.id) + '/cover.jpg</span>' +
        '</div>';

    const featuredBadge = isFeatured
      ? '<span class="card-featured-badge">Featured</span>'
      : '';

    card.innerHTML =
      '<div class="card-img">' +
        imgHtml +
        '<div class="card-overlay"><span class="card-view-label">View Project</span></div>' +
        featuredBadge +
      '</div>' +
      '<div class="card-info">' +
        '<div class="card-meta">' +
          '<span class="card-cat">' + sanitise(getCategoryLabel(project.category)) + '</span>' +
          '<span class="card-year">' + sanitise(project.year) + '</span>' +
        '</div>' +
        '<h3 class="card-title">' + sanitise(project.title) + '</h3>' +
        '<div class="card-details">' +
          (project.brand  ? '<span class="card-brand">' + sanitise(project.brand) + '</span>' : '') +
          (project.season ? '<span class="card-season">' + sanitise(project.season) + '</span>' : '') +
        '</div>' +
      '</div>';

    card.addEventListener('click', function () { openModal(project); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(project); }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View project: ' + project.title);

    return card;
  }

  function getCategoryLabel(catId) {
    if (typeof portfolioCategories === 'undefined') return catId;
    const cat = portfolioCategories.find(function (c) { return c.id === catId; });
    return cat ? cat.label.replace(/^\d+ — /, '') : catId;
  }

  function getProjectMedia(project) {
    const media = [];

    if (project.coverImage && project.coverImage.trim()) {
      media.push({
        src: project.coverImage,
        alt: project.title,
        fit: 'cover',
      });
    }

    (project.images || []).forEach(function (image) {
      media.push({
        src: image.src,
        alt: image.alt || project.title,
        fit: image.fit || 'cover',
      });
    });

    return media;
  }


  /* ----------------------------------------------------------
     11. PROJECT MODAL
  ---------------------------------------------------------- */
  let modalCloseHandler   = null;
  let backdropClickHandler = null;
  let escKeyHandler       = null;

  function initModal() {
    const modalClose   = document.getElementById('modalClose');
    const backdrop     = document.getElementById('modalBackdrop');

    if (modalClose) {
      modalCloseHandler = function () { closeModal(); };
      modalClose.addEventListener('click', modalCloseHandler);
    }

    if (backdrop) {
      backdropClickHandler = function () { closeModal(); };
      backdrop.addEventListener('click', backdropClickHandler);
    }
  }

  function openModal(project) {
    const modal    = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = buildModalContent(project);
    initProjectGallery(modalBody);

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Bind image clicks → lightbox
    modalBody.querySelectorAll('[data-lightbox]').forEach(function (img, i) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { openLightbox(project, i); });
    });

    // Escape key
    escKeyHandler = function (e) {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', escKeyHandler);

    // Focus trap — focus close button
    setTimeout(function () {
      const closeBtn = document.getElementById('modalClose');
      if (closeBtn) closeBtn.focus();
    }, 100);

    // Scroll modal to top
    const scrollEl = modal.querySelector('.modal-scroll');
    if (scrollEl) scrollEl.scrollTop = 0;
  }

  function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (escKeyHandler) {
      document.removeEventListener('keydown', escKeyHandler);
      escKeyHandler = null;
    }
  }

  function buildModalContent(project) {
    const media = getProjectMedia(project);
    const hasImages = media.length > 0;
    const hasCover  = project.coverImage && project.coverImage.trim() !== '';

    /* Tags row */
    const tagsHtml =
      '<div class="proj-tags-row">' +
        buildTagItem('Brand',   project.brand)   +
        buildTagItem('Season',  project.season)  +
        buildTagItem('Role',    project.role)    +
        buildTagItem('Company', project.company) +
      '</div>';

    /* Cover */
    const coverHtml = hasCover
      ? '<div class="proj-cover"><img src="' + sanitiseAttr(project.coverImage) + '" alt="' + sanitiseAttr(project.title) + '" data-lightbox loading="lazy"></div>'
      : '<div class="proj-cover"><div class="img-placeholder img-placeholder--modal" style="min-height:320px">' +
          '<div class="ph-inner"><div class="ph-icon">◻</div><p>' + sanitise(project.title) + '</p>' +
          '<small>Add: assets/images/portfolio/' + sanitise(project.id) + '/cover.jpg</small></div></div></div>';

    /* Process section */
    let processHtml = '';
    if (project.process) {
      const steps = [
        { key: 'challenge',          label: 'Challenge' },
        { key: 'research',           label: 'Research' },
        { key: 'designDirection',    label: 'Design Direction' },
        { key: 'development',        label: 'Development' },
        { key: 'technicalExecution', label: 'Technical Execution' },
        { key: 'outcome',            label: 'Outcome' },
      ];

      const itemsHtml = steps.filter(function (s) { return project.process[s.key]; }).map(function (s) {
        return '<div class="proj-process-item">' +
          '<span class="proj-process-key">' + sanitise(s.label) + '</span>' +
          '<p class="proj-process-val">' + sanitise(project.process[s.key]) + '</p>' +
        '</div>';
      }).join('');

      processHtml = itemsHtml
        ? '<div class="proj-process"><h3>Design Process</h3><div class="proj-process-items">' + itemsHtml + '</div></div>'
        : '';
    }

    /* Gallery */
    let galleryHtml = '';
    if (hasImages) {
      const slidesHtml = media.map(function (img, i) {
        return '<button class="gallery-slide" type="button" data-lightbox data-index="' + i + '">' +
          '<img src="' + sanitiseAttr(img.src) + '" alt="' + sanitiseAttr(img.alt || project.title) + '" ' +
          'style="object-fit:' + sanitiseAttr(img.fit || 'cover') + '" loading="lazy">' +
        '</button>';
      }).join('');

      const thumbsHtml = media.map(function (img, i) {
        return '<button class="gallery-thumb" type="button" data-thumb-index="' + i + '">' +
          '<img src="' + sanitiseAttr(img.src) + '" alt="' + sanitiseAttr(img.alt || project.title) + '" ' +
          'style="object-fit:' + sanitiseAttr(img.fit || 'cover') + '" loading="lazy">' +
        '</button>';
      }).join('');

      galleryHtml =
        '<div class="proj-gallery">' +
          '<h3>Project Images</h3>' +
          '<div class="project-gallery" data-project-gallery>' +
            '<button class="project-gallery-arrow project-gallery-arrow--prev" type="button" data-gallery-prev aria-label="Previous image">←</button>' +
            '<div class="project-gallery-viewport">' +
              '<div class="project-gallery-track">' + slidesHtml + '</div>' +
            '</div>' +
            '<button class="project-gallery-arrow project-gallery-arrow--next" type="button" data-gallery-next aria-label="Next image">→</button>' +
          '</div>' +
          '<div class="project-gallery-thumbs">' + thumbsHtml + '</div>' +
        '</div>';
    } else {
      galleryHtml =
        '<div class="proj-gallery">' +
        '<p class="gallery-empty-note">Portfolio images for this project will be added soon.<br>' +
        '<small>Drop images into: <code>assets/images/portfolio/' + sanitise(project.id) + '/</code></small></p>' +
        '</div>';
    }

    /* Skill tags */
    const tagPills = project.tags && project.tags.length
      ? '<div class="proj-tags">' + project.tags.map(function (t) {
          return '<span class="proj-tag-badge">' + sanitise(t) + '</span>';
        }).join('') + '</div>'
      : '';

    return (
      '<div class="proj-detail-header">' +
        '<div class="proj-cat-line">' +
          '<span class="proj-cat-label">' + sanitise(getCategoryLabel(project.category)) + '</span>' +
          '<span class="proj-cat-sep">·</span>' +
          '<span class="proj-cat-year">' + sanitise(project.year) + '</span>' +
        '</div>' +
        '<h2 class="proj-title">' + sanitise(project.title) + '</h2>' +
        tagsHtml +
      '</div>' +
      coverHtml +
      '<div class="proj-description"><p>' + sanitise(project.description) + '</p></div>' +
      processHtml +
      galleryHtml +
      tagPills
    );
  }

  function buildTagItem(label, value) {
    if (!value) return '';
    return '<div class="proj-tag-item">' +
      '<span class="proj-tag-label">' + sanitise(label) + '</span>' +
      '<span class="proj-tag-value">' + sanitise(value) + '</span>' +
    '</div>';
  }

  function initProjectGallery(root) {
    const gallery = root.querySelector('[data-project-gallery]');
    if (!gallery) return;

    const viewport = gallery.querySelector('.project-gallery-viewport');
    const track = gallery.querySelector('.project-gallery-track');
    const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
    const thumbs = Array.from(gallery.querySelectorAll('[data-thumb-index]'));
    const prevBtn = gallery.querySelector('[data-gallery-prev]');
    const nextBtn = gallery.querySelector('[data-gallery-next]');

    if (!viewport || !track || slides.length === 0) return;

    function scrollToIndex(index) {
      const slide = slides[index];
      if (!slide) return;
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveThumb(index);
    }

    function currentIndex() {
      const viewportRect = viewport.getBoundingClientRect();
      let closest = 0;
      let closestDistance = Infinity;

      slides.forEach(function (slide, index) {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - (viewportRect.left + viewportRect.width / 2));
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      return closest;
    }

    function setActiveThumb(index) {
      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.classList.toggle('is-active', thumbIndex === index);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollToIndex(Math.max(0, currentIndex() - 1));
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollToIndex(Math.min(slides.length - 1, currentIndex() + 1));
      });
    }

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        const index = parseInt(thumb.getAttribute('data-thumb-index'), 10);
        scrollToIndex(index);
      });
    });

    gallery.addEventListener('scroll', function () {
      setActiveThumb(currentIndex());
    }, { passive: true });

    setActiveThumb(0);
  }


  /* ----------------------------------------------------------
     12. LIGHTBOX
  ---------------------------------------------------------- */
  let lbImages  = [];
  let lbIndex   = 0;
  let lbEscKey  = null;
  let lbKeyNav  = null;

  function initLightbox() {
    const lbClose   = document.getElementById('lbClose');
    const lbBackdrop = document.getElementById('lbBackdrop');
    const lbPrev    = document.getElementById('lbPrev');
    const lbNext    = document.getElementById('lbNext');

    if (lbClose)    lbClose.addEventListener('click',    closeLightbox);
    if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
    if (lbPrev)     lbPrev.addEventListener('click',  function () { moveLightbox(-1); });
    if (lbNext)     lbNext.addEventListener('click',  function () { moveLightbox(1); });
  }

  function openLightbox(project, startIndex) {
    const lb = document.getElementById('lightbox');
    if (!lb) return;

    // Build image array: cover first, then gallery
    const imgs = getProjectMedia(project);

    if (imgs.length === 0) return;

    lbImages = imgs;
    lbIndex  = Math.min(startIndex, imgs.length - 1);

    showLightboxImage(lbIndex);

    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');

    lbEscKey = function (e) {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  moveLightbox(-1);
      if (e.key === 'ArrowRight') moveLightbox(1);
    };
    document.addEventListener('keydown', lbEscKey);
  }

  function showLightboxImage(index) {
    const img     = document.getElementById('lbImg');
    const caption = document.getElementById('lbCaption');
    const counter = document.getElementById('lbCounter');
    const prev    = document.getElementById('lbPrev');
    const next    = document.getElementById('lbNext');

    if (!img) return;

    const item = lbImages[index];
    img.src = item.src;
    img.alt = item.alt || '';

    if (caption) caption.textContent = item.alt || '';
    if (counter) counter.textContent = lbImages.length > 1 ? (index + 1) + ' / ' + lbImages.length : '';

    const multipleImages = lbImages.length > 1;
    if (prev) prev.style.visibility = multipleImages ? 'visible' : 'hidden';
    if (next) next.style.visibility = multipleImages ? 'visible' : 'hidden';
  }

  function moveLightbox(dir) {
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    showLightboxImage(lbIndex);
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;

    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');

    if (lbEscKey) {
      document.removeEventListener('keydown', lbEscKey);
      lbEscKey = null;
    }
  }


  /* ----------------------------------------------------------
     13. GSAP ANIMATIONS
     Counter animation for stats + enhanced process step animations.
     Gracefully falls back if GSAP is not loaded.
  ---------------------------------------------------------- */
  function initGSAP() {
    if (typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      return; // ScrollTrigger required for scroll-based animations
    }

    /* — Stat number counters — */
    document.querySelectorAll('.stat-number[data-count]').forEach(function (el) {
      const target  = parseInt(el.dataset.count, 10);
      const suffix  = el.dataset.suffix || '';
      if (isNaN(target)) return;
      const counter = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start:   'top 85%',
        once:    true,
        onEnter: function () {
          gsap.to(counter, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = Math.round(counter.val) + suffix;
            },
          });
        },
      });
    });

    /* — Process steps stagger — */
    document.querySelectorAll('.process-step').forEach(function (step, i) {
      const isLeft = step.classList.contains('process-step--left');
      gsap.set(step, { opacity: 0, x: isLeft ? -30 : 30 });

      ScrollTrigger.create({
        trigger: step,
        start:   'top 88%',
        once:    true,
        onEnter: function () {
          gsap.to(step, {
            opacity:  1,
            x:        0,
            duration: 0.75,
            ease:     'power3.out',
            delay:    0.05 * (i % 2),
          });
        },
      });
    });

    /* — Section titles gentle reveal — */
    document.querySelectorAll('.section-title').forEach(function (title) {
      if (title.closest('.hero')) return; // hero handled separately

      gsap.set(title, { opacity: 0, y: 24 });

      ScrollTrigger.create({
        trigger: title,
        start:   'top 85%',
        once:    true,
        onEnter: function () {
          gsap.to(title, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
        },
      });
    });
  }


  /* ----------------------------------------------------------
     14. UTILITIES
  ---------------------------------------------------------- */
  function setCurrentYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /**
   * sanitise — escapes HTML special chars to prevent XSS when
   * injecting data.js values into innerHTML.
   * Only called for data from js/data.js (developer-controlled),
   * but kept as a good-practice defence layer.
   */
  function sanitise(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#039;');
  }

  /**
   * sanitiseAttr — used inside attribute values (href, src).
   * Strips javascript: and data: URI schemes defensively.
   */
  function sanitiseAttr(str) {
    if (str === null || str === undefined) return '';
    const s = String(str).trim();
    if (/^javascript:/i.test(s) || /^data:/i.test(s)) return '';
    return encodeURI(s)
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
