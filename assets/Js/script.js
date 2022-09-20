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

let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML("beforeend", `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

let width = 276;
let count = 1;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
