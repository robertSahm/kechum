
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

  $('.teamHover').click(function() {
    $('.teamBlock').toggle(500);
    
  });

});









