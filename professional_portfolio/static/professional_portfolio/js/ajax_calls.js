$(document).ready(function () {
//  window.onload = function() {
//        alert("welcome");
//    };

    $('#tab1_anchor').click(function () {
//        alert("loading dcmd module");
        //toggle other windows off
        $('#academic_window').hide();
        $('#dcmd_window').hide();
            $('#skills_window').show();



//        var currentWindow = $('#dcmd_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $('#academic_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $("#skills_window");
//        currentWindow.css("display", "block");


    });

    $('#tab2_anchor').click(function () {

//toggle other windows off
//        var currentWindow = $('#skills_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $('#academic_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $("#dcmd_window");
//        currentWindow.css("visibility", "visible");
        $('#skills_window').hide();
        $('#academic_window').hide();
        $('#dcmd_window').show();

    });


    $('#tab3_anchor').click(function () {

         $('#skills_window').hide();
        $('#dcmd_window').hide();
                $('#academic_window').show();

        //toggle other windows off
//        var currentWindow = $('#skills_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $('#dcmd_window');
//        currentWindow.css("display", "none");
//
//        currentWindow = $("#academic_window");
//        currentWindow.css("display", "block");

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
