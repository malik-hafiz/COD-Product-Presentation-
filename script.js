const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const currentSlide = document.getElementById("currentSlide");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;


// Create dots
slides.forEach((slide, index) => {
  const dot = document.createElement("span");

  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });

  dotsContainer.appendChild(dot);
});


const dots = document.querySelectorAll(".dot");


function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide.textContent =
    String(index + 1).padStart(2, "0");
}


nextBtn.addEventListener("click", () => {

  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  showSlide(currentIndex);
});


prevBtn.addEventListener("click", () => {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showSlide(currentIndex);
});


// Keyboard navigation
document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowRight") {
    nextBtn.click();
  }

  if (event.key === "ArrowLeft") {
    prevBtn.click();
  }

});
