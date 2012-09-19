//**************             HOME PAGE BOX ANIMATIONS              *********************////
//TEAM HOVER
$(function() {
  $('.teamHover').hover(function(){
    $('.wordTheTeam, .arrowTheTeam').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.teamBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.teamBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=87'
    },{queue:false,duration:300});
    $('.wordTheTeam, .arrowTheTeam').fadeOut({queue:false,duration:300});
  });
});

//TELEVISION HOVER
$(function() {
  $('.televisionHover').hover(function(){
    $('.wordTelevision, .arrowTelevision').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.televisionBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.televisionBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=87'
    },{queue:false,duration:300});
    $('.wordTelevision, .arrowTelevision').fadeOut({queue:false,duration:300});
  });
});

//YARDSALE HOVER
$(function() {
  $('.yardsaleHover').hover(function(){
    $('.wordYardsale, .arrowYardsale').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.yardsaleBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=87'
    },{queue:false,duration:300});
  }, function(){
    $('.yardsaleBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=87'
    },{queue:false,duration:300});
    $('.wordYardsale, .arrowYardsale').fadeOut({queue:false,duration:300});
  });
});

//WEATHER HOVER
$(function() {
  $('.weatherHover').hover(function(){
    $('.wordWeather, .arrowWeather').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.weatherBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.weatherBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=86'
    },{queue:false,duration:300});
    $('.wordWeather, .arrowWeather').fadeOut({queue:false,duration:300});
  });
});

//CONTACT HOVER
$(function() {
  $('.contactHover').hover(function(){
    $('.wordContact, .arrowContact').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.contactBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.contactBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
    $('.wordContact, .arrowContact').fadeOut({queue:false,duration:300});
  });
});

//CLIENT HOVER
$(function() {
  $('.clientHover').hover(function(){
    $('.wordClient, .arrowClient').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.clientBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.clientBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
    $('.wordClient, .arrowClient').fadeOut({queue:false,duration:300});
  });
});

//FILM HOVER
$(function() {
  $('.filmHover').hover(function(){
    $('.wordFilm, .arrowFilm').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.filmBlock').stop(true, true).animate({
      top:'-=29', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.filmBlock').stop(true, true).animate({
      top:'+=29', 
      left: '+=86'
    },{queue:false,duration:300});
    $('.wordFilm, .arrowFilm').fadeOut({queue:false,duration:300});
  });
});

//DIGITAL HOVER
$(function() {
  $('.digitalHover').hover(function(){
    $('.wordDigital, .arrowDigital').stop(true, true).fadeIn({queue:false,duration:1000});
    $('.digitalBlock').stop(true, true).animate({
      top:'-=28', 
      left:'-=86'
    },{queue:false,duration:300});
  }, function(){
    $('.digitalBlock').stop(true, true).animate({
      top:'+=28', 
      left: '+=86'
    },{queue:false,duration:300});
    $('.wordDigital, .arrowDigital').fadeOut({queue:false,duration:300});
  });
});

//**************             WORK PAGE LINK SORTER             *********************////

$(function() {
	$('#filters a').click(function(){
     var selector = $(this).attr('data-filter');
		$('.clearBox').css('z-index' , '200');		
		$('.checkMark').hide(300);
		
		if (selector == ".all") {
			$('.clearBox').css('z-index' , '100');
		} else {
			$(selector).css('z-index', '100');
		}
		$(this).siblings('.checkMark').show(300);
     return false;
   });
});

