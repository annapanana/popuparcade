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
      vm.myInterval = 3000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {

        vm.project = $http.get('archive/'+$stateParams.projectId)
          .then(function(result){
            console.log(result.data);
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
       console.log("open video link, " + videoLink);
      //  for (var i = 0; i < vm.project.videos.length; i++) {
      //    if (vm.project.videos[i].title ===
      //  }
      //  var win = window.open(vm.project.live_url, '_blank');
      //  win.focus();
    };

     // Open project page in a new tab
     vm.navToProject = function() {
       var win = window.open(vm.project.live_url, '_blank');
       win.focus();
     };
   }
})();
