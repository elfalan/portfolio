//test for jquery load
$(document).ready(function(){
  window.onload = function() {
        alert("welcome");
    };

//    $(function() {
//	  $('a[href*=#]:not([href=#])').click(function() {
//	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//
//	      var target = $(this.hash);
//	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//	      if (target.length) {
//	        $('html,body').animate({
//	          scrollTop: target.offset().top
//	        }, 1000);
//	        return false;
//	      }
//	    }
//	  });
//	});

});

//    $('#test').click(function(){
//        alert("test button clicked");
//        });

/***********************/
//debug script
  var debugInput = document.querySelector("input");
    function updateDebugState() {
        document.body.classList.toggle('debug-on', debugInput.checked);
    }
    debugInput.addEventListener("click", updateDebugState);
    updateDebugState();

//skrollr ini

//    skrollr.init({
//        forceHeight: false
//    });

//$('.header-cont a').click(function(){
//     alert("link was clicked")
//});



//  $('.header-cont a').smoothScroll({
//      speed:1300
//  });


