// video section js
let play = document.getElementsByClassName("play");
let videoReno = document.getElementsByClassName("videoReno");
let ellipsImg = document.getElementById("ellipsImg");
let pollyImg = document.getElementById("pollyImg");
let video = document.querySelector("video");

// ellipsImg.addEventListener("click", function (e) {
//   video.play();
//   video.controls = !video.controls;
//   ellipsImg.classList.add("playHidden");
//   pollyImg.classList.add("playHidden");
// });

// video section js


/** Menu hover effect */

document.getElementById("services_menu").addEventListener("mouseover", ()=>{
  document.getElementById("dropdown").style.transform = "translateY(0.4vw)";
})

// document.getElementById("services_menu").addEventListener("mouseleave", ()=>{
//   setTimeout(()=>{
//     document.getElementById("dropdown").style.display = "none";
//   }, 500)
// })

document.getElementById("dropdown").addEventListener("mouseover", ()=>{
  
})
document.getElementById("dropdown").addEventListener("mouseleave", ()=>{
  document.getElementById("dropdown").style.transform = "translateY(-17.175vw)";
})

/** Menu hover effect */