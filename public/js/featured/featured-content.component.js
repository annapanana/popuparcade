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
      console.log("featured component loaded");
    }
})();
