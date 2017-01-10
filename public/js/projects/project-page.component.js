'use strict';
(function() {

  angular.module("app")
    .component('projectpage', {
      controller: ProjectPage,
      templateUrl: "js/projects/project-page.template.html"
    });

    function ProjectPage() {
      const vm = this;
      vm.slides = [];
      // vm.currIndex = 0;
      vm.myInterval = 3000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {

        vm.slides = [
          {image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_01.png',
           id: 0,
           text: 'HI'
          },
          {
           image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_02.png',
           id: 1,
           text: 'Hello'
         }];

        //  for (var i = 0; i < 4; i++) {
        //    vm.addSlide();
        //  }

      // setTimeout(function() {
      //   $('.project-demo').slick({
      //     dots: true,
      //     infinite: true,
      //     speed: 500,
      //     fade: true,
      //     cssEase: 'linear',
      //     autoplay: true,
      //     autoplaySpeed: 2000,
      //     prevArrow: false,
      //     nextArrow: false
      //   });
      // }, 2000 );
     };
   }
})();
