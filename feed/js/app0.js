if (!!window.EventSource) {

  var tweetJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
  var twitterJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/eps";
  var countnow, countori, thr, tm, ts;
  countnow = 10000;

  countori = 0;

  // var source = new EventSource('/dates');


  // if (!!window.EventSource) {
  var source = new EventSource(tweetJSON);
  

  // source.addEventListener("message", function(event) {
  source.addEventListener("stream.tweet_updates.1F602", function (event) {
    var data = event.data;
    var text = data.text;
    var lastEventId = event.lastEventId;

    countnow++;
    ts = countnow * 6;
    tm = ts / 60;
    thr = tm / 60 * 5;
    // console.log(countnow);
    $(".minute").css("transform", "rotate(" + tm + "deg)");
    $(".second").css("transform", "rotate(" + ts + "deg)");
    $(".hour").css("transform", "rotate(" + thr + "deg)");
    $("#thr").html(Math.floor(thr / 30));
    $("#tm").html(Math.floor((tm / 6) % 60));
    $("#ts").html(Math.floor((ts / 360) * 60) % 60);
    var key;

    
    var dataarry = JSON.parse(data);
    // dataarry=event.data[9];
    var rleft, rtop;

    var innerhtml = "<li style='left:"+ Math.floor(Math.random()* 80) +"vw;top:" + Math.floor(Math.random()* 95) +"vh'>"+dataarry.text+"</li>";
    // var innerhtml = "<li style='left:" + Math.floor(Math.random() * 80) + "vw;top:0vh'>" + dataarry.text + "</li>";


    var tweet_list, tweet_list_elements;
    tweet_list_elements = [];
    tweet_list = $('#tweet_list');
    tweet_list.append(innerhtml);
    tweet_list_elements = $("li");
    console.log(tweet_list_elements.length);
    if (tweet_list_elements.length >= 120) {
      tweet_list_elements.first().remove();
    }

    // handle message
  }, false);
  

}