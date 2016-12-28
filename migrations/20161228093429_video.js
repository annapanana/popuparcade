'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', table => {
    table.increments();
    table.integer('project_id').notNullable().references('id').inTable('projects');
    table.text('url').notNullable().defaultTo('no url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('videos');
};
