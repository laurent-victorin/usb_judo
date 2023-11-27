const app = {
  // Switch Theme Light/Dark
  switchTheme() {
    // Get Root Element and the data-theme value
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme"),
      newTheme;
    newTheme = dataTheme === "light" ? "dark" : "light";
    // Set the new HTML attribute
    rootElem.setAttribute("data-theme", newTheme);
  },

  init() {
    // Switch Theme Light/Dark
    document
      .querySelector("#theme-switcher")
      .addEventListener("click", app.switchTheme);
  },
}; // Fin App

document.addEventListener("DOMContentLoaded", app.init());

// Slide Disciplines
const btns = document.querySelectorAll(".nav__discipline-btn");
const slides = document.querySelectorAll(".img__slide-discipline");
const contents = document.querySelectorAll(".disciplines__content");

let sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
