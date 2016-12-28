'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          id: 1,
          name: 'javascript'
        }),
        knex('tags').insert({
          id: 2,
          name: 'html/css'
        }),
        knex('tags').insert({
          id: 3,
          name: 'galvanize'
        }),
        knex('tags').insert({
          id: 4,
          name: 'node'
        }),
        knex('tags').insert({
          id: 5,
          name: 'psql'
        }),
        knex('tags').insert({
          id: 6,
          name: 'express'
        }),
        knex('tags').insert({
          id: 7,
          name: 'digital/physical'
        }),
        knex('tags').insert({
          id: 8,
          name: 'print'
        }),
        knex('tags').insert({
          id: 9,
          name: 'education'
        }),
        knex('tags').insert({
          id: 10,
          name: 'freelance'
        }),
        knex('tags').insert({
          id: 11,
          name: 'project management'
        }),
        knex('tags').insert({
          id: 12,
          name: 'connected play'
        }),
        knex('tags').insert({
          id: 13,
          name: 'freelance'
        }),
        knex('tags').insert({
          id: 14,
          name: 'disney'
        }),
        knex('tags').insert({
          id: 15,
          name: 'user research'
        }),
        knex('tags').insert({
          id: 16,
          name: 'unity3d'
        }),
        knex('tags').insert({
          id: 17,
          name: 'c#'
        }),
        knex('tags').insert({
          id: 18,
          name: 'prototyping'
        }),
        knex('tags').insert({
          id: 19,
          name: 'festival'
        }),
        knex('tags').insert({
          id: 20,
          name: 'sound design'
        }),
        knex('tags').insert({
          id: 21,
          name: 'narrative design'
        }),
        knex('tags').insert({
          id: 22,
          name: 'performance art'
        }),
        knex('tags').insert({
          id: 23,
          name: 'usc'
        }),
        knex('tags').insert({
          id: 24,
          name: 'serious game'
        }),
        knex('tags').insert({
          id: 25,
          name: 'maya'
        }),
        knex('tags').insert({
          id: 26,
          name: 'arduino'
        }),
        knex('tags').insert({
          id: 27,
          name: 'processing'
        }),
        knex('tags').insert({
          id: 28,
          name: 'java'
        }),
        knex('tags').insert({
          id: 29,
          name: 'kinect'
        }),
        knex('tags').insert({
          id: 30,
          name: 'dartmouth'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags))");
    });
};
