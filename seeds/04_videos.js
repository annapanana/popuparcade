'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('videos').insert({
          project_id: 6, // Doc 2
          video_url: 'https://youtu.be/Le-PKJBVkhw',
          video_title: 'App Highlights'
        }),
        knex('videos').insert({
          project_id: 7, // Doc 1
          video_url: 'https://youtu.be/eg7pHulW44w',
          video_title: 'App Highlights'
        }),
        knex('videos').insert({
          project_id: 11, // Gloobs
          video_url: 'https://youtu.be/3Z_eJ7oXmkE',
          video_title: 'Project Demo'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/AvjiAWshMAk',
          video_title: 'Rough Promo'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/a1jfJ_PJLJs',
          video_title: 'Mom and Pops Demo'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/n82JdUpSfA8',
          video_title: 'Technical Proof of Concept'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/oZxzIkCmNDQ',
          video_title: 'Screen Capture 1'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/392XXe9hHt0',
          video_title: 'Screen Capture 2'
        }),
        knex('videos').insert({
          project_id: 12, // Stone Soup
          video_url: 'https://youtu.be/X7VtgEoQsJQ',
          video_title: 'Andrea & Mattie Playthrough'
        }),
        knex('videos').insert({
          project_id: 15, // Apathy
          video_url: 'https://youtu.be/4LeMa8vO9uo',
          video_title: 'Project Demo'
        }),
        // TODO: Find Futurebound video?
        knex('videos').insert({
          project_id: 18, // Playcenta
          video_url: 'https://youtu.be/jBdIjrpLxFc',
          video_title: 'Project Demo'
        }),
        knex('videos').insert({
          project_id: 19, // Tormented Soles
          video_url: 'https://youtu.be/7SgdhdNohWk',
          video_title: 'Project Demo'
        }),
        knex('videos').insert({
          project_id: 21, // Tormented Soles
          video_url: 'https://youtu.be/VjOW4VHULfU',
          video_title: 'Project Demo'
        }),
        knex('videos').insert({
          project_id: 23, // Playcube
          video_url: 'https://youtu.be/CbFWln9kcPw',
          video_title: 'Psuedanthium Synthesis'
        }),
        knex('videos').insert({
          project_id: 23, // Playcube
          video_url: 'https://youtu.be/ouI0EmrhlmI',
          video_title: 'AREA + PLAYCUBE'
        }),
        knex('videos').insert({
          project_id: 23, // Playcube
          video_url: 'https://vimeo.com/7840080',
          video_title: 'Happy Birthday'
        }),
        knex('videos').insert({
          project_id: 25, // MMMushu
          video_url: 'https://vimeo.com/7840080',
          video_title: 'Mushu Documentation'
        }),
        knex('videos').insert({
          project_id: 25, // MMMushu
          video_url: 'https://youtu.be/b5zm6qx0HLU',
          video_title: 'Soba Documentation'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('videos_id_seq', (SELECT MAX(id) FROM videos))");
    });
};
