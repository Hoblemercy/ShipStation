// script.js
let slideIndex = 7;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // Loop back to first/last slide
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides and remove active dot
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);