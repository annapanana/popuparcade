'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/archive', (req, res, next) => {

  knex('projects')
    .orderBy('id')
    .then((result) => {
      let newResult = result;
      let idArr = [];
      for (var i = 0; i < result.length; i++) {
        idArr.push(result[i].id);
      }
      Promise.all([
        // Get Image Links
        knex('images')
          .whereIn('project_id', idArr) //select more than one id?
          .then((img_result) => {
            for (var i = 0; i < img_result.length; i++) {
              // if the project_id on this img_result, matches the id on a newResult, add the URL of this image to that new Result
              for (var j = 0; j < newResult.length; j++) {
                if (img_result[i].project_id === newResult[j].id) {
                  let thisImg = "image_url" + i;
                  //TODO add all img to proj as an array
                  newResult[j][thisImg] = img_result[i].url;
                }
              }
            }
            // console.log(newResult);
          })
          .catch((err) => {
            next(err);
          }),
        // Get Video Links
        knex('videos')
          .whereIn('project_id', idArr)
          .then((vid_result) => {
            for (var i = 0; i < vid_result.length; i++) {
              for (var j = 0; j < newResult.length; j++) {
                if (vid_result[i].project_id === newResult[j].id) {
                  let thisVid = "video_url" + i;
                  //TODO add all vids to proj as an array
                  newResult[j][thisVid] = vid_result[i].url;
                }
              }
            }
            // console.log(newResult);
          }),
        // // Get Tags
        knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .innerJoin('projects', 'projects.id', 'projects_tags.project_id')
          .then((tag_results) => {
            // console.log(tag_results);
            let tags = [];
            for (let i = 0; i < tag_results.length; i++) {
              let tagPair = {
                // the name the tag
                name: tag_results[i].tag_name,
                // project id
                project_id: tag_results[i].project_id
              };
              tags.push(tagPair);
            }

            for (let i = 0; i < tags.length; i++) {
              for (let j = 0; j < newResult.length; j++) {
                if(tags[i].project_id === newResult[j].id) {
                  let thisTag = "tag_" + i;
                  //TODO add all tags to proj as an array
                  newResult[j][thisTag] = tags[i].name;
                }
              }
            }
            return newResult;
          })
      ])
      .then((allData) => {
        res.send(allData);
      });
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
