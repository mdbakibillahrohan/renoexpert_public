
// here started the review section slider 
new Glider(document.querySelector('.review-slider'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

//   here ended the review section slider 

// here started the services slider 
new Glider(document.querySelector('.services-slider'), {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    height: '28rem',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
// here ended the services slider 