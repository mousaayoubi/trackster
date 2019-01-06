$(document).ready(function() {
  $("#btn-header").click(function() {
    Trackster.searchTracksByTitle($(".form-control.header").val());
  });
});

var API_KEY = "25b460cefc5e2f646c570f993ac29d97";

var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {
  /* var x = 0;
  var temp1 = result;
  var formattedHtml2 = 

  '<div class="row songs">' +
    '<div class="col-sm-1 play-icon">' +
      '<i class="far fa-play-circle"></i>' +
    '</div>' +
    '<div class="col-sm-3 songs-title">' +
    temp1.results.trackmatches.track[x].name +
    '</div>' +
    '<div class="col-sm-2 songs-title">' +
    temp1.results.trackmatches.track[x].artist +
    '</div>' +
    '<div class="col-sm-2 songs-title">' +
      'The Raincoats' +
    '</div>' +
    '<div class="col-sm-2 songs-title">' +
    temp1.results.trackmatches.track[x].listeners +
    '</div>' +
    '<div class="col-sm-2 songs-title">' +
      '3:01' +
    '</div>' +
  '</div>';
  $("#playlist").append(formattedHtml2); */

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
    success: function(result) {
      console.log(result);
      Trackster.renderTracks();
      var i = 0;
      var temp1 = result;
      var formattedHtml = "Track Name: " + temp1.results.trackmatches.track[i].name + "<br/>"+
      "Artist Name: " + temp1.results.trackmatches.track[i].artist + "<br/>"+
                      "URL: " + temp1.results.trackmatches.track[i].url;
                      "Image: " + temp1.results.trackmatches.track[i].image[1]["#text"];
  $("#results").append(formattedHtml);
    }
  });
};