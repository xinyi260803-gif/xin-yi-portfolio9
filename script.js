/*
 * Portfolio interactions.
 * I keep each feature in a small setup function and store project details
 * together so the cards and detail window use the same information.
 */
(() => {
  'use strict';

  // ------------------------------------------------------------
  // 0. Shared settings and small utilities
  // ------------------------------------------------------------
  const SETTINGS = Object.freeze({
    ownerName: 'Lim Xin Yi',
    contactEmail: 'xinyi260803@gmail.com',
    themeStorageKey: 'xinyi-portfolio-purple-theme'
  });

  const PROJECTS = [
    {
      id: 'sarawak-art-map',
      group: 'project',
      number: '01',
      title: 'ART Mobile Application – Interactive Map Prototype',
      category: 'mobile',
      type: 'TMT2703 · UI/UX Design / Group project · 2026',
      status: 'High-fidelity prototype',
      summary: 'A high-fidelity mobile app prototype for Sarawak ART, designed to help users explore stations, routes, and nearby places of interest.',
      idea: 'Create a user-friendly public transportation experience that helps people discover ART stations, find nearby destinations, and plan how to reach a place of interest.',
      process: 'Collaborated with a five-member team on the overall UI/UX design and high-fidelity prototype using Lovable. The proposed experience includes an interactive map of ART stations, routes, and nearby points of interest; category filters; search; suggestions for the nearest station and ART route to a destination; and a redirect to ticket booking. Accessibility for visually impaired users was also considered. The assignment brief included usability testing with 10 users using the System Usability Scale (SUS) and qualitative feedback.',
      learning: 'Strengthened my understanding of user-centred design, collaborative prototyping, accessible navigation, and how usability feedback can help improve a mobile interface.',
      tools: ['Lovable', 'UI/UX Design', 'Mobile Prototyping', 'Interactive Map', 'Accessibility'],
      visual: 'art-map',
      cover: 'assets/art-mobile-map.svg',
      alt: 'Stylised illustration of a transit map interface with ART route lines, station markers, and nearby places.'
    },
    {
      id: 'auction-management',
      group: 'project',
      number: '02',
      title: 'Auction Management System',
      category: 'web',
      type: 'TMF2034 · Database Concept and Design / Coursework · 2026',
      status: 'Coursework application',
      summary: 'A database-driven auction management application built with PHP and MySQL while learning web application development and relational database design.',
      idea: 'Organize auction activities and related information, including users, auction items, bids, orders, and payments, within one database-driven application.',
      process: 'Worked with PHP and MySQL while applying relational database concepts, converting an ERD into a relational database schema, and normalizing data to 1NF, 2NF, and 3NF. The application structure covers user, auction item, bid, order, payment, bank, and item-status-history management, as well as reports, search, data export, and dashboard charts.',
      learning: 'Gained practical experience connecting database design concepts with the structure and functions of a web application, and learned how relational schemas and normalization support organized data management.',
      tools: ['PHP', 'MySQL', 'ERD', 'Relational Database Design', '1NF · 2NF · 3NF'],
      visual: 'auction',
      cover: 'assets/auction-dashboard.svg',
      alt: 'Stylised illustration of an auction management dashboard with summary cards, a chart, and navigation panel.'
    },
    {
      id: 'personal-portfolio',
      group: 'project',
      number: '03',
      title: 'Personal Portfolio Website',
      category: 'web',
      type: 'Personal project · Frontend web development · 2026',
      status: 'Published',
      summary: 'A responsive personal website built with HTML, CSS, and JavaScript to present my academic journey, skills, coursework, competition entries, and interests.',
      idea: 'I developed a personal portfolio website to introduce myself as a Multimedia Computing student and bring my education, technical skills, academic projects, competition experiences, and personal interests together in one place. The goal was to give visitors a clear and engaging way to explore my learning journey.',
      process: 'Built the website with semantic HTML, responsive CSS, and vanilla JavaScript. I implemented project category filters, live search and sorting, a project-details modal, keyboard-accessible tabs, and mobile navigation. Other interactions include a dynamic typing effect, smooth scrolling, active navigation highlighting, a scroll progress indicator, a back-to-top button, and a dark/light theme that remembers the visitor’s preference with localStorage. The contact section includes client-side form validation and a copy-email interaction.',
      learning: 'This project strengthened my understanding of how HTML, CSS, and JavaScript work together to create a complete website. I gained more practice with DOM manipulation, event handling, responsive layouts, localStorage, form validation, clipboard interactions, and accessible interface behavior. I also learned to organize JavaScript into smaller functions and consider reduced-motion preferences and different screen sizes when designing interactions.',
      tools: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Responsive Design', 'localStorage'],
      visual: 'portfolio',
      cover: 'assets/personal-portfolio.svg',
      alt: 'Stylised illustration of a personal portfolio webpage with purple navigation, a welcome heading, and profile artwork.',
      url: 'https://xinyi260803-gif.github.io/xin-yi-portfolio1-2026/',
      linkLabel: 'Live website'
    },
    {
      id: 'campus360',
      group: 'competition',
      number: '01',
      title: 'Campus360 Student App',
      category: 'mobile',
      type: 'MOHE Hackathon 2026 / AppSheet project',
      status: 'In progress',
      summary: 'A student-services app project for the MOHE Hackathon 2026, exploring wellbeing activities, incident reporting, and counselling appointment workflows.',
      idea: 'Campus360 explores how useful student services could be brought together in one accessible place, making it easier for students to discover support and submit requests.',
      process: 'I explored the app structure and workflows in AppSheet, including student wellbeing activities, incident reporting, and counselling appointment booking. I also explored how Gemini AI could support the wider concept.',
      learning: 'This experience helped me understand how app data, form behavior, and clear user workflows affect the reliability of a no-code application. The project is still in progress.',
      tools: ['MOHE Hackathon 2026', 'AppSheet', 'Gemini AI'],
      visual: 'campus',
      cover: 'assets/campus360-student-app.svg',
      alt: 'Stylised illustration of a student support app with wellbeing, counselling, and incident-report options.'
    },
    {
      id: 'time-machine',
      group: 'competition',
      number: '02',
      title: 'Campus Time Machine 5G',
      category: 'concept',
      type: 'Cyberview 5G Future Talent Innovation Challenge 2026 / Proposal',
      status: 'Proposal concept',
      summary: 'An innovation proposal imagining how students could explore their campus past, present, and future through augmented reality and 5G.',
      idea: 'The concept invites students to explore campus history, current spaces, and possible future developments through an interactive learning experience.',
      process: 'The proposal includes location-based AR experiences and Live Collaborative Time Tours, where lecturers can host synchronized sessions and students can explore the same shared environment together.',
      learning: 'I learned to shape a technology idea around a clear learning experience and explain how AR and 5G could support collaboration. This is a proposal concept, not a completed AR application.',
      tools: ['Cyberview Challenge 2026', 'AR concept', '5G innovation'],
      visual: 'time',
      cover: 'assets/campus-time-machine.svg',
      alt: 'Stylised illustration of a university campus with augmented-reality markers and a 2035 future-campus label.'
    },
    {
      id: 'futurelens-ai',
      group: 'competition',
      number: '03',
      title: 'FutureLens AI',
      category: 'concept',
      type: 'Innovation Competition · Online Platform Prototype · 2026',
      status: 'Prototype completed',
      summary: 'An AI-assisted community planning platform prototype that helps residents visualise ideas for shared spaces, compare improved concepts, and vote for their preferred designs.',
      idea: 'FutureLens AI is an online platform designed to connect residents and developers in improving community spaces. Residents can explore existing development concepts, submit suggestions, and visualise possible improvements through AI-generated images. Developers can gather these suggestions, prepare improved design alternatives, and invite residents to vote and explain their preferences. The goal is to make township planning more interactive and people-centred.',
      process: 'I explored an end-to-end platform workflow covering idea submission, AI-assisted visualisation, concept improvement, community voting, and feedback review. Residents begin by viewing an existing space or plan and describing an improvement, such as adding shaded areas and benches to a neighbourhood park. The concept then uses AI-generated imagery to help make the suggestion easier to understand. Developers collect residents’ requests and prepare improved concept options. Residents compare the alternatives, vote for a preferred option, and explain why they chose it. Developers can review the voting results and comments to identify shared needs and concerns. The prototype focuses on the user journey and proposed interaction; it should not be described as a deployed platform or a production AI service.',
      learning: 'Through this project, I developed a better understanding of how AI visualisation can make abstract planning ideas easier to communicate. I also explored user-centred design, community engagement, structured feedback collection, and collaborative decision-making. The experience showed me how digital platforms can give residents a clearer voice while helping developers consider community needs when planning shared spaces.',
      tools: ['AI-assisted Image Generation', 'Online Platform Prototype', 'Community Engagement', 'User-centred Design', 'Voting & Feedback'],
      visual: 'futurelens',
      cover: 'assets/futurelens-ai.svg',
      alt: 'Stylised illustration of a community park concept beside resident voting results for proposed improvements.'
    }
  ];

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const reducedMotion = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  let activeFilter = 'all';
  let searchTerm = '';
  let sortOrder = 'featured';
  let lastFocusedProjectTrigger = null;
  let toastTimer = null;

  function escapeHTML(value) {
    const replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(value).replace(/[&<>"']/g, character => replacements[character]);
  }

  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimer !== null) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('show');
      toastTimer = null;
    }, 3000);
  }

  function safeReplaceURL(url) {
    try {
      window.history.replaceState(null, '', url);
    } catch (_) {
      // The page still works if history updates are unavailable (for example, file previews).
    }
  }

  // ------------------------------------------------------------
  // 1. Smooth internal scrolling
  // ------------------------------------------------------------
  function setupSmoothScrolling() {
    document.addEventListener('click', event => {
      const clickedElement = event.target instanceof Element ? event.target : null;
      const link = clickedElement ? clickedElement.closest('a[href^="#"]') : null;
      if (!link || link.hasAttribute('data-open-tab')) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      let targetId = hash.slice(1);
      try { targetId = decodeURIComponent(targetId); } catch (_) { /* Keep the raw id. */ }
      const destination = document.getElementById(targetId);
      if (!destination) return;

      event.preventDefault();
      destination.scrollIntoView({
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });

      if (window.location.hash !== hash) {
        try { window.history.pushState(null, '', hash); }
        catch (_) { window.location.hash = hash; }
      }
    });

    // Restore the relevant section when the visitor uses the browser Back/Forward buttons.
    window.addEventListener('popstate', () => {
      const id = window.location.hash.slice(1);
      const destination = id ? document.getElementById(id) : null;
      if (destination) destination.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }

  // ------------------------------------------------------------
  // 2. Active navigation link highlighting
  // ------------------------------------------------------------
  function setupActiveNavigation() {
    const sections = $$('main section[id]');
    const links = $$('.nav-link');
    if (!sections.length || !links.length) return;

    const markActive = sectionId => {
      links.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections.length) markActive(visibleSections[0].target.id);
      }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, 0.15, 0.4, 0.7] });
      sections.forEach(section => observer.observe(section));
    } else {
      let framePending = false;
      const update = () => {
        const threshold = ($('#top')?.offsetHeight || 0) + 100;
        let currentSection = sections[0];
        sections.forEach(section => {
          if (section.getBoundingClientRect().top <= threshold) currentSection = section;
        });
        if (currentSection) markActive(currentSection.id);
        framePending = false;
      };
      window.addEventListener('scroll', () => {
        if (!framePending) {
          framePending = true;
          window.requestAnimationFrame(update);
        }
      }, { passive: true });
      update();
    }
  }

  // ------------------------------------------------------------
  // 3. Interactive project details modal
  // ------------------------------------------------------------
  function visualFor(project, eager = false) {
    const loading = eager ? 'eager' : 'lazy';
    return `<div class="project-visual visual-${escapeHTML(project.visual)}">
      <img class="project-cover-image" src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.alt)}" loading="${loading}" decoding="async" width="1200" height="720">
      <span class="visual-caption" aria-hidden="true">${escapeHTML(project.type.toUpperCase())}</span>
    </div>`;
  }

  function projectURL(projectId) {
    const url = new URL(window.location.href);
    if (projectId) {
      url.searchParams.set('project', projectId);
      url.hash = 'work';
    } else {
      url.searchParams.delete('project');
    }
    return url;
  }

  function openProject(projectId, fromLink = false, trigger = null) {
    const project = PROJECTS.find(item => item.id === projectId);
    const dialog = $('#project-dialog');
    if (!project || !dialog) return;

    if (trigger instanceof HTMLElement) lastFocusedProjectTrigger = trigger;
    const cover = $('#dialog-cover');
    const tags = $('#dialog-tags');
    if (cover) cover.innerHTML = visualFor(project, true);

    const textFields = {
      '#dialog-category': `${project.group === 'competition' ? 'COMPETITION ENTRY' : 'PROJECT'} / ${project.number}`,
      '#dialog-title': project.title,
      '#dialog-intro': project.summary,
      '#dialog-type': project.type,
      '#dialog-status': project.status,
      '#dialog-idea': project.idea,
      '#dialog-process': project.process,
      '#dialog-learning': project.learning
    };
    Object.entries(textFields).forEach(([selector, value]) => {
      const element = $(selector);
      if (element) element.textContent = value;
    });
    if (tags) tags.innerHTML = project.tools.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');

    if (!dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
    if (!fromLink) safeReplaceURL(projectURL(projectId));
    $('#dialog-close')?.focus();
  }

  function closeProjectDialog() {
    const dialog = $('#project-dialog');
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
  }

  function setupProjectDialog() {
    const dialog = $('#project-dialog');
    if (!dialog) return;

    $('#dialog-close')?.addEventListener('click', closeProjectDialog);
    dialog.addEventListener('click', event => {
      if (event.target === dialog) closeProjectDialog();
    });
    dialog.addEventListener('close', () => {
      if (new URLSearchParams(window.location.search).has('project')) {
        safeReplaceURL(projectURL(null));
      }
      if (lastFocusedProjectTrigger?.isConnected) lastFocusedProjectTrigger.focus();
      lastFocusedProjectTrigger = null;
    });

    const requestedProject = new URLSearchParams(window.location.search).get('project');
    if (requestedProject && PROJECTS.some(project => project.id === requestedProject)) {
      openProject(requestedProject, true);
    }
  }

  // ------------------------------------------------------------
  // 4. Project category filters, plus search and sorting
  // ------------------------------------------------------------
  function renderProjectCards(projects) {
    return projects.map(project => `
      <article class="project-card">
        ${visualFor(project)}
        <div class="project-content">
          <div class="project-overline"><span>${project.group === 'competition' ? 'COMPETITION' : 'PROJECT'} / ${project.number}</span><span class="status">${escapeHTML(project.status.toUpperCase())}</span></div>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.summary)}</p>
          <div class="tag-list">${project.tools.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
          <div class="project-card-footer">
            <span>${escapeHTML(project.type.toUpperCase())}</span>
            <div class="project-actions">
              ${project.url ? `<a class="project-link" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.linkLabel || 'Open project')} <span aria-hidden="true">↗</span></a>` : ''}
              <button class="project-detail-button" type="button" data-project="${escapeHTML(project.id)}" aria-label="View details for ${escapeHTML(project.title)}">View details <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderProjects() {
    const projectsGrid = $('#projects-grid');
    const competitionsGrid = $('#competitions-grid');
    if (!projectsGrid || !competitionsGrid) return;

    const query = searchTerm.toLowerCase().trim();
    const groupFilter = activeFilter === 'projects' || activeFilter === 'competitions';
    const matches = PROJECTS.filter(project => {
      const groupMatches = activeFilter === 'all'
        || !groupFilter
        || (activeFilter === 'projects' && project.group === 'project')
        || (activeFilter === 'competitions' && project.group === 'competition');
      const categoryMatches = activeFilter === 'all' || groupFilter || project.category === activeFilter;
      const searchableText = [project.title, project.summary, project.type, ...project.tools].join(' ').toLowerCase();
      return groupMatches && categoryMatches && searchableText.includes(query);
    });

    if (sortOrder === 'az') matches.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOrder === 'za') matches.sort((a, b) => b.title.localeCompare(a.title));

    const projectMatches = matches.filter(project => project.group === 'project');
    const competitionMatches = matches.filter(project => project.group === 'competition');
    projectsGrid.innerHTML = renderProjectCards(projectMatches);
    competitionsGrid.innerHTML = renderProjectCards(competitionMatches);

    const projectGroup = $('#projects-group');
    const competitionGroup = $('#competitions-group');
    const emptyState = $('#empty-state');
    const resultsCount = $('#results-count');
    if (projectGroup) projectGroup.hidden = projectMatches.length === 0;
    if (competitionGroup) competitionGroup.hidden = competitionMatches.length === 0;
    if (emptyState) emptyState.hidden = matches.length > 0;
    if (resultsCount) {
      resultsCount.textContent = `Showing ${matches.length} ${matches.length === 1 ? 'work item' : 'work items'}${activeFilter === 'all' && !query ? ' · 3 projects · 3 competition entries' : ''}`;
    }
  }

  function setProjectFilter(filter) {
    const allowedFilters = ['all', 'projects', 'competitions', 'mobile', 'web', 'concept'];
    if (!allowedFilters.includes(filter)) return;
    activeFilter = filter;
    $$('[data-filter]').forEach(button => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    renderProjects();
  }

  function setupProjectTools() {
    const results = $('#project-results');
    const search = $('#project-search');
    const sort = $('#project-sort');

    $$('[data-filter]').forEach(button => {
      button.addEventListener('click', () => setProjectFilter(button.dataset.filter));
    });
    search?.addEventListener('input', event => {
      searchTerm = event.target.value;
      renderProjects();
    });
    sort?.addEventListener('change', event => {
      sortOrder = ['featured', 'az', 'za'].includes(event.target.value) ? event.target.value : 'featured';
      renderProjects();
    });
    $('#reset-filters')?.addEventListener('click', () => {
      searchTerm = '';
      sortOrder = 'featured';
      if (search) search.value = '';
      if (sort) sort.value = 'featured';
      setProjectFilter('all');
      search?.focus();
    });

    results?.addEventListener('click', event => {
      const clickedElement = event.target instanceof Element ? event.target : null;
      const button = clickedElement?.closest('[data-project]');
      if (button) openProject(button.dataset.project, false, button);
    });

    renderProjects();
  }

  // ------------------------------------------------------------
  // 5. My World accessible tab switcher
  // ------------------------------------------------------------
  function setupWorldTabs() {
    const tabs = $$('.world-tab');
    if (!tabs.length) return;

    function activateTab(selectedTab, moveFocus = false) {
      tabs.forEach(tab => {
        const selected = tab === selectedTab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        const panelId = tab.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : null;
        if (panel) panel.hidden = !selected;
      });
      if (moveFocus) selectedTab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', event => {
        let nextTab = null;
        if (event.key === 'ArrowRight') nextTab = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft') nextTab = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') nextTab = tabs[0];
        if (event.key === 'End') nextTab = tabs[tabs.length - 1];
        if (nextTab) {
          event.preventDefault();
          activateTab(nextTab, true);
        }
      });
    });

    $$('[data-open-tab]').forEach(link => {
      link.addEventListener('click', event => {
        const tab = tabs.find(item => item.id === `${link.dataset.openTab}-tab`);
        const worldSection = $('#my-world');
        if (!tab || !worldSection) return;
        event.preventDefault();
        activateTab(tab);
        worldSection.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
        safeReplaceURL('#my-world');
      });
    });

    const hashTarget = document.getElementById(window.location.hash.slice(1));
    if (hashTarget?.classList.contains('world-panel')) {
      const matchingTab = tabs.find(tab => tab.getAttribute('aria-controls') === hashTarget.id);
      if (matchingTab) activateTab(matchingTab);
    } else {
      const initiallySelected = tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0];
      activateTab(initiallySelected);
    }
  }

  // ------------------------------------------------------------
  // 6. Dynamic typing effect in the hero section
  // ------------------------------------------------------------
  function setupTypingEffect() {
    const label = $('#role-rotator');
    if (!label || reducedMotion.matches) return;

    const phrases = ['Multimedia Computing student', 'creative learner', 'future developer'];
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;
    let timerId = null;
    label.setAttribute('aria-live', 'off');

    function scheduleTyping(delay) {
      if (timerId !== null) window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        timerId = null;
        typeNextCharacter();
      }, delay);
    }

    function typeNextCharacter() {
      if (document.hidden) {
        scheduleTyping(500);
        return;
      }

      const phrase = phrases[phraseIndex];
      if (deleting) {
        characterIndex = Math.max(0, characterIndex - 1);
        label.textContent = phrase.slice(0, characterIndex);
        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      } else {
        const nextPhrase = phrases[phraseIndex];
        characterIndex = Math.min(nextPhrase.length, characterIndex + 1);
        label.textContent = nextPhrase.slice(0, characterIndex);
        if (characterIndex === nextPhrase.length) {
          deleting = true;
          scheduleTyping(1500);
          return;
        }
      }
      scheduleTyping(deleting ? 48 : 82);
    }

    scheduleTyping(1700);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && timerId === null) scheduleTyping(200);
    });
  }

  // ------------------------------------------------------------
  // 7. Back-to-top button and 8. scroll progress indicator
  // ------------------------------------------------------------
  function setupScrollTools() {
    const progress = $('#scroll-progress');
    const backToTop = $('#back-to-top');
    if (!progress && !backToTop) return;

    let framePending = false;
    function updateScrollUI() {
      const scrollableHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progressPercent = Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100));
      if (progress) progress.style.width = `${progressPercent.toFixed(2)}%`;

      if (backToTop) {
        const visible = window.scrollY > 600;
        backToTop.classList.toggle('is-visible', visible);
        backToTop.setAttribute('aria-hidden', String(!visible));
        backToTop.tabIndex = visible ? 0 : -1;
      }
      framePending = false;
    }

    window.addEventListener('scroll', () => {
      if (!framePending) {
        framePending = true;
        window.requestAnimationFrame(updateScrollUI);
      }
    }, { passive: true });
    window.addEventListener('resize', updateScrollUI, { passive: true });
    backToTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    });
    updateScrollUI();
  }

  // ------------------------------------------------------------
  // 9. Dark/Light theme toggle with localStorage persistence
  // ------------------------------------------------------------
  function applyTheme(theme, savePreference = false) {
    const safeTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = safeTheme;

    const toggle = $('#theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${safeTheme === 'dark' ? 'light' : 'dark'} theme`);
      const icon = $('.theme-icon', toggle);
      if (icon) icon.textContent = safeTheme === 'dark' ? '☼' : '◐';
    }

    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.content = safeTheme === 'dark' ? '#161221' : '#faf8ff';

    if (savePreference) {
      try { window.localStorage.setItem(SETTINGS.themeStorageKey, safeTheme); }
      catch (_) { /* The theme still changes for this page view if storage is blocked. */ }
    }
  }

  function setupThemeToggle() {
    const toggle = $('#theme-toggle');
    if (!toggle) return;

    let savedTheme = null;
    try { savedTheme = window.localStorage.getItem(SETTINGS.themeStorageKey); }
    catch (_) { /* Private browsing or browser settings may block storage. */ }

    const systemPrefersDark = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = ['light', 'dark'].includes(savedTheme)
      ? savedTheme
      : (systemPrefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);
    toggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme, true);
      showToast(`${nextTheme === 'dark' ? 'Dark' : 'Light'} theme enabled`);
    });
  }

  // ------------------------------------------------------------
  // Extra: mobile navigation menu and scroll-reveal animation
  // ------------------------------------------------------------
  function setupMobileNavigation() {
    const toggle = $('#menu-toggle');
    const links = $('#nav-links');
    if (!toggle || !links) return;

    function closeMenu() {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }

    toggle.addEventListener('click', () => {
      const opening = !links.classList.contains('is-open');
      links.classList.toggle('is-open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    });
    $$('.nav-link', links).forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => {
      const clickedElement = event.target instanceof Element ? event.target : null;
      if (clickedElement && !clickedElement.closest('.nav') && links.classList.contains('is-open')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  function setupScrollReveals() {
    const revealElements = $$('.reveal');
    if (!revealElements.length) return;
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealElements.forEach(element => element.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
    revealElements.forEach(element => observer.observe(element));
  }

  // ------------------------------------------------------------
  // 10. Contact form validation and copy-to-clipboard email
  // ------------------------------------------------------------
  async function copyText(text) {
    if (!text) return false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Try the compatibility fallback below if clipboard permission is denied.
      }
    }

    let temporaryField = null;
    try {
      temporaryField = document.createElement('textarea');
      temporaryField.value = text;
      temporaryField.setAttribute('readonly', '');
      temporaryField.style.position = 'fixed';
      temporaryField.style.opacity = '0';
      temporaryField.style.pointerEvents = 'none';
      document.body.appendChild(temporaryField);
      temporaryField.select();
      return typeof document.execCommand === 'function' && document.execCommand('copy');
    } catch (_) {
      return false;
    } finally {
      temporaryField?.remove();
    }
  }

  function setupCopyEmail() {
    const button = $('#copy-email');
    if (!button || !SETTINGS.contactEmail) return;

    button.addEventListener('click', async () => {
      const copied = await copyText(SETTINGS.contactEmail);
      if (copied) {
        showToast('Email address copied to clipboard');
        const originalLabel = button.textContent;
        button.textContent = 'Copied!';
        window.setTimeout(() => { button.textContent = originalLabel; }, 1800);
      } else {
        showToast(`Please copy this email manually: ${SETTINGS.contactEmail}`);
      }
    });
  }

  function setupContactForm() {
    const form = $('#contact-form');
    if (!form) return;

    const fields = [
      { key: 'name', input: $('#contact-name'), error: $('#name-error') },
      { key: 'email', input: $('#contact-email'), error: $('#email-error') },
      { key: 'message', input: $('#contact-message'), error: $('#message-error') }
    ].filter(field => field.input);

    const validationMessage = {
      name: value => value.length < 2 ? 'Please enter at least 2 characters.' : '',
      email: value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? '' : 'Please enter a valid email address.',
      message: value => value.length < 10 ? 'Please write at least 10 characters.' : ''
    };

    function validateField(field) {
      const value = field.input.value.trim();
      const getMessage = validationMessage[field.key];
      const errorText = getMessage ? getMessage(value) : '';
      if (field.error) field.error.textContent = errorText;
      if (errorText) field.input.setAttribute('aria-invalid', 'true');
      else field.input.removeAttribute('aria-invalid');
      return errorText === '';
    }

    fields.forEach(field => {
      if (field.error) {
        const describedBy = field.key === 'message' && $('#message-count')
          ? `${field.error.id} message-count`
          : field.error.id;
        field.input.setAttribute('aria-describedby', describedBy);
        field.error.setAttribute('aria-live', 'polite');
      }
      field.input.addEventListener('blur', () => validateField(field));
      field.input.addEventListener('input', () => {
        if (field.input.hasAttribute('aria-invalid')) validateField(field);
      });
    });

    const messageField = $('#contact-message');
    const messageCount = $('#message-count');
    if (messageField && messageCount) {
      const updateMessageCount = () => { messageCount.textContent = `${messageField.value.length} / 600`; };
      messageField.addEventListener('input', updateMessageCount);
      updateMessageCount();
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const invalidField = fields.find(field => !validateField(field));
      if (invalidField) {
        invalidField.input.focus();
        return;
      }

      const senderName = $('#contact-name')?.value.trim() || '';
      const senderEmail = $('#contact-email')?.value.trim() || '';
      const subject = $('#contact-subject')?.value.trim() || 'Portfolio enquiry';
      const message = messageField?.value.trim() || '';
      const body = `Hi ${SETTINGS.ownerName},\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`;
      const feedback = $('#form-feedback');

      if (SETTINGS.contactEmail) {
        const mailto = `mailto:${SETTINGS.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (feedback) feedback.textContent = 'Your email application should open with a prepared draft. Please review it and press Send there.';
        window.location.href = mailto;
      } else {
        const copied = await copyText(`Subject: ${subject}\n\n${body}`);
        if (feedback) feedback.textContent = copied
          ? 'Your message draft has been copied. Please send it using your email application.'
          : 'Unable to copy the message. Please try again or contact the portfolio owner directly.';
      }
    });
  }

  // Extra: print-friendly résumé view and automatic footer year.
  function setupExtras() {
    $('#print-resume')?.addEventListener('click', () => window.print());
    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  // ------------------------------------------------------------
  // Initialise after the document is ready
  // ------------------------------------------------------------
  function init() {
    const initializers = [
      ['smooth scrolling', setupSmoothScrolling],
      ['active navigation', setupActiveNavigation],
      ['project tools', setupProjectTools],
      ['project details', setupProjectDialog],
      ['My World tabs', setupWorldTabs],
      ['typing effect', setupTypingEffect],
      ['scroll tools', setupScrollTools],
      ['theme toggle', setupThemeToggle],
      ['mobile navigation', setupMobileNavigation],
      ['scroll reveals', setupScrollReveals],
      ['contact form', setupContactForm],
      ['copy email', setupCopyEmail],
      ['extra controls', setupExtras]
    ];

    initializers.forEach(([feature, setup]) => {
      try {
        setup();
      } catch (error) {
        // Keep the remaining features available if one setup step fails.
        console.error(`Could not initialise ${feature}.`, error);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
