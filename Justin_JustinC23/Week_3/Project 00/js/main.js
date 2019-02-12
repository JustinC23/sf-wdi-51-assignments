$(function(){
  var items = (Math.floor(Math.random() * ($('#testimonials li').length))); //multiply our randomly generated number by another number, it will range from 0 to a maximum of 1 lower than the number being multiplied by (as Math.floor() simply removes the decimal places rather than rounding the number (that is to say, 0.999 becomes 0 when processed with Math.floor(), not 1)).
  $('#testimonials li').hide().eq(items).show();   //shows list items constructs new item with items


  function next(){
    $('#testimonials li:visible').delay(4000).fadeOut('slow',function(){
      $(this).appendTo('#testimonials ul');
      $('#testimonials li:first').fadeIn('slow',next);
    });
   }
  next();
});

$("#lightbox_trigger").click(function(){
  $("#lightbox").show();
});

$(function() {

    $(".nav-item").on('click', function() {
        $("h3").css('text-decoration', 'underline');
        $(this).css('text-decoration', 'underline');
    });

});


