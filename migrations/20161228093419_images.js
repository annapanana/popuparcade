'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
    table.increments();
    table.text('url').notNullable().defaultTo('no url');
    table.integer('project_id').notNullable().references('id').inTable('projects');
    table.bool('is_primary_gallery').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
