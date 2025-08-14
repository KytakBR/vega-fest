const fest_btn = document.querySelector(".fest-btn");
const img = document.querySelector(".img-fest");

function syncButtonHeight() {
  const blockHeight = img.clientHeight;
  fest_btn.style.height = blockHeight * 0.02 + "%";
}

syncButtonHeight();

window.addEventListener("resize", syncButtonHeight);

const icons_fon_list = document.querySelectorAll(".icons-fon");
icons_fon_list.forEach((el) => {
  el.style.height = el.clientWidth + "px";
});
