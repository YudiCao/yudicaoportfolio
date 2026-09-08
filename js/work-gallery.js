(function () {
  var root;
  var filterEl;
  var gridEl;
  var activeCat = "all";

  function t(key) {
    return typeof PortfolioI18n !== "undefined" ? PortfolioI18n.t(key) : key;
  }

  function lang() {
    return typeof PortfolioI18n !== "undefined" ? PortfolioI18n.getLang() : "zh";
  }

  function projectsFor(cat) {
    var list = typeof WORKS_CATALOG !== "undefined" ? WORKS_CATALOG : [];
    if (cat === "all") return list.slice();
    return list.filter(function (p) {
      return p.category === cat;
    });
  }

  function renderFilters() {
    if (!filterEl) return;
    var cats = [
      { id: "all", key: "work_f_all" },
      { id: "installation", key: "work_f_installation" },
      { id: "illustration", key: "work_f_illustration" },
      { id: "visual", key: "work_f_visual" },
      { id: "graphic", key: "work_f_graphic" },
      { id: "photo", key: "work_f_photo" },
      { id: "uiux", key: "work_f_uiux" },
      { id: "creative_computation", key: "work_f_cc" },
    ];
    filterEl.innerHTML = "";
    filterEl.setAttribute("aria-label", t("work_filter_aria"));

    cats.forEach(function (c) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "work-filter-btn";
      btn.setAttribute("data-cat", c.id);
      btn.textContent = t(c.key);
      if (c.id === activeCat) btn.classList.add("is-active");
      btn.addEventListener("click", function () {
        activeCat = c.id;
        renderFilters();
        renderGrid();
      });
      filterEl.appendChild(btn);
    });
  }

  function renderGrid() {
    if (!gridEl) return;
    var L = lang();
    var items = projectsFor(activeCat);
    gridEl.innerHTML = "";

    if (!items.length) {
      var empty = document.createElement("p");
      empty.className = "work-grid-empty";
      empty.textContent = t("work_empty");
      gridEl.appendChild(empty);
      return;
    }

    items.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "work-card";
      a.href = "work-detail.html?id=" + encodeURIComponent(p.id);

      var media = document.createElement("div");
      media.className = "work-card-media";

      var img = document.createElement("img");
      img.src = typeof WORKS_resolveCover === "function" ? WORKS_resolveCover(p) : p.cover;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        img.onerror = null;
        img.src =
          typeof WORKS_placeholderCover !== "undefined"
            ? WORKS_placeholderCover
            : "assets/work/placeholder-cover.png";
      });
      media.appendChild(img);

      var overlay = document.createElement("div");
      overlay.className = "work-card-overlay";
      overlay.setAttribute("aria-hidden", "true");

      var overlayRule = document.createElement("span");
      overlayRule.className = "work-card-overlay-rule";

      var overlayTitle = document.createElement("span");
      overlayTitle.className = "work-card-overlay-title";
      overlayTitle.textContent = p.title[L] || p.title.zh;

      var overlayDesc = document.createElement("span");
      overlayDesc.className = "work-card-overlay-desc";
      overlayDesc.textContent = p.blurb[L] || p.blurb.zh;

      overlay.appendChild(overlayRule);
      overlay.appendChild(overlayTitle);
      overlay.appendChild(overlayDesc);
      media.appendChild(overlay);

      var body = document.createElement("div");
      body.className = "work-card-body";

      var h3 = document.createElement("h3");
      h3.className = "work-card-title";
      h3.textContent = p.title[L] || p.title.zh;

      var tags = document.createElement("ul");
      tags.className = "work-card-tags";
      (p.tags[L] || p.tags.zh || []).slice(0, 3).forEach(function (tag) {
        var li = document.createElement("li");
        li.textContent = tag;
        tags.appendChild(li);
      });

      body.appendChild(h3);
      body.appendChild(tags);

      a.appendChild(media);
      a.appendChild(body);
      gridEl.appendChild(a);
    });
  }

  function refresh() {
    renderFilters();
    renderGrid();
  }

  function init() {
    root = document.getElementById("work-gallery-root");
    if (!root) return;
    filterEl = document.getElementById("work-filter-bar");
    gridEl = document.getElementById("work-card-grid");
    refresh();
  }

  window.WorkGallery = {
    init: init,
    refresh: refresh,
  };
})();
