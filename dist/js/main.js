//=require ../libs/js/jquery.js
//=require ../libs/js/slick.js
//=require ../libs/js/bootstrap.js

$('.footer__slick').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
      