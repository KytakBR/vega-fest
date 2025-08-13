const fest_btn = document.querySelector(".fest-btn");
const img = document.querySelector(".img-fest");

function syncButtonHeight() {
  const blockHeight = img.clientHeight;
  fest_btn.style.height = blockHeight * 0.02 + "%";
}

syncButtonHeight();

window.addEventListener("resize", syncButtonHeight);
