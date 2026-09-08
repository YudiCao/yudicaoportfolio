(function (global) {
  var root;
  var link;
  var image;
  var projects = [];
  var index = 0;
  var timer = null;
  var intervalMs = 4200;

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
    projects = getProjects();
    if (!root || !link || !image || !projects.length) return;

    index = Math.floor(Math.random() * projects.length);
    updateProject(index, false);
    start();

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
  }

  global.HeroCarousel = {
    init: init,
    refresh: function () {
      updateProject(index, false);
    },
  };
})(window);
