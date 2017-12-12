var twitterJSON = "http://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
var loadedTweets = [];

var container = '.box-boxes';
var msnryContainer = [container, ' .frame ul'].join('');
var msnryItems = [msnryContainer, ' li'].join('');
var countori,countnow;
countori=0;
countnow=0;
var lastid;
var liveTweets = {

    //Set Contrasting Color
    yiq: function(hexcolor) {
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);
      var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return (yiq >= 128) ? '000' : 'fff';
    },

    toHTML: function(tweet, i) {
      i = i || 0;
      console.log(tweet);
      var html, box_image, content, bg_color, text_color, box_css, link_url, img_url;
      html = box_image = "";
      content = tweet.text; //Add link filtering
      bg_color = tweet.user.profile_background_color;
      text_color = liveTweets.yiq(tweet.user.profile_background_color);
      box_css = "";
      box_css += 'style="';
      box_css += 'background-color: #' + bg_color + ';';
      box_css += 'color: #' + text_color + ';';
      box_css += '"'; //End styles
      link_url = "https://twitter.com/" + tweet.user.screenname + "/status/" + tweet.id_str;
      if (tweet.entities.urls.length !== 0) {
        link_url = tweet.entities.urls[0].url;
      }
      img_url = "//gutschurch.com/wp-content/uploads/2014/11/blank.gif";
      if ('media' in tweet.entities)
        img_url = tweet.entities.media[0].media_url_https; //Add if to this

      html = [
        '<li class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">',
        '<div class="box-box box-tweet easecubic animated fadeInDown delay-', i, '" ', box_css, ' >',
        '<a href="', link_url, '" title="', tweet.user.name, '" target="_blank">',
        '<div class="box-image">',
        '<img src="', img_url, '">',
        '</div>', //.box-image
        '<div class="box-header easecubic">',
        '<div class="box-header-content">',
        '<div class="box-caption easecubic">',
        '<p>', content, '</p>',
        '</div>', //.box-caption
        //'<h3>','</h3>',
        '</div>', //.box-header-content
        '</div>', //.box-header
        '</a>',
        '</div>', //.box-box
        '</li>'
      ].join('');

      return html;
    },

    //Let's get this started
    init: function(container) {
      var list, gutter, l;
      
     var boxesContainer = container;


      // list = document.querySelectorAll(msnryContainer);

      // $("list")=list;

      gutter = 0;

      // Creates an instance of Masonry
      // var $boxesMason = $list.masonry({
      //   gutter: gutter,
      //   itemSelector: 'li',
      //   columnWidth: 'li:first-child'
      // });

      (function worker() {
        $.ajax({
          url: twitterJSON,
          success: function(data) {

    // this.startDetailStreaming = function(id) {
    console.log("Subscribing to detail stream for ");
    // this.detail_id = id;
  var detail_source = new EventSource("" + STREAMER + "/subscribe/details/" + id);
  console.log(detail_source.detail_source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false));
  // };

            // console.log(data);
    //    var source = new EventSource(twitterJSON);
      
    //    // var source = new EventSource("http://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602", { withCredentials: true });
    //     // console.log(source.readyState);// var onmessage = function(event) {
    //     // return incrementScore(event.data);}
         
    //      source.onmessage=function(event)
    // {
    //    $("#clock").append(incrementScore(event.data))
    // };


  //   this.startDetailStreaming = function(id) {
  //   console.log("Subscribing to detail stream for " + id);
  //   this.detail_id = id;
  //   this.detail_source = new EventSource(twitterJSON);
  //   console.log( this.detail_source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false));
  //   // $("#clock").append(incrementScore(event.data))
  // };
            //if results are search results
            // if ('statuses' in data)
            //   data = data.statuses
            //  console.log(data);
            // // data.reverse();
            
            // l = data.recent_tweets.length;
            
            // for( var i=0;i<l;i++){
            //   if(data.recent_tweets[i].id == lastid){
            //    l=i;
            //    break;
            //   }
            // }


            // countori=countnow;
            // countnow=l;
            // tweetsLoop:
            //   for (i = 0; i < l; i++) {
            //     //console.log(i);

            //     var tweet = data[i];

            //     //console.log("This Tweet: "+tweet.id_str);

            //     //Tweet is new!
            //     if (loadedTweets.indexOf(tweet.id_str) == -1) {
            //       loadedTweets.push(tweet.id_str);
            //       var html = liveTweets.toHTML(tweet, i);
            //       $html = $(html);

            //       if (html !== false) {
            //         $list.prepend($html)
            //           .masonry('prepended', $html);
            //       }

            //     } else { //Tweet is old, Skip!
            //       //continue tweetsLoop;
            //     }

            //   }
            // for( var i=0;i<countnow;i++){
            //   $("#clock").append("I")
            // }
         lastid=data.recent_tweets[0].id;
            
          },
          complete: function() {
            // Schedule the next request when the current one's complete
            setTimeout(worker, 3000);
          }
        });
      })();

    }

  } //liveTweets


  this.appendTweetList = function(tweet, new_marker) {
    var new_entry, tweet_list, tweet_list_elements;
    if (new_marker == null) {
      new_marker = false;
    }
    tweet_list = $('#tweet_list');
    tweet_list_elements = $("#tweet_list li");
    if (tweet_list_elements.size() >= 20) {
      tweet_list_elements.last().remove();
    }
    new_entry = $(formattedTweet(tweet, new_marker));
    new_entry.find('time.timeago').timeago();
    tweet_list.prepend(new_entry);
    if (css_animation) {
      return new_entry.focus();
    }
  };
  this.setStreamServerFromEnvironment = function() {
    var rand, server, servers;
    server = $('html').data('stream-server');
    console.log("Environment is setting stream server to " + server);
    servers = server.split(',');
    if (servers.length > 1) {
      console.log("Multiple stream servers in rotation; randomly selecting for client");
      rand = servers[Math.floor(Math.random() * servers.length)];
      console.log("Randomly selected stream server: " + rand);
      return STREAMER = rand;
    } else {
      return STREAMER = server !== '/' ? server : '';
    }
  };

  this.startScoreStreaming = function() {
    if (use_capped_stream) {
      return startCappedScoreStreaming();
    } else {
      return startRawScoreStreaming();
    }
  };

  this.startRawScoreStreaming = function() {
    console.log("Subscribing to score stream (raw)");
    this.source = new EventSource("" + STREAMER + "/subscribe/raw");
    return this.source.onmessage = function(event) {
      return incrementScore(event.data);
    };
  };

  this.startCappedScoreStreaming = function() {
    console.log("Subscribing to score stream (60eps rollup)");
    this.source = new EventSource("" + STREAMER + "/subscribe/eps");
    return this.source.onmessage = function(event) {
      return incrementMultipleScores(event.data);
    };
  };

  this.stopScoreStreaming = function(async) {
    if (async == null) {
      async = true;
    }
    console.log("Unsubscribing to score stream");
    this.source.close();
    if (this.force_stream_close) {
      return forceCloseScoreStream(async);
    }
  };

  this.startDetailStreaming = function(id) {
    console.log("Subscribing to detail stream for " + id);
    this.detail_id = id;
    this.detail_source = new EventSource("" + STREAMER + "/subscribe/details/" + id);
    return this.detail_source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false);
  };
//Yall ready for this
liveTweets.init(container);