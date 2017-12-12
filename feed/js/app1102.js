var value, cx, xy;
// var draw = SVG('drawing').size('100%', '100%')
value = 0;


var    allvalue=0;
var width = $(window).width(),
  height = $(window).height(),
  start = 0,
  end = 2.25,
  numSpirals = 15;
var svg = d3.select("#tweet_list").append("svg").append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");;

var theta = function (r) {
  return numSpirals * Math.PI * r;
};

var r = d3.min([width, height]) / 2 - 60;
var radius = d3.scaleLinear()
  .domain([start, end])
  .range([20, r]);
var points = d3.range(start, end + 0.001, (end - start) / 1000);

var spiral = d3.radialLine()
  .curve(d3.curveCardinal)
  .angle(theta)
  .radius(radius);
var path = svg.append("path")
  .datum(points)
  .attr("id", "spiral")
  .attr("d", spiral)
  .style("fill", "none")
  .style("stroke", "none");
var innerhtml = "M";
if (!!window.EventSource) {

  var tweetJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
  var twitterJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/eps";
  var countnow, countori, thr, tm, ts, counttime;
  countnow = 10000;
  var tweet_list, tweet_list_elements;
  countori = 0;
  counttime = 0;
  var key;
  // var source = new EventSource('/dates');


  // if (!!window.EventSource) {
  var source = new EventSource(twitterJSON);


  source.addEventListener("message", function (event) {
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
    // value=0;
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

  function recount() {
    var sectime = 0;
    counttime++;
    var nowfeed = countori;
    if (nowfeed !== 0) {
      // value*=4;
      // var ball = svg.append("circle")
      //         .attrs({  // provided by selection-multi module
      //           "r": 73,
      //           "cx": 480,
      //           "cy": 250
      //           })
      //         .style("fill", "#ffe41e");

      // value*=4;
      // console.log(svg);
      for (var i = 0; i < Math.ceil(value / 2); i++) {
        // innerhtml+="<div class='dot'></div>";
        sectime++;
         // allvalue+=2;
        svg.append('circle')
         
          .attr("cx", function (d, i) {

            var linePer = Math.floor(counttime * 4 + 3),

              posOnLine = path.node().getPointAtLength(linePer),
              angleOnLine = path.node().getPointAtLength(linePer - 4);
            var linelength = Math.sqrt(posOnLine.x * posOnLine.x + posOnLine.y * posOnLine.y);
            var rat = 0;
            if (linelength !== 0) {
              var rat = 3 / linelength;
            } // d.linePer = linePer; // % distance are on the spiral
            cx = posOnLine.x * (1 + sectime * rat); // x postion on the spiral
            cy = posOnLine.y * (1 + sectime * rat); // y position on the spiral
            // console.log(sectime);
            // d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180 / Math.PI) - 90; //angle at the spiral position

            return cx;
          })
          .attr("cy", function (i) {
            return cy;
          })
          .attr("r", 1)
          .attr("class", "showdot");
        // .attr("class", "space");
        //   .attrs({cx: 3+counttime*4,
        //     cy:i*4+3,
        //     r:1
        // })
        // .style("fill","#fff");
        // dotnum++;
        
      }
      // for(var i=0; i<value;i++){
      // innerhtml+= counttime*3+" "+ (50 - value*2)+ " ";
      // }
      // console.log(innerhtml);
      //    svg.append('path')
      //   .attr({d: 'M1 5Q30 50 40 15 30 0 45 0'
      // })
      //   .style({fill: 'none', stroke: 'purple','stroke-width': 2
      //  });
      // innerhtml+="</span>";

      // innerhtml="<span style='height:" + value +"px'></span>";

      // console.log(value);
      value = 0;
      sectime = 0;
      // tweet_connents.append(innerhtml);
      // tweet_list.appendChild(innerhtml);


    } else {
      svg.append('circle')
        .attr("cx", function (d, i) {

          var linePer = Math.floor(counttime * 4 + 3),

            posOnLine = path.node().getPointAtLength(linePer),
            angleOnLine = path.node().getPointAtLength(linePer - 4);

          // d.linePer = linePer; // % distance are on the spiral
          cx = posOnLine.x * (1 + sectime); // x postion on the spiral
          cy = posOnLine.y * 1; // y position on the spiral
          // console.log(sectime);
          // d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180 / Math.PI) - 90; //angle at the spiral position

          return cx;
        })
        .attr("cy", function (i) {
          return cy;
        })
        .attr("r", 1)
        //   .attr({cx: 3+counttime*4,cy:3,r:1
        // })
        .style("fill", "none");
      // tweet_connents.append("<span class='space' style='border:none'>&nbsp</span>");
    }



    countori = 0;
    if (counttime % 10 == 0) {
      // counttime=0;
      // svg = d3.select("#tweet_list").append("svg");

      innerhtml = "M";
      console.log(counttime);
      // tweet_list.append('</div> <div class="tweet-container">');
      // console.log(' </div> <div id="tweet_list">');
    }
    return nowfeed;

  };

  setInterval("recount()", 102);


}
var tooltip = d3.select("#tweet_list")
  .append('div')
  .attr('class', 'tooltip');

tooltip.append('div')
  .attr('class', 'date');
tooltip.append('div')
  .attr('class', 'value');
   console.log(svg);
svg.selectAll("circle")
  .on('mouseover', function (d) {
 

    tooltip.select('.date').html("Date: <b>" + 1 + "</b>");
    tooltip.select('.value').html("Value: <b>" + 2 + "<b>");

    d3.select(this)
      .style("fill", "#FFFFFF")
      .style("stroke", "#000000")
      .style("stroke-width", "2px");

    tooltip.style('display', 'block');
    tooltip.style('opacity', 2);

  })
  .on('mousemove', function (d) {
    tooltip.style('top', (d3.event.layerY + 10) + 'px')
      .style('left', (d3.event.layerX - 25) + 'px');
  })
  .on('mouseout', function (d) {
    d3.selectAll("rect")
      // .style("fill", function(d){return color(d.group);})
      .style("stroke", "none")

    tooltip.style('display', 'none');
    tooltip.style('opacity', 0);
  });