'use strict';
(function() {
  // console.log("about loaded");
  angular.module('app')
    .component("about", {
      controller: controller,
      templateUrl: "js/about/about.template.html"
    });

    controller.$inject = ['$state', '$stateParams'];

    function controller($state) {
      // console.log("About component loaded");
    }
})();
