
// here started the review section slider 
new Glider(document.querySelector('.review-slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.review-dots',
    arrows: {
      prev: '.review-prev',
      next: '.review-next'
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3.2,
          slidesToScroll: 3,
          itemWidth: "auto",
        }
      }
    ]
  });

//   here ended the review section slider 

// here started the services slider 
new Glider(document.querySelector('.testimonial-slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.testimonial-prev',
      next: '.testimonial-next'
    }
  });
// here ended the services slider 