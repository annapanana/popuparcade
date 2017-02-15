'use strict';
(function() {
  angular.module("app")
    .component("gatheredGardens", {
      controller: controller,
      templateUrl: 'js/static-pages/gathered-gardens.template.html'
    });

    controller.$inject = ["$http", "$state", "$stateParams", "Lightbox"];

    function controller($http, $state, $stateParams, Lightbox) {
      const vm = this;

      vm.project = {};

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {
        $http.get('/app/archive/27')
          .then(function(result) {
            console.log(result.data);
            vm.project = result.data;

            for (var i = 0; i < result.data.images.length; i++) {
              let img = {
                image: result.data.images[i],
                id: i,
                text: 'HI'
              };
              vm.slides.push(img);
            }

          });
      };

      vm.wireframes = [
        {
          id: 0,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/gathered_gardens/wireframes/page_01.png',
          text: 'Home Page: The user should be able understand the purpose of the site and different features available.'
        },
        {
          id: 1,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/gathered_gardens/wireframes/page_02.png',
          text: 'About Page: The user should be able to learn more about the developers and resources that link to the main Growing Gardens site.'
        },
        {
          id: 2,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/gathered_gardens/wireframes/page_03.png',
          text: 'Garden Selection: The user should be able to navigate to specific gardens that are run by the Growing Gardens organization.'
        },
        {
          id: 3,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/gathered_gardens/wireframes/page_04.png',
          text: 'Plot Selection: The user should see an overview of all the plots in a selected garden. The user should see a color-based visualization that indicate types of produce planted.'
        },
        {
          id: 4,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/gathered_gardens/wireframes/page_05.png',
          text: 'Plot Modal: The user should be able to click on plots to view the specific produce that is planted. The user should be able to edit the produce in his or her plot and view who has rented other plots.'
        }
      ];

      vm.openLightboxModal = function (index) {
        console.log(index);
       Lightbox.openModal(vm.wireframes, index);
     };
    }
})();
