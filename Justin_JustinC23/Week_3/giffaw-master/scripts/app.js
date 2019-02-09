var queryURL = 'http://api.giphy.com/v1/gifs/search?q=&api_key=5Gn9M4KG9WUWt8UzRFMo5Lo39L1Bi9vp';
    var key = '&api_key=5Gn9M4KG9WUWt8UzRFMo5Lo39L1Bi9vp';

  $(document).ready(function(){
  // code in here!
  console.log("here's your data:");
});

  $('form-inline').on('submit', function(e) {
    //prevent default action of button
  e.preventDefault();

let userInput = $('.gif-input').val();

  $.ajax({
    method: "GET",
    url: 'queryURL' + 'userInput',
    success: gifSuccess,
    error: handleError


let gifList = response.data;
let gifs = gifdata.images.original.url;
$('.search_button').on('click', function(){
});


for (gifs of ` )

    gifHTML = `<div class = "gif-gallery">
    <img src="${gif.images.original.url}" alt="${ gif.title }">
    </div>
 }

function handleError(e1){
  console.log(e1);
}

   });


