const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
let descriptionEl = document.getElementById("image-description");
descriptionEl.innerHTML = slides[slideIndex].alt;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}
function showSlide(index) {

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("displaySlide");
  }
  slides[slideIndex].classList.add("displaySlide");
  updateDescription();
}
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
function updateDescription() {
  descriptionEl.innerHTML = slides[slideIndex].alt;
}
function answerFunction(elementId) {
  let x = document.getElementById(elementId);
  let questionEl = x.closest('.question');
  let breakEls = questionEl.querySelectorAll('br');
  x.style.display = "block";
  breakEls[0].style.display = "none";
  breakEls[1].style.display = "none";
}
