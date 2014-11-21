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

//    $(home).mouseover(function () {
//        $(this).effect('bounce', {distance: 10}, 400);
//    });

    $(home).qtip({
        content: {
            text: 'My Home!'
        },
        style: {classes: 'qtip-green qtip-rounded'},
        position: {target: 'mouse'}
    });

//    initialize project windows
    $('#dcmd_window').hide();
    $('#tmr_window').hide();
    $('#scheduler_window').hide();
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

 $('#tmr_window').hide();
    $('#scheduler_window').hide();
    $('#dcmd_window').hide();
    $('#skills_window').fadeIn(600);

    $(window).trigger('resize');
});

$('#tab2_anchor').click(function () {

    $('#skills_window').hide();
    $('#tmr_window').hide();
    $('#scheduler_window').hide();
    $('#dcmd_window').fadeIn(600);

    $(window).trigger('resize');

});


$('#tab3_anchor').click(function () {

    $('#skills_window').hide();
    $('#dcmd_window').hide();
    $('#scheduler_window').hide();
    $('#tmr_window').fadeIn(600);

    $(window).trigger('resize');

});
$('#tab4_anchor').click(function () {

    $('#skills_window').hide();
    $('#dcmd_window').hide();
    $('#tmr_window').hide();
    $('#scheduler_window').fadeIn(600);

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

    //reset certain variables on resize
    var name_header = $('.name_header');
    name_header.css("font-size","100%");
    var islands = $('.island');
    islands.css("transform", "scale(0.4,0.4)");

    //scaling of text and gallery elements

    var content_text = $('.content_text');
    var tab_text = $('.tab_text');

    var tab_anchor = $('.tab_anchor');
    var screenheight = parseInt($(window).height());
    var screenwidth = parseInt($(window).width());
    var ratio = Math.floor(parseFloat((22 / screenwidth) * 100));


    var newContextFontSize = (70 - (ratio * 8)) + '%';
    content_text.css("font-size", newContextFontSize);


//    change tab content text
    var newTabFontSize = (110 - (ratio * 15)) + '%';
    tab_text.css("font-size", newTabFontSize);
    newTabFontSize = (90 - (ratio * 15)) + '%';
    tab_anchor.css("font-size", newTabFontSize);

//    change header text
    newTabFontSize = (200 - (ratio * 15)) + '%';
    $('.tab_text_header').css("font-size", newTabFontSize);



    if ((1405 < screenwidth) && (screenwidth < 1645)) {
//        alert("1645-1450");
        $('.gallery').css("transform", "translate(-5%,-5%) scale(0.9,0.9)");
        $('#cssmenu').css("transform", "scale(1.0,1.0)");
        $('#skills_window').css("transform", "translate(-5%,10%");

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
        islands.css("transform", "scale(0.3,0.3)");
        $('.tab_text_header').css("font-size", "110%");
         tab_text.css("font-size", "80%");
         tab_anchor.css("font-size", "50%");


    }

    else if ((600 < screenwidth) && (screenwidth < 750)) {
//        alert('android tab');

        $('.gallery').css("transform", "translate(-25%,-20%) scale(0.43,0.5)");
        $('#talent_window').css("transform", "translate(-30%,-15%) scale(0.45,0.5)");
        tab_anchor.css("font-size", "50%");
         tab_text.css("font-size", "70%");
        $('#cssmenu').css("transform", "scale(0.7,0.7)");
        islands.css("transform", "scale(0.2,0.2)");
        $('.island_container').css("max-width", "60%");
}

    else if (screenwidth < 600) {
        alert("Hello! You are at Jesse Elfalan's Portfolio.  Due to some graphics and animation this Site is best viewed on a Desktop sized resolution. Thank You!");
        $('.gallery').css("transform", "translate(-30%,-25%) scale(0.35,0.4)");
        $('#talent_window').css("transform", "translate(-35%,-20%) scale(0.4,0.4)");
            $('#cssmenu').css("transform", "scale(0.6,0.6) translate(-20%,-10%)");
        name_header.css("font-size","80%");
                islands.css("transform","scale(0.15,0.15)");


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

    $('#tmr_gallery').photosetGrid({
        highresLinks: true,
        rel: 'tmr_gallery',
        gutter: '2px',

        onComplete: function () {
            $('#tmr_gallery').attr('style', '');
            $('.photoset-grid-lightbox a').colorbox({
                photo: true,
                scalePhotos: true,
                maxHeight: '90%',
                maxWidth: '90%'
            });
        }
    });
    $('#scheduler_gallery').photosetGrid({
        highresLinks: true,
        rel: 'academic_gallery',
        gutter: '2px',

        onComplete: function () {
            $('#scheduler_gallery').attr('style', '');
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


