$('#container').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});

$('#container').isotope({ filter: '.my-selector' }, function( $items ) {
  var id = this.attr('id'),
      len = $items.length;
  console.log( 'Isotope has filtered for ' + len + ' items in #' + id );
});

$('#container').isotope({
  animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false
   }
});








