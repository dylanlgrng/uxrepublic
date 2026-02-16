(function () {
  var DATA = window.UX_DATA || { articles: [], realisations: [], agencies: [], clientLogos: [] }
  var REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function getBaseRoot() {
    var script = document.currentScript
    if (!script) {
      var scripts = document.querySelectorAll('script[src]')
      script = scripts[scripts.length - 1]
    }
    if (!script || !script.src) return ''
    return script.src.replace(/\/assets\/app\.js(?:\?.*)?$/, '')
  }

  var BASE_ROOT = getBaseRoot()

  function rel(path) {
    return BASE_ROOT + path
  }

  function cardTemplate(item, type) {
    var title = type === 'article' ? item.title : item.company
    var excerpt = type === 'article' ? item.excerpt : item.quote
    var tag = type === 'article' ? item.tag : item.sector
    var href = type === 'article' ? rel('/articles/index.html') : rel('/realisations/index.html')

    return '<article class="card">' +
      '<img class="card-media" src="' + item.image + '" alt="' + title + '" />' +
      '<div class="card-body">' +
      '<span class="tag">' + tag + '</span>' +
      '<h3>' + title + '</h3>' +
      '<p>' + excerpt + '</p>' +
      '<a class="btn btn-ghost" href="' + href + '"><span>' + (type === 'article' ? 'Lire' : 'Voir plus') + '</span></a>' +
      '</div>' +
      '</article>'
  }

  function renderHeader() {
    return '<header class="site-header">' +
      '<div class="container header-inner">' +
      '<a class="logo" href="' + rel('/index.html') + '">' +
      '<img class="logo-image logo-image--white" src="' + rel('/assets/logo-uxr.svg') + '" alt="UX Republic" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-block\'" />' +
      '<span class="logo-fallback">UX Republic</span>' +
      '</a>' +
      '<div class="header-actions">' +
      '<a class="btn btn-fun btn-live" href="' + rel('/contact/index.html') + '">' +
      '<span class="btn-live-indicator" aria-hidden="true"><span></span></span>' +
      '<span>Contactez nous</span>' +
      '</a>' +
      '<button class="burger" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="main-drawer" id="menu-toggle">' +
      '<span class="burger-icon" aria-hidden="true">|||</span><span>Menu</span></button>' +
      '</div></div></header>'
  }

  function renderDrawer() {
    return '<div class="drawer-backdrop" id="menu-backdrop" hidden>' +
      '<div class="drawer" id="main-drawer" role="dialog" aria-modal="true" aria-label="Navigation principale">' +
      '<div class="drawer-top"><div class="header-actions drawer-top-actions">' +
      '<a class="btn btn-fun btn-live" href="' + rel('/contact/index.html') + '">' +
      '<span class="btn-live-indicator" aria-hidden="true"><span></span></span>' +
      '<span>Contactez nous</span>' +
      '</a>' +
      '<button type="button" class="drawer-close burger" id="menu-close"><span class="burger-icon drawer-close-icon" aria-hidden="true">✕</span><span>Fermer</span></button>' +
      '</div></div>' +
      '<div class="drawer-layout">' +
      '<section class="drawer-group">' +
      '<ul class="drawer-list">' +
      '<li><a href="' + rel('/a-propos/index.html') + '">À propos</a></li>' +
      '<li><a href="' + rel('/ux-conf/index.html') + '">UX Conf</a></li>' +
      '<li><a href="' + rel('/formation/index.html') + '">Formation</a></li>' +
      '<li><a href="' + rel('/livre-blanc/index.html') + '">Livre blanc</a></li>' +
      '<li><a href="' + rel('/carriere/index.html') + '">Nous rejoindre</a></li>' +
      '</ul>' +
      '</section>' +
      '<section class="drawer-group">' +
      '<p class="drawer-cluster-title">Métiers</p>' +
      '<div class="drawer-chips">' +
      '<a class="drawer-chip" href="' + rel('/metiers/research/index.html') + '">Research</a>' +
      '<a class="drawer-chip" href="' + rel('/metiers/coaching/index.html') + '">Coaching</a>' +
      '<a class="drawer-chip" href="' + rel('/metiers/design-sprint/index.html') + '">Design Sprint</a>' +
      '<a class="drawer-chip" href="' + rel('/metiers/product-owner/index.html') + '">Product Owner</a>' +
      '<a class="drawer-chip" href="' + rel('/metiers/design-analyst/index.html') + '">Design Analyst</a>' +
      '<a class="drawer-chip drawer-chip-strong" href="' + rel('/metiers/index.html') + '">Voir tous les métiers</a>' +
      '</div>' +
      '</section>' +
      '<section class="drawer-group">' +
      '<p class="drawer-cluster-title">Articles</p>' +
      '<div class="drawer-chips">' +
      '<a class="drawer-chip" href="' + rel('/articles/index.html') + '">Research</a>' +
      '<a class="drawer-chip" href="' + rel('/articles/index.html') + '">Product</a>' +
      '<a class="drawer-chip" href="' + rel('/articles/index.html') + '">UI Design</a>' +
      '<a class="drawer-chip" href="' + rel('/articles/index.html') + '">Design Sprint</a>' +
      '<a class="drawer-chip drawer-chip-strong" href="' + rel('/articles/index.html') + '">Tous les articles</a>' +
      '</div>' +
      '</section>' +
      '<section class="drawer-group">' +
      '<p class="drawer-cluster-title">Réalisations</p>' +
      '<div class="drawer-chips">' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Média</a>' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Luxe</a>' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Pharma</a>' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Aéronautique</a>' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Industrie</a>' +
      '<a class="drawer-chip" href="' + rel('/realisations/index.html') + '">Retail</a>' +
      '<a class="drawer-chip drawer-chip-strong" href="' + rel('/realisations/index.html') + '">Toutes les réalisations</a>' +
      '</div>' +
      '</section>' +
      '<section class="drawer-group">' +
      '<p class="drawer-cluster-title">Agences</p>' +
      '<div class="drawer-chips">' +
      '<a class="drawer-chip" href="' + rel('/agences/paris/index.html') + '">Paris</a>' +
      '<a class="drawer-chip" href="' + rel('/agences/bordeaux/index.html') + '">Bordeaux</a>' +
      '<a class="drawer-chip" href="' + rel('/agences/lyon/index.html') + '">Lyon</a>' +
      '<a class="drawer-chip" href="' + rel('/agences/suisse/index.html') + '">Suisse</a>' +
      '<a class="drawer-chip" href="' + rel('/agences/luxembourg/index.html') + '">Luxembourg</a>' +
      '<a class="drawer-chip drawer-chip-strong" href="' + rel('/agences/index.html') + '">Toutes nos agences</a>' +
      '</div>' +
      '</section>' +
      '</div></div></div>'
  }

  function renderFooter(fullHeight) {
    return '<footer class="site-footer ' + (fullHeight ? 'full' : '') + '" aria-label="Pied de page">' +
      '<div class="footer-grid-shift" aria-hidden="true"></div>' +
      '<div class="footer-grain" aria-hidden="true"></div>' +
      '<div class="container footer-inner">' +
      '<div class="reveal-on-scroll">' +
      '<div class="footer-brand-wrap">' +
      '<img class="footer-logo logo-image--white" src="' + rel('/assets/logo-uxr.svg') + '" alt="UX Republic" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'" />' +
      '<p class="footer-brand">UX Republic</p>' +
      '</div>' +
      '<p class="footer-lead">Design produit, recherche terrain et exécution digitale à fort contraste.</p>' +
      '<div class="footer-socials"><a href="#" aria-label="LinkedIn UX Republic">LinkedIn</a><a href="#" aria-label="X UX Republic">X</a><a href="#" aria-label="Instagram UX Republic">Instagram</a></div></div>' +
      '<div class="footer-links-grid reveal-on-scroll">' +
      '<a href="' + rel('/index.html') + '">Accueil</a><a href="' + rel('/a-propos/index.html') + '">À propos</a><a href="' + rel('/equipe/index.html') + '">Notre équipe</a>' +
      '<a href="' + rel('/metiers/index.html') + '">Nos métiers</a><a href="' + rel('/carriere/index.html') + '">Carrière</a><a href="' + rel('/contact/index.html') + '">Contact</a>' +
      '<a href="' + rel('/articles/index.html') + '">Articles</a><a href="' + rel('/realisations/index.html') + '">Réalisations</a><a href="' + rel('/ux-conf/index.html') + '">UX Conf</a>' +
      '<a href="' + rel('/agences/index.html') + '">Nos agences</a><a href="' + rel('/formation/index.html') + '">Formation</a><a href="' + rel('/livre-blanc/index.html') + '">Livre blanc</a>' +
      '</div>' +
      '<div class="footer-smile-band reveal-on-scroll">' +
      '<span>UX Republic est une <a href="#" aria-label="Smile">Smile</a> Group company.</span>' +
      '<span class="footer-legal-links"><a href="' + rel('/mentions-legales/index.html') + '">Mentions légales</a><a href="' + rel('/privacy/index.html') + '">Confidentialité</a><a href="' + rel('/cookies/index.html') + '">Cookies</a></span>' +
      '</div>' +
      '</div></footer>'
  }

  function trapFocus(container, event) {
    if (event.key !== 'Tab') return
    var focusable = container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
    focusable = Array.prototype.slice.call(focusable)
    if (!focusable.length) return
    var first = focusable[0]
    var last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  function initMenu() {
    var toggle = document.getElementById('menu-toggle')
    var backdrop = document.getElementById('menu-backdrop')
    var drawer = document.getElementById('main-drawer')
    var closeBtn = document.getElementById('menu-close')
    if (!toggle || !backdrop || !drawer || !closeBtn) return
    var MENU_ANIM_MS = REDUCED_MOTION ? 1 : 280
    var closeTimer = null

    function isOpen() {
      return !backdrop.hidden && backdrop.getAttribute('data-state') !== 'closing'
    }

    function openMenu() {
      if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
      }
      if (isOpen()) return
      backdrop.hidden = false
      backdrop.setAttribute('data-state', 'opening')
      toggle.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(function () {
        backdrop.setAttribute('data-state', 'open')
      })
      var firstFocusable = drawer.querySelector('a,button,input,textarea')
      if (firstFocusable) firstFocusable.focus()
    }

    function closeMenu() {
      if (backdrop.hidden) return
      backdrop.setAttribute('data-state', 'closing')
      toggle.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
      closeTimer = setTimeout(function () {
        backdrop.hidden = true
        backdrop.removeAttribute('data-state')
        closeTimer = null
        toggle.focus()
      }, MENU_ANIM_MS)
    }

    toggle.addEventListener('click', openMenu)
    closeBtn.addEventListener('click', closeMenu)
    backdrop.addEventListener('click', function (event) {
      if (event.target === backdrop) closeMenu()
    })

    drawer.addEventListener('keydown', function (event) {
      trapFocus(drawer, event)
    })

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !backdrop.hidden) closeMenu()
    })
  }

  function initForms() {
    var forms = document.querySelectorAll('form[data-form="contact"]')
    forms.forEach(function (form) {
      var status = form.querySelector('[data-status]')
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (!status) return
        var emailInput = form.querySelector('input[type="email"]')
        if (!emailInput || emailInput.value.indexOf('@') === -1) {
          status.textContent = 'Adresse email invalide.'
          status.className = 'form-error'
          return
        }
        status.textContent = 'Envoi en cours...'
        status.className = ''
        setTimeout(function () {
          status.textContent = 'Message envoyé. Réponse sous 24h.'
          status.className = 'form-success'
          form.reset()
        }, 700)
      })
    })
  }

  function initHomeData() {
    var featured = document.getElementById('home-featured')
    var grid = document.getElementById('home-articles-grid')
    var realRow = document.getElementById('home-realisations-row')
    var agenciesGrid = document.getElementById('home-agencies-grid')
    var marqueeTrack = document.getElementById('home-marquee-track')

    if (featured && DATA.articles.length) {
      var first = DATA.articles[0]
      featured.innerHTML = '<img class="card-media" src="' + first.image + '" alt="' + first.title + '" />' +
        '<div class="card-body"><span class="tag">' + first.tag + '</span><h3>' + first.title + '</h3><p>' + first.excerpt + '</p>' +
        '<a class="btn btn-secondary" href="' + rel('/articles/index.html') + '"><span>Lire</span></a></div>'
    }

    if (grid) {
      grid.innerHTML = DATA.articles.slice(1, 4).map(function (a) { return cardTemplate(a, 'article') }).join('')
    }

    if (realRow) {
      realRow.innerHTML = DATA.realisations.map(function (r) { return cardTemplate(r, 'real') }).join('')
    }

    if (agenciesGrid) {
      agenciesGrid.innerHTML = DATA.agencies.map(function (agency) {
        return '<article class="card agency-card"><img class="card-media" src="' + agency.image + '" alt="' + agency.city + '" />' +
          '<div class="card-body"><h3>' + agency.city + '</h3><p>' + agency.description + '</p>' +
          '<a class="btn btn-ghost" href="' + rel('/agences/' + agency.slug + '/index.html') + '"><span>Voir l’agence</span></a></div></article>'
      }).join('')
    }

    if (marqueeTrack) {
      var doubled = DATA.clientLogos.concat(DATA.clientLogos)
      marqueeTrack.innerHTML = doubled.map(function (logo) {
        if (!logo || typeof logo !== 'object' || !logo.src) return ''
        var logoSrc = logo.src
        if (!/^https?:\/\//.test(logoSrc) && !/^data:/.test(logoSrc)) {
          logoSrc = logoSrc.charAt(0) === '/' ? rel(logoSrc) : rel('/' + logoSrc)
        }
        return '<span class="marquee-item marquee-item-logo">' +
          '<img src="' + logoSrc + '" alt="' + (logo.name || 'Logo client') + '" loading="lazy" decoding="async" />' +
          '</span>'
      }).join('')
    }
  }

  function initRealisationsRail() {
    var row = document.getElementById('home-realisations-row')
    var prev = document.getElementById('real-prev')
    var next = document.getElementById('real-next')
    var thumb = document.getElementById('home-realisations-thumb')
    if (!row || !prev || !next) return

    function step() {
      var firstCard = row.querySelector('.card')
      return firstCard ? firstCard.getBoundingClientRect().width + 16 : 320
    }

    function syncThumb() {
      if (!thumb) return
      var visible = row.clientWidth
      var total = row.scrollWidth
      var maxScroll = Math.max(total - visible, 1)
      var progress = row.scrollLeft / maxScroll
      var ratio = Math.min(visible / total, 1)
      var trackWidth = row.parentElement ? row.parentElement.clientWidth : visible
      var thumbWidth = Math.max(trackWidth * ratio, 48)
      var maxMove = Math.max(trackWidth - thumbWidth, 0)

      thumb.style.width = thumbWidth + 'px'
      thumb.style.transform = 'translateX(' + (maxMove * progress) + 'px)'
    }

    prev.addEventListener('click', function () {
      row.scrollBy({ left: -step(), behavior: 'smooth' })
    })
    next.addEventListener('click', function () {
      row.scrollBy({ left: step(), behavior: 'smooth' })
    })

    row.addEventListener('scroll', syncThumb, { passive: true })
    window.addEventListener('resize', syncThumb)
    syncThumb()
  }

  function initStatsCount() {
    var section = document.getElementById('chiffres')
    if (!section) return

    var statsGrid = document.getElementById('home-stats-grid')
    var refreshButton = document.getElementById('stats-refresh')
    if (!statsGrid) return

    var currentYear = new Date().getFullYear()
    var yearsSince2013 = Math.max(currentYear - 2013, 1)
    var statsSets = [
      [
        { lead: '', prefix: '', value: 2013, suffix: '', label: 'année de création' },
        { lead: '', prefix: '+', value: 85, suffix: '', label: 'experts UX, UI et produit' },
        { lead: 'Avril ', prefix: '', value: 2021, suffix: '', label: 'accélération du collectif' },
        { lead: '', prefix: '+', value: 600, suffix: '', label: 'participants UX-Conf · Bordeaux' }
      ],
      [
        { lead: '', prefix: '', value: yearsSince2013, suffix: ' ans', label: 'd’expertise en design produit' },
        { lead: '', prefix: '+', value: 85, suffix: '', label: 'experts UX/UI et Product' },
        { lead: '', prefix: '', value: DATA.agencies.length || 7, suffix: '', label: 'agences en Europe' },
        { lead: '', prefix: '+', value: 600, suffix: '', label: 'participants UX-Conf' }
      ],
      [
        { lead: '', prefix: '', value: DATA.articles.length || 7, suffix: '', label: 'articles publiés sur le site' },
        { lead: '', prefix: '', value: DATA.realisations.length || 16, suffix: '', label: 'réalisations présentées' },
        { lead: '', prefix: '', value: 5, suffix: '', label: 'métiers spécialisés' },
        { lead: '', prefix: '', value: DATA.clientLogos.length || 12, suffix: '', label: 'clients affichés en home' }
      ]
    ]
    var setIndex = 0
    var started = false

    function renderStats(set) {
      statsGrid.innerHTML = set.map(function (item) {
        return '<article class="stat-item reveal-up">' +
          '<p class="stat-value">' + (item.lead || '') +
          '<span class="count" data-prefix="' + (item.prefix || '') + '" data-count="' + item.value + '" data-suffix="' + (item.suffix || '') + '">' +
          (item.prefix || '') + String(item.value) + (item.suffix || '') +
          '</span></p>' +
          '<p class="stat-label">' + item.label + '</p>' +
          '</article>'
      }).join('')
    }

    function animate(onDone) {
      var revealItems = statsGrid.querySelectorAll('.reveal-up')
      var counters = statsGrid.querySelectorAll('.count[data-count]')

      revealItems.forEach(function (item, i) {
        var delay = i * 95
        item.style.setProperty('--reveal-delay', delay + 'ms')
        setTimeout(function () { item.classList.add('is-visible') }, delay)
      })

      if (REDUCED_MOTION) {
        if (onDone) onDone()
        return
      }

      var pending = counters.length
      if (!pending) {
        if (onDone) {
          setTimeout(function () { onDone() }, 220)
        }
        return
      }

      counters.forEach(function (el) {
        var target = Number(el.getAttribute('data-count'))
        if (!target || Number.isNaN(target)) {
          pending -= 1
          if (pending === 0 && onDone) onDone()
          return
        }
        var prefix = el.getAttribute('data-prefix') || ''
        var suffix = el.getAttribute('data-suffix') || ''
        var start = performance.now()
        var duration = 980 + Math.floor(Math.random() * 260)
        var item = el.closest('.stat-item')

        el.classList.remove('is-counting')
        void el.offsetWidth
        el.classList.add('is-counting')
        if (item) {
          item.classList.remove('is-wow')
          void item.offsetWidth
          item.classList.add('is-wow')
        }

        function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        }

        function tick(now) {
          var progress = Math.min((now - start) / duration, 1)
          var value = Math.floor(easeOutExpo(progress) * target)
          el.textContent = prefix + String(value) + suffix
          if (progress < 1) {
            requestAnimationFrame(tick)
          } else {
            el.textContent = prefix + String(target) + suffix
            setTimeout(function () {
              el.classList.remove('is-counting')
              if (item) item.classList.remove('is-wow')
            }, 180)
            pending -= 1
            if (pending === 0 && onDone) onDone()
          }
        }

        requestAnimationFrame(tick)
      })
    }

    function rotateStats() {
      setIndex = (setIndex + 1) % statsSets.length
      renderStats(statsSets[setIndex])
      animate(function () {
        if (refreshButton) refreshButton.classList.add('is-ready')
      })
    }

    renderStats(statsSets[setIndex])
    if (refreshButton) refreshButton.classList.remove('is-ready')

    if (REDUCED_MOTION) {
      var visibleItems = statsGrid.querySelectorAll('.reveal-up')
      visibleItems.forEach(function (item) { item.classList.add('is-visible') })
      if (refreshButton) refreshButton.classList.add('is-ready')
      if (refreshButton) {
        refreshButton.addEventListener('click', function () {
          setIndex = (setIndex + 1) % statsSets.length
          renderStats(statsSets[setIndex])
          var reducedItems = statsGrid.querySelectorAll('.reveal-up')
          reducedItems.forEach(function (item) { item.classList.add('is-visible') })
          refreshButton.classList.add('is-ready')
        })
      }
      return
    }

    var done = false
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !done) {
          done = true
          started = true
          animate(function () {
            if (refreshButton) refreshButton.classList.add('is-ready')
          })
          io.disconnect()
        }
      })
    }, { threshold: 0.35 })

    io.observe(section)

    if (refreshButton) {
      refreshButton.addEventListener('click', function () {
        refreshButton.classList.remove('is-triggered')
        void refreshButton.offsetWidth
        refreshButton.classList.add('is-triggered')
        setTimeout(function () {
          refreshButton.classList.remove('is-triggered')
        }, 540)

        if (!started) {
          started = true
          done = true
          io.disconnect()
        }
        rotateStats()
      })
    }
  }

  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal-on-scroll')
    if (!items.length) return
    if (REDUCED_MOTION) {
      items.forEach(function (item) { item.classList.add('is-visible') })
      return
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.2 })

    items.forEach(function (item) { io.observe(item) })
  }

  function initPresencePanel() {
    var status = document.getElementById('presence-status')
    if (!status) return
    if (REDUCED_MOTION) {
      status.textContent = 'En ligne'
      return
    }
    var states = ['En ligne', 'En conversation', 'En ligne']
    var index = 0
    setInterval(function () {
      index = (index + 1) % states.length
      status.textContent = states[index]
    }, 820)
  }

  function initPageDots() {
    var main = document.querySelector('main.main')
    if (!main) return

    var orderedIds = ['accueil', 'articles', 'chiffres', 'realisations', 'agences', 'communautes', 'nous-contacter']
    var labelMap = {
      accueil: 'Accueil',
      articles: 'Articles',
      chiffres: 'À propos',
      realisations: 'Réalisations',
      agences: 'Nos agences',
      communautes: 'Communautés',
      'nous-contacter': 'Nous contacter'
    }
    var sections = orderedIds
      .map(function (id) { return document.getElementById(id) })
      .filter(function (node) { return !!node })
    if (sections.length < 2) return

    var nav = document.createElement('nav')
    nav.className = 'page-dots-nav'
    nav.setAttribute('aria-label', 'Navigation de section')

    var list = document.createElement('ul')
    list.className = 'page-dots-list'
    var marker = document.createElement('span')
    marker.className = 'page-dot-marker'
    list.appendChild(marker)

    var dots = []
    var activeId = sections[0].id
    var forcedIndex = -1
    var forcedScrollY = -1

    sections.forEach(function (section, index) {
      var titleEl = section.querySelector('.section-title') || section.querySelector('h1, h2, h3')
      var label = labelMap[section.id] || (titleEl ? titleEl.textContent.trim() : section.id)

      var item = document.createElement('li')
      var button = document.createElement('button')
      button.type = 'button'
      button.className = 'page-dot'
      button.setAttribute('aria-label', 'Aller à ' + label)
      button.setAttribute('data-target', section.id)

      var text = document.createElement('span')
      text.className = 'page-dot-label'
      text.textContent = label
      button.appendChild(text)

      button.addEventListener('click', function () {
        var targetY = section.offsetTop
        if (section.offsetHeight <= window.innerHeight) {
          targetY = section.offsetTop - ((window.innerHeight - section.offsetHeight) / 2)
        }
        var maxY = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
        targetY = clamp(targetY, 0, maxY)

        forcedIndex = index
        forcedScrollY = targetY
        setActiveByIndex(index)
        if (dotCenters[index]) {
          setMarkerTarget(dotCenters[index].x, dotCenters[index].y)
        }
        window.scrollTo({ top: targetY, behavior: REDUCED_MOTION ? 'auto' : 'smooth' })
      })

      if (index === 0) button.classList.add('is-active')

      item.appendChild(button)
      list.appendChild(item)
      dots.push({ id: section.id, button: button, item: item })
    })

    nav.appendChild(list)
    document.body.appendChild(nav)

    var dotCenters = []
    var markerCurrent = { x: 0, y: 0 }
    var markerTarget = { x: 0, y: 0 }
    var markerVelocity = { x: 0, y: 0 }
    var markerRaf = 0
    var hasUserScrolled = false

    function clamp(value, min, max) {
      return Math.max(min, Math.min(value, max))
    }

    function lerp(a, b, t) {
      return a + (b - a) * t
    }

    function placeMarker(x, y) {
      marker.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0) translate(-50%, -50%)'
    }

    function computeDotCenters() {
      var listRect = list.getBoundingClientRect()
      dotCenters = dots.map(function (dot) {
        var rect = dot.button.getBoundingClientRect()
        return {
          x: rect.left - listRect.left + rect.width / 2,
          y: rect.top - listRect.top + rect.height / 2
        }
      })
    }

    function setActiveByIndex(index) {
      var idx = clamp(index, 0, dots.length - 1)
      activeId = dots[idx].id
      dots.forEach(function (dot, i) {
        var active = i === idx
        dot.button.classList.toggle('is-active', active)
        dot.item.classList.toggle('is-active', active)
      })
    }

    function animateMarker() {
      var dx = markerTarget.x - markerCurrent.x
      var dy = markerTarget.y - markerCurrent.y

      markerVelocity.x = markerVelocity.x * 0.72 + dx * 0.24
      markerVelocity.y = markerVelocity.y * 0.72 + dy * 0.24
      markerCurrent.x += markerVelocity.x
      markerCurrent.y += markerVelocity.y
      placeMarker(markerCurrent.x, markerCurrent.y)

      if (Math.abs(dx) > 0.06 || Math.abs(dy) > 0.06 || Math.abs(markerVelocity.x) > 0.06 || Math.abs(markerVelocity.y) > 0.06) {
        markerRaf = requestAnimationFrame(animateMarker)
      } else {
        markerCurrent.x = markerTarget.x
        markerCurrent.y = markerTarget.y
        markerVelocity.x = 0
        markerVelocity.y = 0
        placeMarker(markerCurrent.x, markerCurrent.y)
        markerRaf = 0
      }
    }

    function setMarkerTarget(x, y) {
      markerTarget.x = x
      markerTarget.y = y
      if (REDUCED_MOTION || !hasUserScrolled) {
        markerCurrent.x = x
        markerCurrent.y = y
        placeMarker(x, y)
        return
      }
      if (!markerRaf) markerRaf = requestAnimationFrame(animateMarker)
    }

    function updateDotsFromScroll() {
      if (!dotCenters.length) return
      if (forcedIndex >= 0) {
        var reached = Math.abs(window.scrollY - forcedScrollY) < 14
        setActiveByIndex(forcedIndex)
        setMarkerTarget(dotCenters[forcedIndex].x, dotCenters[forcedIndex].y)
        if (reached || REDUCED_MOTION) {
          forcedIndex = -1
          forcedScrollY = -1
        }
        return
      }
      if (window.scrollY <= 2) {
        setMarkerTarget(dotCenters[0].x, dotCenters[0].y)
        setActiveByIndex(0)
        return
      }
      var probeY = window.scrollY + 6
      var tops = sections.map(function (section) { return section.offsetTop })
      var segmentIndex = tops.length - 1
      var t = 0

      if (probeY <= tops[0]) {
        segmentIndex = 0
        t = 0
      } else {
        for (var i = 0; i < tops.length - 1; i += 1) {
          if (probeY < tops[i + 1]) {
            segmentIndex = i
            var span = Math.max(tops[i + 1] - tops[i], 1)
            t = clamp((probeY - tops[i]) / span, 0, 1)
            break
          }
        }
      }

      var from = dotCenters[segmentIndex]
      var to = dotCenters[Math.min(segmentIndex + 1, dotCenters.length - 1)]
      var x = lerp(from.x, to.x, t)
      var y = lerp(from.y, to.y, t)
      setMarkerTarget(x, y)

      var activeIndex = segmentIndex
      if (segmentIndex < sections.length - 1 && t > 0.72) activeIndex = segmentIndex + 1
      setActiveByIndex(activeIndex)
    }

    computeDotCenters()
    if (dotCenters[0]) {
      markerCurrent.x = dotCenters[0].x
      markerCurrent.y = dotCenters[0].y
      markerTarget.x = dotCenters[0].x
      markerTarget.y = dotCenters[0].y
      placeMarker(markerCurrent.x, markerCurrent.y)
    }
    setActiveByIndex(0)
    updateDotsFromScroll()

    var ticking = false
    function onScroll() {
      hasUserScrolled = true
      if (ticking) return
      ticking = true
      requestAnimationFrame(function () {
        updateDotsFromScroll()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', function () {
      computeDotCenters()
      updateDotsFromScroll()
    })
  }

  function initLayout() {
    var headerSlot = document.getElementById('header-slot')
    var footerSlot = document.getElementById('footer-slot')
    var page = document.body

    if (headerSlot) headerSlot.innerHTML = renderHeader() + renderDrawer()
    if (footerSlot) {
      var fullFooter = page.getAttribute('data-footer') === 'full'
      footerSlot.innerHTML = renderFooter(fullFooter)
    }

    initMenu()
    initForms()
    initScrollReveal()
    initPresencePanel()
    initPageDots()

    if (page.getAttribute('data-page') === 'home') {
      initHomeData()
      initRealisationsRail()
      initStatsCount()
    }
  }

  window.UXLayout = { initLayout: initLayout }
})()
