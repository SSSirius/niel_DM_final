var value,svg;
// var draw = SVG('drawing').size('100%', '100%')
    value=0;
svg = d3.select("#tweet_list").append("svg");
var  innerhtml="M";
if (!!window.EventSource) {

  var tweetJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
  var twitterJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/eps";
  var countnow, countori, thr, tm, ts,counttime;
  countnow = 10000;
var tweet_list, tweet_list_elements;
  countori = 0;
counttime=0;
var key;
  // var source = new EventSource('/dates');


  // if (!!window.EventSource) {
  var source = new EventSource(twitterJSON);
  

  source.addEventListener("message", function(event) {
  // source.addEventListener("stream.tweet_updates.1F602", function (event) {
    var data = event.data;
    var text = data.text;
    var lastEventId = event.lastEventId;

    countnow++;
    countori++;
    // ts = countnow * 6;
    // tm = ts / 60;
    // thr = tm / 60 * 5;
    // // console.log(countnow);
    // $(".minute").css("transform", "rotate(" + tm + "deg)");
    // $(".second").css("transform", "rotate(" + ts + "deg)");
    // $(".hour").css("transform", "rotate(" + thr + "deg)");
    // $("#thr").html(Math.floor(thr / 30));
    // $("#tm").html(Math.floor((tm / 6) % 60));
    // $("#ts").html(Math.floor((ts / 360) * 60) % 60);
    
    var dataarry = JSON.parse(data);
    // dataarry=event.data[9];
 value=0;
    for (key in dataarry) {
      value += dataarry[key];
      
    }

   
    var rleft, rtop;

   // svg = d3.select('svg');
    // var innerhtml = "<li style='left:"+ Math.floor(Math.random()* 80) +"vw;top:" + Math.floor(Math.random()* 95) +"vh'>"+dataarry.text+"</li>";
    // var innerhtml = "<li style='left:" + Math.floor(Math.random() * 80) + "vw;top:0vh'>" + dataarry.text + "</li>";
   

    
    tweet_list_elements = [];
    tweet_list = d3.select('#tweet_list');
    // tweet_connents = d3.select('.tweet-container').last();
    // tweet_list_elements = $("li");
    // console.log(tweet_list_elements.length);
    // if (tweet_list_elements.length >= 80) {
    //   tweet_list_elements.first().remove();
    // }

    // handle message
  }, false);
  function recount(){
   
    counttime ++;
    var nowfeed =countori;
   if(nowfeed ==! 0){
    // value*=4;


    // value*=4;
// console.log(svg);
     
     // for(var i=0; i<value;i++){
       innerhtml+= counttime+" "+ value*2+ " ";
     // }
      console.log(innerhtml);
    //    svg.append('path')
    //   .attr({d: 'M1 5Q30 50 40 15 30 0 45 0'
    // })
    //   .style({fill: 'none', stroke: 'purple','stroke-width': 2
    //  });
     // innerhtml+="</span>";

      // innerhtml="<span style='height:" + value +"px'></span>";
     
     // console.log(value);
    value=0;

     // tweet_connents.append(innerhtml);
     // tweet_list.appendChild(innerhtml);

   
   }else {
     // tweet_connents.append("<span class='space' style='border:none'>&nbsp</span>");
   }



    countori=0;
    if (counttime==60 ){
      counttime=0;
      svg = d3.select("#tweet_list").append("svg");
      svg.append('path')
      .attr({d: innerhtml
    })
      .style({fill: 'none', stroke: 'white','stroke-width': 1
     });
      innerhtml="M";
    // console.log(counttime);
    // tweet_list.append('</div> <div class="tweet-container">');
    // console.log(' </div> <div id="tweet_list">');
    }
    return nowfeed;

  };

setInterval("recount()",17);


}
