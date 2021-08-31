$('.slider-product').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-product__arrow-left"></div>',
  nextArrow: '<div class="slider-product__arrow-right"></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
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