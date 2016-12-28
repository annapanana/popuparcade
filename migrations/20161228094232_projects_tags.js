'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_tags', table => {
    table.increments();
    table.integer('project_id').notNullable().references('id').inTable('projects');
    table.integer('tag_id').notNullable().references('id').inTable('tags');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects_tags');
};
