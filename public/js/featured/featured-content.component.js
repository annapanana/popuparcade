'use strict';
(function() {
  // console.log("featured-content loaded");
  angular.module('app')
    .component("featured", {
      controller: controller,
      templateUrl: "js/featured/featured-content.template.html"
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.featured = [];
      vm.tagGroup = [];

      vm.$onInit = function() {
        $http.get("/archive").then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].is_featured) {
              vm.featured.push(response.data[i]);
              console.log(response.data[i].tags);
            }
          }
        });
      };

      vm.navToProject = function() {
        console.log("NAV TO PROJECT");
      };

      vm.selectProject = function(projId) {
        console.log(projId);
      };
    }
})();
