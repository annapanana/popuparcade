'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 1
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_tags_id_seq', (SELECT MAX(id) FROM projects_tags))");
    });
};
