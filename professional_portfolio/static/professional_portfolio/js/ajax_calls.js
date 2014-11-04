$(document).ready(function () {
//  window.onload = function() {
//        alert("welcome");
//    };

    $('#tab1_anchor').click(function () {
//        alert("loading dcmd module");
        //toggle other windows off
        var currentWindow = $('#dcmd_window');
        currentWindow.css("display", "none");

        currentWindow = $('#academic_window');
        currentWindow.css("display", "none");

        currentWindow = $("#skills_window");
        currentWindow.css("display", "block");

//     $.ajax({
//    url: 'load_dcmd',
//    type: 'get', //this is the default though, you don't actually need to always mention it
//    success: function(data) {
////      alert(data.background_color);
//    },
//    failure: function(data) {
//        alert('Got an error dude');
//    }
//         });
    });

    $('#tab2_anchor').click(function () {

//toggle other windows off
        var currentWindow = $('#skills_window');
        currentWindow.css("display", "none");

        currentWindow = $('#academic_window');
        currentWindow.css("display", "none");

        currentWindow = $("#dcmd_window");
        currentWindow.css("display", "block");

//     $.ajax({
//    url: 'load_dcmd',
//    type: 'get', //this is the default though, you don't actually need to always mention it
//    success: function(data) {
//
//         //gallery.append(data.image_ref);
//    },
//    failure: function(data) {
//        alert('Got an error dude');
//    }
//         });
    });


    $('#tab3_anchor').click(function () {
        //toggle other windows off
        var currentWindow = $('#skills_window');
        currentWindow.css("display", "none");

        currentWindow = $('#dcmd_window');
        currentWindow.css("display", "none");

        currentWindow = $("#academic_window");
        currentWindow.css("display", "block");

//     $.ajax({
//    url: 'load_dcmd',
//    type: 'get', //this is the default though, you don't actually need to always mention it
//    success: function(data) {
//
//         //gallery.append(data.image_ref);
//    },
//    failure: function(data) {
//        alert('Got an error dude');
//    }
//         });
    });

//    function parseData(data) {
//        $.getJSON("ajax/test.json", function (data) {
//            var items = [];
//            $.each(data, function (key, val) {
//                items.push("<li id='" + key + "'>" + val + "</li>");
//            });
//        });
//    }

});
