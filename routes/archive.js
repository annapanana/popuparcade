'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/app/archive', (req, res, next) => {

  knex('projects')
    .orderBy('id')
    .then((result) => {
      let idArr = [];
      for (var i = 0; i < result.length; i++) {
        idArr.push(result[i].id);
      }
      Promise.all([
        // Get Image Links
        knex('images')
          .whereIn('project_id', idArr)
          .then((img_result) => {
            // For each result, create an array of images from the image results that match the project id
            for (var i = 0; i < result.length; i++) {
              result[i].images = img_result.filter((img) => {
                if (img.project_id === result[i].id) {
                  return img;
                }
              });
              // Extract only the URL from the image object stored in the image array
              result[i].images = result[i].images.map(img => img.image_url);
            }
          })
          .catch((err) => {
            next(err);
          }),
        // Get Video Links
        knex('videos')
          .whereIn('project_id', idArr)
          .then((vid_result) => {
            // For each result, create an array of videos from the video results that match the project id
            for (var i = 0; i < result.length; i++) {
              result[i].videos = vid_result.filter((vid) => {
                if (vid.project_id === result[i].id) {
                  return vid;
                }
              });
              // Extract only the URL from the video object stored in the video array
              result[i].videos = result[i].videos.map(vid => vid.video_url);
            }
          })
          .catch((err) => {
            next(err);
          }),
        // Get Tags
        knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .innerJoin('projects', 'projects.id', 'projects_tags.project_id')
          .then((tag_results) => {
            let tags = [];
            // Build an array of tag names paired with project ids
            for (let i = 0; i < tag_results.length; i++) {
              let tagPair = {
                tag_name: tag_results[i].tag_name,
                project_id: tag_results[i].project_id
              };
              tags.push(tagPair);
            }
            for (var i = 0; i < result.length; i++) {
              // For each result, create an array of tags from the tag pairs array that match the project id
              result[i].tags = tags.filter((tag) => {
                if (tag.project_id === result[i].id) {
                  return tag;
                }
              });
              // Extract only the name of the tag from the tag object stored in the tag array
              result[i].tags = result[i].tags.map(tag => tag.tag_name);
            }
            return result;
          })
      ])
      .then((allData) => {
        var vettedData = [];
        for (var i = 0; i < allData.length; i++) {
          if (allData[i]) {
            vettedData.push(allData[i]);
          }
        }
        // for (var i = 0; i < vettedData[0].videos.length; i++) {
        //   console.log(vettedData[0].videos[i]);
        // }
        // console.log("backend version of archive: ", vettedData[0]);
        // NOTE - hardcoding the first entry may be buggy in the future
        res.send(vettedData[0]);
      })
      .catch((err) => {
        next(err);
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/app/archive/:id', (req, res, next) => {
  const id = req.params.id;
  knex('projects')
    .where('id', id)
    .then((result) => {
      let idArr = [];
      for (var i = 0; i < result.length; i++) {
        idArr.push(result[i].id);
      }
      Promise.all([
        // Get Image Links
        knex('images')
          .whereIn('project_id', idArr)
          .then((img_result) => {
            // For each result, create an array of images from the image results that match the project id
            for (var i = 0; i < result.length; i++) {
              result[i].images = img_result.filter((img) => {
                if (img.project_id === result[i].id) {
                  return img;
                }
              });
              // Extract only the URL from the image object stored in the image array
              result[i].images = result[i].images.map(img => img.image_url);
            }
          })
          .catch((err) => {
            next(err);
          }),
        // Get Video Links
        knex('videos')
          .whereIn('project_id', idArr)
          .then((vid_result) => {
            // For each result, create an array of videos from the video results that match the project id
            for (var i = 0; i < result.length; i++) {
              result[i].videos = vid_result.filter((vid) => {
                if (vid.project_id === result[i].id) {
                  return vid;
                }
              });
              // Extract only the URL from the video object stored in the video array
              result[i].videos = result[i].videos.map((vid) => {
                return {url: vid.video_url, title: vid.video_title};
              });
            }
          })
          .catch((err) => {
            next(err);
          }),
        // Get Tags
        knex('tags')
          .innerJoin('projects_tags', 'tags.id', 'projects_tags.tag_id')
          .innerJoin('projects', 'projects.id', 'projects_tags.project_id')
          .then((tag_results) => {
            let tags = [];
            // Build an array of tag names paired with project ids
            for (let i = 0; i < tag_results.length; i++) {
              let tagPair = {
                tag_name: tag_results[i].tag_name,
                project_id: tag_results[i].project_id
              };
              tags.push(tagPair);
            }
            for (var i = 0; i < result.length; i++) {
              // For each result, create an array of tags from the tag pairs array that match the project id
              result[i].tags = tags.filter((tag) => {
                if (tag.project_id === result[i].id) {
                  return tag;
                }
              });
              // Extract only the name of the tag from the tag object stored in the tag array
              result[i].tags = result[i].tags.map(tag => tag.tag_name);
            }
            return result;
          })
      ])
      .then((allData) => {
        var vettedData = [];
        for (var i = 0; i < allData.length; i++) {
          if (allData[i]) {
            vettedData.push(allData[i]);
          }
        }
        // for (var i = 0; i < vettedData[0].videos.length; i++) {
        //   console.log(vettedData[0].videos[i]);
        // }
        // console.log("backend version of archive: ", vettedData[0]);
        // NOTE - hardcoding the first entry may be buggy in the future
        res.send(vettedData[0][0]);
      })
      .catch((err) => {
        next(err);
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/app/tags', (req, res, next) => {
  knex('tags')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/app/archive', (req, res, next) => {
  let newEntry = req.body;
  let newImagesEntry = [];
  // images must be passed as a string of urls sepatated by commas
  let imageSet = req.body.images.split(',');
  for (let i = 0; i < imageSet.length; i++) {
    let singleEntry = {
      project_id: null,
      image_url: imageSet[i]
    };
    newImagesEntry.push(singleEntry);
  }

  let newVideosEntry = [];
  // videos must be passed as a string of urls sepatated by commas
  let videoSet = req.body.videos.split(',');
  for (let i = 0; i < videoSet.length; i++) {
    let singleEntry = {
      project_id: null,
      video_url: videoSet[i]
    };
    newVideosEntry.push(singleEntry);
  }

  let tagSet = req.body.tags.split(',');
  // Data Structure:
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
      // Populate ID for img/vids from projects entry
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
          .whereIn('tag_name', tagSet)
          .then((tag_result) => {
            let newProjectsTagsEntry = [];
            console.log(tag_result);
            for (var i = 0; i < tag_result.length; i++) {
              let singleEntry = {
                project_id: id,
                tag_id: tag_result[i].id
              };
              newProjectsTagsEntry.push(singleEntry);
            }
            //push tag id and project id into project_tags
            knex('projects_tags')
              .insert(newProjectsTagsEntry, '*')
              .then((projects_tags_result) => {
                console.log("!!!",projects_tags_result);
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

router.patch('/app/images/:id', (req, res, next) => {
  const id = req.params.id;
  const images = req.body.images;
  let imageSet = images.split(',');

  // Delete all images associated with this project ID
  knex('images')
    .where('project_id', id)
    .del()
    .then(() => {
      // Format objects to be inserted into images
      let newEntries = [];
      for (var i = 0; i < imageSet.length; i++) {
        if (imageSet[i] !== "") {
          newEntries.push({
            image_url: imageSet[i],
            project_id: id,
            is_primary_gallery: false
          });
        }
      }
      // Insert set of new images for this project ID
      knex('images')
        .insert(newEntries, '*')
        .then((result) => {
          console.log(result);
          res.send(result);
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/app/project-tags/:id', (req, res, next) => {
  const id = req.params.id;
  const tags = req.body.tags;
  let tagSet = req.body.tags.split(',');

  // Remove all instances of this project ID and associated tags
  knex('projects_tags')
    .where('project_id', id)
    .del()
    .then(() => {
      // Insert a new instance of project ID with tag ID for each result from the tags query
      knex('tags')
        .whereIn('tag_name', tagSet)
        .then((result) => {
          // console.log(result);
          // Create formatted object for projects/tags table
          let newEntries = [];
          for (var i = 0; i < result.length; i++) {
            let singleEntry = {
              project_id: id,
              tag_id: result[i].id
            };
            newEntries.push(singleEntry);
          }
          // Insert new project/tag pairs
          knex('projects_tags')
            .insert(newEntries, '*')
            .then((result) => {
              res.send(result);
            })
            .catch((err) => {
              next(err);
            });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/app/archive/:id', (req, res, next) => {
  const id = req.params.id;
  const {name, brief, description, type, role, page_url, live_link, date} = req.body;
  const updatedEntry = {name, brief, description, type, role, page_url, live_link, date};
  // console.log(req.body);
  // console.log(updatedEntry);
  // TODO: Images, Videos and Tags functionality
  // console.log(tags);
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

router.delete('/app/archive/:id', (req, res, next) => {
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
