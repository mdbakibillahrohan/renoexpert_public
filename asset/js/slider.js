// here started the review section slider
const reviewSlider = new Glider(document.querySelector(".review-slider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".review-dots",
  arrows: {
    prev: ".review-prev",
    next: ".review-next",
  },
  scrollBy: 1,
  rewind: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3.2,
        slidesToScroll: 1,
        itemWidth: "auto",
      },
    },
  ],
});
let reviewSliderInterval;

// Function to start auto sliding
function startAutoSlide() {
  reviewSliderInterval = setInterval(function () {
    reviewSlider.scrollItem("right");
  }, 3000); // Change this value to adjust the delay between slides
}

// Function to stop auto sliding
function stopAutoSlide() {
  clearInterval(reviewSliderInterval);
}

// Start auto sliding
startAutoSlide();

// Event listeners to stop and start auto sliding on interaction
var gliderContainer = document.querySelector(".review-slider");
gliderContainer.addEventListener("mouseover", stopAutoSlide);
gliderContainer.addEventListener("mouseout", startAutoSlide);

// here started the services slider
const testimonialSlider = new Glider(
  document.querySelector(".testimonial-slider"),
  {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: ".testimonial-prev-m",
      next: ".testimonial-next-m",
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1.2,
          slidesToScroll: 1,
          itemWidth: "auto",
          itemHeight: "200",
          arrows: {
            prev: ".testimonial-prev",
            next: ".testimonial-next",
          },
        },
      },
    ],
  }
);

let testimonialSliderInterval;

// Function to start auto sliding
function startAutoSlideTestimonial() {
  testimonialSliderInterval = setInterval(function () {
    testimonialSlider.scrollItem("right");
  }, 3000); // Change this value to adjust the delay between slides
}

// Function to stop auto sliding
function stopAutoSlideTestimonial() {
  clearInterval(testimonialSliderInterval);
}

// Start auto sliding
startAutoSlideTestimonial();

// Event listeners to stop and start auto sliding on interaction
var testimonialContainer = document.querySelector(".testimonial-slider");
testimonialContainer.addEventListener("mouseover", stopAutoSlideTestimonial);
testimonialContainer.addEventListener("mouseout", startAutoSlideTestimonial);
// here ended the services slider
