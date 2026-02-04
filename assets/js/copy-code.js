document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const pre = codeBlock.parentNode;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText);
      button.innerText = "Copied ✓";
      setTimeout(() => (button.innerText = "Copy"), 1500);
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
