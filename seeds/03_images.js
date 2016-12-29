'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({
          project_id: 1,
          url: 'http://www.pets4homes.co.uk/images/articles/1646/large/kitten-emergencies-signs-to-look-out-for-537479947ec1c.jpg.jpg',
          is_primary_gallery: true
        }),
        knex('images').insert({
          project_id: 2,
          url: 'this is an image url',
          is_primary_gallery: false
        }),
        knex('images').insert({
          project_id: 2,
          url: 'HI ALAN',
          is_primary_gallery: false
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
