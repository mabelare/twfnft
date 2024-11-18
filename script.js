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

document.querySelectorAll(".faq-container h4").forEach((question) => {
  let plusIcon = question.querySelector("span");
  if (!plusIcon) {
    plusIcon = document.createElement("span");
    plusIcon.textContent = "+";
    question.appendChild(plusIcon);
  }

  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector("span");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      plusIcon.textContent = "+";
    } else {
      answer.style.display = "block";
      plusIcon.textContent = "-";
    }
  });
});
