'use strict';
(function() {

  angular.module("app")
    .component('projectpage', {
      controller: ProjectPage,
      templateUrl: "js/projects/project-page.template.html"
    });

    function ProjectPage($sce) { //service
      console.log($sce);
      const vm = this;

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 3000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {

        // GET ROUTE FOR THIS ID
        // HOW DOES IT KNOW WHAT THE ID IS? (URL ROUTE)
        // Create project object
        vm.project = {
          id: 1,
          name: "Fish Tank",
          role: "Designer",
          date: "Today",
          brief: "A fishtank",
          description: "Have you ever wondered what it would be like to be a crustacean? I did, so I made Fishtank: a crustacean simulator. The controls are slow, which I imagine reflect reality is some way. The controls for fishtank are simple: WASD to move, mouse to look. If you get a chance to download the build and play, you’ll notice how much effort it takes to look around. This was a deliberate detail, which contributes to the feeling of living in a fishtank.",
          tags: ["this", "that"],
          live_url: "http://www.google.com",
          videos: [
            {
              link: 'https://www.youtube.com/embed/AvjiAWshMAk',
              title: 'Stone Soup'
            },
            {
              link: 'https://www.youtube.com/embed/AvjiAWshMAk',
              title: 'Stone Soup'
            }
          ]
        };

        // TODO turn this into a funciton/loop that executes for each video link
        // vm.project.videos.push({link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/AvjiAWshMAk')});
        // vm.project.videos.push({link:$sce.trustAsResourceUrl('https://www.youtube.com/embed/AvjiAWshMAk')});

        // Populate with images
        vm.slides = [
          {image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_01.png',
           id: 0,
           text: 'HI'
          },
          {
           image: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_02.png',
           id: 1,
           text: 'Hello'
         }];
     };

     // Open project page in a new tab
     vm.navToProject = function() {
       var win = window.open(vm.project.live_url, '_blank');
       win.focus();
     };
   }
})();
