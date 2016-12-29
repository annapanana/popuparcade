'use strict';

var currentEntry;

$(function() {
  getArchive();
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

  $('.modal').modal();

  $("#archive_container").click(function(e) {
    openModal(e.target);
  });

  $("#save_entry").click(function() {
    updateEntry();
  });
});


function getArchive() {
  //GET REQUES
  $.ajax({
    type: 'GET',
    url: '/archive',
    success: function(result) {
      $("#archive_container").children().remove();
      for (var i = 0; i < result.length; i++) {
        displayEntry(result[i])
      }
      console.log(result);
      $(".delete-button").click(function(e) {
        deleteEntry(e.target);
      });
    }
  });
}

function displayEntry(entryContent) {
  var newEntry =
  `<div class="col s4 l4 message-card" id="message_`+entryContent.id+`">
    <div class="card-panel blue darken-1">
      <div class="right">
        <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i class="material-icons delete-button" id=`+entryContent.id+`>delete</i></a>
        <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i class="material-icons edit-button" id=`+entryContent.id+` data-target="modal1">edit</i></a>
      </div>
        <span class="white-text"><h5>`+entryContent.name+`</h5></span>
        <span class="white-text">`+entryContent.brief+`</span>
        <br>
    </div>
  </div>`;

  $("#archive_container").append(newEntry);
}

function addEntry() {
  //POST REQUEST
}

function openModal(target) {
  let id = '/archive/' + $(target).attr('id');
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

function updateEntry(target) {
  //PATCH REQUEST
  console.log("update entry");
  let newName = $("#entry_name").val();
  let newBrief = $("#entry_brief").val();
  let newDescription = $("#entry_description").val();
  let newRole = $("#entry_role").val();
  let newDate = $("#entry_date").val();
  let newLink = $("#entry_live_link").val();

  $.ajax({
    type: 'PATCH',
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
    },
    fail: function(err) {
      console.error('error...', err);
    }
  })
}

function deleteEntry() {
  //DELETE REQUEST
}
