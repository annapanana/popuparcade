'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.isNavCollapsed = true;
      // vm.isCollapsed = false;
      // vm.isCollapsedHorizontal = false;

      vm.$onInit = function() {
        // angular.element(document).find("nav").attr("style", "background-color:'black'");

        var mq = window.matchMedia( "(min-width: 500px)" );
        mq.onchange = function() {
          console.log(mq.matches);

        };
      };
    }
})();
