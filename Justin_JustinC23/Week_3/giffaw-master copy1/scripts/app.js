$( document ).ready(function(){
var giphyApiUrl = "https://www.api.giphy.com/v1/gifs/search"; //var to api
var giphyTrendingUrl = "https://www.api.giphy.com/v1/gifs/trending";
var key = '5Gn9M4KG9WUWt8UzRFMo5Lo39L1Bi9vp'


$('form').on('submit', function(e) {
  e.preventDefault();    //prevent default of action bc adding functionality to form

  var gifs = $('q').val(); //saving gif value to variable

  request.onload = function() {

  $.ajax({       //sending get request
      method: 'GET',
      url: giphyApiUrl + $('#gifs'),
      success: function(data) {
        console.log(data);

function gifSuccess ( response ) { //gets response object back
  console.log(response);
  var giphyURL = response.data[0].images;
  console.log(giphyURL)

  var gifItem = <li>
                  ${giphyURL.images.url}
                  </li>

 $('.gif-gallery').append(gifItem);
  //$('#gif-gallery').append(giphyURL);

//let giphyName = $(#giphy).val(); grabbing value?
});



