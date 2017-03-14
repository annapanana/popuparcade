'use strict';
(function() {
  angular.module("app")
    .component("gfti", {
      controller: controller,
      templateUrl: 'js/static-pages/gfti.template.html'
    });

    controller.$inject = ["$http", "$state", "$stateParams"];

    function controller($http, $state, $stateParams) {
      const vm = this;

      vm.project = {};

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {
        $http.get(`/app/archive/28`)
          .then(function(result) {
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
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_01.png',
          text: 'Home: The user should receive a friendly postcard greeting to welcome them to the site and give context to the postcard making tool.'
        },
        {
          id: 1,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_02.png',
          text: 'Intro: The user should be presented with information about the site and how to use the postcard making tool.'
        },
        {
          id: 2,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_03.png',
          text: 'Keyword Search: The user should be able to enter a keyword that queries the Flickr API for image retrieval.'
        },
        {
          id: 3,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_04.png',
          text: 'Image Selection: The user should be able to select images according to the keyword search.'
        },
        {
          id: 4,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_05.png',
          text: 'Card Composition: The user should be able to customize the appearance of the postcard with widgets.'
        },
        {
          id: 5,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_06.png',
          text: 'Card Message / Address: The user should be able to add an address and custom message to the back of the postcard.'
        },
        {
          id: 6,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/wireframes/gfti_wireframes_07.png',
          text: 'Send Confirmation: The users should view a preview of the card before confirming to send it.'
        }
      ];

      vm.openLightboxModal = function (arr, index) {
        var win = window.open(arr[index].url, '_blank');
        win.focus();
     };

     vm.navToProject = function() {
       var win = window.open('http://www.greetingsfromtheinter.net/', '_blank');
       win.focus();
     };

       vm.openVideoLink = function(videoLink) {
         var win = window.open(videoLink, '_blank');
         win.focus();
      };

      vm.openLegacyProject = function() {
        var win = window.open('http://greetingsfromtheinternet.surge.sh/', '_blank');
        win.focus();
      };
    }
})();
