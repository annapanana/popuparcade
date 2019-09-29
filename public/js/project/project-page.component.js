'use strict';
(function() {
  // console.log("project-page loaded");
  angular.module("app")
    .component('projectpage', {
      controller: controller,
      templateUrl: "js/project/project-page.template.html"
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) { //service
      const vm = this;

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {

        vm.project = $http.get('/app/archive/'+$stateParams.projectId)
          .then(function(result){
            vm.project = result.data;
            vm.slides = [];
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

     vm.openVideoLink = function(videoLink) {
       var win = window.open(videoLink, '_blank');
       win.focus();
    };

     // Open project page in a new tab
     vm.navToProject = function() {
       var win = window.open(vm.project.live_link, '_blank');
       win.focus();
     };
   }
})();
