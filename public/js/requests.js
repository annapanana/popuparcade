'use strict';

// const Handlebars = require('handlebars');
var currentEntry = null;

$(function() {

  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

  $('.modal').modal();

  $("#archive_container").click(function(e) {
    openModal(e.target);
  });

  $("#save_entry").click(function() {
    updateEntry();
  });

  $("#new_entry").click(function(e) {
    openModal(e.target);
  });

  getArchive();
});


function getArchive() {
  //GET REQUEST
  $.ajax({
    type: 'GET',
    url: '/archive',
    success: function(result) {
      console.log(result);

      $("#archive_container").children().remove();
      for (var i = 0; i < result.length; i++) {
        displayEntry(result[i]);
      }

      $(".delete-button").click(function(e) {
        deleteEntry(e.target);
      });
    }
  });
}

function displayEntry(entryContent) {

  // Reformat arrays to be objects for populating template
  let tags = entryContent.tags.map((t) => {
    return {tag:t};
  });
  let images = entryContent.images.map((i) => {
    return {image:i};
  });
  let videos = entryContent.images.map((v) => {
    return {video:v};
  });

  entryContent.entry_id = "entry_" + entryContent.id;
  entryContent.tags = tags;
  entryContent.images = images;
  entryContent.videos = videos;

  // Handlebars
  let render_content_row = render("admin_entry", entryContent);
  let rowTemplate = Handlebars.compile (render_content_row);
  $("#archive_container").append(rowTemplate(entryContent));
}

// function addEntry() {
//   //POST REQUEST
//   openModal();
// }

function openModal(target) {
  console.log("open modal", target);
}

function populateModal(curId) {
  let id = '/archive/' + $(curId).attr('id');
  currentEntry = id;
  $.ajax({
    type: 'GET',
    url: id,
    contentType: 'application/json',
    success: function(result) {
      console.log(result);

      $("#entry_name").val(result.name);
      $("#entry_brief").val(result.brief);
      $("#entry_description").val(result.description);
      $("#entry_role").val(result.role);
      $("#entry_date").val(result.date);
      $("#entry_live_link").val(result.live_link);

    },
    fail: function(err) {
      console.error(err);
    }
  });
}

function updateEntry() {
  //PATCH REQUEST

  console.log("update entry");
  let newName = $("#entry_name").val();
  let newBrief = $("#entry_brief").val();
  let newDescription = $("#entry_description").val();
  let newRole = $("#entry_role").val();
  let newDate = $("#entry_date").val();
  let newLink = $("#entry_live_link").val();
  let requestType;
  if (currentEntry !== null) {
    requestType = 'PATCH';
  } else {
    requestType = 'POST';
    currentEntry = '/archive';
  }
  $.ajax({
    type: requestType,
    url: currentEntry,
    contentType: 'application/json',
    data: JSON.stringify({
      name: newName,
      brief: newBrief,
      description: newDescription,
      role: newRole,
      date: newDate,
      live_link: newLink
    }),
    success: function(result) {
      console.log('patch successful!', result);
      getArchive();
      currentEntry = null;
    },
    fail: function(err) {
      console.error('error...', err);
    }
  })
}

function deleteEntry(target) {
  //DELETE REQUEST
  let id = '/archive/' + $(target).attr('id');
  $.ajax({
    type: 'DELETE',
    url: id,
    success: function(result) {
      console.log('delete successful!', result);
      getArchive();
    },
    fail: function(err) {
      console.error(err);
    }
  });
}

//Handlebars
function render(tmpl_name, tmpl_data) {

  if ( !render.tmpl_cache ) {
    render.tmpl_cache = {};
  }
  if ( ! render.tmpl_cache[tmpl_name] ) {
    var tmpl_dir = '/templates';
    var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';
    var tmpl_string;
    $.ajax({
      url: tmpl_url,
      method: 'GET',
      async: false,
      success: function(data) {
        tmpl_string = data;
      },
      fail: function(err) {
        console.error(err);
      }
    });
    render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
  }
  return render.tmpl_cache[tmpl_name](tmpl_data);
}
