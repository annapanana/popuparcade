'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/archive', (req, res, next) => {
  knex('projects')
    .orderBy('id')
    .then((result) => {
      let newResult = []; 
      for (var i = 0; i < result.length; i++) {
        console.log(i);
        let curResult = result[i];
        Promise.all([
          // Get Image Links
          knex('images')
            .where('project_id', curResult.id)
            .then((img_result) => {
              let images = [];
              for (var i = 0; i < img_result.length; i++) {
                images.push(img_result[i].url);
              }
              curResult.project_images = images;
            })
            .catch((err) => {
              next(err);
            }),
          // Get Video Links
          knex('videos')
            .where('project_id', curResult.id)
            .then((video_result) => {
              let videos = [];
              for (var i = 0; i < video_result.length; i++) {
                videos.push(video_result[i].url);
              }
              curResult.project_videos = videos;
            })
            .catch((err) => {
              next(err);
            }),
          // Get Tags
          knex('tags')
            .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
            .then((tag_results)  => {
              let tags = [];
              for (var i = 0; i < tag_results.length; i++) {
                tags.push(tag_results[i].name);
              }
              curResult.project_tags = tags;
            })
            .catch((err) => {
              next(err);
            })
        ])
        .then(() => {
          console.log(curResult);
          newResult.push(curResult);
        });
      }
      res.send(newResult);
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
