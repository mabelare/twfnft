const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const gallery = document.querySelector(".gallery-item");
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 200;

  if (scrollAmount >= gallery.scrollWidth) {
    scrollAmount = 0;
  }

  gallery.scroll({
    left: scrollAmount,
    behavior: "smooth",
  });

  setInterval(autoScroll, 3000);
}
