// NAV

function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//CAROUSEL

let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML("beforeend", `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

let width = 276; // image width
let count = 1; // visible images count

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".next").onclick = function () {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
