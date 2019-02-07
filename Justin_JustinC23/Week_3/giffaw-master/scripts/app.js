var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + '&api_key=5Gn9M4KG9WUWt8UzRFMo5Lo39L1Bi9vp';

  $(document).ready(function(){
    var key = '&api_key=5Gn9M4KG9WUWt8UzRFMo5Lo39L1Bi9vp';
  // code in here!
  console.log("here's your data:");
});

  $('form-inline').on('submit', function(e) {
  e.preventDefault();

let gifs = gifs.data[0].images;
$('.search_button').on('click', function(){
});

let userInput =  $('.form-control gif-input').val();
    //grab user value from input field


  $.ajax({
    method: "GET",
    url: 'queryURL' + 'userInput',
    success: gifSuccess,
    error: gifError
   });
});





function gifSuccess(gifs){
  console.log(gifs);
    gifs.images.forEach(function(gif){
      $('.gif-gallery').append(`<img src=${gifs}<img/>`);
  });
  $('.gif-input').val("");
}

function handleError(e1, e2, e3){
  console.log(e1);
  console.log(e2);
  console.dir(e3);
}

