"use strict";
$(function(){
  console.log("loaded");
  $('.carousel.carousel-slider').carousel({full_width: true});
  autoplay();
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }

  // Initialize collapse button
  $(".button-collapse").sideNav();

});
