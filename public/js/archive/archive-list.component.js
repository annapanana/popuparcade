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
      vm.activeFilter = "all";
      var archiveData = [];
      vm.photosLoaded = false;

      vm.$onInit = function() {
        $http.get('/app/archive').then(function (response) {
          archiveData = response.data;
          vm.archive = response.data;
          vm.photosLoaded = true;
        });
      };

      vm.updateFilter = function(newFilter) {
        vm.activeFilter = newFilter;
        // Clear archive and only display projects for this filter
        vm.archive = [];
        if (newFilter === "all") {
          vm.archive = archiveData;
        } else {
          for (var i = 0; i < archiveData.length; i++) {
            if (archiveData[i].type === newFilter) {
              vm.archive.push(archiveData[i]);
            }
          }
        }
      };

      vm.selectProject = function (projectId) {
        $http.get(`app/archive/${projectId}`).then(function (response) {
          if (response.data.featured_state) {
            $state.go(response.data.featured_state);
          } else {
            $state.go("projectpage", { projectId: projectId});
          }
        });
      };
    }
})();
