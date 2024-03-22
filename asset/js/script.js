// video section js
let play = document.getElementsByClassName("play");
let videoReno = document.getElementsByClassName("videoReno");
let ellipsImg = document.getElementById("ellipsImg");
let pollyImg = document.getElementById("pollyImg");
let video = document.querySelector("video");


// mobile navbar js started here 

const mobileNavbarToggleBtn = document.querySelector("#mobile-nav-toggle-btn");
const mobileNavbar = document.querySelector("#mobile-navbar-content");
mobileNavbarToggleBtn.addEventListener("click",  ()=>{
  if(mobileNavbar.classList.contains("opacity-0")){
    mobileNavbar.classList.remove("opacity-0");
  }else{
    mobileNavbar.classList.add("opacity-0");
  }
})





document.addEventListener("DOMContentLoaded", function() {
  const menuTriggers = document.querySelectorAll(".menu-trigger");

  menuTriggers.forEach(menuTrigger => {
      const menuContent = menuTrigger.nextElementSibling;
      const openIcon = menuTrigger.querySelector(".open-icon");
      const closedIcon = menuTrigger.querySelector(".closed-icon");

      menuTrigger.addEventListener("click", function() {
          const isOpen = menuContent.style.display === "block";
          if (isOpen) {
              menuContent.style.display = "none";
              openIcon.style.display = "none";
              closedIcon.style.display = "block";
          } else {
              menuContent.style.display = "block";
              openIcon.style.display = "block";
              closedIcon.style.display = "none";
          }
      });

      // Close menu when clicking outside of it
      document.addEventListener("click", function(event) {
          if (!menuTrigger.contains(event.target) && !menuContent.contains(event.target)) {
              menuContent.style.display = "none";
              openIcon.style.display = "none";
              closedIcon.style.display = "block";
          }
      });
  });
});



// mobile navbar js ended here 