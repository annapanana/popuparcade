'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          name: 'javascript'
        }),
        knex('tags').insert({
          name: 'html/css'
        }),
        knex('tags').insert({
          name: 'galvanize'
        }),
        knex('tags').insert({
          name: 'node'
        }),
        knex('tags').insert({
          name: 'psql'
        }),
        knex('tags').insert({
          name: 'express'
        }),
        knex('tags').insert({
          name: 'digital/physical'
        }),
        knex('tags').insert({
          name: 'print'
        }),
        knex('tags').insert({
          name: 'education'
        }),
        knex('tags').insert({
          name: 'freelance'
        }),
        knex('tags').insert({
          name: 'project management'
        }),
        knex('tags').insert({
          name: 'connected play'
        }),
        knex('tags').insert({
          name: 'freelance'
        }),
        knex('tags').insert({
          name: 'disney'
        }),
        knex('tags').insert({
          name: 'user research'
        }),
        knex('tags').insert({
          name: 'unity3d'
        }),
        knex('tags').insert({
          name: 'c#'
        }),
        knex('tags').insert({
          name: 'prototyping'
        }),
        knex('tags').insert({
          name: 'festival'
        }),
        knex('tags').insert({
          name: 'sound design'
        }),
        knex('tags').insert({
          name: 'narrative design'
        }),
        knex('tags').insert({
          name: 'performance art'
        }),
        knex('tags').insert({
          name: 'usc'
        }),
        knex('tags').insert({
          name: 'serious game'
        }),
        knex('tags').insert({
          name: 'maya'
        }),
        knex('tags').insert({
          name: 'arduino'
        }),
        knex('tags').insert({
          name: 'processing'
        }),
        knex('tags').insert({
          name: 'java'
        }),
        knex('tags').insert({
          name: 'kinect'
        }),
        knex('tags').insert({
          name: 'dartmouth'
        })
      ]);
    });
};
