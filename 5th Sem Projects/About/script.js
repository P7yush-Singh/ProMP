// script.js

let slides = document.querySelectorAll('.slide');
let thumbnails = document.querySelectorAll('.thumbnail');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    updateThumbnails();
}

function updateThumbnails() {
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentSlide) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

setInterval(nextSlide, 5000); // change slide every 3 seconds

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentSlide = index;
        nextSlide();
    });
});