'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 7
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 1
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 2
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 3
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 14
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 9
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 16
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 17
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 19
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_tags_id_seq', (SELECT MAX(id) FROM projects_tags))");
    });
};
