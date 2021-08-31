$('.slider-reviews').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-reviews__arrow-left"></div>',
  nextArrow: '<div class="slider-reviews__arrow-right"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});