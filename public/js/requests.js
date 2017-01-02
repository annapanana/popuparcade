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
      return result;
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

function addEntry() {
  let emptyContent = {};
  let render_modal = render("create_modal", emptyContent);
  let modalHTML = Handlebars.compile (render_modal);
  $("#create_modal").children().remove();
  $("#create_modal").append(modalHTML(emptyContent));

  $("#add_image").click(function() {
    let newImageInput = `<input class="text-input" type="text" name="image_url" value="">
    <label for="image_url">Image URL</label>`;
    $("#image_container").append(newImageInput);
  });

  $("#add_video").click(function() {
    let newVideoInput = `<input class="text-input" type="text" name="video_url" value="">
    <label for="video_url">Video URL</label>`;
    $("#video_container").append(newVideoInput);
  });

  $("#create_entry").click(function() {
    let imageVals = '';
    let imageInputs = $("input[name='image_url']");
    for (let i = 0; i < imageInputs.length; i++) {
      imageVals+=$(imageInputs[i]).val() +',';
    }
    let videoVals = '';
    let videoInputs = $("input[name='video_url']");
    for (let i = 0; i < videoInputs.length; i++) {
      videoVals+=$(videoInputs[i]).val()+',';
    }

    let tagVals = '';
    let tagInputs = $("input[name='tag']:checked");
    for (var i = 0; i < tagInputs.length; i++) {
      tagVals+=$(tagInputs[i]).val()+',';
    }

    // Get reference to and save vals
    var newEntry = {
      name: $("#name").val(),
      date: $("#date").val(),
      role: $("#role").val(),
      brief: $("#brief").val(),
      description: $("#description").val(),
      type: $("input[name='type']:checked").val(),
      live_link: $("#live_link").val(),
      tags: tagVals,
      images: imageVals,
      videos: videoVals
    };
    console.log(newEntry);
    $.ajax({
      type: 'POST',
      url: '/archive',
      content_type: 'application/json',
      data: newEntry,
      success: function(result) {
        console.log('post successful!', result);
        getArchive();
      },
      fail: function(err) {
        console.error('error...', err);
      }
    })
  });
}

function editEntry(target) {
  $("#edit_modal").children().remove();
  // Trigger different modal depending on content type
  switch ($(target).attr("name")) {
    case "text_field":
      editText(target);
      break;
    case "type_field":
      editRadio(target, "edit_modal_type");
      break;
    case "tag_field":
      editRadio(target, "edit_modal_tags");
      break;
    case "list_field":
      editList(target);
      break;
    default:
      console.error("form type not valid");
  }
}

function editText(target) {
  // Check the entry type: text, radio, list
  let content = {
    cell_content: $(target).text(),
    entry_id: $(target).parent().parent().attr("id")
  };

  let render_modal = render('edit_modal_text', content);
  let modalTemplate = Handlebars.compile(render_modal);
  $("#edit_modal").append(modalTemplate(content));
  $("#save_entry").click(function() {
    let newContent = $("#cell_content").val();
    // Save edited field in web GUI
    $(target).text(newContent);
    // Save all fields for this entry in db
    let data = {
      id: getIntFromId(content.entry_id), // reference just id num
      content: newContent,
      content_type: $(target).parent().attr("class")
    };
    updateEntry(data);
  });
}

function editRadio(target, modal_template) {

  // Get the ID of the nearest parent with an entry ID
  let allTr = $("tr");
  let parentID = "";
  for (var i = 0; i < allTr.length; i++) {
    if (allTr[i].contains( target )) {
      parentID = $(allTr[i]).attr("id");
    }
  }

  // Execute modal functionality after grabbing tag names from the server
  $.ajax({
    type: 'GET',
    url: '/tags',
    success: function(result) {
      let tags = result.map((t) => {
        return {tag:t.tag_name};
      });
      let content = {
        entry_id: parentID,
        tagNames: tags
      };

      let render_modal = render(modal_template, content); // type or tags
      let modalTemplate = Handlebars.compile(render_modal);
      $("#edit_modal").append(modalTemplate(content));
      //TODO if something has been selected, apply the selection to the modal

      $("#save_entry").click(function() {
        let newContent = '';
        $('input:radio').each(function() {
          if($(this).prop('checked')) {
            newContent+=($(this).attr('id'))+",";
          }
        });
        console.log(newContent);
        // Save edited field in web GUI
        $(target).text(newContent);
        // Save all fields for this entry in db
        let data = {
          id: getIntFromId(content.entry_id), // reference just id num
          // content_type: 'application/json',
          content: newContent,
          content_type: $(target).parent().attr("class")
        };
        updateEntry(data);
      });
    },
    fail: function(err) {
      console.error(err);
    }
  });
}

function editList(target) {

}

function updateEntry(data) {
  //PATCH REQUEST
  // console.log('patch', data);
  var field_select = data.content_type;
  var updatedField = {
    [field_select]: data.content
  };
  console.log(updatedField);
  $.ajax({
    type: 'PATCH',
    url: '/archive/' + data.id,
    content_type: 'application/json',
    data: updatedField,
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
