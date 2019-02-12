console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

const handleSuccess = json => {
  // array to render
  const albums = json;
  let outputHtml = `<ul>`;
  albums.forEach (album => {
    outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
  });
  outputHtml += '</ul>';
  $('#albumTarget').html(outputHtml);
}

});  // code in here

