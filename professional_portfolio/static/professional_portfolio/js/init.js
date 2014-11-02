/************************
 *
 *Initialization of javascript plugins
 *
 */
$(document).ready(function(){
    $(function(){
        $( "#tabs" ).tabs();
   });
});

/***********************/
//debug script
  var debugInput = document.querySelector("input");
    function updateDebugState() {
        document.body.classList.toggle('debug-on', debugInput.checked);
    }
    debugInput.addEventListener("click", updateDebugState);
    updateDebugState();

/***************************
 * parallax features
 */
            $(function(){
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
				callbackBefore: function ( toggle, anchor ) {},
				callbackAfter: function ( toggle, anchor ) {}
			});

/************************
 * picture gallery
 */

           Shadowbox.init({
    handleOversize: "drag",
    modal: true
});

/**************************
 * blinker
 */
            function blink(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}

blink('#greeting_box');

