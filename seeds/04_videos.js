'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('videos').insert({
          project_id: 1,
          video_url: 'https://youtu.be/n82JdUpSfA8',
          video_title: 'I AM A VIDEO'
        }),
        knex('videos').insert({
          project_id: 2,
          video_url: 'I AM A VIDEO',
          video_title: 'I AM A VIDEO'
        }),
        knex('videos').insert({
          project_id: 2,
          video_url: 'MY NAME IS ANNA VIDEO',
          video_title: 'I AM A VIDEO'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('videos_id_seq', (SELECT MAX(id) FROM videos))");
    });
};
