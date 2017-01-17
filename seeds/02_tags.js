'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          id: 1,
          tag_name: 'javascript'
        }),
        knex('tags').insert({
          id: 2,
          tag_name: 'htmlcss'
        }),
        knex('tags').insert({
          id: 3,
          tag_name: 'galvanize'
        }),
        knex('tags').insert({
          id: 4,
          tag_name: 'node'
        }),
        knex('tags').insert({
          id: 5,
          tag_name: 'psql'
        }),
        knex('tags').insert({
          id: 6,
          tag_name: 'express'
        }),
        knex('tags').insert({
          id: 7,
          tag_name: 'digital/physical'
        }),
        knex('tags').insert({
          id: 8,
          tag_name: 'print'
        }),
        knex('tags').insert({
          id: 9,
          tag_name: 'education'
        }),
        knex('tags').insert({
          id: 10,
          tag_name: 'freelance'
        }),
        knex('tags').insert({
          id: 11,
          tag_name: 'project management'
        }),
        knex('tags').insert({
          id: 12,
          tag_name: 'connected play'
        }),
        knex('tags').insert({
          id: 13,
          tag_name: 'disney'
        }),
        knex('tags').insert({
          id: 14,
          tag_name: 'user research'
        }),
        knex('tags').insert({
          id: 15,
          tag_name: 'unity3d'
        }),
        knex('tags').insert({
          id: 16,
          tag_name: 'c#'
        }),
        knex('tags').insert({
          id: 17,
          tag_name: 'prototyping'
        }),
        knex('tags').insert({
          id: 18,
          tag_name: 'festival'
        }),
        knex('tags').insert({
          id: 19,
          tag_name: 'sound design'
        }),
        knex('tags').insert({
          id: 20,
          tag_name: 'narrative design'
        }),
        knex('tags').insert({
          id: 21,
          tag_name: 'performance art'
        }),
        knex('tags').insert({
          id: 22,
          tag_name: 'usc'
        }),
        knex('tags').insert({
          id: 23,
          tag_name: 'serious game'
        }),
        knex('tags').insert({
          id: 24,
          tag_name: 'maya'
        }),
        knex('tags').insert({
          id: 25,
          tag_name: 'arduino'
        }),
        knex('tags').insert({
          id: 26,
          tag_name: 'processing'
        }),
        knex('tags').insert({
          id: 27,
          tag_name: 'java'
        }),
        knex('tags').insert({
          id: 28,
          tag_name: 'kinect'
        }),
        knex('tags').insert({
          id: 29,
          tag_name: 'dartmouth'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags))");
    });
};
