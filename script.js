function moveRandomEl(el) {
  el.style.position = "absolute";
  el.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  el.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const noBtn = document.querySelector(".final-no");

if (noBtn) {
  noBtn.addEventListener("mousemove", () => {
    moveRandomEl(noBtn);
  });
}
