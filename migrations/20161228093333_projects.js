"use strict";
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.text('name').notNullable().defaultTo('no name');
    table.text('brief').notNullable().defaultTo('no brief');
    table.text('description').notNullable().defaultTo('no description');
    table.text('type').notNullable().defaultTo('no type');
    table.text('page_url').notNullable().defaultTo('no url');
    table.text('role').notNullable().defaultTo('no roll');
    table.text('date').notNullable().defaultTo('no date');
    table.text('live_link');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
