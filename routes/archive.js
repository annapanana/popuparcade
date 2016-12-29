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
          }),
        // Get Tags
        knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .innerJoin('projects', 'projects.id', 'projects_tags.project_id')
          .then((tag_results) => {
            let tags = [];
            for (let i = 0; i < tag_results.length; i++) {
              let tagPair = {
                // the name the tag
                tag_name: tag_results[i].tag_name,
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
                  newResult[j][thisTag] = tags[i].tag_name;
                }
              }
            }
            return newResult;
          })
      ])
      .then((allData) => { //QUESTION - why does it work to res.send here?
        var vettedData = [];
        for (var i = 0; i < allData.length; i++) {
          if (allData[i]) {
            vettedData.push(allData[i]);
          }
        }
        // NOTE - hardcoding the first entry may be buggy in the future
        res.send(vettedData[0]);
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
      let newResult = result[0];
      Promise.all([
        // Get Image Links
        knex('images')
          .where('project_id', id)
          .then((img_result) => {
            var images = [];
            for (var i = 0; i < img_result.length; i++) {
              images.push(img_result[i].url);
            }
            newResult.images = images;
            console.log(images);
          }),
        // Get Video Links
        knex('videos')
          .where('project_id', id)
          .then((vid_result) => {
            var videos = [];
            for (var i = 0; i < vid_result.length; i++) {
              videos.push(vid_result[i].url);
            }
            newResult.videos = videos;
          }),
          // Get Tags
          knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .where('project_id', id)
          .then((tag_result) => {
            let tags = [];
            for (let i = 0; i < tag_result.length; i++) {
              tags.push(tag_result[i].tag_name);
            }
            newResult.tags = tags;
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

router.post('/archive', (req, res, next) => {
  let newEntry = req.body;

  let newImagesEntry = [];
  // images must be passed as a string of urls sepatated by commas
  let imageSet = req.body.images.split(',');
  for (let i = 0; i < imageSet.length; i++) {
    let singleEntry = {
      project_id: null,
      url: imageSet[i]
    };
    newImagesEntry.push(singleEntry);
  }

  let newVideosEntry = [];
  // videos must be passed as a string of urls sepatated by commas
  let videoSet = req.body.videos.split(',');
  for (let i = 0; i < videoSet.length; i++) {
    let singleEntry = {
      project_id: null,
      url: videoSet[i]
    };
    newVideosEntry.push(singleEntry);
  }

  let tagSet = req.body.tags.split(',');

  //images - url, project_id, is_primary_gallery
  //videos - url, project_id
  //projects_tags - project_id from project insertion, tag_id (from tag name)

  // Delete images, videos and tags from new entry before pushing
  delete newEntry.images;
  delete newEntry.videos;
  delete newEntry.tags;
  knex('projects')
    .insert(newEntry, '*')
    .then((result) => {
      //populate ID for img/vids from projects entry
      let id = result[0].id;
      for (let i = 0; i < newImagesEntry.length; i++) {
        newImagesEntry[i].project_id = id;
      }
      for (let i = 0; i < newVideosEntry.length; i++) {
        newVideosEntry[i].project_id = id;
      }
      Promise.all([
        knex('images')
          .insert(newImagesEntry, '*')
          .then((img_result) => {
            // console.log("imgs", img_result);
          }),
        knex('videos')
          .insert(newVideosEntry, '*')
          .then((vid_result) => {
            // console.log("vids", vid_result);
          }),
        //get the ids of the tags according to their names from tags
        knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .whereIn('tag_name', tagSet)
          .then((tag_result) => {

            let newProjectsTagsEntry = [];
            for (var i = 0; i < tag_result.length; i++) {
              let singleEntry = {
                project_id: id,
                tag_id: tag_result[i].tag_id
              };
              newProjectsTagsEntry.push(singleEntry);
            }
            //push tag id and project id into project_tags
            knex('projects_tags')
              .insert(newProjectsTagsEntry, '*')
              .then((projects_tags_result) => {
                // console.log(projects_tags_result);
              })
              .catch((err) => {
                next(err);
              });
          })
          .catch((err) => {
            next(err);
          })
      ])
      .then(() => {
        // console.log("result", result[0]);
        res.send(result[0]);
      })
      .catch((err) => {
        next(err);
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/archive/:id', (req, res, next) => {
  const id = req.params.id;
  const {name, brief, description, type, role, page_url, live_link, date} = req.body;
  const updatedEntry = {name, brief, description, type, role, page_url, live_link, date};

  // TODO: Images, Videos and Tags functionality

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
