// NAV

// function myFunction() {
//   let x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";

//     // x.style.display = "flex";
//     // x.style.flexDirection = "column";
//     // x.style.marginTop = "1rem";
//   }
// }

//CAROUSEL

// let i = 1;
// for (let li of carousel.querySelectorAll("li")) {
//   li.style.position = "relative";
//   li.insertAdjacentHTML("beforeend", `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }

// // let width = document.querySelector("li").style.width;
// let count = 1;

// let list = carousel.querySelector("ul");
// let listElems = carousel.querySelectorAll("li");

// let position = 0;

// carousel.querySelector(".next").onclick = function () {
//   let width;
//   for (let index = 0; index < carousel.querySelectorAll("li").length; index++) {
//     const element = array[index];
//     width = document.querySelector(li[index]).style.width;
//   }
//   position -= width * count;
//   // position = Math.max(position, -width * (listElems.length - count));
//   // list.style.marginLeft = position + "rem";
// };

// $(".carousel").carousel({
//   items: 4,
//   pagination: true,
//   paginationSpeed: 1000,
//   navigation: true,
//   navigationText: ["", "<i class='fa fa-angle-right'></i>"],
//   slideSpeed: 800,
// });

// let slider = 1;
// function next(){
//   slider++;
//   if(slider > 8)
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
