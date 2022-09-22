//CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);
showSlidesQuery(slideIndex);
showSlidesQueryBis(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function plusSlidesQuery(n) {
  showSlidesQuery((slideIndex += n));
}

function plusSlidesQueryBis(n) {
  showSlidesQueryBis((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function currentSlideQuery(n) {
  showSlidesQuery((slideIndex = n));
}

function currentSlideQueryBis(n) {
  showSlidesQueryBis((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesQuery(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-query");
  let dots = document.getElementsByClassName("dot-query");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesQueryBis(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-query-bis");
  let dots = document.getElementsByClassName("dot-query-bis");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
