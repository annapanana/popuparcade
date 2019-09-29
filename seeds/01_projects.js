'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Sample Project',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'December, 2016',
          live_link: 'https://google.com',
          thumbnail: 'https://storage.googleapis.com/annapanana/Alan/Screen%20Shot%202019-09-28%20at%203.12.33%20PM.png',
        }),
        knex('projects').insert({
          id: 2,
          name: 'Sample Project 2',
          brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'December, 2016',
          live_link: 'https://google.com',
          thumbnail: 'https://storage.cloud.google.com/annapanana/Alan/Screen%20Shot%202019-09-28%20at%203.12.44%20PM.png?folder=true&organizationId=true',
        }),
        // Big Data Tool
        // My Sites
        // Raz App
        // Marketplace App
        //
        // SVG Renderer
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};
