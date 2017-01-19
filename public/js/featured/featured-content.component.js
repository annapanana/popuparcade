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
        let rightAligned = true;
        $http.get("/app/archive").then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].is_featured) {
              // Decide if project is right or left oriented
              if (rightAligned) {
                response.data[i].right = "right";
                rightAligned = false;
              } else {
                response.data[i].left = "left";
                rightAligned = true;
              }
              vm.featured.push(response.data[i]);
            }
          }
        });
        console.log(vm.featured);
      };

      vm.navToProject = function() {
        console.log("NAV TO PROJECT");
      };

      vm.selectProject = function(projId) {
        console.log(projId);
      };
    }
})();
