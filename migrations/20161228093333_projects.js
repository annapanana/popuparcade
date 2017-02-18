"use strict";
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.text('name').notNullable().defaultTo('no name');
    table.text('brief').notNullable().defaultTo('no brief');
    table.text('description').notNullable().defaultTo('no description');
    table.text('type').notNullable().defaultTo('no type');
    table.text('role').notNullable().defaultTo('no roll');
    table.text('date').notNullable().defaultTo('no date');
    table.text('live_link');
    table.text('featured_state');
    table.text('thumbnail').notNullable().defaultTo('https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg');
    table.text('banner_feature');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
