//CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);
showSlidesQuery(slideIndex);
showSlidesQueryBis(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function plusSlidesQuery(n) {
  showSlidesQuery((slideIndex += n));
}

function plusSlidesQueryBis(n) {
  showSlidesQueryBis((slideIndex += n));
}
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

// ANIMAZIONE FADE SITO

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// //NAV
// scrollPx = 250;
// let stickyHome = document.getElementsByClassName("sticky-home")[0];
// let home = document.getElementById("home");
// const scrollContainer = () => {
//   return home;
// };
// home.addEventListener("scroll", () => {
//   if (scrollContainer().scrollTop > this.scrollPx) {
//     stickyHome.style.position = "fixed";
//     console.log("scroll");
//   } else {
//     stickyHome.style.position = "sticky";
//     console.log("noscroll");
//   }
// });
