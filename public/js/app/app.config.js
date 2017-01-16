'use strict';
(function () {
  console.log("config is loaded");
  angular
    .module("app")
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: "app",
        abstract: "true",
        component: "app"
      })
      .state({
        name: "home",
        parent: "app",
        url: "/",
        component: "home"
      })
      .state({
        name: "featured",
        parent: "app",
        url: "/featured",
        component: "featured"
      })
      .state({
        name: "about",
        parent: "app",
        url: "/about",
        component: "about"
      })
      .state({
        name: "archive",
        parent: "app",
        url: "/archive",
        component: "archivelist"
      })
      .state({
        name: "projectpage",
        parent: "app",
        url: "/project-page/:projectId",
        component: "projectpage",
        params: {
          projectId: "1"
        }
      });

      console.log($stateProvider);
  }
})();
