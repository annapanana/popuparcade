'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Gloobal Dooination',
          brief: 'In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.',
          description: 'In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them. Thankfully they can mutate and every so often new traits can help them survive a near constant apocalypse. Your goal is to create a stable, biologically diverse population that is resilient to the pressures of tsunami, volcanoes, asteroids, fungal infection and the highly deadly smooth jazz. Gloobal Doomination was created as part of the White House Education Game Jam hosted by the White House Office of Science and Technology Policy on September 6-8, 2014.',
          type: 'game',
          role: 'Designer and Developer',
          date: 'September, 2014',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png'
        }),
        knex('projects').insert({
          id: 2,
          name: 'GFTI',
          brief: 'GFTI is a web-based postcard making tool.',
          description: 'Greetings from the Internet (gfti) is a web-based postcard making tool that allows users to search for an image, modify a greetings graphic and include a custom message. The aesthetic of gfti is an homage to Teich greetings postcards. Gfti uses the Flickr API to supply users with images and the Lob API to send postcards.',
          type: 'web',
          role: 'Designer and Developer',
          date: 'November, 2016',
          is_featured: true,
          live_link: 'http://greetingsfromtheinternet.surge.sh/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Vonk_Thumb.png'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};
