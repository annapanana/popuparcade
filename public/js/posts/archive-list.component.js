'use strict';
(function() {
  angular.module("app")
    .component('archivelist', {
      controller: ArchiveList,
      templateUrl: "js/posts/archive-list.template.html"
    });

    function ArchiveList() {
      const vm = this;

      vm.$onInit = function() {
        vm.archive = [
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        },
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        },
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        },
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        },
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        },
        {
        thumb: "https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png",
        name: "Gloobal Doomination",
        brief: "In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.",
        kind: "game",
        project_page: "www.google.com"
        }
      ];

      };

      // Grab DB Informations
      // Populate template for each entry
    }
})();
