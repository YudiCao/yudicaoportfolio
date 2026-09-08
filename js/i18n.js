(function (global) {
  var STORAGE_KEY = "portfolio-lang";

  var STRINGS = {
    zh: {
      meta_title: "曹雨荻 ｜ 作品集",
      meta_title_about: "关于 ｜ 曹雨荻",
      meta_title_work: "作品集 ｜ 曹雨荻",
      meta_title_resume: "简历 ｜ 曹雨荻",
      meta_title_contact: "联系 ｜ 曹雨荻",
      meta_desc:
        "曹雨荻 — 跨媒体艺术家与设计师，目前在北京发展。作品涵盖装置艺术、互动媒体、插画、视觉设计与数字叙事。",
      meta_desc_about:
        "曹雨荻 — 跨学科设计师与创意技术工作者，现常驻北京，专注交互设计、插画与视觉叙事。",
      meta_desc_work:
        "曹雨荻作品集：装置艺术、互动媒体、插画、视觉设计与创意计算项目。",
      meta_desc_resume:
        "曹雨荻简历：教育背景、工作经历、技能工具、奖项与展览经历。",
      meta_desc_contact: "联系曹雨荻：邮箱、所在地、电话与微信。",
      skip_link: "跳到主要内容",
      logo: "曹雨荻",
      nav_aria: "主导航",
      lang_group_aria: "语言",
      nav_about: "关于",
      nav_work: "作品集",
      nav_resume: "简历",
      nav_contact: "联系",
      nav_toggle_open: "打开菜单",
      nav_toggle_close: "关闭菜单",
      hero_kicker: "你好，我是",
      hero_name: "曹雨荻",
      hero_role: "跨媒体艺术家 ｜ 设计师",
      hero_lead:
        "创作横跨装置、插画、视觉艺术与创意计算等；以设计与技术为语言，探索感知与体验。",
      hero_cta_work: "作品集",
      hero_cta_contact: "联系我",
      hero_feature_caption: "曹雨荻，跨媒体艺术与设计",
      about_title: "关于我",
      about_p1:
        "你好，我是曹雨荻。我是一名跨学科设计师与创意技术工作者，现常驻北京。",
      about_p2:
        "我专注于交互设计、插画与视觉叙事。我的作品习惯将插画艺术、数字媒体与创意计算相融合，通过富有感染力的视觉语言，探索技术与人类情感之间的有意义互动。在设计实践中，我对“沟通”与“文化遗产的数字化重构”这两个主题尤为关注。",
      about_p3:
        "我毕业于加拿大 OCAD University（安大略艺术设计学院），拥有数字未来（Digital Futures）设计硕士学位以及插画专业设计学士学位。",
      about_p4:
        "我的设计与艺术作品曾多次在海内外展出，包括 OCADU 研究生画廊、GradEX 109 以及加拿大国家戏剧学校戏剧节等。我带着在多伦多沉淀的设计研究视野回到北京，期待在这里用创意技术和感官互动创造新的价值。",
      work_title: "作品集",
      work_lead: "跨越装置艺术、插画、视觉设计与创意计算的多元创作。",
      work_f_all: "全部",
      work_f_installation: "装置艺术",
      work_f_illustration: "插画",
      work_f_visual: "视觉艺术",
      work_f_graphic: "平面设计",
      work_f_photo: "摄影",
      work_f_uiux: "UI/UX",
      work_f_cc: "创意计算",
      work_filter_aria: "按分类筛选作品",
      work_empty: "该分类下暂无展示项目。可在 js/works-data.js 中补充条目。",
      work_detail_back: "返回作品集",
      work_prev_project: "上一个项目",
      work_next_project: "下一个项目",
      work_meta_heading: "项目信息",
      work_gallery_heading: "作品图集",
      work_gallery_hint: "点击图片可查看大图",
      work_video_heading: "项目视频",
      work_video_placeholder:
        "敬请期待：在 js/works-data.js 中为该项目填写 youtubeId（仅 ID）或 mp4 路径后即可在此播放。",
      work_not_found: "未找到该项目",
      work_lightbox_close: "关闭大图",
      work_lightbox_prev: "上一页",
      work_lightbox_next: "下一页",
      contact_title: "联系",
      contact_lead:
        "邮件与地址可直接查看；电话与微信号需主动点击显示，以减少无关采集。",
      contact_email_label: "邮箱",
      contact_addr_label: "地址",
      contact_address: "北京（朝阳区）｜ 加拿大多伦多",
      contact_phone_label: "电话",
      contact_wechat_label: "微信",
      contact_reveal_phone: "点击显示电话号码",
      contact_reveal_wechat: "点击显示微信号",
      contact_wechat_copy_hint: "点击上方复制微信号",
      contact_copy_done: "已复制",
      footer_name: "曹雨荻",
      footer_suffix: "个人作品集",
    },
    en: {
      meta_title: "Yudi Cao ｜ Portfolio",
      meta_title_about: "About ｜ Yudi Cao",
      meta_title_work: "Works ｜ Yudi Cao",
      meta_title_resume: "Resume ｜ Yudi Cao",
      meta_title_contact: "Contact ｜ Yudi Cao",
      meta_desc:
        "Yudi Cao — interdisciplinary designer and creative technologist based in Beijing and Toronto. Installation, creative computation, illustration, visual arts, UI/UX, and contact.",
      meta_desc_about:
        "Yudi Cao is an interdisciplinary designer and creative technologist based in Beijing, focusing on interaction design, illustration, and visual storytelling.",
      meta_desc_work:
        "Selected works by Yudi Cao across installation, interactive media, illustration, visual design, and creative computation.",
      meta_desc_resume:
        "Yudi Cao's resume, including education, experience, skills, tools, awards, and exhibitions.",
      meta_desc_contact: "Contact Yudi Cao by email, location, phone, or WeChat.",
      skip_link: "Skip to main content",
      logo: "Yudi Cao",
      nav_aria: "Main navigation",
      lang_group_aria: "Language",
      nav_about: "About",
      nav_work: "Works",
      nav_resume: "Resume",
      nav_contact: "Contact",
      nav_toggle_open: "Open menu",
      nav_toggle_close: "Close menu",
      hero_kicker: "Hi, I'm",
      hero_name: "Yudi Cao",
      hero_role: "Cross-Media Artist ｜ Designer",
      hero_lead:
        "Practice spans installation, illustration, visual art, and creative computing—exploring perception and experience through design and code.",
      hero_cta_work: "Works",
      hero_cta_contact: "Contact",
      hero_feature_caption: "Yudi Cao, Cross-Media Art & Design",
      about_title: "About",
      about_p1:
        "Hi, I am Yudi Cao, an interdisciplinary designer and creative technologist currently based in Beijing.",
      about_p2:
        "My practice focuses on interaction design, illustration, and visual storytelling. I often integrate illustration, digital media, and creative computation to explore meaningful interactions between technology and human emotion through expressive visual language. Within my design practice, I am especially interested in communication and the digital reconstruction of cultural heritage.",
      about_p3:
        "I graduated from OCAD University in Canada, where I earned a Master of Design in Digital Futures and a Bachelor of Design in Illustration.",
      about_p4:
        "My design and art projects have been exhibited internationally, including at the OCADU Graduate Gallery, GradEX 109, and the National Theatre School Drama Festival in Canada. Returning to Beijing with a design research perspective shaped in Toronto, I hope to create new value through creative technology and sensory interaction.",
      work_title: "Works",
      work_lead:
        "Diverse practice across installation, illustration, visual design, and creative computing.",
      work_f_all: "All",
      work_f_installation: "Installation",
      work_f_illustration: "Illustration",
      work_f_visual: "Visual Arts",
      work_f_graphic: "Graphic Design",
      work_f_photo: "Photography",
      work_f_uiux: "UI/UX",
      work_f_cc: "Creative Computation",
      work_filter_aria: "Filter works by category",
      work_empty: "No projects in this category yet—add entries in js/works-data.js.",
      work_detail_back: "Back to works",
      work_prev_project: "Previous project",
      work_next_project: "Next project",
      work_meta_heading: "Project info",
      work_gallery_heading: "Gallery",
      work_gallery_hint: "Click an image to view it larger",
      work_video_heading: "Project video",
      work_video_placeholder:
        "Coming soon: set youtubeId (video id only) or mp4 in js/works-data.js for this project to enable playback.",
      work_not_found: "Project not found",
      work_lightbox_close: "Close enlarged image",
      work_lightbox_prev: "Previous page",
      work_lightbox_next: "Next page",
      contact_title: "Contact",
      contact_lead:
        "Email and address are shown directly; phone and WeChat ID appear only after you tap to reveal, to reduce casual scraping.",
      contact_email_label: "Email",
      contact_addr_label: "Location",
      contact_address: "Chaoyang District, Beijing ｜ Toronto, Canada",
      contact_phone_label: "Phone",
      contact_wechat_label: "WeChat",
      contact_reveal_phone: "Tap to show phone number",
      contact_reveal_wechat: "Tap to show WeChat ID",
      contact_wechat_copy_hint: "Tap above to copy WeChat ID",
      contact_copy_done: "Copied",
      footer_name: "Yudi Cao",
      footer_suffix: "Portfolio",
    },
  };

  var currentLang = "zh";

  function readStoredLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "zh" || s === "en") return s;
    } catch (e) {}
    return null;
  }

  function detectLang() {
    var stored = readStoredLang();
    if (stored) return stored;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function t(key) {
    var pack = STRINGS[currentLang];
    return pack && pack[key] !== undefined ? pack[key] : key;
  }

  function applyDocument(lang) {
    var pack = STRINGS[lang];
    if (!pack) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var body = document.body;
    var titleKey = body ? body.getAttribute("data-page-title-key") : "";
    var descKey = body ? body.getAttribute("data-page-desc-key") : "";
    document.title = (titleKey && pack[titleKey]) || pack.meta_title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", (descKey && pack[descKey]) || pack.meta_desc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (pack[key] !== undefined) el.textContent = pack[key];
    });

    var navEl = document.getElementById("site-nav");
    if (navEl && pack.nav_aria) navEl.setAttribute("aria-label", pack.nav_aria);

    var langGroup = document.getElementById("lang-switch-group");
    if (langGroup && pack.lang_group_aria) {
      langGroup.setAttribute("aria-label", pack.lang_group_aria);
    }
  }

  function updateLangButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en") return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyDocument(lang);
    updateLangButtons(lang);
    if (typeof global.onPortfolioLangChange === "function") {
      global.onPortfolioLangChange(lang);
    }
  }

  function init() {
    currentLang = detectLang();
    applyDocument(currentLang);
    updateLangButtons(currentLang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
  }

  global.PortfolioI18n = {
    init: init,
    setLang: setLang,
    getLang: function () {
      return currentLang;
    },
    t: t,
  };
})(typeof window !== "undefined" ? window : this);
