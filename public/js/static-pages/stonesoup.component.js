'use strict';
(function() {
  angular.module("app")
    .component("stoneSoup", {
      controller: controller,
      templateUrl: 'js/static-pages/stonesoup.template.html'
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
        $http.get(`/app/archive/15`)
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

      vm.openLightboxModal = function (arr, index) {
        var win = window.open(arr[index].url, '_blank');
        win.focus();
     };

     vm.navToProject = function() {
       var win = window.open('http://greetingsfromtheinternet.surge.sh/', '_blank');
       win.focus();
     };

     vm.openVideoLink = function(videoLink) {
       var win = window.open(videoLink, '_blank');
       win.focus();
    };

    }
})();
