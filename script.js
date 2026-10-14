const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let autoPlay;

slides.forEach(function (slide, index) {
const dot = document.createElement("button");
dot.classList.add("dot");
dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

if (index === 0) {
    dot.classList.add("active");
}

dot.addEventListener("click", function () {
    showSlide(index);
    startAutoPlay();
});

dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
slides[currentIndex].classList.remove("active");
dots[currentIndex].classList.remove("active");

currentIndex = (index + slides.length) % slides.length;

slides[currentIndex].classList.add("active");
dots[currentIndex].classList.add("active");


}

function nextSlide() {
showSlide(currentIndex + 1);
}

function prevSlide() {
showSlide(currentIndex - 1);
}

function startAutoPlay() {
clearInterval(autoPlay);

autoPlay = setInterval(function () {
    nextSlide();
}, 4000);


}

nextBtn.addEventListener("click", function () {
nextSlide();
startAutoPlay();
});

prevBtn.addEventListener("click", function () {
prevSlide();
startAutoPlay();
});

startAutoPlay();
