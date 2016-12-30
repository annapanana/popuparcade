'use strict';

// const Handlebars = require('handlebars');
var currentEntry = null;

$(function() {
  getArchive();
  // $('#textarea1').val('New Text');
  // $('#textarea1').trigger('autoresize');

  $('.modal').modal();

  $("#archive_container").click(function(e) {
    editEntry(e.target);
  });
  //
  $("#new_entry").click(function() {
    addEntry();
  });
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

function addEntry() {
  let emptyContent = {};
  let render_modal = render("create_modal", emptyContent);
  let modalHTML = Handlebars.compile (render_modal);
  $("#create_modal").append(modalHTML(emptyContent));
  $("#create_entry").click(function() {
    // Get reference to and save vals
  });
}

function editEntry(target) {
  $("#edit_modal").children().remove();

  var content = {
    cell_content: $(target).text(),
    entry_id: $(target).parent().parent().attr("id")
  };
  let render_modal = render("edit_modal", content);
  let modalTemplate = Handlebars.compile(render_modal);
  $("#edit_modal").append(modalTemplate(content));

  $("#save_entry").click(function() {
    let newContent = $("#cell_content").val();
    // Save edited field in web GUI
    $(target).text(newContent);
    // Save all fields for this entry in db
    let data = {
      id: getIntFromId(content.entry_id), // reference just id num
      content: "newContent",
      content_type: $(target).parent().attr("class")
    };
    updateEntry(data);
  });
}

function updateEntry(data) {
  //PATCH REQUEST
  console.log('patch', data);
  var content_type = data.content_type;
  $.ajax({
    type: 'PATCH',
    url: '/archive/' + data.id,
    content_type: 'application/json',
    data: JSON.stringify({
      content_type: data.content
    }),
    success: function(result) {
      console.log('patch successful!', result);
      getArchive();
      currentEntry = null;
    },
    fail: function(err) {
      console.error('error...', err);
    }
  });
}

function deleteEntry(target) {
  //DELETE REQUEST
  let id = getIntFromId($(target).parent().parent().attr('id'));
  let url = '/archive/' + id
  // TODO trigger pop-up before deleting
  $.ajax({
    type: 'DELETE',
    url: url,
    success: function(result) {
      console.log('delete successful!', result);
      getArchive();
    },
    fail: function(err) {
      console.error(err);
    }
  });
}

function getIntFromId(str) {
  return parseInt(str.slice(6, str.length)); //remove "entry_"
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
