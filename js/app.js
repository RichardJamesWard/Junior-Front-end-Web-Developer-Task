$(document).ready(function() {

  // On clcik, close prompt
  $("#reminder").on('click', function () {
    $("#reminder").hide()
  }); // end click


  // the AJAX Call
  let i = 0
  $("#imageDiv").on('click', '#image', function () {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var image = $("#image").attr("title");
    var flickrOptions = {
      tags: image,
      format: "json"
    };
    function displayPhotos(data) {
      if (i < data.items.length) {
        var photo = data.items[i].media.m.slice(0, -5) + "b.jpg";
        $('#imageDiv').html(`<img id="image" src="${photo}" title="${image}" alt="${image}">`);
        i = i +1;
      } else { 
        $('#imageDiv').html( ` <img id ="image" src="img/otter.jpg" title="${image}" alt="${image}">`);
        i = 0;
      }
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });  // end click

}); // end ready

    


