/************************
 *
 *Initialization of javascript plugins
 *
 */
$(document).ready(function () {
    $(function () {
        $("#tabs").tabs();
    });

    var home = '#oahu';
//    tool tip styling
    $('[title]').qtip({
        style: {classes: 'qtip-tipsy' }
    });

    $(home).mouseover(function () {
        $(this).effect('bounce', {distance: 10}, 800);
    });

    $(home).qtip({
        content: {
            text: 'My Home!'
        },
        style: {classes: 'qtip-green qtip-rounded'},
        position: {target: 'mouse'}
    });

//    initialize project windows
    $('#dcmd_window').hide();
    $('#academic_window').hide();
    $('#skills_window').show();
    $('#talent_window').show();

    $(window).trigger('resize');//gallery setup, needs to run script when window changes

    // $('#about_button').addClass('active');

//nav button click
    $('.navButton').click(function () {
        $('.navButton').removeClass('active');
        $(this).addClass('active');

    });


    //nav waypoints
    $('#about').waypoint(function () {
        $('.navButton').removeClass('active');
        $('#about_nav').addClass('active');
//        $('#about_nav').trigger('click');
    }, {
        offset: function () {
            return -$(this).height() / 4;
        }
    });

    $('#work').waypoint(function () {
            $('.navButton').removeClass('active');
            $('#work_nav').addClass('active');
//        $('#work_nav').trigger('click');
        },
        {offset: '0'});


    $('#talents').waypoint(function () {
//    $('#talents_nav').trigger('click');
        $('.navButton').removeClass('active');
        $('#talents_nav').addClass('active');
    }, {offset: '0'});


    $('#contact').waypoint(function () {
//     $('#contact_nav').trigger('click');
        $('.navButton').removeClass('active');
        $('#contact_nav').addClass('active');
    }, {offset: '0'});
});

function disableWayPoints() {
    $('#about').waypoint('disable');
    $('#work').waypoint('disable');
    $('#talents').waypoint('disable');
    $('#contact').waypoint('disable');
}

function enableWaypoints() {
    $('#about').waypoint('enable');
    $('#work').waypoint('enable');
    $('#talents').waypoint('enable');
    $('#contact').waypoint('enable');
}


//tab animation and gallery displays
$('#tab1_anchor').click(function () {

    $('#academic_window').hide();
    $('#dcmd_window').hide();
    $('#skills_window').fadeIn(600);

    $(window).trigger('resize');
});

$('#tab2_anchor').click(function () {

    $('#skills_window').hide();
    $('#academic_window').hide();
    $('#dcmd_window').fadeIn(600);

    $(window).trigger('resize');

});


$('#tab3_anchor').click(function () {

    $('#skills_window').hide();
    $('#dcmd_window').hide();
    $('#academic_window').fadeIn(600);

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
//Set scrolling to be in either one or both directions

$.stellar({
    horizontalScrolling: false,
    verticalScrolling: true,

    // Set the global alignment offsets
    horizontalOffset: 0,
    verticalOffset: 0,

    // Refreshes parallax content on window load and resize
//  responsive: true,
    responsive: true,
    // Select which property is used to calculate scroll.
    // Choose 'scroll', 'position', 'margin' or 'transform',
    // or write your own 'scrollProperty' plugin.
    scrollProperty: 'scroll',

    // Select which property is used to position elements.
    // Choose between 'position' or 'transform',
    // or write your own 'positionProperty' plugin.
    positionProperty: 'position',

    // Enable or disable the two types of parallax
    parallaxBackgrounds: true,
    parallaxElements: true,

    // Hide parallax elements that move outside the viewport
    hideDistantElements: false,

    // Customise how elements are shown and hidden
    hideElement: function ($elem) {
        $elem.hide();
    },
    showElement: function ($elem) {
        $elem.show();
    }
});
/*************************/
//animated scrolling
smoothScroll.init({
    speed: 600,
    easing: 'easeInOutQuad',
    offset: 0,
    updateURL: true,
    callbackBefore: function (toggle, anchor) {
    },
    callbackAfter: function (toggle, anchor) {
    }
});

/************************
 * picture gallery and text responsive scaling
 */
$(window).on('resize', function () {

    //scaling of text and gallery elements
    var content_text = $('.content_text');
    var tab_text = $('.tab_text');

    var tab_anchor = $('.tab_anchor');
    var screenheight = parseInt($(window).height());
    var screenwidth = parseInt($(window).width());
    var ratio = Math.floor(parseFloat((22 / screenwidth) * 100));


    var newContextFontSize = (70 - (ratio * 5)) + '%';
    content_text.css("font-size", newContextFontSize);
    var newTabFontSize = (110 - (ratio * 10)) + '%';

//    change tab content text
    tab_text.css("font-size", newTabFontSize);
    tab_anchor.css("font-size", newTabFontSize);

//    change header text
    newTabFontSize = (200 - (ratio * 15)) + '%';
    $('.tab_text_header').css("font-size", newTabFontSize);


    if ((1405 < screenwidth) && (screenwidth < 1645)) {
//        alert("1645-1450");
        $('.gallery').css("transform", "translate(-10%,-5%) scale(0.9,0.9)");
        $('#cssmenu').css("transform", "scale(1.0,1.0)");

    }
    else if ((1117 < screenwidth) && (screenwidth < 1405)){
//        alert("1405-1117");
        $('.gallery').css("transform", "translate(-10%,-10%) scale(0.8,0.8)");
        $('#cssmenu').css("transform", "scale(1.0,1.0)");
       tab_text.css("font-size", "85%");
    }

    else if ((989 < screenwidth) && (screenwidth < 1117)) {
        $('.gallery').css("transform", "translate(-10%,-10%) scale(0.7,0.7)");
       tab_text.css("font-size", "80%");
           }

    else if ((750 < screenwidth) && (screenwidth < 989)) {
//        alert("ipad size");
        $('.gallery').css("transform", "translate(-15%,-10%) scale(0.65,0.65)");
        $('#talent_window').css("transform", "translate(-15%,-10%) scale(0.65,0.65)");
        $('#cssmenu').css("transform", "scale(1.0,1.0)");
        $('.island').css("transform", "scale(0.3,0.3)");
        $('.tab_text_header').css("font-size", "110%");
         tab_text.css("font-size", "80%");

    }

    else if ((350 < screenwidth) && (screenwidth < 750)) {
//        alert("iphone size");
        $('.gallery').css("transform", "translate(-25%,-10%) scale(0.45,0.45)");
        $('#talent_window').css("transform", "translate(-30%,-10%) scale(0.45,0.45)");
        tab_anchor.css("font-size", "50%");
         tab_text.css("font-size", "70%");
        $('#cssmenu').css("transform", "scale(0.7,0.7)");
        $('.island').css("transform", "scale(0.2,0.2)");
        $('.island_container').css("max-width", "80%");
        content_text.css("font-size","50%");

    }

    else if (screenwidth < 350) {
        $('.gallery').css("transform", "translate(-25%,-10%) scale(0.3,0.3)");
        $('#talent_window').css("transform", "translate(-35%,-10%) scale(0.3,0.3)");
        alert("small window");
    }
    else if (screenwidth > 1645) {
        $('.gallery').css("transform", "scale(1.0,1.0)");
    }



    //render picture galleries
    $('#dcmd_gallery').photosetGrid({
        highresLinks: true,
        rel: 'dcmd_gallery',
        gutter: '2px',

        onComplete: function () {
            $('#dcmd_gallery').attr('style', '');
            $('.photoset-grid-lightbox a').colorbox({
                photo: true,
                scalePhotos: true,
                maxHeight: '90%',
                maxWidth: '90%'

            });
        }
    });

    $('#academic_gallery').photosetGrid({
        highresLinks: true,
        rel: 'academic_gallery',
        gutter: '2px',

        onComplete: function () {
            $('#academic_gallery').attr('style', '');
            $('.photoset-grid-lightbox a').colorbox({
                photo: true,
                scalePhotos: true,
                maxHeight: '90%',
                maxWidth: '90%'
            });
        }
    });

    $('#talent_gallery').photosetGrid({
        highresLinks: true,
        rel: 'talent_gallery',
        gutter: '2px',

        onComplete: function () {
            $('#talent_gallery').attr('style', '');
            $('.photoset-grid-lightbox a').colorbox({
                photo: true,
                scalePhotos: true,
                maxHeight: '90%',
                maxWidth: '90%'
            });
        }


    });


});

