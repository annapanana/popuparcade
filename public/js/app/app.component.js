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
      };
    }
})();
