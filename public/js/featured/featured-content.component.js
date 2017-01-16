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

      vm.$onInit = function() {
        $http.get("/archive").then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].is_featured) {
              console.log(response.data[i]);
            }
          }
        });
      };
    }


})();
