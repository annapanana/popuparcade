'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob1.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob2.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob3.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob4.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob5.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob6.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob7.png'
        }),
        //GFTI
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.36.05+PM.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.44.38+PM.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_01_example.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_04_example.png'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
