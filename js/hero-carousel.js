(function (global) {
  var root;
  var link;
  var image;
  var counter;
  var projects = [];
  var index = 0;
  var timer = null;
  var manualTimer = null;
  var intervalMs = 4200;
  var wheelLocked = false;
  var pointerInside = false;
  var focusInside = false;
  var touchStartX = 0;
  var touchStartY = 0;

  function lang() {
    return typeof PortfolioI18n !== "undefined" ? PortfolioI18n.getLang() : "zh";
  }

  function projectTitle(project, L) {
    if (!project || !project.title) return "";
    return project.title[L] || project.title.zh || "";
  }

  function projectCover(project) {
    if (typeof WORKS_resolveCover === "function") return WORKS_resolveCover(project);
    return project && project.cover ? project.cover : "assets/work/placeholder-cover.png";
  }

  function projectHref(project) {
    return project && project.id
      ? "work-detail.html?id=" + encodeURIComponent(project.id)
      : "portfolio.html";
  }

  function getProjects() {
    var list = typeof WORKS_CATALOG !== "undefined" ? WORKS_CATALOG : [];
    return list.filter(function (project) {
      return project && project.id && project.cover;
    });
  }

  function updateProject(nextIndex, animate) {
    if (!projects.length || !image || !link) return;
    index = (nextIndex + projects.length) % projects.length;

    var project = projects[index];
    var L = lang();
    var title = projectTitle(project, L);
    var nextSrc = projectCover(project);

    function apply() {
      image.src = nextSrc;
      image.alt = title;
      link.href = projectHref(project);
      link.setAttribute("aria-label", (L === "zh" ? "查看项目：" : "View project: ") + title);
      if (counter) {
        counter.textContent =
          String(index + 1).padStart(2, "0") +
          " / " +
          String(projects.length).padStart(2, "0");
      }
      if (root) root.classList.remove("is-changing");
    }

    if (!animate || !root) {
      apply();
      return;
    }

    root.classList.add("is-changing");
    window.setTimeout(apply, 180);
  }

  function next() {
    updateProject(index + 1, true);
  }

  function manualStep(offset) {
    if (projects.length < 2) return;
    stop();
    if (manualTimer) window.clearTimeout(manualTimer);
    updateProject(index + offset, true);
    manualTimer = window.setTimeout(function () {
      if (!pointerInside && !focusInside) start();
    }, intervalMs);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  function start() {
    stop();
    if (projects.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = window.setInterval(next, intervalMs);
  }

  function init() {
    root = document.getElementById("hero-project-carousel");
    link = document.getElementById("hero-project-link");
    image = document.getElementById("hero-project-image");
    counter = document.getElementById("hero-project-counter");
    projects = getProjects();
    if (!root || !link || !image || !projects.length) return;

    index = Math.floor(Math.random() * projects.length);
    updateProject(index, false);
    start();

    root.addEventListener("mouseenter", function () {
      pointerInside = true;
      stop();
    });
    root.addEventListener("mouseleave", function () {
      pointerInside = false;
      start();
    });
    root.addEventListener("focusin", function () {
      focusInside = true;
      stop();
    });
    root.addEventListener("focusout", function () {
      focusInside = false;
      start();
    });
    root.addEventListener(
      "wheel",
      function (event) {
        var delta =
          Math.abs(event.deltaY) >= Math.abs(event.deltaX)
            ? event.deltaY
            : event.deltaX;
        if (Math.abs(delta) < 8) return;
        event.preventDefault();
        if (wheelLocked) return;
        wheelLocked = true;
        window.setTimeout(function () {
          wheelLocked = false;
        }, 520);
        manualStep(delta > 0 ? 1 : -1);
      },
      { passive: false }
    );
    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        manualStep(1);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        manualStep(-1);
      }
    });
    root.addEventListener(
      "touchstart",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) return;
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) return;
        var dx = event.changedTouches[0].clientX - touchStartX;
        var dy = event.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
        manualStep(dx < 0 ? 1 : -1);
      },
      { passive: true }
    );
  }

  global.HeroCarousel = {
    init: init,
    refresh: function () {
      updateProject(index, false);
    },
  };
})(window);
