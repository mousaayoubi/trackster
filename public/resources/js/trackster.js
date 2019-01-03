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

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
    success: function(result) {
      console.log("Connection to last.fm API is successfull");
    }
  });
};