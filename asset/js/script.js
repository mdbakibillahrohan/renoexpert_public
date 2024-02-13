// video section js
let play = document.getElementsByClassName("play");
let videoReno = document.getElementsByClassName("videoReno");
let ellipsImg = document.getElementById("ellipsImg");
let pollyImg = document.getElementById("pollyImg");
let video = document.querySelector("video");

ellipsImg.addEventListener("click", function (e) {
  video.play();
  video.controls = !video.controls;
  ellipsImg.classList.add("playHidden");
  pollyImg.classList.add("playHidden");
});

// video section js

// stretch arrow js section
const stretchArrow = document.querySelectorAll(".strech-arrow");
stretchArrow.forEach((item) => {
  item.setAttribute("width", 54);
  // item.setAttribute("height", 20)
});
// stretch arrow js section
