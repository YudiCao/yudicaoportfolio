(function () {
  function navToggleLabel(isOpen) {
    if (typeof PortfolioI18n !== "undefined") {
      return PortfolioI18n.t(isOpen ? "nav_toggle_close" : "nav_toggle_open");
    }
    return isOpen ? "关闭菜单" : "打开菜单";
  }

  window.onPortfolioLangChange = function () {
    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", navToggleLabel(open));
    }
    if (window.WorkGallery && typeof WorkGallery.refresh === "function") {
      WorkGallery.refresh();
    }
    if (window.WorkDetailPage && typeof WorkDetailPage.refresh === "function") {
      WorkDetailPage.refresh();
    }
    if (window.HeroCarousel && typeof HeroCarousel.refresh === "function") {
      HeroCarousel.refresh();
    }
  };

  if (typeof PortfolioI18n !== "undefined") {
    PortfolioI18n.init();
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.setAttribute("aria-label", navToggleLabel(false));

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", navToggleLabel(open));
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 720px)").matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  if (typeof HeroCarousel !== "undefined" && typeof HeroCarousel.init === "function") {
    HeroCarousel.init();
  }
  if (typeof WorkGallery !== "undefined" && typeof WorkGallery.init === "function") {
    WorkGallery.init();
  }
  if (typeof WorkDetailPage !== "undefined" && typeof WorkDetailPage.init === "function") {
    WorkDetailPage.init();
  }
})();
