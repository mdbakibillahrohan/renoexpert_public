// video section js
let play = document.getElementsByClassName("play");
let videoReno = document.getElementsByClassName("videoReno");
let ellipsImg = document.getElementById("ellipsImg");
let pollyImg = document.getElementById("pollyImg");
let video = document.querySelector("video");

// mobile navbar js started here

const mobileNavbarToggleBtn = document.querySelector("#mobile-nav-toggle-btn");
const mobileNavbar = document.querySelector("#mobile-navbar-content");
mobileNavbarToggleBtn.addEventListener("click", () => {
  if (mobileNavbar.classList.contains("opacity-0")) {
    mobileNavbar.classList.remove("opacity-0");
  } else {
    mobileNavbar.classList.add("opacity-0");
  }
});

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header_wrapper");
  if (document.documentElement.scrollTop > 500) {
    header.classList.remove("bg-[#EEECE8]");
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-[#EEECE8]");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuTriggers = document.querySelectorAll(".menu-trigger");

  menuTriggers.forEach((menuTrigger) => {
    const menuContent = menuTrigger.nextElementSibling;
    const openIcon = menuTrigger.querySelector(".open-icon");
    const closedIcon = menuTrigger.querySelector(".closed-icon");

    menuTrigger.addEventListener("click", function () {
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
    document.addEventListener("click", function (event) {
      if (
        !menuTrigger.contains(event.target) &&
        !menuContent.contains(event.target)
      ) {
        menuContent.style.display = "none";
        openIcon.style.display = "none";
        closedIcon.style.display = "block";
      }
    });
  });
});

// mobile navbar js ended here

// lazy loading section
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll(".lazy");

  var lazyLoad = function () {
    lazyImages.forEach(function (img) {
      if (
        img.getBoundingClientRect().top < window.innerHeight &&
        img.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(img).display !== "none"
      ) {
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        img.classList.add("loaded");
      }
    });
  };

  lazyLoad();

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImage.classList.add("loaded");
          observer.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    lazyLoad(); // Fallback for browsers not supporting Intersection Observer
  }
});

// lazy loading section
