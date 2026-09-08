(function () {
  var lightboxEl;
  var lightboxImageEl;
  var lightboxPrevBtn;
  var lightboxNextBtn;
  var lightboxItems = [];
  var lightboxIndex = 0;

  function t(key) {
    return typeof PortfolioI18n !== "undefined" ? PortfolioI18n.t(key) : key;
  }

  function lang() {
    return typeof PortfolioI18n !== "undefined" ? PortfolioI18n.getLang() : "zh";
  }

  function findProject(id) {
    var list = typeof WORKS_CATALOG !== "undefined" ? WORKS_CATALOG : [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function projectTitle(project, L) {
    if (!project || !project.title) return "";
    return project.title[L] || project.title.zh || "";
  }

  function projectHref(project) {
    return "work-detail.html?id=" + encodeURIComponent(project.id);
  }

  function hasVideo(project) {
    return !!(project && (project.youtubeId || project.mp4));
  }

  function getGalleryItems(project) {
    if (!project) return [];
    if (project.images && project.images.length) return project.images.slice();
    if (project.cover) {
      return [
        {
          src: project.cover,
          alt: project.title || {},
        },
      ];
    }
    return [];
  }

  function renderVideo(container, p) {
    container.innerHTML = "";
    if (p.youtubeId) {
      var ifr = document.createElement("iframe");
      ifr.className = "work-detail-video-frame";
      ifr.src = "https://www.youtube.com/embed/" + encodeURIComponent(p.youtubeId);
      ifr.setAttribute("title", "YouTube");
      ifr.setAttribute("allowfullscreen", "");
      ifr.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      container.appendChild(ifr);
      return;
    }
    if (p.mp4) {
      var src = p.mp4;
      var mime = "video/mp4";
      if (/\.mov$/i.test(src)) mime = "video/quicktime";
      if (/\.webm$/i.test(src)) mime = "video/webm";
      var v = document.createElement("video");
      v.className = "work-detail-video-el";
      v.setAttribute("controls", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("preload", "metadata");
      var s = document.createElement("source");
      s.src = src;
      s.type = mime;
      v.appendChild(s);
      container.appendChild(v);
      return;
    }
    var ph = document.createElement("div");
    ph.className = "work-detail-video-placeholder";
    ph.textContent = t("work_video_placeholder");
    container.appendChild(ph);
  }

  function renderMeta(container, section, p, L) {
    if (!container || !section) return;
    container.innerHTML = "";
    var items = (p.meta && (p.meta[L] || p.meta.zh)) || [];
    section.hidden = !items.length;
    items.forEach(function (item) {
      var dt = document.createElement("dt");
      dt.textContent = item.label;
      var dd = document.createElement("dd");
      dd.textContent = item.value;
      container.appendChild(dt);
      container.appendChild(dd);
    });
  }

  function setLightboxImage(index) {
    if (!lightboxEl || !lightboxImageEl) return;
    if (!lightboxItems.length) return;

    lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    var item = lightboxItems[lightboxIndex];
    lightboxEl.classList.remove("is-wide-image");
    lightboxImageEl.onload = function () {
      var ratio =
        lightboxImageEl.naturalHeight > 0
          ? lightboxImageEl.naturalWidth / lightboxImageEl.naturalHeight
          : 0;
      var shouldPan =
        ratio > 1.45 && window.matchMedia("(max-width: 520px)").matches;
      lightboxEl.classList.toggle("is-wide-image", shouldPan);
      if (!shouldPan) return;
      window.requestAnimationFrame(function () {
        var dialog = lightboxImageEl.closest(".work-lightbox-dialog");
        if (dialog) {
          dialog.scrollLeft = Math.max(0, (dialog.scrollWidth - dialog.clientWidth) / 2);
        }
      });
    };
    lightboxImageEl.src = item.src;
    lightboxImageEl.alt = item.alt || "";
    lightboxEl.classList.toggle("has-single-image", lightboxItems.length < 2);
  }

  function openLightbox(index) {
    if (!lightboxEl || !lightboxImageEl) return;
    setLightboxImage(index);
    lightboxEl.hidden = false;
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    if (!lightboxEl || !lightboxImageEl) return;
    lightboxEl.hidden = true;
    lightboxImageEl.src = "";
    lightboxImageEl.alt = "";
    document.body.classList.remove("lightbox-open");
  }

  function moveLightbox(offset) {
    if (!lightboxEl || lightboxEl.hidden || lightboxItems.length < 2) return;
    setLightboxImage(lightboxIndex + offset);
  }

  function renderGallery(container, section, p, L) {
    if (!container || !section) return;
    container.innerHTML = "";
    var items = getGalleryItems(p);
    lightboxItems = [];
    section.hidden = !items.length;

    items.forEach(function (item, index) {
      var src = typeof item === "string" ? item : item.src;
      var altSource = typeof item === "string" ? "" : item.alt;
      var alt = (altSource && (altSource[L] || altSource.zh)) || (p.title[L] || p.title.zh);
      lightboxItems.push({
        src: src,
        alt: alt,
      });

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "work-detail-gallery-item";
      btn.setAttribute("aria-label", alt);
      btn.addEventListener("click", function () {
        openLightbox(index);
      });

      var img = document.createElement("img");
      img.className = "work-detail-gallery-image";
      img.src = src;
      img.alt = alt;
      img.loading = index === 0 ? "eager" : "lazy";
      img.decoding = "async";
      btn.appendChild(img);
      container.appendChild(btn);
    });
  }

  function renderProjectNav(currentProject, L) {
    var nav = document.getElementById("work-detail-project-nav");
    var prevLink = document.getElementById("work-detail-prev-project");
    var nextLink = document.getElementById("work-detail-next-project");
    var prevTitle = document.getElementById("work-detail-prev-project-title");
    var nextTitle = document.getElementById("work-detail-next-project-title");
    var list = typeof WORKS_CATALOG !== "undefined" ? WORKS_CATALOG : [];

    if (!nav || !prevLink || !nextLink || !prevTitle || !nextTitle || list.length < 2) {
      if (nav) nav.hidden = true;
      return;
    }

    var currentIndex = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === currentProject.id) {
        currentIndex = i;
        break;
      }
    }

    if (currentIndex < 0) {
      nav.hidden = true;
      return;
    }

    var prev = list[(currentIndex - 1 + list.length) % list.length];
    var next = list[(currentIndex + 1) % list.length];
    var prevName = projectTitle(prev, L);
    var nextName = projectTitle(next, L);

    prevLink.href = projectHref(prev);
    nextLink.href = projectHref(next);
    prevTitle.textContent = prevName;
    nextTitle.textContent = nextName;
    prevLink.setAttribute("aria-label", t("work_prev_project") + "：" + prevName);
    nextLink.setAttribute("aria-label", t("work_next_project") + "：" + nextName);
    nav.hidden = false;
  }

  function render() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var wrap = document.getElementById("work-detail-root");
    var notFound = document.getElementById("work-detail-not-found");
    var main = document.getElementById("work-detail-article");
    if (!wrap || !notFound || !main) return;

    var p = id ? findProject(id) : null;
    if (!p) {
      notFound.hidden = false;
      main.hidden = true;
      document.title = t("work_not_found") + " ｜ " + t("meta_title");
      return;
    }

    notFound.hidden = true;
    main.hidden = false;

    var L = lang();
    var title = p.title[L] || p.title.zh;
    document.title = title + " ｜ " + t("meta_title");

    var titleEl = document.getElementById("work-detail-title");
    if (titleEl) titleEl.textContent = title;

    var tagsEl = document.getElementById("work-detail-tags");
    if (tagsEl) {
      tagsEl.innerHTML = "";
      (p.tags[L] || p.tags.zh || []).forEach(function (tag) {
        var span = document.createElement("span");
        span.className = "work-detail-tag";
        span.textContent = tag;
        tagsEl.appendChild(span);
      });
    }

    var bodyEl = document.getElementById("work-detail-body");
    if (bodyEl) {
      bodyEl.innerHTML = "";
      var paras = p.body[L] || p.body.zh || [];
      paras.forEach(function (text) {
        var para = document.createElement("p");
        para.textContent = text;
        bodyEl.appendChild(para);
      });
    }

    var metaSection = document.getElementById("work-detail-meta-section");
    var metaEl = document.getElementById("work-detail-meta");
    renderMeta(metaEl, metaSection, p, L);

    var gallerySection = document.getElementById("work-detail-gallery-section");
    var galleryEl = document.getElementById("work-detail-gallery");
    renderGallery(galleryEl, gallerySection, p, L);

    var videoSection = document.getElementById("work-detail-video-section");
    var vidHost = document.getElementById("work-detail-video-host");
    if (videoSection) videoSection.hidden = !hasVideo(p);
    if (vidHost && hasVideo(p)) renderVideo(vidHost, p);
    if (vidHost && !hasVideo(p)) vidHost.innerHTML = "";

    var cover = document.getElementById("work-detail-cover");
    if (cover) {
      var src =
        typeof WORKS_resolveCover === "function" ? WORKS_resolveCover(p) : p.cover;
      cover.src = src;
      cover.alt = title;
      cover.onerror = function () {
        cover.onerror = null;
        cover.src =
          typeof WORKS_placeholderCover !== "undefined"
            ? WORKS_placeholderCover
            : "assets/work/placeholder-cover.png";
      };
    }

    renderProjectNav(p, L);
  }

  function bindLightbox() {
    lightboxEl = document.getElementById("work-lightbox");
    lightboxImageEl = document.getElementById("work-lightbox-image");
    lightboxPrevBtn = document.getElementById("work-lightbox-prev");
    lightboxNextBtn = document.getElementById("work-lightbox-next");
    var closeBtn = document.getElementById("work-lightbox-close");
    var touchStartX = 0;
    var touchStartY = 0;
    if (!lightboxEl || !lightboxImageEl || !closeBtn) return;

    closeBtn.addEventListener("click", closeLightbox);
    if (lightboxPrevBtn) {
      lightboxPrevBtn.addEventListener("click", function () {
        moveLightbox(-1);
      });
    }
    if (lightboxNextBtn) {
      lightboxNextBtn.addEventListener("click", function () {
        moveLightbox(1);
      });
    }
    lightboxEl.addEventListener("click", function (event) {
      if (event.target === lightboxEl) closeLightbox();
    });
    lightboxEl.addEventListener(
      "touchstart",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) return;
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
      },
      { passive: true }
    );
    lightboxEl.addEventListener(
      "touchend",
      function (event) {
        if (!event.changedTouches || !event.changedTouches.length) return;
        var dx = event.changedTouches[0].clientX - touchStartX;
        var dy = event.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
        moveLightbox(dx > 0 ? -1 : 1);
      },
      { passive: true }
    );
    document.addEventListener("keydown", function (event) {
      if (!lightboxEl || lightboxEl.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveLightbox(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveLightbox(1);
      }
    });
  }

  function init() {
    bindLightbox();
    render();
  }

  window.WorkDetailPage = {
    init: init,
    refresh: render,
  };
})();
