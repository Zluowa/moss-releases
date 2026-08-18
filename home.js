(function () {
  var assets = {
    macDmg: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-mac-arm64-unsigned.dmg",
    winExe: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-win-x64-unsigned.exe"
  };

  var isWin = /Windows/i.test(navigator.userAgent || "");
  var primary = document.getElementById("primary-download");
  var label = document.getElementById("primary-label");
  var footer = document.getElementById("footer-download");
  var href = isWin ? assets.winExe : assets.macDmg;
  var text = isWin ? "下载 Windows 未签名包" : "下载 macOS 未签名包";

  if (primary) primary.href = href;
  if (label) label.textContent = text;
  if (footer) footer.href = href;

  var promptEl = document.getElementById("moss-prompt");
  var prompt = promptEl ? promptEl.textContent.trim() : "";
  var encoded = encodeURIComponent(prompt);
  var chatgpt = document.getElementById("ask-chatgpt");
  var claude = document.getElementById("ask-claude");
  if (chatgpt) chatgpt.href = "https://chatgpt.com/?q=" + encoded;
  if (claude) claude.href = "https://claude.ai/new?q=" + encoded;

  var copyBtn = document.getElementById("copy-gemini");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", function () {
    var done = function () {
      copyBtn.textContent = "已复制，去 Gemini 粘贴";
      window.setTimeout(function () {
        copyBtn.textContent = "复制给 Gemini";
      }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(prompt).then(done).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      var area = document.createElement("textarea");
      area.value = prompt;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        done();
      } finally {
        document.body.removeChild(area);
      }
    }
  });
})();
