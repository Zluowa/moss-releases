(function () {
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
