/************************
 *
 *Initialization of javascript plugins
 *
 */
$(document).ready(function () {
    $(function () {
        $("#tabs").tabs();
    });

//    initialize project windows
    $('#dcmd_window').hide();
    $('#academic_window').hide();
        $('#skills_window').show();
        $('#talent_window').show();

      $(window).trigger('resize');
});



 $('#tab1_anchor').click(function () {

     $('#academic_window').hide();
     $('#dcmd_window').hide();
     $('#skills_window').show();

     $(window).trigger('resize');
 });

  $('#tab2_anchor').click(function () {

        $('#skills_window').hide();
        $('#academic_window').hide();
        $('#dcmd_window').show();

           $(window).trigger('resize');

    });


    $('#tab3_anchor').click(function () {

         $('#skills_window').hide();
        $('#dcmd_window').hide();
                $('#academic_window').show();

             $(window).trigger('resize');

    });






/***************************
 * parallax features
 */
//$(function () {
//    $.stellar({
//        horizontalScrolling: false,
//        verticalOffset: -5
//    });
//});
// Set scrolling to be in either one or both directions

//$.stellar({
//  horizontalScrolling: false,
//  verticalScrolling: false,
//
//  // Set the global alignment offsets
//  horizontalOffset: 0,
//  verticalOffset: 0,
//
//  // Refreshes parallax content on window load and resize
////  responsive: true,
//    responsive:true,
//  // Select which property is used to calculate scroll.
//  // Choose 'scroll', 'position', 'margin' or 'transform',
//  // or write your own 'scrollProperty' plugin.
//  scrollProperty: 'scroll',
//
//  // Select which property is used to position elements.
//  // Choose between 'position' or 'transform',
//  // or write your own 'positionProperty' plugin.
//  positionProperty: 'position',
//
//  // Enable or disable the two types of parallax
//  parallaxBackgrounds: true,
//  parallaxElements: true,
//
//  // Hide parallax elements that move outside the viewport
//  hideDistantElements: false,
//
//  // Customise how elements are shown and hidden
//  hideElement: function($elem) { $elem.hide(); },
//  showElement: function($elem) { $elem.show(); }
//});
/*************************/
//animated scrolling
smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0,
    updateURL: true,
    callbackBefore: function (toggle, anchor) {
    },
    callbackAfter: function (toggle, anchor) {
    }
});

/************************
 * picture gallery
 */
$(window).on('resize',function(){

$('.photoset-grid-lightbox').photosetGrid({
  highresLinks: true,
  rel: 'withhearts-gallery',
  gutter: '2px',

  onComplete: function(){
    $('.photoset-grid-lightbox').attr('style', '');
    $('.photoset-grid-lightbox a').colorbox({
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'
    });
  }
});

    });


/**************************
 * blinker
 */
function blink(selector) {
    $(selector).fadeOut('slow', function () {
        $(this).fadeIn('slow', function () {
            blink(this);
        });
    });
}

blink('#greeting_box');

