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



});



/***************************
 * parallax features
 */
$(function () {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: -5
    });
});

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

//Shadowbox.init({
//    handleOversize: "resize",
//    modal: true,
////    counterType:"skip",
//    continuous:true,
//    displayNav: true,
//    displayCounter:true,
//    enableKeys:true,
//    viewportPadding:50
////    initialHeight: "100px",
////    initialWidth:"100px"
//
//
//});

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

