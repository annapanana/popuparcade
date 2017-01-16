'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', table => {
    table.increments();
    table.integer('project_id').notNullable().references('id').inTable('projects').onDelete('CASCADE').index();
    table.text('video_url').notNullable().defaultTo('no url');
    table.text('video_title').notNullable().defaultTo('no title');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('videos');
};
