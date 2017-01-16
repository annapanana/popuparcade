'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http) {
      const vm = this;

      vm.$onInit = function() {
      };
    }
})();
