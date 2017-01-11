'use strict';
(function() {
  console.log("LOADING");
  angular.module("app")
    .component('carousel', {
      controller: Carousel,
      templateUrl: "js/featured/featured-content.template.html"
    });

    function Carousel() {
      const vm = this;

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 3000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {
        vm.slides = [{
          image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_02.jpg',
          id: 0,
          text: 'The Greenhouse'
        },
        {
          image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_04.png',
          id: 1,
          text: 'Greetings From the Internet'
        },
        {
          image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_03.jpg',
          id: 2,
          text: 'Stone Soup'
        },
        {
          image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_01.jpg',
          id: 3,
          text: 'Fridge Face'
       }];
       };
    }
})();