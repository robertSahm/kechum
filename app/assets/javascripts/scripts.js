//**************             HOME PAGE BOX ANIMATIONS              *********************////
//TEAM HOVER
$(function() {
  $('.teamHover').hover(function(){
    $('.teamBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.teamBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

//TELEVISION HOVER
$(function() {
  $('.televisionHover').hover(function(){
    $('.televisionBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=87'
    },{queue:false,duration:300});
    $('.wordTelevision, .arrowTelevision').stop(true, true).fadeIn(300);
  }, function(){
    $('.televisionBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

//YARDSALE HOVER
$(function() {
  $('.yardsaleHover').hover(function(){
    $('.yardsaleBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.yardsaleBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=87'
    },{queue:false,duration:300});
  });
});

//WEATHER HOVER
$(function() {
  $('.weatherHover').hover(function(){
    $('.weatherBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.weatherBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

//CONTACT HOVER
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

//CLIENT HOVER
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

//FILM HOVER
$(function() {
  $('.filmHover').hover(function(){
    $('.filmBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.filmBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=86'
    },{queue:false,duration:300});
  });
});

//DIGITAL HOVER
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

//**************             WORK PAGE LINK SORTER             *********************////

$(function() {
	$('#filters a').click(function(){
     var selector = $(this).attr('data-filter');
		$('.clearBox').css('z-index' , '200');		
		if (selector == "*") {
			$('.clearBox').css('z-index' , '100');
		} else {
			$(selector).css('z-index', '100');
		}
     return false;
   });
});

