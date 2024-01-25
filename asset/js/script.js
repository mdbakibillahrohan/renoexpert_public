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
  videoReno.classList.remove("bg-black");
});

// video section js
