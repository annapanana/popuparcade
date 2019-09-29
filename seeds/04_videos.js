'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        knex('videos').insert({
          project_id: 1, // Sample Project
          video_url: 'https://youtu.be/MiLvNmPxw3k',
          video_title: 'Sample Video'
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('videos_id_seq', (SELECT MAX(id) FROM videos))");
    });
};
