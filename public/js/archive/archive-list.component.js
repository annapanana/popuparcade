'use strict';
(function() {
  // console.log("archive-list loaded");
  angular.module('app')
    .component('archivelist', {
      controller: controller,
      templateUrl: "js/archive/archive-list.template.html"
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
      const vm = this;

      vm.selectProject = function (projectId) {
        console.log(projectId);
        $state.go("projectpage", { projectId: projectId});
      };

      vm.$onInit = function() {
        $http.get('/archive').then(function (response) {
          vm.archive = response.data;
          console.log(vm.archive);
        });

      //   vm.archive = [
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   },
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   },
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   },
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   },
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   },
      //   {
      //   thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
      //   name: "Gloobal Doomination",
      //   brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
      //   kind: "game"
      //   }
      // ];

      };
    }
})();
