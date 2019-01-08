$(document).ready(function() {
  $(".form-control.header").keypress(function(e) {
    if (e.which == 13) {
      $("#results").empty();
      Trackster.searchTracksByTitle($(".form-control.header").val());
      return false;
    }
  })

  $("#btn-header").click(function() {
    $("#results").empty();
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
      console.log(result);
      Trackster.renderTracks();
      var result_obj = result;
      var n = result_obj.results.trackmatches.track.length;
      console.log(n);
      for (var i = 0; i < n; i++) {
        var album = result_obj.results.trackmatches.track[i].image[1]["#text"];
        var formattedHtml = 
        '<a target=_blank href=' + result_obj.results.trackmatches.track[i].url + 
        '><div class="row songs" id="results" style="border-bottom-style: solid;' +
        'border-bottom-width: 1px; border-bottom-color: rgb(204, 204, 204);">' +
        '<div class="col-sm-1 play-icon">' +
        '<i class="far fa-play-circle"></i>' +
        '</div>' +
        '<div class="col-sm-4 songs-title">' +
        result_obj.results.trackmatches.track[i].name +
        '</div>' +
        '<div class="col-sm-3 songs-title">' +
        result_obj.results.trackmatches.track[i].artist +
        '</div>' +
        '<div class="col-sm-2 songs-title">' +
        "<img src= " + album + ">" +
        '</div>' +
        '<div class="col-sm-2 songs-title">' +
        numeral(result_obj.results.trackmatches.track[i].listeners).format('0, 0') +
        '</div>' +
        '</div>' + 
        '</a>';            
        $("#results").append(formattedHtml);
      }
    }
  });
};