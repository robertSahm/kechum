$(function() {
  $('a.videoClick').click(function() {
    $('.playerWrapper').fadeIn(500);
    $('.videoSelector').fadeOut(500);
  });
  $('a.backClick').click(function() {
    $('.videoSelector').fadeIn(500);
    $('.playerWrapper').fadeOut(500);
  });
});









