
// here started the review section slider 
new Glider(document.querySelector('.review-slider'), {
    slidesToShow: 3.2,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
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