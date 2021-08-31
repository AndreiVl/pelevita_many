$('.header__btn').click(function() {
  if($('body .header__btn--opened').length) {
    $('.header__mobile').hide(500);
  } else {
    $('.header__mobile').show(500);
  }

  $('.header__btn').toggleClass('header__btn--opened');
});

$('.user__bag').click(function() {
  $('.header__widget').toggleClass('header__widget--opened');
  // $('.header__widget-overlay').toggleClass('header__widget-overlay-visible');
});
// $('.header__widget-overlay').click(function() {
//   $('.header__widget').toggleClass('header__widget--opened');
//   // $('.header__widget-overlay').toggleClass('header__widget-overlay-visible');
// });

$(window).scroll(function(){
  let $this = $(this),
       st = $this.scrollTop();

  if(st > 285){
    $('body').addClass('scrolled');
  }else{
    $('body').removeClass('scrolled');
  }
});
jQuery(function($){
	$(document).mouseup(function (e){
    let div = $('.header__widget');
    let user_bag = $('.user__bag'); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
      if(!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
        div.removeClass('header__widget--opened');
      }
		}
	});
});