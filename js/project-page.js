"use strict";
$(function(){
  console.log("!");
  $('.project-demo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false
  });

  $('.mini-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
