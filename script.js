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

const images = document.querySelectorAll(".side-scroll-image");
let currentIndex = 0;

function showNextImage() {
  // Hide the current image
  images[currentIndex].classList.remove("active");

  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Show the next image
  images[currentIndex].classList.add("active");
}

// Change image every 4 seconds (adjust as needed)
setInterval(showNextImage, 4000);
