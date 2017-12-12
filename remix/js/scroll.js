
  // Accepts any class name
  // var rellax = new Rellax('.rellax');
$(function() {
  $("#dragdown").draggable({
    handle: "#handle",
     axis: "y" ,
     containment: "parent",
     scroll: true, scrollSensitivity: 100 
  });
});
// function line(a){
// console.log(a);

// }
// $(function line(a) {
//  console.log(a);
// });


$("#line1").click(function(){
    $("#line2").slideToggle();
   
  });
$("#line2").click(function(){
    $("#line3").slideToggle();
  
  });
$("#line3").click(function(){
    $("#line4").slideToggle();
  });
$("#line4").click(function(){
    $("#line5").slideToggle();
  });
$("#line5").click(function(){
    $("#line6").slideToggle();
  });
$("#line6").click(function(){
    $("#line7").slideToggle();
  });
$("#line7").click(function(){
    $("#line8").slideToggle();
  });
$("#line8").click(function(){
    $("#line9").slideToggle();
  });
$("#line9").click(function(){
    $("#line10").slideToggle();
  });
$("#line10").click(function(){
    $("#line11").slideToggle();
  });
$("#line11").click(function(){
    $("#line12").slideToggle();
  });

$("#died").click(function(){
    $("#inline1").css('background-color', 'black');
    // alert("w")
  });
$("#time").click(function(){
    $("#inline2").css('background-color', 'black');
    // alert("w")
  });
$("#fool").click(function(){
    $("#inline4").css('background-color', 'black');
    $("#inline5").css('background-color', 'black');
    $("#inline6").css('background-color', 'black');
    // alert("w")
  });
$("#tomorrow").click(function(){
    $("#inline3").css('background-color', 'black');
    // alert("w")
  });
$("#tale").click(function(){
    $("#inline7").css('background-color', 'black');
    $("#inline8").css('background-color', 'black');
    $("#inline9").css('background-color', 'black');
     $("#inline10").css('background-color', 'black');
   // alert("w")
  });
$("#nothing").click(function(){
    $("#inline11").css('background-color', 'black');
    $("#inline12").css('background-color', 'black');
    });

// $("#line1").click(function(){
//     $("#line2").slideToggle();
//   });