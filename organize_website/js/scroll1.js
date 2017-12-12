$(function () {
 var time=[
        {position:0, name:"Neolithic Age"},
        {position:10, name:"Shang Dynasty "},
        {position:14, name:"Warring States Period"},
        {position:16, name:"Han Dynasty"},
        {position:21, name:"Sui Dynasty"},
        {position:29, name:"Tang Dynasty"},
        {position:37, name:"Song Dynasty"},
        {position:54, name:"Yuan Dynasty"},
        {position:62, name:"Ming Dynasty"},
        {position:76, name:"Qing Dynasty"}
 ]

  var size = $(".period-img").length;
  var barw = $("#bar").width();
  // if($(".period-img")!==""){
  var end = $(".period-img")[66].x - barw / 8;
// }
// var endbar=barw*1.4;
// var endtimebar=barw;
 console.log(end);

  $("#timebar").offset({
        left: 0
      });
  $("#timebar").draggable({
    // handle: "#timebar",
    axis: "x",
    containment: "parent",
    scroll: false,
    // scroll: true, scrollSensitivity: 100,
    drag: function () {
      var btnp = $("#timebar").position().left;
      // $(function(){


      var upw = $("#up").width();
      var dnw = $("#down").width();
      // var end=$(".period-img")[66].x;
      // console.log(end);

      var ofleft = -btnp / barw * (end);

      var wh=$( window ).height();
         var ww=$( window ).width();
      $("#up").offset({
        left: ofleft
      });
      $("#down").offset({
        left: ofleft
      });
for (var i=0;i < time.length;i++){
     
      if ( btnp/ww * 100 > time[i].position){
      
       $("#dynasty").html(time[i].name);

        }
      }
      $.each($(".period-img"), function (i, img) {

        var mid = barw/ 2 - 30;
        var hi = wh/3.5 - Math.abs((this.x - mid) / 3.5);

        $(this).height(hi);
        $(this).fadeTo(10, Math.abs(hi / 240));
        // console.log(hi/200);




        // }



      });



      // $(".period-img")[5].css("width", "400px");


    }
  }, );

  //   $("#timebar").width(endtimebar);
  // $("#bar").width(endbar);
  
});


// // $( "#timebar" ).draggable({
// //   axis: "x"
// // });
// // function line(a){
// // console.log(a);

// // }
// // $(function line(a) {
// //  console.log(a);
// // });


// // $("#line1").click(function(){
// //     $("#line2").slideToggle();

// //   });
// // $("#line2").click(function(){
// //     $("#line3").slideToggle();

// //   });
// // $("#line3").click(function(){
// //     $("#line4").slideToggle();
// //   });
// // $("#line4").click(function(){
// //     $("#line5").slideToggle();
// //   });
// // $("#line5").click(function(){
// //     $("#line6").slideToggle();
// //   });
// // $("#line6").click(function(){
// //     $("#line7").slideToggle();
// //   });
// // $("#line7").click(function(){
// //     $("#line8").slideToggle();
// //   });
// // $("#line8").click(function(){
// //     $("#line9").slideToggle();
// //   });
// // $("#line9").click(function(){
// //     $("#line10").slideToggle();
// //   });
// // $("#line10").click(function(){
// //     $("#line11").slideToggle();
// //   });
// // $("#line11").click(function(){
// //     $("#line12").slideToggle();
// //   });

// // $("#died").click(function(){
// //     $("#inline1").css('background-color', 'black');
// //     // alert("w")
// //   });
// // $("#time").click(function(){
// //     $("#inline2").css('background-color', 'black');
// //     // alert("w")
// //   });
// // $("#fool").click(function(){
// //     $("#inline4").css('background-color', 'black');
// //     $("#inline5").css('background-color', 'black');
// //     $("#inline6").css('background-color', 'black');
// //     // alert("w")
// //   });
// // $("#tomorrow").click(function(){
// //     $("#inline3").css('background-color', 'black');
// //     // alert("w")
// //   });
// // $("#tale").click(function(){
// //     $("#inline7").css('background-color', 'black');
// //     $("#inline8").css('background-color', 'black');
// //     $("#inline9").css('background-color', 'black');
// //      $("#inline10").css('background-color', 'black');
// //    // alert("w")
// //   });
// // $("#nothing").click(function(){
// //     $("#inline11").css('background-color', 'black');
// //     $("#inline12").css('background-color', 'black');
// //     });

// // $("#line1").click(function(){
// //     $("#line2").slideToggle();
// //   });