'use strict';

// const Handlebars = require('handlebars');
var currentEntry = null;
var tempData = {
  name:"Stone Soup",
  date: "November, 2016",
  role: "Designer/Developer",
  brief: "A project about soup",
  description: "A longer project about soup",
  live_link: "stonesoup.com",
  type: "game",
  tags: [{tag:"ios"}, {tag:"game"}],
  images: [{image:"img1"}, {image:"img2"}],
  videos: [{video:"vid1"}, {video:"vid2"}]
};
var rowTemplate;

$(function() {
  // getArchive();
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

  // Handlebars
  var render_content_row = render("admin_entry", tempData);
  rowTemplate = Handlebars.compile (render_content_row);
  // $("#archive_container").append(rowTemplate(tempData));
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
  var newEntry =
  `<div class="col s12 m12 l6 message-card" id="message_`+entryContent.id+`">
    <div class="card-panel teal lighten-2">
      <div class="right">
        <a class="btn-floating btn-large waves-effect waves-light teal lighten-1"><i class="material-icons delete-button" id=`+entryContent.id+`>delete</i></a>
        <a class="btn-floating btn-large waves-effect waves-light teal lighten-1"><i class="material-icons edit-button" id=`+entryContent.id+` data-target="modal1">edit</i></a>
      </div>
        <span class="white-text"><h5>`+entryContent.name+`</h5></span>
        <br>
        <h6 class="white-text">Brief:</h6>
        <span class="white-text">`+entryContent.brief+`</span>
        <br>
        <br>
        <h6 class="white-text">Description:</h6>
        <span class="white-text">`+entryContent.description+`</span>
        <br>
        <br>
        <h6 class="white-text">Role:</h6>
        <span class="white-text">`+entryContent.role+`</span>
        <br>
        <br>
        <h6 class="white-text">Date:</h6>
        <span class="white-text">`+entryContent.date+`</span>
        <br>
        <br>
        <h6 class="white-text">Live Link:</h6>
        <span class="white-text">`+entryContent.live_link+`</span>
        <br>
    </div>
  </div>`;

  $("#archive_container").append(rowTemplate(tempData));
}

// function addEntry() {
//   //POST REQUEST
//   openModal();
// }

function openModal(target) {
  console.log($(target).attr("id"));
  if ($(target).attr("id") === "new_entry") {
      //Set Header to Create Entry
      $("#modal_header").text("Add New Entry");
  } else {
    //Set Header to Edit Entry
    populateModal(target);
    $("#modal_header").text("Edit Entry");
  }
  // if (target === "")
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
