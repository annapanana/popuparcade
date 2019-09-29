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
          tag_name: 'uplight'
        }),
        knex('tags').insert({
          id: 5,
          tag_name: 'zayo'
        }),
        knex('tags').insert({
          id: 6,
          tag_name: 'data-viz'
        }),
        knex('tags').insert({
          id: 7,
          tag_name: 'typescript'
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
          id: 11,
          tag_name: 'project management'
        }),
        knex('tags').insert({
          id: 12,
          tag_name: 'react'
        }),
        knex('tags').insert({
          id: 13,
          tag_name: 'angular'
        }),
        knex('tags').insert({
          id: 14,
          tag_name: 'angularJS'
        }),
        knex('tags').insert({
          id: 15,
          tag_name: 'C3JS'
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags))");
    });
};
