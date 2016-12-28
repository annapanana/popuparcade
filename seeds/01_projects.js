'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Fridge Face',
          brief: 'Fridge Face is a friendly inventory management system for communal refrigerators.',
          description: 'Fridge Face is a friendly inventory management system for communal refrigerators. The app enables community members to view all fridge contents, filter food by categories, check expiration dates and receive announcements. Register to get started with Fridge Face for your community refrigerator, today!',
          type: 'web',
          role: 'Designer and Developer',
          date: 'December, 2016',
          live_link: 'https://fridge-face.herokuapp.com',
          page_url: ''
        })
      ]);
    });
};
