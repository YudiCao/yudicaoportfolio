/**
 * 电话与微信号仅在用户点击后展示；微信号以 Base64 存放，点击可复制。
 */
(function () {
  var PHONE_B64 = "Kzg2IDEzOTEwOTI1MDQy";
  var WECHAT_ID_B64 = "d2l0aGRpXw==";

  function phonePlain() {
    try {
      return typeof atob === "function" ? atob(PHONE_B64) : "";
    } catch (e) {
      return "";
    }
  }

  function wechatIdPlain() {
    try {
      return typeof atob === "function" ? atob(WECHAT_ID_B64) : "";
    } catch (e) {
      return "";
    }
  }

  function phoneTelHref(plain) {
    return "tel:" + plain.replace(/\s+/g, "");
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(ta);
    });
  }

  var btnPhone = document.getElementById("btn-reveal-phone");
  var phoneWrap = document.getElementById("phone-reveal-output");
  var btnWechat = document.getElementById("btn-reveal-wechat");
  var wechatWrap = document.getElementById("wechat-reveal-output");
  var btnCopyWechat = document.getElementById("btn-copy-wechat");
  var wechatIdDisplay = document.getElementById("wechat-id-display");

  if (btnPhone && phoneWrap) {
    btnPhone.addEventListener("click", function () {
      var plain = phonePlain();
      if (!plain) return;
      phoneWrap.innerHTML = "";
      var a = document.createElement("a");
      a.className = "contact-revealed-link";
      a.href = phoneTelHref(plain);
      a.textContent = plain;
      a.setAttribute("rel", "noopener");
      phoneWrap.appendChild(a);
      phoneWrap.hidden = false;
      btnPhone.hidden = true;
    });
  }

  if (btnWechat && wechatWrap && btnCopyWechat && wechatIdDisplay) {
    var wechatCopyTimer = null;

    btnWechat.addEventListener("click", function () {
      var id = wechatIdPlain();
      if (!id) return;
      wechatIdDisplay.textContent = id;
      wechatWrap.hidden = false;
      btnWechat.hidden = true;
    });

    btnCopyWechat.addEventListener("click", function () {
      var id = wechatIdPlain();
      if (!id) return;
      copyText(id).then(
        function () {
          var done =
            typeof PortfolioI18n !== "undefined"
              ? PortfolioI18n.t("contact_copy_done")
              : "已复制";
          wechatIdDisplay.textContent = done;
          if (wechatCopyTimer) clearTimeout(wechatCopyTimer);
          wechatCopyTimer = setTimeout(function () {
            wechatIdDisplay.textContent = id;
            wechatCopyTimer = null;
          }, 1600);
        },
        function () {
          wechatIdDisplay.textContent = id;
        }
      );
    });
  }
})();
