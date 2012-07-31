
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
});

$(function() {
  $('.teamHover').hover(function(){
    $('.teamBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.teamBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.televisionHover').hover(function(){
    $('.televisionBlock').stop(true, true).animate({
      top:'-=27', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.televisionBlock').stop(true, true).animate({
      top:'+=27', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.yardsaleHover').hover(function(){
    $('.yardsaleBlock').stop(true, true).animate({
      top:'-=27', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.yardsaleBlock').stop(true, true).animate({
      top:'+=27', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.weatherHover').hover(function(){
    $('.weatherBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.weatherBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.contactHover').hover(function(){
    $('.contactBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.contactBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.clientHover').hover(function(){
    $('.clientBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.clientBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.filmHover').hover(function(){
    $('.filmBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.filmBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

$(function() {
  $('.digitalHover').hover(function(){
    $('.digitalBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.digitalBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});
