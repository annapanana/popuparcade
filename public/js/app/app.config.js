'use strict';
(function () {
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
      })
      .state({
        name: "fridgeFace",
        parent: "app",
        url: "/fridge-face",
        component: "fridgeFace"
      })
      .state({
        name: "gatheredGardens",
        parent: "app",
        url: "/gathered-gardens",
        component: "gatheredGardens"
      })
      .state({
        name: "stoneSoup",
        parent: "app",
        url: "/stone-soup",
        component: "stoneSoup"
      })
      .state({
        name: "gfti",
        parent: "app",
        url: "/gfti",
        component: "gfti"
      });
  }
})();
