
// fades in/out video player 
$(function() {
  $('a.videoClick').click(function() {
    $('.playerWrapper, .playerHide').fadeIn(500);
    $('.videoSelector').fadeOut(500);
  });
  $('a.backClick').click(function() {
    $('.videoSelector').fadeIn(500);
    $('.playerWrapper, .playerHide').fadeOut(500);
  });

  $('.teamHover').hover(function() {
    $('.teamBlock').fadeIn(500);
    $('.teamBlock a').click(function() {
      $(this).fadeOut(500);
      $('.teamHover').fadeOut(500);
    });
  });

});









