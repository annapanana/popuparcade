'use strict';
(function() {
  angular.module("app")
    .component('archivelist', {
      controller: ArchiveList,
      templateUrl: "js/posts/archive-list.template.html"
    });

    function ArchiveList() {
      const vm = this;

      // Grab DB Informations
      // Populate template for each entry
    }
})();
