
// angular.module('myApp',['ngRoute'])



 // angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
var phonecatApp = angular.module('starter', ['services'])
// phonecatApp.run(function($ionicPlatform,$rootScope) {
//   $rootScope.host = "http://localhost:101/";
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
    
//     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleLightContent();
//     }
//   });
// })
// phonecatApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
//   $stateProvider
// phonecatApp.state('Details', {
//                 url: '/detail?index',    //以？为标识接收参数
//                 templateUrl: './detail.html',
//                 controller:'detail'     //也可以用 params:{'phone':{}}
//  })





phonecatApp.controller('selection',function($scope,$rootScope,Meals){
  // $scope.phones = [
  // {'image/ardunio.jpg'}
  // ];

//   for(var i= 0; i <100; i++){
//   $scope.images.push("image/ardunio.jpg");

 $scope.meals = Meals.all();
 // var size = $(".period-img").length;
 $(function() {
 var size=$(".period-img").length;
  // var img=$(".period-img")[6].height;
 
var btnp= $("#timebar").position().left;
 // $(function(){
var barw=$("#bar").width();

 var upw=$("#up").width();
  var dnw = $("#down").width();
// var btnp = barw- $("#timebar").position().left*2.5;
 

var wh=$( window ).height();
 var upl=-btnp/barw*(upw);
 var dnl=-btnp/barw*(dnw);
 var endbar=barw*1.4;
  
  // $("#up").offset({ left:upl});
  // $("#down").offset({ left:dnl});

 var ww=$( window ).width();

   var ofleftyear = 0.5*ww-25;
      $("#year").offset({
        left: ofleftyear
      });
   


  
 
 $.each($(".period-img"),function(i,img) {
  // $(this).load(function(){
  //     }else {


    var mid = ww/2-30;
    var hi= wh/3.5 - Math.abs((this.x - mid)/3.5);
    console.log(hi);
console.log(mid);
      $( this ).height( hi );
       $( this ).fadeTo(10, Math.abs(hi/240));
  });
   });




// $(function () {

// // $scope.dynast="Neolithic Age";
//   var size = $(".period-img").length;
//   var barw = $("#bar").width();
//   var end = $(".period-img")[66].x - barw /2;
//   console.log(end);
//   $("#timebar").draggable({
//     // handle: "#timebar",
//     axis: "x",
//     containment: "parent",
//     scroll: false,
//     // scroll: true, scrollSensitivity: 100 
//     drag: function () {
//       var btnp = $("#timebar").position().left;
//       // $(function(){


//       var upw = $("#up").width();
//       var dnw = $("#down").width();
//       // var end=$(".period-img")[66].x;
//       // console.log(end);

//       var ofleft = -btnp / barw * (end);


//       $("#up").offset({
//         left: ofleft
//       });
//       $("#down").offset({
//         left: ofleft
//       });
//       // console.log( $scope.time.length);
//       for (var i=0;i < $scope.time.length;i++){
     
//       if ( btnp/barw * 100 > $scope.time[i].position){
      
//        $("#dynasty").html($scope.time[i].name);

//         }
//       }
//       $.each($(".period-img"), function (i, img) {

//         var mid = barw / 2 - 30;
//         var hi = 250 - Math.abs((this.x - mid) / 3.5);

//         $(this).height(hi);
//         $(this).fadeTo(10, Math.abs(hi / 240));

//       });

//     }
//   });
  
// });


}) // end dialogsServiceTest
phonecatApp.controller('glaze',function($scope,$rootScope,Meals){
  $scope.showimg = function(i){
    var url=Meals.get(i).url;
    $('#' + i).css("background-image","url("+url+")");
    $scope.glaze=Meals.get(i).type;
    $("#galze-name").css("color",Meals.get(i).color);
    // console.log($scope.glaze);
  };
$scope.setcolor = function(i){
    var url=Meals.get(i).url;
    $('#' + i).css("background-image","url()");
     $scope.glaze="";
     $("#galze-name").css("color","#000");
    // console.log($scope.glaze);
  };


  $(function() {
//  var size=$(".period-img").length;
//   // var img=$(".period-img")[6].height;
 
// var btnp= $("#timebar").position().left;
//  // $(function(){
// var barw=$("#bar").width();

//  var upw=$("#up").width();
//   var dnw = $("#down").width();

  
//  var upl=-btnp/barw*(upw);
//  var dnl=-btnp/barw*(dnw);
  
//   $("#up").offset({ left:upl});
//   $("#down").offset({ left:dnl});
 
 $.each($(".glaze-dot"),function(i,img) {
  // $(this).load(function(){
  //     }else {
    // var mid = barw/2-30;
    var id= this.id;
    var color=Meals.get(id).color;
     $( this ).css("background-color",color);
 
      // $( this ).height( hi );
       // $( this ).fadeTo(10, Math.abs(hi/240));
  });
   });


  // parseInt(5/2)2
}) 
phonecatApp.controller('scenario',function($scope,$rootScope,Meals){
  $scope.items= Meals.all();
  $scope.kindname=[{name:"Container for Liquid"},
  {name:"Daily Supplies"},
{name:"Decoration"},
{name:"Religion"},
{name:"Funerary Objects"},

  ]
  $scope.isShow=false;
$scope.display = function(i){
 $scope.kind=i;
 console.log('test');

  if ($scope.isShow==false){
  $scope.items = Meals.getkind($scope.kind);
  $scope.isShow=true;
   $scope.title=$scope.kindname[$scope.kind-1].name;
 console.log($scope.items);
  console.log( $scope.title);

  }else{
$scope.items=[];
$scope.isShow=false;


  

  // var dis = element(by.css('.display'));

  // expect(dis.isDisplayed()).toBe(false);
  // // checkbox.click();
  // expect(dis.isDisplayed()).toBe(true);
 }
}
// }



  // parseInt(5/2)2
})// end whatsYourNameCtrl
phonecatApp.controller('detail',function($scope,$location,$rootScope,Meals){
// $scope.detail = $location.hash();
console.log($location.hash());
// var searchObject = $location.search();
$scope.detail=Meals.get($location.hash());

  

  // var dis = element(by.css('.display'));

  // expect(dis.isDisplayed()).toBe(false);
  // // checkbox.click();

// }



  // parseInt(5/2)2
})
phonecatApp.controller('home',function($scope,$location,$rootScope,Meals){
// $scope.detail = $location.hash();

  

  // var dis = element(by.css('.display'));

  // expect(dis.isDisplayed()).toBe(false);
  // // checkbox.click();

// }



  // parseInt(5/2)2
})

// end run / module