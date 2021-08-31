
$('.card-product__slider-top').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.card-product__slider'
});
$('.card-product__slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<div class="slider-product__arrow-left"></div>',
  nextArrow: '<div class="slider-product__arrow-right"></div>',
  asNavFor: '.card-product__slider-top',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

let cardImg = $('.card-product__item-img img');

$('.card-product__slider-item img').on('click', function() {
  let cardImgNew = $(this).attr('src');
  cardImg.attr('src', cardImgNew);
});



	