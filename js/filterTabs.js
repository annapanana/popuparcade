"use strict";

var protoEntry = {
  filepath: "test file path",
  projectTitle: "test title",
  briefContent: "test content",
  tags: ["tag1", "tag2", "tag3"]
}
$(function() {
  console.log("ready");
  var allContainer = $("#all");
  var webContainer = $("#web");
  var gamesContainer = $("#games");
  var sandboxContainer = $("sandbox");

});

function newColumn(entry) {
  var newEntry = "";
  var newColumn = "<div class ='col s12 m6 l4'></div>";
  var newCard = "<div class='card'></div>";
  var newImageContainer = "<div class='card-image waves-effect waves-block waves-light'></div>";
  var newImage = "<img class='activator thumb' src='"+filePath+"'>";
  var newCardContentContainer = "<div class='card-content'></div>";
  var newCardContent = "<span class='card-title activator grey-text text-darken-4'"+projectTitle+"<i class='material-icons right'>more_vert</i></span>";
  var newCardReveal = "<div class='card-reveal'>";
  var newRow = "<div class='row'>";
  var newRevealTitle = "<span class='card-title grey-text text-darken-4'>"+projectTitle+"<i class='material-icons right'>close</i></span>";
  var projectBrief = "<p>"+briefContent+"</p>";
  //TODO this will need to be in a for loop to check how many tags are included
  var newTag = "<div class='chip'>"+tag+"</div>";
  var viewProjButton = "<a class='waves-effect waves-light btn teal lighten-3'>view project</a>";
  return newEntry;
}
// <div class="col s12 m6 l4">
//   <div class="card">
//     <div class="card-image waves-effect waves-block waves-light">
//       <img class="activator thumb" src="img/thumbs/StoneSoup_Thumb.png">
//     </div>
//     <div class="card-content">
//       <span class="card-title activator grey-text text-darken-4">Project Title<i class="material-icons right">more_vert</i></span>
//     </div>
//     <div class="card-reveal">
//       <div class="row">
//         <span class="card-title grey-text text-darken-4">Project Title<i class="material-icons right">close</i></span>
//         <p>Here is some more information about this product that is only revealed once clicked on.</p>
//         <div class="chip">tag</div>
//         <div class="chip">tag</div>
//         <div class="chip">tag</div>
//         <div class="chip">tag</div>
//       </div>
//       <div class="row">
//         <a class="waves-effect waves-light btn teal lighten-3">view project</a>
//       </div>
//     </div>
//   </div>
// </div>
