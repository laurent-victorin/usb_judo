// const app = {
//   sliderContainer: document.querySelector(".slider"),
//   sliderBtns: document.querySelectorAll(".slider button"),
//   sliderPhotographyNames: [
//     "slider_judo_01",
//     "slider_judo_02",
//     "slider_judo_03",
//     "slider_judo_04",
//     "slider_judo_05",
//     "slider_judo_06",
//   ],
//   sliderIndex: 0,

//   initSlider: function () {
//     const previousBtn = app.sliderBtns[0];
//     const nextBtn = app.sliderBtns[1];

//     nextBtn.addEventListener("click", function () {
//       app.showNextImage();
//     });

//     previousBtn.addEventListener("click", function () {
//       app.showPreviousImage();
//       console.log(1);
//     });

//     // // * déclenche le changement d'image toutes les 3 secondes
//     // setInterval(function () {
//     //   app.showNextImage();
//     // }, 3000);

//     // * On met en place la première image du slider
//     console.log(2);
//     app.switchSliderImage();
//   },

//   switchSliderImage: function () {
//     const image = document.createElement("img");

//     // * Si on arrive au bout du tableau, on réinitialise l'index
//     if (app.sliderIndex > app.sliderPhotographyNames.length - 1) {
//       app.sliderIndex = 0;
//     }

//     // * Si on arrive au début du tableau, on met l'index en dernière position du tableau
//     if (app.sliderIndex < 0) {
//       app.sliderIndex = app.sliderPhotographyNames.length - 1;
//     }

//     // image.src = `img/${app.sliderPhotographyNames[app.sliderIndex]}.jpg`;

//     image.setAttribute(
//       "src",
//       `images/${app.sliderPhotographyNames[app.sliderIndex]}.jpg`
//     );

//     image.classList.add("slider__img", "slider__img--current");
//     app.sliderContainer.appendChild(image);
//   },

//   showNextImage: function () {
//     app.sliderIndex += 1;
//     app.switchSliderImage();
//   },

//   showPreviousImage: function () {
//     app.sliderIndex -= 1;
//     app.switchSliderImage();
//   },

//   init() {
//     app.initSlider();
//   },
// }; // fin App

// // On attend que le HTML soit parsé pour démarrer notre application
// document.addEventListener("DOMContentLoaded", app.init);

const slide = [
  "./images/slide_header/slider_judo_01.webp",
  "./images/slide_header/slider_judo_02.webp",
  "./images/slide_header/slider_judo_03.webp",
  "./images/slide_header/slider_judo_04.webp",
  "./images/slide_header/slider_judo_05.webp",
  "./images/slide_header/slider_judo_06.webp",
];
let actualSlide = 0;

function changeSlide(direction) {
  actualSlide = actualSlide + direction;
  if (actualSlide > slide.length - 1) actualSlide = 0;
  if (actualSlide < 0) actualSlide = slide.length - 1;
  document.getElementById("slide").src = slide[actualSlide];
}

setInterval("changeSlide(1)", 4000);
