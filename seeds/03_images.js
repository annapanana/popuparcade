'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Name of project here
        knex('images').insert({
          project_id: 1,
          image_url: 'https://storage.googleapis.com/annapanana/Alan/Screen%20Shot%202019-09-28%20at%203.12.33%20PM.png'
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
