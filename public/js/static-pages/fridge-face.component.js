'use strict';
(function() {
  angular.module("app")
    .component("fridgeFace", {
      controller: controller,
      templateUrl: 'js/static-pages/fridge-face.template.html'
    });

    controller.$inject = ["$http", "$state", "$stateParams"];

    function controller($http, $state, $stateParams) {
      const vm = this;

      vm.project = {};

      // Params for the carousel
      vm.slides = [];
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.$onInit = function() {
        $http.get(`/app/archive/26`)
          .then(function(result) {
            vm.project = result.data;

            for (var i = 0; i < result.data.images.length; i++) {
              let img = {
                image: result.data.images[i],
                id: i,
                text: 'HI'
              };
              vm.slides.push(img);
            }

          });
      };

      vm.wireframes = [
        {
          id: 0,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_login.png',
          text: 'Login: The user should be able to input an email address and password. Upon validation, the user should be re-routed to the fridge home page.'
        },
        {
          id: 1,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_home.png',
          text: 'Fridge Home: The user should see a full inventory of what is currently in the fridge. The user should be greeted by an animated character. The user should be able to search for fridge contents and filter by category.'
        },
        {
          id: 2,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_add_food.png',
          text: 'Add Food: The user should be able to add a new item to the fridge inventory and fill out details before submitting the item.'
        },
        {
          id: 3,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_dashboard.png',
          text: 'Admin Dashboard: Upon successful login, the admin should see a stats view and food pending removal.'
        },
        {
          id: 4,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_users.png',
          text: 'Admin View Users: The admin should be able to view all the users registered to a particular refrigerator.'
        },
        {
          id: 5,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_edit_user.png',
          text: 'Admin Edit User: The admin should be able to update a users details or register a new user.'
        },
        {
          id: 6,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_fridge.png',
          text: 'Admin Fridge Contents: The admin should be able to view all fridge contents.'
        },
        {
          id: 7,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_announcements.png',
          text: 'Admin Announcements: The admin should be able to view a list of all current announcements that are pushed to main fridge home page.'
        },
        {
          id: 8,
          url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/wireframes/fridge_face_admin_announcements_new.png',
          text: 'Admin Create Announcement: The admin should be able to create a new announcement for the main fridge home page.'
        }
      ];

      vm.openLightboxModal = function (arr, index) {
        var win = window.open(arr[index].url, '_blank');
        win.focus();
     };

     vm.navToProject = function() {
       var win = window.open('https://fridge-face.herokuapp.com/', '_blank');
       win.focus();
     };

    }
})();
