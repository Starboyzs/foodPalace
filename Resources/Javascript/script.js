//$(document).ready(function(){
//   $(".js--feautures").waypoint(function(direction){
//       if (direction =="down"){
//       $("nav").addClass("sticky")
//       }else {
//           $("nav").removeClass("sticky")
//       }
//   })
//});


$(document).ready(function (){
    $('.js--feautures').waypoint(function (direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }else{
             $('nav').removeClass('sticky');
        }
    });
});