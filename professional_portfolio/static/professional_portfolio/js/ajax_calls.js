$(document).ready(function(){
//  window.onload = function() {
//        alert("welcome");
//    };

 $('#dcmd').click(function(){
//        alert("test button clicked");
     var local_data = null;

     $.ajax({
    url: 'load_dcmd',
    type: 'get', //this is the default though, you don't actually need to always mention it
    success: function(data) {

      alert(data.background_color);

              $('#group3').css("background",data.background_color);
    },
    failure: function(data) {
        alert('Got an error dude');
    }
         });




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
