// my solution

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  currentSlide = index;

  const translateValue = -currentSlide * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
  carousel.style.transition = "0.5s";
}

function changeSlide(direction) {
  const index = currentSlide + direction;
  showSlide(index);
}

//* Viktor's example:

// let currentSlide = 0;
// const totalSlides = document.querySelectorAll(".slide").length;
// const carousel = document.querySelector(".carousel");
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// nextBtn.addEventListener("click", () => changeSlide(1));
// prevBtn.addEventListener("click", () => changeSlide(-1));

// function showSlide(index) {
//   // recalculate the currentSlide
//   // move the carousel to the currentSlide
// }

// function changeSlide(direction) {
//   // get the currentSlide value and add the direction to it
//   // assign that to a local variable called index
//   // call showSlide with index
// }
