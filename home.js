(function () {
  var assets = {
    macZip: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-mac-arm64-unsigned.zip",
    macDmg: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-mac-arm64-unsigned.dmg",
    winZip: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-win-x64-unsigned.zip",
    winExe: "https://github.com/Zluowa/moss-releases/releases/download/v0.7.2/Moss-0.7.2-win-x64-unsigned.exe"
  };

  var ua = navigator.userAgent || "";
  var isWin = /Windows/i.test(ua);
  var primary = document.getElementById("primary-download");
  var label = document.getElementById("primary-label");

  var footer = document.getElementById("footer-download");

  if (isWin) {
    if (primary) primary.href = assets.winExe;
    if (label) label.textContent = "下载 Windows 未签名包";
    if (footer) footer.href = assets.winExe;
  } else {
    if (primary) primary.href = assets.macDmg;
    if (label) label.textContent = "下载 macOS 未签名包";
    if (footer) footer.href = assets.macDmg;
  }

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
