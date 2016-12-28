'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/archive', (req, res, next) => {
  knex('projects')
    .orderBy('id')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/archive/:id', (req, res, next) => {
  const id = req.params.id;
  knex('projects')
    .where('id', id)
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/archive', (req, res, next) => {
  let newEntry = req.body;

  knex('projects')
    .insert(newEntry, '*')
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/archive/:id', (req, res, next) => {
  const id = req.params.id;
  const {name, brief, description, type, role, page_url, live_link, date} = req.body;
  const updatedEntry = {name, brief, description, type, role, page_url, live_link, date};

  knex('projects')
    .where('id', id)
    .update(updatedEntry, '*')
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/archive/:id', (req, res, next) => {
  const id = req.params.id;
  knex('projects')
    .where('id', id)
    .del(('*'))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
