document.addEventListener("DOMContentLoaded", function () {
  const followImage = document.getElementById("follow-image");
  let mouseX = 0,
    mouseY = 0;
  let imageX = 0,
    imageY = 0;

  document.addEventListener("mousemove", function (event) {
    // mouseX = event.pageX;
    // mouseY = event.pageY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  function animate() {
    imageX += (mouseX - imageX) * 0.3; // Adjust the factor to control delay
    imageY += (mouseY - imageY) * 0.3;
    // followImage.style.transform = `translate(${imageX - 25}px, ${imageY - 25}px)`;
    followImage.style.left = imageX - 5 + "px";
    followImage.style.top = imageY - 5 + "px";
    requestAnimationFrame(animate);
  }
  animate();
});

// document.addEventListener('mousemove', function(event) {
//     const followImage = document.getElementById('follow-image');
//     // followImage.style.left = (event.pageX - 25) + 'px';
//     // followImage.style.top = (event.pageY - 25) + 'px';
//
//     followImage.style.left = (event.clientX - 25) + 'px';
//     followImage.style.top = (event.clientY - 25) + 'px';
//
//     // followImage.style.transform = `translate(${imageX - 25}px, ${imageY - 25}px)`;
//     // $("#follow-image").css({"left":(event.pageX - 25) ,"top":(event.pageY - 25) })
// });
function isElementScrolledOut(el) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(el).offset().top;
  var elemBottom = elemTop + $(el).height();

  return elemBottom < docViewTop || elemTop > docViewBottom;
}

function gudongScroll(obj, up_or_down, gundonggaodu, xishu, delta) {
  var gdo = gundonggaodu * xishu;

  // var posi_top  = obj.data("posi_top");
  //
  // var aaaaaaaaaaa = obj.position().top-gdo;
  // var bbbbbbbbbbbb = obj.position().top+gdo;
  //
  // console.log("aaaaaaaaaaa",aaaaaaaaaaa);
  // console.log("fffffffffffff",obj.position().top - posi_top);
  //
  //
  // if(delta > 0){  //页面向上滚动
  //     if( obj.position().top - posi_top  > -50    ){
  //         obj.css({"top":aaaaaaaaaaa})//向上运动
  //     }
  // }else{
  //     if( obj.position().top - posi_top  < 50    ){
  //         obj.css({"top":bbbbbbbbbbbb})//向下运动
  //     }
  // }
  // obj.stop(true).animate({top:gdo},0);
  obj.stop().animate({ top: obj.position().top + gdo }, 2);
  // obj.stop().animate({top:obj.position().top},2);

  // if(up_or_down == 1){
  //         // console.log("进来了",obj.position().top - posi_top);
  //         if( obj.position().top - posi_top  < 50    ){
  //             obj.css({"top":obj.position().top+gdo})
  //         }else{
  //             obj.css({"top":50})
  //         }
  //     }else{
  //         if( obj.position().top - posi_top  > -50    ){
  //             obj.css({"top":obj.position().top-gdo})
  //         }else{
  //             obj.css({"top":posi_top+50})
  //         }
  //     }
}

function pc_menu_init() {
  $(".table-menu .part1 .hover-item[lang='Destinations']").addClass("active");
  $(".table-menu .part2 .part2-item[lang='Destinations']").addClass("active");
  $(".table-menu .part2 .part2-item[lang='Destinations']")
    .find(".hover-item")
    .eq(0)
    .addClass("active");
  // $(".table-menu .part2 .hover-item[lang='Destinations']").addClass("active")
  // $(".table-menu .part3 .waterFall[lang='Australia']").addClass("active");
  var obj = $(".table-menu .part3 .waterFallqq[lang='Australia']");
  if ($(".table-menu .part2 .part2-item[lang='Destinations']").length > 0) {
    $(".table-menu .part2").addClass("active");
  } else {
    $(".table-menu .part2").removeClass("active");
  }
  if (obj.length > 0) {
    obj.addClass("active");
    $(".table-menu .part3").addClass("active");
    var all_width = obj.width();
    var gap = all_width * 0.115625;
    var item_width = all_width * 0.25625;
    if ($("body").width() >= 1600) {
      item_width = all_width * 0.2;
      console.log("item_width:", item_width);
    }
    var gap2 = "no";
    obj.find(".ul").width(item_width);
    var waterFall_obj = obj.get(0).waterFall("ul", gap, gap2);
  }
}

var mnue_lock = false;
var menu_btn = 1;

function enquire_form() {
  if (!$(".form-common").hasClass("active")) {
    $(".body-mask").addClass("active");
    // no_scroll = 1
    $(".form-common").addClass("active");
    // $(".common-menu-toggle-container").addClass("open")
    // $(".common-menu-toggle-container").addClass("enquire-2")
    scroheight = 0;
    menu_btn = 2;
    // $(".comout-left-right").css({
    //     'z-index':99
    // })

    // document.body.style.overflow = 'hidden';
  }
  $(".form-common").find(".btn-close").off("click");
  $(".form-common")
    .find(".btn-close")
    .on("click", function () {
      $(".form-common").removeClass("active");
    });
}

function enquire_itinerary_form() {
  if (!$(".form-itinerary").hasClass("active")) {
    $(".body-mask").addClass("active");
    // no_scroll = 1
    $(".form-itinerary").addClass("active");
    // $(".common-menu-toggle-container").addClass("open")
    // $(".common-menu-toggle-container").addClass("enquire-2")
    scroheight = 0;
    menu_btn = 2;
    // $(".comout-left-right").css({
    //     'z-index':99
    // })

    // document.body.style.overflow = 'hidden';
  }
  $(".form-itinerary").find(".btn-close").off("click");
  $(".form-itinerary")
    .find(".btn-close")
    .on("click", function () {
      $(".form-itinerary").removeClass("active");
    });
}

var line_width = 60;
function line_width_do() {
  var window_width = $(window).width();
  if (window_width <= 600) {
    line_width = 30;
    // document.documentElement.style.setProperty('--line_width', '30px');
    // document.documentElement.style.setProperty('--line_width_all', $(".unique-australian-experiences .li").length*30+'px');
  } else if (window_width > 600 && window_width < 1200) {
    line_width = 45;
    document.documentElement.style.setProperty("--line_width", "45px");
    document.documentElement.style.setProperty(
      "--line_width_all",
      $(".unique-australian-experiences .li").length * 45 + "px"
    );
  }
}

var need_fixed_bottom = 0;
var to_ = 0;

function map_resize() {
  padding_left = ($(window).width() * 35) / 1400;

  var window_width = $(window).width();
  if (window_width < 1000) {
    padding_left = -3;
  } else if (window_width >= 1000 && window_width < 1200) {
    padding_left = 5;
  } else if (window_width >= 1200 && window_width < 1300) {
    padding_left = 10;
  }

  if (window.myChart) {
    myChart.resize();
  }
}

let timeerId;
var window_width = $(window).width();
$(window).resize(function () {
  clearTimeout(timeerId);
  timeerId = setTimeout(function () {
    line_width_do();

    if ($(".waterFall2").length > 0) {
      var waterFall_obj = document
        .getElementsByClassName("waterFall2")[0]
        .waterFall("li", 20);
    }
    if ($(".lists-waterFall").length > 0) {
      var waterFall_obj = document
        .getElementsByClassName("lists-waterFall")[0]
        .waterFall("item", 20);
    }

    $(".common-needle-and-thread .box .ul").css({
      "min-height": $(".common-needle-and-thread .needle-line-img").height(),
    });

    map_resize();
    if ($("#need-to-be-fixed1").length) {
      // need_fixed_do()

      map_img_slide();
    }

    window_width = $(window).width();
  }, 500);
});

function toMobile() {
  // $(".selectr-container").click(function(){
  //     $(this).toggleClass("r_active")
  // });
}
function map_img_slide() {
  if ($("#map-img-slide").find(".item").length <= 1) {
    $(".free-arrow").hide();
    // return;
  }
  if ($("#map-img-slide").hasClass("slick-slider")) {
    $("#map-img-slide").slick("unslick");
    // return false
  }

  $("#map-img-slide").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );

  $("#map-img-slide")
    .slick({
      autoplay: true,
      autoplaySpeed: 1000000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // focusOnSelect: true,
      // swipeToSlide: true,
      infinite: true,
      adaptiveHeight: true,
      // fade: true,
      // cssEase: 'linear'
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $(".free-arrow .arrow-left").unbind("click");
  $(".free-arrow .arrow-left").click(function () {
    $("#map-img-slide").slick("slickPrev");
  });

  $(".free-arrow .arrow-right").unbind("click");
  $(".free-arrow .arrow-right").click(function () {
    $("#map-img-slide").slick("slickNext");
  });
}

var travel_stories_filter_page = 2; //Because the initial state loaded a page in php.
var news_filter_page = 2; //Because the initial state loaded a page in php.
function loadBlogs(cate, action = "") {
  $.ajax({
    type: "post",
    dataType: "html",
    data: {
      page: travel_stories_filter_page,
      cate: cate,
    },
    url: "/wp-json/wp/v1/load-blogs",
    success: function (respHTML, textStatus, jqXHR) {
      var total = jqXHR.getResponseHeader("total");

      if (action == "append") {
        $(".blogs-travel-stories-wrapper").append(respHTML);
      } else {
        $(".blogs-travel-stories-wrapper").html(respHTML);
      }
      travel_stories_filter_page++;

      if ($(".blogs-travel-stories-wrapper").children().length >= total) {
        $(".blogs-travel-stories-wrapper")
          .parents(".search-result-item")
          .find(".loadmore-wrapper")
          .hide();
      } else {
        $(".blogs-travel-stories-wrapper")
          .parents(".search-result-item")
          .find(".loadmore-wrapper")
          .show();
      }
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
}
function loadBlogsNews(cate, action = "append") {
  $.ajax({
    type: "post",
    dataType: "html",
    data: {
      page: news_filter_page,
      cate: cate,
    },
    url: "/wp-json/wp/v1/load-blogs-news",
    success: function (respHTML, textStatus, jqXHR) {
      var total = jqXHR.getResponseHeader("total");
      if (action == "append") {
        $(".blogs-news-wrapper").append(respHTML);
      } else {
        $(".blogs-news-wrapper").html(respHTML);
      }

      news_filter_page++;

      if ($(".blogs-news-wrapper").children().length >= total) {
        $(".blogs-news-wrapper")
          .parents(".search-result-item")
          .find(".loadmore-wrapper")
          .hide();
      } else {
        $(".blogs-news-wrapper")
          .parents(".search-result-item")
          .find(".loadmore-wrapper")
          .show();
      }
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
}

function loadDestination(cate, action = "append") {
  $.ajax({
    type: "post",
    dataType: "html",
    data: {
      page: 1,
      post_parent: cate,
    },
    url: "/wp-json/wp/v1/load-destination",
    success: function (respHTML) {
      $(".destination-wrapper").html(respHTML);
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
}

function loadAccommodation(cate, action = "append") {
  $.ajax({
    type: "post",
    dataType: "html",
    data: {
      page: 1,
      cate: cate,
    },
    url: "/wp-json/wp/v1/load-accommodation",
    success: function (respHTML) {
      $(".accommodation-wrapper").html(respHTML);
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
}

function loadTours(cate, action = "append") {
  $.ajax({
    type: "post",
    dataType: "html",
    data: {
      page: 1,
      cate: cate,
    },
    url: "/wp-json/wp/v1/load-tours",
    success: function (respHTML) {
      $(".tours-wrapper").html(respHTML);
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
}

var page = 2;
var type = "";
var keywords = "";
// var journeys_page=2;
// var itineraries_page=2;
// var travel_stories_page=2;
// var news_page=2;
// var accommodataion_page=2;
// var tours_page=2;
// var aircrafts_page=2;
// var vessels_page=2;
// function calcTotal(total, post_type,name){
//     var all_total=0;
//     $(".tags").children("div").each((idx,obj)=>{
//         if($(obj).data().value==post_type){
//             $(obj).attr("data-count",total);
//             $(obj).text(name+" ("+total+")");

//             if(total==0){
//                 $(obj).hide();
//             }else{
//                 $(obj).show();
//             }
//         }
//         // console.log("==============",$(obj).attr("data-count"))
//         all_total+=parseInt($(obj).attr("data-count"));
//     });
//     $(".tags").children("div").eq(0).text("All ("+all_total+")");
// }

$(function () {
  if ($(".search-journeys-wrapper").length > 0) {
    $(".search-journeys-wrapper")
      .find(".loadmore-wrapper")
      .children(".box")
      .on("click", function () {
        keywords = $(".search-form-wrapper")
          .find("input[name='search_keywords']")
          .val();
        search(keywords, type, "append");
      });
  }
});
function search(keywords, type, mode = "") {
  if (mode == "") {
    page = 1;
  } else {
    if (page == 1) {
      page = 2;
    }
  }
  if (page == 1) {
    $("body").addClass("ajax-loading");
  }
  if (page > 1) {
    $("body").addClass("ajax-loading-more");
  }

  $.ajax({
    type: "GET",
    dataType: "html",
    data: {
      page: page,
      keywords: keywords,
      type: type,
    },
    url: "/wp-json/wp/v1/load-search-result",
    success: function (respHTML, textStatus, jqXHR) {
      $("body").removeClass("ajax-loading");
      $("body").removeClass("ajax-loading-more");

      var total = jqXHR.getResponseHeader("total");
      console.log("mode:", mode);
      if (mode == "append") {
        $(".search-journeys-wrapper")
          .find(".lists")
          .children(".ul")
          .append(respHTML);
        page++;
      } else {
        $(".search-journeys-wrapper")
          .find(".lists")
          .children(".ul")
          .html(respHTML);
        // if(total==0){
        //     $(".search-journeys-wrapper").hide();
        // }else{
        //     $(".search-journeys-wrapper").show();
        // }
        // $(".search-journeys-wrapper").attr("data-total",total);
      }
      if (
        $(".search-journeys-wrapper").find(".lists").children(".ul").find(".li")
          .length >= total
      ) {
        $(".search-journeys-wrapper")
          .find(".loadmore-wrapper")
          .children(".box")
          .hide();
      } else {
        $(".search-journeys-wrapper")
          .find(".loadmore-wrapper")
          .children(".box")
          .show();
      }
    },
    error: function (t) {
      console.log("error:", t);
    },
  });
  // if(page>1){
  //     mode="append";
  // }
  // if(mode!="append"){
  //     $(".search-journeys-wrapper").find(".loadmore-wrapper").children(".box").off("click");
  //     $(".search-journeys-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
  //         search(keywords,"append");
  //     });
  // }
}

// function searchTotal(keywords){
//     $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         data: {
//             page: journeys_page,
//             keywords: keywords,
//         },
//         url: '/wp-json/wp/v1/load-total-list',
//         success: function (data, textStatus, jqXHR) {
//             // var total = jqXHR.getResponseHeader("total");

//             var total = data[0];
//             var json = data[1];

//             var html = `<div class="item" data-value="0">All (${total})</div>`;

//             for(var key in json){
//                 html +=`<div class="item" data-value="${key}">${json[key]}</div>`;
//             }
//             $(".tags").html(html);
//             // console.log(total,json);

//             bindTags();
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
// }

// function searchJourneys(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: journeys_page,
//             keywords: keywords,
//         },
//         url: '/wp-json/wp/v1/load-journeys-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-journeys-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-journeys-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-journeys-wrapper").hide();
//                 }else{
//                     $(".search-journeys-wrapper").show();
//                 }
//                 $(".search-journeys-wrapper").attr("data-total",total);
//             }
//             if($(".search-journeys-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-journeys-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-journeys-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             journeys_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(journeys_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-journeys-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchJourneys(keywords,"append");
//         });
//     }
// }

// function searchItineraries(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: itineraries_page,
//             keywords: keywords,
//             type:1,
//         },
//         url: '/wp-json/wp/v1/load-journeys-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-itineraries-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-itineraries-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-itineraries-wrapper").hide();
//                 }else{
//                     $(".search-itineraries-wrapper").show();
//                 }
//                 $(".search-itineraries-wrapper").attr("data-total",total);
//             }
//             if($(".search-itineraries-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-itineraries-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-itineraries-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             itineraries_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(itineraries_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-itineraries-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchItineraries(keywords,"append");
//         });
//     }
// }

// function searchTravelStories(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: travel_stories_page,
//             keywords: keywords,
//             type:0,
//         },
//         url: '/wp-json/wp/v1/load-journals-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-travel-stories-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-travel-stories-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-travel-stories-wrapper").hide();
//                 }else{
//                     $(".search-travel-stories-wrapper").show();
//                 }
//                 $(".search-travel-stories-wrapper").attr("data-total",total);
//             }
//             if($(".search-travel-stories-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-travel-stories-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-travel-stories-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             travel_stories_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(travel_stories_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-travel-stories-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchTravelStories(keywords,"append");
//         });
//     }
// }

// function searchNews(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: news_page,
//             keywords: keywords,
//             type:1,
//         },
//         url: '/wp-json/wp/v1/load-journals-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-news-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-news-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-news-wrapper").hide();
//                 }else{
//                     $(".search-news-wrapper").show();
//                 }
//                 $(".search-news-wrapper").attr("data-total",total);
//             }
//             if($(".search-news-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-news-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-news-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             news_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(news_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-news-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchNews(keywords,"append");
//         });
//     }
// }

// function searchAccoommodation(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: accommodataion_page,
//             keywords: keywords,
//             type:0,
//         },
//         url: '/wp-json/wp/v1/load-products-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-accommodation-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-accommodation-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-accommodation-wrapper").hide();
//                 }else{
//                     $(".search-accommodation-wrapper").show();
//                 }
//                 $(".search-accommodation-wrapper").attr("data-total",total);
//             }
//             if($(".search-accommodation-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-accommodation-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-accommodation-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             accommodataion_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(accommodataion_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-accommodation-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchAccoommodation(keywords,"append");
//         });
//     }
// }

// function searchTours(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: tours_page,
//             keywords: keywords,
//             type:1,
//         },
//         url: '/wp-json/wp/v1/load-products-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-tours-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-tours-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-tours-wrapper").hide();
//                 }else{
//                     $(".search-tours-wrapper").show();
//                 }
//                 $(".search-tours-wrapper").attr("data-total",total);
//             }
//             if($(".search-tours-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-tours-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-tours-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             tours_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(tours_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-tours-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchTours(keywords,"append");
//         });
//     }
// }

// function searchAircrafts(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: aircrafts_page,
//             keywords: keywords,
//             type:2,
//         },
//         url: '/wp-json/wp/v1/load-products-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-aircrafts-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-aircrafts-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-aircrafts-wrapper").hide();
//                 }else{
//                     $(".search-aircrafts-wrapper").show();
//                 }
//                 $(".search-aircrafts-wrapper").attr("data-total",total);
//             }
//             if($(".search-aircrafts-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-aircrafts-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-aircrafts-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             aircrafts_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(aircrafts_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-aircrafts-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchAircrafts(keywords,"append");
//         });
//     }
// }

// function searchVessels(keywords, mode=""){
//     $.ajax({
//         type: 'GET',
//         dataType: 'html',
//         data: {
//             page: vessels_page,
//             keywords: keywords,
//             type:3,
//         },
//         url: '/wp-json/wp/v1/load-products-list',
//         success: function (respHTML, textStatus, jqXHR) {
//             var total = jqXHR.getResponseHeader("total");

//             if(mode=="append"){
//                 $(".search-vessels-wrapper").find(".lists").children(".ul").append(respHTML);
//             }else{
//                 $(".search-vessels-wrapper").find(".lists").children(".ul").html(respHTML);
//                 if(total==0){
//                     $(".search-vessels-wrapper").hide();
//                 }else{
//                     $(".search-vessels-wrapper").show();
//                 }
//                 $(".search-vessels-wrapper").attr("data-total",total);
//             }
//             if($(".search-vessels-wrapper").find(".lists").children(".ul").find(".li").length>=total){
//                 $(".search-vessels-wrapper").find(".loadmore-wrapper").children(".box").hide();
//             }else{
//                 $(".search-vessels-wrapper").find(".loadmore-wrapper").children(".box").show();
//             }

//             vessels_page++;
//         },
//         error: function (t) {
//           console.log('error:', t)
//         }
//     });
//     if(vessels_page>1){
//         mode="append";
//     }
//     if(mode!="append"){
//         $(".search-vessels-wrapper").find(".loadmore-wrapper").children(".box").on("click",function(){
//             searchVessels(keywords,"append");
//         });
//     }
// }

function bindTags() {
  $(".search-form-fields")
    .find(".tags")
    .find(".item")
    .each((idx, obj) => {
      if ($(obj).hasClass("active")) {
        type = $(obj).attr("data-value");
      }
    });
  $(".search-form-fields").find(".tags").children(".item").off("click");
  $(".search-form-fields")
    .find(".tags")
    .children(".item")
    .on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      type = $(this).attr("data-value");
      // console.log("type:",type)

      var keywords = $(".search-form-fields")
        .find("input[name='search_keywords']")
        .val();

      search(keywords, type);
      // if(value=="0"){
      //     $(".search-result-item").each((idx,obj)=>{
      //         // console.log("=================");
      //         if($(obj).attr("data-total")!="0"){
      //             $(obj).show();
      //         }
      //     });
      // }else{
      //     $(".search-result-item").each((idx,obj)=>{
      //         if($(obj).hasClass("search-"+value+"-wrapper")){
      //             $(obj).show();
      //         }else{
      //             $(obj).hide();
      //         }
      //     });
      // }
    });
}

function updateSearchParams(keywords, type) {
  var url = new URL(window.location);
  url.searchParams.set("keywords", keywords);
  history.pushState({}, "", url);
}

$(document).ready(function () {
  // if($(".search-form-wrapper").length>0){
  //     var keywords = $(".search-form-wrapper").find("input[name='search_keywords']").val();
  //     searchJourneys(keywords);
  //     searchItineraries(keywords);
  //     searchTravelStories(keywords);
  //     searchNews(keywords);
  //     searchAccoommodation(keywords);
  //     searchTours(keywords);
  //     searchAircrafts(keywords);
  //     searchVessels(keywords);
  // }

  $(".search-form")
    .find("svg")
    .on("click", function () {
      if ($(this).parents(".search-form").hasClass("active")) {
        var val = $(".search-form").find("input[name='search_keywords']").val();
        location.href = "/search/?keywords=" + val;
      }
    });
  $(".search-form")
    .find("input[name='search_keywords']")
    .on("keypress", function (event) {
      if (event.keyCode == 13) {
        var val = $(".search-form").find("input[name='search_keywords']").val();
        location.href = "/search/?keywords=" + val;
      }
    });

  bindTags();

  var timeout = null;
  $(".search-form-fields")
    .find("input[name='search_keywords']")
    .on("input propertychange", function (event) {
      var keywords = $(this).val();

      // var url = new URL(window.location);
      // url.searchParams.set("keywords", keywords);
      // history.pushState({}, '', url);
      updateSearchParams(keywords);
      // console.log("==============",url);
      // journeys_page=1;
      // itineraries_page=1;
      // travel_stories_page=1;
      // news_page=1;
      // accommodataion_page=1;
      // tours_page=1;
      // aircrafts_page=1;
      // vessels_page=1;

      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(function () {
        console.log("===============");
        search(keywords);
        // searchTotal(keywords);

        // searchJourneys(keywords);
        // searchItineraries(keywords);
        // searchTravelStories(keywords);
        // searchNews(keywords);
        // searchAccoommodation(keywords);
        // searchTours(keywords);
        // searchAircrafts(keywords);
        // searchVessels(keywords);

        clearTimeout(timeout);
        timeout = null;
      }, 500);
    });

  $(".btn-contact-travel-designer").on("click", function (e) {
    var face = $(this).attr("data-face");
    var email = $(this).attr("data-email");
    var name = $(this).attr("data-name");
    console.log("name:", name);
    $(".form-common")
      .find(".travel-designer-face")
      .children("img")
      .attr("src", face);
    $(".form-common").find("input[name='input_10']").val(email);
    $(".form-common")
      .find(".travel-designer-wrapper")
      .find(".common-title-40px")
      .find("span")
      .html(name);
    $(".form-common")
      .find(".travel-designer-wrapper")
      .find(".description")
      .find("span")
      .html(name);

    $(".enquire-form").find(".travel-designer-face").show();
    $(".enquire-form").find(".common-wrapper").hide();
    $(".enquire-form").find(".travel-designer-wrapper").show();

    e.stopPropagation();
    enquire_form();
  });

  $(".goto-next-section").on("click", function () {
    var nextSection = $(this).parents("section").nextAll("section").first();
    $("html,body").animate(
      {
        scrollTop: $(nextSection).offset().top,
      },
      500
    );
  });

  $(".job-lists .left .lists .ul .li").click(function () {
    // var title = $(this).find(".sub-title").html()
    // var date = $(this).find(".date").html()

    // $(".job-lists .right .body-content .subtitle").html(title);
    // $(".job-lists .right .body-content .date").html(date);
    var index = $(this).index();
    $(".job-list-wrapper")
      .children(".body-content")
      .eq(index)
      .show()
      .siblings(".body-content")
      .hide();
  });

  // toMobile()
  window_width = $(window).width();
  map_img_slide();
  $(".map-mobile-menu .ul .items").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }

    var lang = $(this).attr("lang");

    var thisOne = $(".explore-map")
      .find(".right")
      .find(".bin[lang='" + lang + "']");
    thisOne.addClass("active").siblings().removeClass("active");
    toSlickV2(thisOne.find(".lists"));
  });

  var cate = 0;
  $(".blog-travel-stories-filter")
    .parents(".search-result-item")
    .find(".loadmore-wrapper")
    .children(".box")
    .on("click", function () {
      loadBlogs(cate, "append");
    });

  $(".blog-travel-stories-filter .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    cate = $(this).data().id;
    travel_stories_filter_page = 1;
    loadBlogs(cate);
  });

  var cate_news = 0;
  $(".blog-news-filter")
    .parents(".search-result-item")
    .find(".loadmore-wrapper")
    .children(".box")
    .on("click", function () {
      loadBlogsNews(cate_news, "append");
    });
  $(".blog-news-filter .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    cate_news = $(this).data().id;
    news_filter_page = 1;
    loadBlogsNews(cate_news);
  });

  $(".destination-filter .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    var cate = $(this).data().id;
    loadDestination(cate);
  });

  $(".accommodation-filter .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    var cate = $(this).data().id;
    loadAccommodation(cate);
  });

  $(".tours-filter .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    var cate = $(this).data().id;
    loadTours(cate);
  });

  $("#top-menu-clickV2 ul li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    var lang = $(this).attr("lang");
    var val = $(this).attr("val");

    if (val == 1) {
      var to = $("#" + lang).offset().top - 60;
    } else {
      var to = $("#" + lang).offset().top - 100;
    }

    $("body,html").animate(
      {
        scrollTop: to,
      },
      500,
      function () {
        scrollHeight2 = $(document).scrollTop();
        scroll_offset = $(document).scrollTop();
      }
    ); //2秒滑动到指定位置
  });

  line_width_do();

  $(".table-menu-mobile .part1 .item")
    .children("a")
    .on("click", function (event) {
      event.stopPropagation();
    });
  $(".table-menu-mobile .part1 .item").click(function (event) {
    var mobile_table_part1_height = $(
      ".table-menu-mobile .table-bottom .part1"
    ).height();
    var mobile_table_part2_height = $(
      ".table-menu-mobile .table-bottom .part2"
    ).height();
    var mobile_table_part3_height = $(
      ".table-menu-mobile .table-bottom .part3"
    ).height();

    if (mobile_table_part2_height > mobile_table_part1_height) {
      mobile_table_part1_height = mobile_table_part2_height;
    }
    if (mobile_table_part3_height > mobile_table_part1_height) {
      mobile_table_part1_height = mobile_table_part3_height;
    }
    // alert(mobile_table_part1_height)

    // $(".table-menu-mobile .table-bottom .part1").height(mobile_table_part1_height)
    // $(".table-menu-mobile .table-bottom .part2").height(mobile_table_part1_height+100)
    // $(".table-menu-mobile .table-bottom .part3").height(mobile_table_part1_height+100)
    //

    var lang = $(this).attr("lang");

    if (
      $(".table-menu-mobile .part2 .part2-item[lang='" + lang + "']").length ==
      0
    ) {
      return;
    }

    $(".table-menu-mobile .part2").addClass("active");

    $(this).addClass("active").siblings().removeClass("active");

    $(".table-menu-mobile .part2 .part2-item").removeClass("active");

    $(".table-menu-mobile .part2 .part2-item[lang='" + lang + "']").addClass(
      "active"
    );
    // $(".table-menu-mobile .part3").hide()
    // if($(".table-menu-mobile .part2 .part2-item[lang='"+lang+"']").length > 0){
    //     $(".table-menu-mobile .part2").show()
    // }else{
    //     $(".table-menu-mobile .part2").hide()
    // }
  });

  $(".table-menu-mobile .part2 .back").click(function () {
    $(".table-menu-mobile .part2").removeClass("active");
  });

  $(".table-menu-mobile .part2 .part2-item .item")
    .children("a")
    .on("click", function (event) {
      event.stopPropagation();
    });
  $(".table-menu-mobile .part2 .part2-item .item").click(function () {
    // 鼠标移入时的操作
    // $(this).css('background-color', 'lightblue');
    var lang = $(this).attr("lang");

    if (
      $(".table-menu-mobile .part3 .waterFallqq[lang='" + lang + "']").length ==
      0
    ) {
      return;
    }

    $(".table-menu-mobile .part3").addClass("active");

    // $(this).addClass("active").siblings().removeClass("active")
    $(".table-menu-mobile .part3 .waterFallqq").removeClass("active");
    $(".table-menu-mobile .part3 .waterFallqq[lang='" + lang + "']").addClass(
      "active"
    );
    //
    //
    var obj = $(".table-menu-mobile .part3 .waterFallqq[lang='" + lang + "']");
    if (obj.length > 0) {
      var all_width = obj.width();
      var gap = all_width * 0.115625;
      var gap = 0;
      var item_width = all_width * 0.25625;
      var item_width = all_width * 0.49;

      if ($("body").width() >= 1600) {
        item_width = all_width * 0.2;
        console.log("item_width:", item_width);
      }

      var gap2 = "no";
      obj.find(".ul").width(item_width);
      var waterFall_obj = obj.get(0).waterFall("ul", gap, gap2);
    }
  });

  $(".table-menu-mobile .part3 .back").click(function () {
    $(".table-menu-mobile .part3").removeClass("active");
  });

  $(".table-menu")
    .find("a")
    .on("click", function () {
      // $("body").removeClass("open-fullwidth-menu");
      $(".common-menu-toggle-container").removeClass("open");
      document.body.style.overflow = "";

      if ($(".common-menu-toggle-container").hasClass("pc-pc")) {
        $("body").removeClass("pc");
      } else {
        $("body").removeClass("mobile");
      }
    });

  $(".table-menu-mobile")
    .find("a")
    .on("click", function () {
      // $("body").removeClass("open-fullwidth-menu");
      $(".common-menu-toggle-container").removeClass("open");
      document.body.style.overflow = "";

      if ($(".common-menu-toggle-container").hasClass("pc-pc")) {
        $("body").removeClass("pc");
      } else {
        $("body").removeClass("mobile");
      }
    });

  $(".table-menu .part1 .top .hover-item")
    .mouseenter(function () {
      // 鼠标移入时的操作
      // $(this).css('background-color', 'lightblue');
      var lang = $(this).attr("lang");

      $(this).addClass("active").siblings().removeClass("active");

      $(".table-menu .part2 .part2-item").removeClass("active");

      $(".table-menu .part2 .part2-item[lang='" + lang + "']").addClass(
        "active"
      );
      $(".table-menu .part3").removeClass("active");

      if ($(".table-menu .part2 .part2-item[lang='" + lang + "']").length > 0) {
        $(".table-menu .part2").addClass("active");
      } else {
        $(".table-menu .part2").removeClass("active");
      }
    })
    .mouseleave(function () {});

  $(".table-menu .part2 .part2-item .hover-item")
    .mouseenter(function () {
      // 鼠标移入时的操作
      // $(this).css('background-color', 'lightblue');
      var lang = $(this).attr("lang");

      // alert(lang)

      $(this).addClass("active").siblings().removeClass("active");
      $(".table-menu .part3 .waterFallqq").removeClass("active");
      var obj = $(".table-menu .part3 .waterFallqq[lang='" + lang + "']");
      if (obj.length > 0) {
        obj.addClass("active");
        $(".table-menu .part3").addClass("active");
        var all_width = obj.width();
        var gap = all_width * 0.115625;
        var item_width = all_width * 0.25625;

        if ($("body").width() >= 1600) {
          gap = all_width * 0.015625;
          item_width = all_width * 0.23;
          console.log("item_width:", item_width);
        }

        var gap2 = "no";
        obj.find(".ul").width(item_width);
        var waterFall_obj = obj.get(0).waterFall("ul", gap, gap2);
      } else {
        $(".table-menu .part3").removeClass("active");
      }
    })
    .mouseleave(function () {});

  $(".form-common").click(function (e) {
    // document.body.style.overflow = '';
    e.stopPropagation();
  });

  $(".form-itinerary").click(function (e) {
    // document.body.style.overflow = '';
    e.stopPropagation();
  });

  var openEnquiryForm = function () {
    $(".enquire-form").find(".travel-designer-face").hide();
    $(".enquire-form").find(".common-wrapper").show();
    $(".enquire-form").find(".travel-designer-wrapper").hide();
    // $(".form-common").find("input[name='input_9']").val(email); //local
    $(".form-common").find("input[name='input_10']").val(""); //stage
    enquire_form();
  };
  $("#enquire").click(function (e) {
    e.stopPropagation();
    openEnquiryForm();
  });
  $("a").each((idx, obj) => {
    var href = $(obj).attr("href");
    if (href == "#enquire") {
      $(obj).click(function (e) {
        e.stopPropagation();
        openEnquiryForm();
      });
    }
  });
  // $(".open_enquire_form").click(function(e){
  //     openEnquiryForm();
  // });

  if ($(".enquire-form select").length > 0)
    new Selectr(".enquire-form select", {
      searchable: false,
      // width: 300
    });

  if ($(".home-contact-us select").length > 0)
    new Selectr(".home-contact-us select");

  // jcf.replaceAll();
  // var selectorDefault = new Selectr("select");

  // $(".selectr-container").click(function(e){

  //     $(this).toggleClass("r_active")

  //     e.stopPropagation(); // 阻止事件冒泡

  // });

  $(".job-lists .lists .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
  });

  var openTeamMemberPage = function (_this) {
    var name = _this.find(".info").find(".name").html();
    var name_split = name.trim(" ").split(" ");
    $("#our-people-img").attr("src", _this.find(".img img").attr("src"));
    $("#our-people-name").html(name);
    $("#our-people-job").html(_this.find(".info .job").html());
    $("#our-people-content").html(
      _this.find(".info").find(".common-content").html()
    );

    $(".send-message").children("a").attr("data-face", _this.data().face);
    $(".send-message").children("a").attr("data-email", _this.data().email);
    $(".send-message").children("a").attr("data-name", _this.data().name);

    var whyContent = _this.find(".info").find(".why-content").html();
    if (whyContent.length == 0) {
      $("#people-description").hide();
    } else {
      $("#people-description").show();
    }
    $("#why-content").html(whyContent);
    mnue_lock = true;
    $(".common-pop-upV2").css({
      display: "flex",
    });
    $("body").addClass("open-common-pop-up");
    $(".common-arrow-button")
      .children("a")
      .html("Send " + name_split[0] + " a message");
  };

  $(".our-team-lists .bottom .ul .li").click(function () {
    openTeamMemberPage($(this));
  });

  $(".btn-open-member-page").click(function () {
    openTeamMemberPage($(this));
  });

  $(".common-pop-upV2 .close").click(function () {
    mnue_lock = false;
    $(".common-pop-upV2").css({
      display: "none",
    });
    $("body").removeClass("open-common-pop-up");
  });

  $("#play-btn").click(function () {
    var video = document.getElementById("bigVideo");
    if (video.play()) {
      $("#play-btn").hide();
      $(this).parent().find(".mask").hide();

      // 绑定事件监听器
      video.addEventListener("ended", function () {
        $("#play-btn").show();
        $(this).parent().find(".mask").show();
      });
    }
  });
  $(".our-team-lists .top-menu .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
  });

  $(".common-square-lists .lists .ul .li").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
  });

  if ($("#need_fixed_bottom").length > 0) {
    need_fixed_bottom =
      $("#need_fixed_bottom").offset().top - $(window).height();
  }

  var TimeId;
  $("#top-menu-click ul li").click(function () {
    mnue_lock = true;
    $("#menu-box-fixed").css("background-color", "transparent");
    $("#menu-box-fixed").removeClass("header-fixed");

    $("#menu-box-fixed").css("transition", "top 0.5s ease");
    $("#menu-box-fixed").css("top", "0px");

    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
    }
    var lang = $(this).attr("lang");
    var mainContainer = $("#address-detail-map-right");

    // var need_fixed_bottom = $("#need_fixed_bottom").offset().top - $(window).height()

    var to = $("#" + lang).offset().top - 60;

    // if(to > to_){2024.8.16
    //     to_ = to
    // }
    to_ = to;

    // $(window).scrollTop($(document).height());
    //
    // return false;

    // alert(to)
    // alert(need_fixed_bottom)

    if (to_ > need_fixed_bottom - 30 && lang != "gallery") {
      // to = need_fixed_bottom -30

      if (window_width >= 900) {
        $("#kkkkkkkkikkkkkkkkk").css({
          "padding-bottom": to_ - need_fixed_bottom + 50,
        });
      }
    }

    // alert(need_fixed_bottom)
    $("body,html").animate(
      {
        // scrollTop: $("#"+lang).offset().top - mainContainer.offset().top + mainContainer.scrollTop()-20
        // scrollTop: $("#"+lang).offset().top -90
        scrollTop: to,
      },
      500,
      function () {
        // 动画完成后执行的代码
        console.log("动画执行完成");
        scrollHeight2 = $(document).scrollTop();
        clearTimeout(TimeId);
        TimeId = setTimeout(function () {
          mnue_lock = false;
        }, 100);
        scroll_offset = $(document).scrollTop();

        setTimeout(function () {
          if ($("#need-to-be-fixed1").length) {
            console.log("+++++++++++++");
            // need_fixed_do()
          }
        }, 100);
      }
    ); //2秒滑动到指定位置

    // 假设你想滚动到页面上的某个元素的位置
    //         var targetPosition = $('#target-element').position().top;
    //
    // // 使用animate方法和scrollTop属性滚动到指定位置
    //         $('html, body').animate({
    //             scrollTop: targetPosition
    //         }, 'slow'); // 'slow'定义动画执行的速度
  });

  // $('#pos-relative-slide').on('init', function (event, slick, currentSlide, nextSlide) {

  // });

  // $("#pos-relative-slide").slick({
  //     autoplay: true,
  //     autoplaySpeed: 10000,
  //     dots: false,
  //     arrows: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     focusOnSelect: true,
  //     swipeToSlide: true,
  //     infinite: true,
  //     // fade: true,
  //     // cssEase: 'linear'

  // }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  // }).on('swipe', function (event, slick, currentSlide, nextSlide) {
  // }).on('afterChange', function (event, slick, currentSlide) {
  // });

  $("#image-gallery-wrapper").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      $(".active-progress").css({ height: (1 / slick.slideCount) * 100 + "%" });
      var btn = $(this);
      btn.find(".slick-current").addClass("big-myself");
    }
  );

  $("#image-gallery-wrapper")
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      // fade: true,
      // cssEase: 'linear'
      responsive: [
        {
          /*600 +  */ breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var long = 100 / slick.slideCount + (nextSlide / slick.slideCount) * 100;
      // console.log("long",long);
      $(".active-progress").css({
        width:
          100 / slick.slideCount + (nextSlide / slick.slideCount) * 100 + "%",
      });
    })
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  // $(".common-lists-img-text  .arrow-left-right .arrow-left").click(function (){
  //     $(this).parent().find(".imgitems-img-text").slick('slickPrev');
  // })
  // $(".common-lists-img-text  .arrow-left-right .arrow-right").click(function (){
  //     $(this).parent().find(".imgitems-img-text").slick('slickNext');
  // })

  // $(".address-detail-map .bottom .lists-img-text .content").slideUp()
  $(".common-lists-img-text .subtitle-img-text").click(function () {
    // alert( $(this).parent("li").index())

    if (!$(this).hasClass("active")) {
      var btn = $(this);
      var detail = btn.parent().find(".content-img-text").get(0);
      // detail.style.display = "block";
      btn.addClass("active");
      // btn.parent().find(".content").css({"display":"block"})
      // btn.parent().find(".content").slideDown()
      toSlick($(this).parent(".li-img-text").find(".imgitems-img-text"), btn);

      detail.style.height = "auto";

      const { height } = detail.getBoundingClientRect();
      const fffffffffffffff = detail.getBoundingClientRect();
      console.log("fffffffffffffff", fffffffffffffff);
      detail.style.height = 0;

      detail.style.transition = "0.5s";
      detail.getBoundingClientRect();
      detail.style.height = height + "px";
    } else {
      $(this).removeClass("active");
      var detail = $(this).parent().find(".content-img-text").get(0);
      detail.style.height = 0;
      // detail.style.display = "none";
      // $(this).parent().find(".content").slideUp()
    }
  });

  function toSlick(obj, btn) {
    if ($(obj).hasClass("slick-slider")) {
      return false;
    }
    obj.parent().find(".arrow-left-right .arrow-left").unbind("click");
    obj
      .parent()
      .find(".arrow-left-right .arrow-left")
      .click(function () {
        obj.slick("slickPrev");
      });
    obj.parent().find(".arrow-left-right .arrow-right").unbind("click");
    obj
      .parent()
      .find(".arrow-left-right .arrow-right")
      .click(function () {
        obj.slick("slickNext");
      });

    obj.on("init", function (event, slick, currentSlide, nextSlide) {});

    obj
      .slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        infinite: true,
        // fade: true,
        // cssEase: 'linear'
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
      .on("swipe", function (event, slick, currentSlide, nextSlide) {})
      .on("afterChange", function (event, slick, currentSlide) {});
  }

  $("#slide-nackground").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );

  $("#slide-nackground")
    .slick({
      // autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // focusOnSelect: true,
      // swipeToSlide: true,
      // infinite: true,
      fade: true,
      cssEase: "linear",
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  // 创建一个IntersectionObserver的实例
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 目标元素与视口有交集时的操作
          console.log("Element is in view!");
        } else {
          // 目标元素离开视口时的操作
          console.log("Element is not in view!");
        }
      });
    },
    {
      rootMargin: "50px",
      threshold: 0,
    }
  );
  var scrollHeight = $(window).scrollTop();

  setTimeout(function () {
    if ($("#need-to-be-fixed1").length) {
      // need_fixed_do()
    }
  }, 500);

  // cccccccccccc();
  function cccccccccccc() {
    var element_address_detail_mapToWindowTop =
      $(".address-detail-map").offset().top - $(window).scrollTop();

    // if(element_address_detail_mapToWindowTop <= 0){
    //     $("#need-to-be-fixed").addClass("map-top-fixed")
    // }else{
    //     $("#need-to-be-fixed").removeClass("map-top-fixed")
    // }

    // need_fixed_doV2()
    // var currentScroll = $(this).scrollTop(); // 当前滚动位置
    // if (currentScroll > 0) { // 确保不是页面顶部，避免初始化时的误判
    //     if (currentScroll > previousScroll) {
    //         // 向下滚动
    //         console.log('向下滚动');
    //     } else {
    //         // 向上滚动
    //         console.log('向上滚动');
    //     }
    // }
    // previousScroll = currentScroll; // 更新上一次滚动位置
    //
    var $element = $(".address-detail-map"); // 你的元素ID或选择器
    var $window = $(window);

    // 元素顶部到可视区域顶部的距离
    var elementTop = $element.offset().top;

    // 可视区域的高度
    var windowHeight = $window.height();

    // 窗口顶部到文档底部的距离加上窗口高度
    var docTop = $window.scrollTop() + windowHeight;
    //
    var elementaddress_detail_mapToWindowTop =
      $(".address-detail-map").offset().top - $(window).scrollTop();
    if (
      elementaddress_detail_mapToWindowTop <= 0 &&
      elementTop + $element.height() > docTop
    ) {
      //elementTop + $element.height() <= docTop  元素滑动到了窗口底部

      if (!$("#need-to-be-fixed").hasClass("map-top-fixed")) {
        $("#need-to-be-fixed").addClass("map-top-fixed");
      }
    } else {
      if ($("#need-to-be-fixed").hasClass("map-top-fixed")) {
        $("#need-to-be-fixed").removeClass("map-top-fixed");
      }
    }
  }

  var timoutid;
  var delay = 500;
  $("#our-exclusive-journeys")
    .on("mouseenter", function () {
      console.log("mouseenter");
      clearTimeout(timoutid);
      $(".mouse-pos-btn").addClass("active");
    })
    .on("mouseleave", function () {
      console.log("mouseleave");

      timoutid = setTimeout(function () {
        $(".mouse-pos-btn").removeClass("active");
      }, delay);

      $(".mouse-pos-btn").removeClass("active");
    });

  var previousScroll = $(window).scrollTop(); // 初始滚动位置

  // 选择需要观察的目标元素，并开始观察
  //     const target = document.getElementById('main-journey-our-journeys');
  //     observer.observe(target);

  const objs = document.querySelectorAll(".main-journey-our-journeys");
  objs.forEach((obj) => {
    observer.observe(obj);
  });

  // 当不再需要观察时，可以停止
  // observer.unobserve(target);

  // 当不再使用观察者实例时，可以停止所有观察并清理资源
  // observer.disconnect();

  // const ob = new IntersectionObserver((entries)=>{
  //     for(const entry of entries){
  //         if(entry.isIntersecting){
  //             const  obj = entry.target
  //             alert(111)
  //             // ob.unobserve(obj)
  //
  //         }
  //     }
  //
  //
  //
  // },{
  //     // root: null    ,
  //     rootMargin: "0px"  ,
  //     threshold:0,
  // })
  // const objs = document.querySelectorAll(".main-journey-our-journeys")
  // objs.forEach((obj) => {
  //     ob.observe(obj)
  // })

  $("#slide-small")
    .slick({
      // autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});
  $("#slide-small2")
    .slick({
      // autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $("#slider-left-top").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
  $("#slider-right-top").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
  $("#slider-left-bottom").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
  $("#slider-right-bottom").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });

  $("#slider-text-main")
    .slick({
      // autoplay: true,
      // autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // focusOnSelect: true,
      // swipeToSlide: true,
      infinite: true,
      // centerMode:true,
      // centerPadding: '25%',
      asNavFor:
        "#slider-left-top, #slider-right-top,#slider-left-bottom,#slider-right-bottom",
    })
    .on("afterChange", function (event, slick, currentSlide) {
      console.log("================", currentSlide);
      $(".main-journey-our-journeysV2")
        .find(".from-to")
        .children(".from")
        .text(currentSlide + 1);
      $(".main-journey-our-journeysV2")
        .find(".num-img")
        .text(currentSlide + 1);
    });
  $(".main-journey-our-journeysV2")
    .find(".btn-arrow-left")
    .on("click", function () {
      $("#slider-text-main").slick("slickPrev");
    });
  $(".main-journey-our-journeysV2")
    .find(".btn-arrow-right")
    .on("click", function () {
      $("#slider-text-main").slick("slickNext");
    });

  $("#slide-big").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );

  $("#slide-big")
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      centerMode: true,
      centerPadding: "25%",
      asNavFor: "#slide-small, #slide-nackground,#slide-small2",
      responsive: [
        {
          /*600 +  */ breakpoint: 601,
          settings: {
            centerMode: true,
            centerPadding: "30px",
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
        {
          /*900 + */ breakpoint: 900,
          settings: {
            centerMode: true,
            centerPadding: "60px",
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  //
  // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  //     type: 'iframe',
  //     iframe: {
  //         patterns: {
  //             youtube: {
  //                 index: 'youtube.com/',
  //                 id: function(url) {
  //                     var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
  //                     if ( !m || !m[1] ) return null;
  //                     return m[1];
  //                 },
  //                 src: '//www.youtube.com/embed/%id%?autoplay=1'
  //             },
  //             vimeo: {
  //                 index: 'vimeo.com/',
  //                 id: function(url) {
  //                     var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
  //                     if ( !m || !m[5] ) return null;
  //                     return m[5];
  //                 },
  //                 src: '//player.vimeo.com/video/%id%?autoplay=1'
  //             }
  //         }
  //     }
  // });
  //
  //

  $("#our-awards-and-recognition").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );
  var default_width = 262;
  var window_width = $("#our-awards-and-recognition").width();
  var num = Math.floor(window_width / default_width);

  $("#our-awards-and-recognition")
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      variableWidth: true,
      slidesToShow: num,
      slidesToScroll: 3,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,

      slidesToShow: 3, //begin
      slidesToScroll: 1,
      speed: 6000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnHover: true,
      responsive: [
        // {   /*600 +  */
        //     breakpoint: 601,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 2,
        //         // centerPadding: padding_width+'px',
        //         // centerMode: true,
        //     }
        // },
        // {  /*900 + */
        //     breakpoint: 900,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         // centerPadding: padding_width+'px',
        //         // centerMode: true,
        //     }
        // }
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $("#travel-stories").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );
  $("#travel-stories")
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      responsive: [
        {
          /*600 +  */ breakpoint: 601,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
        {
          /*900 + */ breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $(".travel-stories .arrow-left").click(function () {
    $(".travel-stories-slider-wapper").slick("slickPrev");
  });

  $(".travel-stories .arrow-right").click(function () {
    $(".travel-stories-slider-wapper").slick("slickNext");
  });

  $("#our-team-slider").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {}
  );
  $("#our-team-slider")
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      responsive: [
        // {   /*600 +  */
        //     breakpoint: 601,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 2,
        //         // centerPadding: padding_width+'px',
        //         // centerMode: true,
        //     }
        // },
        // {  /*900 + */
        //     breakpoint: 900,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         // centerPadding: padding_width+'px',
        //         // centerMode: true,
        //     }
        // }
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $(".our-team .arrow-left").click(function () {
    $("#our-team-slider").slick("slickPrev");
  });

  $(".our-team .arrow-right").click(function () {
    $("#our-team-slider").slick("slickNext");
  });

  var thisOne = $(".explore-map")
    .find(".right")
    .find(".bin[lang='Western Australia']");
  thisOne.addClass("active").siblings().removeClass("active");
  toSlickV2(thisOne.find(".lists"));

  $(".explore-map .img-left").click(function () {
    $(this).parent().parent().find(".lists").slick("slickPrev");
    // $('#map-gallery').slick('slickPrev');
  });

  $(".explore-map .img-right").click(function () {
    $(this).parent().parent().find(".lists").slick("slickNext");
    // $('#map-gallery').slick('slickNext');
  });

  // $(".clickHere").unbind("click")
  // $(".clickHere").click(function(){
  //     var  li_width = $(window).width();
  //     var  length_all =li_width - ($(this).width() * $(".unique-australian-experiences .li").length)
  //     var  length_2 =li_width - ($(this).width() * ($(".unique-australian-experiences .li").length - 1))

  //     var btn = $(this).parent()

  //     if(btn.attr("isopen") == 0  ){
  //         // alert(btn.width())
  //         $(".unique-australian-experiences .content .item1").css({
  //             width:(length_all)
  //         })
  //         $(".unique-australian-experiences .content .js-width").css({
  //             // width:(length_all-100)
  //         })

  //         // btn.find(".content").css({
  //         //     // width:"1000px !important",
  //         //     background:"red"
  //         // })

  //         btn.attr("isopen",1)
  //         btn.stop(true).animate({width:length_2},300).siblings().stop(true).animate({width:line_width+"px"},300).attr("isopen",0);

  //     }else {
  //         btn.attr("isopen",0)
  //         if(btn.is(':first-child')){
  //             btn.stop(true).animate({width:line_width+"px"},300)
  //         }else{

  //             btn.prev().attr("isopen",1).stop(true).animate({width:length_2},300).siblings().stop(true).animate({width:line_width+"px"},300);
  //         }

  //     }

  // })

  $("#our-exclusive-journeys").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      var width =
        $(".progress-bar").find(".container2").width() / slick.slideCount;
      $(".progress-bar2").width(width);
    }
  );
  $("#our-exclusive-journeys")
    .slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      responsive: [
        {
          /*600 +  */ breakpoint: 601,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
        {
          /*900 + */ breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
        {
          /*1200 + */ breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      // var long =  ((100 / slick.slideCount) + (nextSlide / slick.slideCount) * 100);
      // console.log("long",long);
      // $(".progress-bar2").css({"width": ((100 / slick.slideCount) + (nextSlide / slick.slideCount) * 100) + "%"});
      $(".progress-bar2").css({
        left: (nextSlide / slick.slideCount) * 100 + "%",
      });
      // $(".progress-bar2").css({"left": "20%"});

      // alert(((nextSlide / slick.slideCount) * 100) + "%")

      // $(".progress-bar2").css({"left":nextSlide / slick.slideCount});
    })
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});

  $(
    ".common-left-content-right-image-layout .right .lists .ul .li .title"
  ).unbind("click");

  var height = 0;
  $(
    ".common-left-content-right-image-layout .right .lists .ul .li .title"
  ).click(function () {
    // alert(height)

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");

      $(this).parent().find(".content2").removeClass("active");

      // $(this).parent().find(".content2").slideUp('slow')

      var detail = $(this).parent().find(".content2").get(0);
      detail.style.height = 0;
    } else {
      $(this).addClass("active");
      $(this).parent().find(".content2").addClass("active");

      // $(this).parent().find(".content2").slideDown('slow')

      var detail = $(this).parent().find(".content2").get(0);
      detail.style.height = "auto";
      height = detail.getBoundingClientRect().height + 20;

      console.log("height", height);
      detail.style.height = 0;

      detail.style.transition = "0.6s";

      detail.getBoundingClientRect();

      detail.style.height = height + "px";
    }
  });

  window.onload = function () {
    $(".common-needle-and-thread .box .ul").css({
      "min-height": $(".common-needle-and-thread .needle-line-img").height(),
    });
  };

  $(".common-lists-slideup-down .ul2 .li2 .title2").unbind("click");
  $(".common-lists-slideup-down .ul2 .li2 .title2").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".content2").slideUp();
    } else {
      $(this).addClass("active");
      $(this).parent().find(".content2").slideDown();
    }
  });

  $(".btn-submit-form").on("click", function () {
    $(this).parents("form").trigger("submit", [true]);
    // $('#gform_1').submit();
  });

  $(".common-lists-weather .ul .li .title").unbind("click");
  $(".common-lists-weather .ul .li .title").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".content2").slideUp();
    } else {
      $(this).addClass("active");
      $(this).parent().find(".content2").slideDown();
    }
  });

  $(".common-list-download .ul .li .title").unbind("click");
  $(".common-list-download .ul .li .title").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".content2").slideUp();
    } else {
      $(this).addClass("active");
      $(this).parent().find(".content2").slideDown();
    }
  });

  // if ($(".waterFall").length > 0) {
  //     var waterFall_obj = document.getElementsByClassName("waterFall")[0].waterFall("ul",0);
  // }

  if ($(".waterFall2").length > 0) {
    var waterFall_obj = document
      .getElementsByClassName("waterFall2")[0]
      .waterFall("li", 20);
  }
  if ($(".lists-waterFall").length > 0) {
    var waterFall_obj = document
      .getElementsByClassName("lists-waterFall")[0]
      .waterFall("item", 20);
  }

  function wipeAnimation() {
    if ($(".wipe-horizontal-animation").length == 0) {
      return;
    }
    var title_width = 30;
    if ($("body").width() >= 768) {
      title_width = 60;
    }

    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(0),
        0.5,
        { opacity: 1 },
        { opacity: 2 }
      )
      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(0),
        1,
        {
          x:
            $(".wipe-horizontal-animation .panel").eq(0).width() -
            title_width * 3,
        },
        { x: 0, ease: Linear.easeNone }
      )
      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(0),
        0.5,
        { opacity: 2 },
        { opacity: 1 }
      )

      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(1),
        1,
        {
          x:
            $(".wipe-horizontal-animation .panel").eq(1).width() -
            title_width * 2,
        },
        { x: title_width, ease: Linear.easeNone }
      )
      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(1),
        0.5,
        { opacity: 1 },
        { opacity: 2 }
      )

      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(2),
        1,
        {
          x: $(".wipe-horizontal-animation .panel").eq(2).width() - title_width,
        },
        { x: title_width * 2, ease: Linear.easeNone }
      )
      .fromTo(
        $(".wipe-horizontal-animation .panel").eq(2),
        0.5,
        { opacity: 1 },
        { opacity: 2 }
      );

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: ".wipe-horizontal-animation",
      triggerHook: "onLeave",
      duration: "300%",
    })
      .setPin(".wipe-horizontal-animation")
      .setTween(wipeAnimation)
      // .addIndicators()
      .addTo(controller);
  }

  wipeAnimation();

  $("#banner-items").on(
    "init",
    function (event, slick, currentSlide, nextSlide) {
      $(".active-progress").css({ height: (1 / slick.slideCount) * 100 + "%" });

      var btn = $(this);

      setTimeout(function () {
        btn.find(".slick-current").addClass("big-myself");
      }, 1000);
    }
  );
  $("#banner-items")
    .slick({
      arrows: false,
      dots: false,
      focusOnSelect: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 8000,
      fade: true,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var long = 100 / slick.slideCount + (nextSlide / slick.slideCount) * 100;
      // console.log("long", long);
      $(".active-progress").css({
        height:
          100 / slick.slideCount + (nextSlide / slick.slideCount) * 100 + "%",
      });
    })
    .on("afterChange", function (slider, index) {
      $(this).find(".big-myself").removeClass("big-myself");
      // var progress = (index+1) / ($('.slick-slider > div').length);
      // $('.progress-bar .dots').empty();
      // for(var i = 0; i < progress * 100; i++){
      //     $('.progress-bar .dots').append('<div class="slick-slide"></div>');
      // }
    });

  setTimeout(function () {
    $("#cut").addClass("active");

    $("#comout-left-right").addClass("active");
    $(".-header .mask2").addClass("active");
    setTimeout(function () {
      $(".-header .mask2").hide();
    }, 500);
    setTimeout(function () {
      $("#middle").addClass("active");
    }, 200);
  }, 1000);
});

var no_scroll = 0;

function if_scroll() {
  window.addEventListener(
    "wheel",
    function (e) {
      if (no_scroll == 1 && $(e.target).parents(".form-common").length == 0) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (no_scroll == 1 && $(e.target).parents(".form-common").length == 0) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}

function common_menu_toggle_container(btn) {
  // var btn = $(0)

  // if($(btn).hasClass("mobile")){
  //     btn = $(".common-menu-toggle-container.mobile").get(0)
  // }

  if (menu_btn == 1) {
    if (!$(btn).hasClass("open")) {
      if ($(btn).hasClass("mobile-mobile")) {
        document.body.style.overflow = "hidden";
      }

      $(btn).addClass("open");
      // $("body").addClass("open-fullwidth-menu")

      if ($(btn).hasClass("pc-pc")) {
        $("body").addClass("pc");
        document.body.style.overflow = "hidden";
      } else {
        $("body").addClass("mobile");
      }

      // scroheight = 0;

      // no_scroll = 1

      pc_menu_init();
    } else {
      if ($(btn).hasClass("mobile-mobile")) {
        document.body.style.overflow = "";
      }
      $(btn).removeClass("open");
      if ($(btn).hasClass("pc-pc")) {
        $("body").removeClass("pc");
        document.body.style.overflow = "";
      } else {
        $("body").removeClass("mobile");
      }
      // $("body").removeClass("open-fullwidth-menu")
      // scroheight = 110;
      // no_scroll = 0;
    }

    // if ($(".waterFall").length > 0) {
    //     var  all_width = $(".waterFall").width();
    //     var  gap = all_width * 0.115625
    //     var  item_width =  all_width * 0.25625
    //     var  gap2 = "no";
    //     $(".waterFall .ul").width(item_width);
    //     var waterFall_obj = document.getElementsByClassName("waterFall")[0].waterFall("ul",gap,gap2);
    // }
  } else {
    document.body.style.overflow = "";
    $(".form-common").removeClass("active");
    $(".common-menu-toggle-container").removeClass("enquire-2");
    scroheight = 110;
    $(btn).removeClass("open");
    // $("body").removeClass("open-fullwidth-menu")
    menu_btn = 1;
    // no_scroll = 0;
    // alert(22222)
    $(".body-mask").removeClass("active");
  }
}

function wheelHandler(e) {
  e.preventDefault();
}

HTMLElement.prototype.waterFall = function (name, gap, gap2 = "yes") {
  if (gap2 == "yes") {
    gap2 = gap;
  } else {
    gap2 = 0;
  }
  var defultes = {
    gap: gap,
    gap2: gap2,
  };
  defultes.prototype = defultes;

  var item = this.getElementsByClassName(name);

  if (item == null || item.length == 0) {
    return;
  }
  var itemwidth = item[0].offsetWidth;

  var itemHeight = 0;
  var itemarrayHeight = [];
  var column = Math.floor(this.offsetWidth / itemwidth);
  for (var i = 0; i < item.length; i++) {
    itemHeight = item[i].offsetHeight;
    if (i < column) {
      item[i].style.top = 0;
      item[i].style.left = (itemwidth + defultes.gap) * i + "px";
      itemarrayHeight[i] = itemHeight;
    } else {
      var min_index = getMin(itemarrayHeight).index;
      var min_value = getMin(itemarrayHeight).value;

      item[i].style.top = min_value + defultes.gap2 + "px";
      item[i].style.left = (itemwidth + defultes.gap) * min_index + "px";
      itemarrayHeight[min_index] += itemHeight + defultes.gap2;
    }
  }
  var max_value = getMax(itemarrayHeight).value;
  this.style.height = max_value + "px";
};

function getMin(arr) {
  var min = {};
  min.index = 0;
  min.value = arr[min.index];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min.value) {
      min.value = arr[i];
      min.index = i;
    }
  }
  return min;
}

function getMax(arr) {
  var max = {};
  max.index = 0;
  max.value = arr[max.index];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max.value) {
      max.value = arr[i];
      max.index = i;
    }
  }
  return max;
}

function toSlickV2(obj) {
  if ($(obj).hasClass("slick-slider")) {
    $(obj).slick("unslick");
    // return false
  }

  obj.on("init", function (event, slick, currentSlide, nextSlide) {});

  obj
    .slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      swipeToSlide: true,
      infinite: true,
      responsive: [
        {
          /*600 +  */ breakpoint: 601,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
        {
          /*900 + */ breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            // centerPadding: padding_width+'px',
            // centerMode: true,
          },
        },
      ],
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {})
    .on("swipe", function (event, slick, currentSlide, nextSlide) {})
    .on("afterChange", function (event, slick, currentSlide) {});
}

$(function () {
  if_scroll();
  $(document).on("click", function () {
    $(".menu-box .menu .search").removeClass("active");
    $("#search_btn_mobile").removeClass("active");

    if ($(".form-common").hasClass("active")) {
      $(".form-common").removeClass("active");
      scroheight = 110;
      menu_btn = 1;
      // no_scroll = 0;
      // $(".comout-left-right").css({
      //     'z-index':99999
      // })
      $(".body-mask").removeClass("active");
      $(".common-menu-toggle-container").removeClass("open");
      // $("body").removeClass("open-fullwidth-menu")

      document.body.style.overflow = "";
    }

    if ($(".form-itinerary").hasClass("active")) {
      $(".form-itinerary").removeClass("active");
      scroheight = 110;
      menu_btn = 1;
      // no_scroll = 0;
      // $(".comout-left-right").css({
      //     'z-index':99999
      // })
      $(".body-mask").removeClass("active");
      $(".common-menu-toggle-container").removeClass("open");
      // $("body").removeClass("open-fullwidth-menu")

      document.body.style.overflow = "";
    }

    $(".selectr-container").removeClass("r_active");
  });

  $("#search_btn").click(function (e) {
    e.stopPropagation(); // 阻止事件冒泡
    if (!$(".menu-box .menu .search").hasClass("active")) {
      $(".menu-box .menu .search").addClass("active");
      const $inputElement = $("#search_input");
      $inputElement.focus();
    } else {
      // $(".menu-box .menu .search").removeClass("active")
    }
  });

  //   document
  //     .getElementById("search_input")
  //     .addEventListener("click", function (event) {
  //       event.stopPropagation();
  //       // 执行其他点击子元素的操作
  //     });

  //   $("#search_btn_mobile").click(function (e) {
  //     e.stopPropagation(); // 阻止事件冒泡
  //     if (!$("#search_btn_mobile").hasClass("active")) {
  //       $("#search_btn_mobile").addClass("active");
  //       const $inputElement = $("#mobile_search_input");
  //       $inputElement.focus();
  //     } else {
  //       // $(".menu-box .menu .search").removeClass("active")
  //     }
  //   });

  //   document
  //     .getElementById("mobile_search_input")
  //     .addEventListener("click", function (event) {
  //       event.stopPropagation();
  //       // 执行其他点击子元素的操作
  //     });
});

var scroheight = 110;
var scrollHeight2 = $(document).scrollTop();
$(function () {
  // 设置浏览器滚动高度

  scrollHeight2 = $(document).scrollTop();

  mmmmmmmmmmmm();

  function mmmmmmmmmmmm() {
    window.addEventListener("wheel", wheelHandler1, {
      passive: false,
    });
  }

  function wheelHandler1(event) {
    // var delta = event.originalEvent.deltaY;
    var delta = event.deltaY;
    if (delta > 0) {
      // 页面向下
      // alert(222222)
    } else {
      // 页面向上
    }

    var $element = $("#need_fixed_bottom"); // 目标元素的ID

    if ($element.length > 0) {
      var isAtTop = $(window).scrollTop() >= $element.offset().top;
      if (isAtTop) {
        $("#kkkkkkkkikkkkkkkkk").css({
          "padding-bottom": 50,
        });
      }

      var $element = $("#top-menu-click"); // 目标元素的ID

      var isDownTop = $(window).scrollTop() <= $element.offset().top - 200;
      if (isDownTop) {
        $("#kkkkkkkkikkkkkkkkk").css({
          "padding-bottom": 50,
        });
      }
    }

    scrollHeight2 = $(document).scrollTop();
    // event.preventDefault()2024.8.23  need?
  }
});

let scroll_offset = $(window).scrollTop();

var rollingDirection = 1; //1  mean down   2 mean up

$(function () {
  //nav menu

  let nav_height = 120;
  let hero_height = 900;
  let $primary_nav = $("#menu-box-fixed");
  let nav_top = 0;
  let scroll = $(window).scrollTop();
  if (scroll < nav_height) {
    nav_top = scroll;
  } else {
    nav_top = nav_height;
  }
  if (scroll < hero_height) {
    $primary_nav.css("background-color", "transparent");
    $primary_nav.removeClass("header-fixed");
  } else {
    $primary_nav.css("background-color", "#fff");
    $primary_nav.addClass("header-fixed");
  }
  nav_top = 0 - nav_top;
  $primary_nav.css("transition", "none");
  $primary_nav.css("top", nav_top + "px");

  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    //if(mnue_lock == false){

    // console.log("==============");
    if (scroll > scroll_offset) {
      rollingDirection = 1;
      // console.log('scrollDownDownDownDownDownDownDownDown');
      if (scroll < nav_height) {
        nav_top = scroll;
      } else {
        nav_top = nav_height;
      }
      if (scroll == 0) {
        $primary_nav.css("background-color", "transparent");
        $primary_nav.removeClass("header-fixed");
      } else {
        $primary_nav.css("background-color", "#F8F7F4");
        $primary_nav.addClass("header-fixed");
      }
      nav_top = 0 - nav_top;
      $primary_nav.css("transition", "top 0.5s ease");
      $primary_nav.css("top", nav_top + "px");

      if ($("#need-to-be-fixed1").css("position") == "fixed") {
        $("#need-to-be-fixed1").css("top", "-73px");
      }
    } else {
      rollingDirection = 2;
      // console.log('scrollUpUpUpUpUpUpUpUp');
      if (scroll == 0) {
        $primary_nav.css("background-color", "transparent");
        $primary_nav.removeClass("header-fixed");
      } else {
        $primary_nav.css("background-color", "#F8F7F4");
        $primary_nav.addClass("header-fixed");
      }
      $primary_nav.css("transition", "top 0.5s ease");
      $primary_nav.css("top", "0px");

      if ($("#need-to-be-fixed1").css("position") == "fixed") {
        $("#need-to-be-fixed1").css("top", "90px");
      }
    }

    // }
    scroll_offset = scroll;
    need_to_be_fixedV2();
    // if($("#need-to-be-fixed1").length){
    //     // need_fixed_do()
    // }

    if ($("#need-to-be-fixed1").length > 0) {
      //anchor menu;
      var anchorMenuHeight = $("#need-to-be-fixed1").height();
      var anchorMenuTop = $("#need-to-be-fixed1").parent("div").offset().top;

      console.log(
        "anchordMenuTop:",
        anchorMenuTop,
        ", ",
        anchorMenuHeight + anchorMenuTop,
        scroll
      );
      if (anchorMenuHeight + anchorMenuTop < scroll) {
        $("#need-to-be-fixed1").css("position", "fixed");
      } else {
        $("#need-to-be-fixed1").css("position", "");
        $("#need-to-be-fixed1").css("top", "");
      }
    }
  });

  need_to_be_fixedV2();

  /* Magnific Popup */
  jQuery(".video-link").magnificPopup({
    disableOn: 400,
    type: "iframe",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    closeOnBgClick: true,
    callbacks: {
      open: function () {
        // window.__vimeoRefresh();
        console.log("refreshed");
      },
    },
  });
});

function need_to_be_fixedV2() {
  if ($("#address-detail-mapV2").length > 0) {
    var menu_top = $("#menu-box-fixed").position().top;
    var menu_height = $("#menu-box-fixed").height();

    var need_fixed1 = $("#need-to-be-fixedV2");
    var menu_top_and_menu_height = menu_top + menu_height;

    if (menu_top_and_menu_height < 0) {
      menu_top_and_menu_height = 0;
    }

    clearTimeout(timeerId2);
    timeerId2 = setTimeout(function () {
      menu_top = $("#menu-box-fixed").position().top;
      menu_height = $("#menu-box-fixed").height();

      menu_top_and_menu_height = menu_top + menu_height;

      if (menu_top_and_menu_height < 0) {
        menu_top_and_menu_height = 0;
      }
      if (mnue_lock == true) {
        menu_top_and_menu_height = 0;
      }

      if (need_fixed1.parent().offset().top - $(window).scrollTop() <= 10) {
        console.log("menu_top_and_menu_height", menu_top_and_menu_height);

        need_fixed1.css({
          transition: "0s",
          position: "fixed",
          top: menu_top_and_menu_height,
          // "left":need_fixed.parent().offset().left,
          width: need_fixed1.parent().width(),
        });
      }
    }, 500);

    // alert(menu_top_and_menu_height)

    if (need_fixed1.parent().offset().top - $(window).scrollTop() <= 10) {
      need_fixed1.css({
        transition: "0s",
        position: "fixed",
        top: menu_top_and_menu_height,
        // "left":need_fixed.parent().offset().left,
        width: need_fixed1.parent().width(),
      });
    }
    if (need_fixed1.parent().offset().top - $(window).scrollTop() > 10) {
      need_fixed1.css({
        position: "absolute",
        transition: "0s",
        top: 0,
        // "left":need_fixed.parent().offset().left,
        width: need_fixed1.parent().width(),
      });
    }

    var address_detail_mapV2 =
      $("#address-detail-mapV2").offset().top - $(window).scrollTop();
    // console.log("need_fixed_bottomV2",address_detail_mapV2);

    $("#need-to-be-fixedV2").parent().height($("#need-to-be-fixedV2").height());

    // if(address_detail_mapV2 < 10){
    //     $("#need-to-be-fixedV2").css({
    //         "transition":'0s',
    //         "position":"fixed",
    //         "top":0,
    //         "left":0,
    //         "width":$("#need-to-be-fixedV2").parent().width(),

    //     })
    // }else{
    //     $("#need-to-be-fixedV2").css({
    //         "transition":'0s',
    //         "position":"relative",
    //         "width":$("#need-to-be-fixedV2").parent().width(),

    //     })
    // }
  }
}

let timeerId2;

function need_fixed_do() {
  var need_fixed1 = $("#need-to-be-fixed1");
  var need_fixed2 = $("#need-to-be-fixed2");

  need_fixed1.parent().height(need_fixed1.height());

  var menu_top = $("#menu-box-fixed").position().top;
  var menu_height = $("#menu-box-fixed").height();

  var menu_top_and_menu_height = menu_top + menu_height;

  if (menu_top_and_menu_height < 0) {
    menu_top_and_menu_height = 0;
  }
  if (mnue_lock == true) {
    menu_top_and_menu_height = 0;
  }

  clearTimeout(timeerId2);
  timeerId2 = setTimeout(function () {
    var menu_top = $("#menu-box-fixed").position().top;
    var menu_height = $("#menu-box-fixed").height();

    var menu_top_and_menu_height = menu_top + menu_height;

    if (menu_top_and_menu_height < 0) {
      menu_top_and_menu_height = 0;
    }
    if (mnue_lock == true) {
      menu_top_and_menu_height = 0;
    }

    // alert(11111111)

    if (need_fixed1.parent().offset().top - $(window).scrollTop() <= 10) {
      console.log("menu_top_and_menu_height", menu_top_and_menu_height);

      need_fixed1.css({
        transition: "0s",
        position: "fixed",
        top: menu_top_and_menu_height,
        // "left":need_fixed.parent().offset().left,
        width: need_fixed1.parent().width(),
      });

      var to_window2 =
        need_fixed_bottom.offset().top -
        need_fixed2.height() -
        30 -
        $(window).scrollTop();

      var this_position_fixed_finaly =
        need_fixed2.offset().top - $(window).scrollTop();

      if (to_window2 < this_position_fixed_finaly) {
        // alert(11111111)
      } else {
        // alert(22222)
      }

      // need_fixed2.css({
      //     "position":"fixed",
      //     "transition":'0s',
      //     "top":menu_top_and_menu_height + 74,
      //     // "left":need_fixed.parent().offset().left,
      //     "width":need_fixed2.parent().width(),
      // })
    }
  }, 600);

  // alert(menu_top_and_menu_height)

  if (need_fixed1.parent().offset().top - $(window).scrollTop() <= 10) {
    need_fixed1.css({
      transition: "0s",
      position: "fixed",
      top: menu_top_and_menu_height,
      // "left":need_fixed.parent().offset().left,
      width: need_fixed1.parent().width(),
    });

    need_fixed2.css({
      position: "fixed",
      transition: "0s",
      top: menu_top_and_menu_height + $("#top-menu-click").height(),
      // "left":need_fixed.parent().offset().left,
      width: need_fixed2.parent().width(),
    });
  }
  if (need_fixed1.parent().offset().top - $(window).scrollTop() > 10) {
    need_fixed1.css({
      position: "absolute",
      transition: "0s",
      top: 0,
      // "left":need_fixed.parent().offset().left,
      width: need_fixed1.parent().width(),
    });

    need_fixed2.css({
      position: "absolute",
      transition: "0s",
      top: 0,
      // "left":need_fixed.parent().offset().left,
      width: need_fixed2.parent().width(),
    });
  }
  var this_position_fixed_finaly =
    need_fixed2.offset().top - $(window).scrollTop();
  // alert(this_position_fixed_finaly)
  var need_fixed_bottom = $("#need_fixed_bottom");
  var to_window1 =
    need_fixed_bottom.offset().top -
    need_fixed2.height() -
    30 -
    $(window).scrollTop() +
    0.5 * $(window).height();
  var to_window2 =
    need_fixed_bottom.offset().top -
    need_fixed2.height() -
    30 -
    $(window).scrollTop();
  if (to_window1 < this_position_fixed_finaly) {
    need_fixed1.css({
      position: "absolute",
      // "top":$(".common-left-fixed-right-body .big-box").height()- need_fixed.height() - 200,
      top:
        need_fixed2.parents(".container2").height() - need_fixed2.height() - 30,
      // "left":0,
      // "width":need_fixed.parent().width()
    });
  }

  if (to_window2 < this_position_fixed_finaly) {
    need_fixed2.css({
      position: "absolute",
      // "top":$(".common-left-fixed-right-body .big-box").height()- need_fixed.height() - 200,
      top:
        need_fixed2.parents(".container2").height() - need_fixed2.height() - 30,
      // "left":0,
      // "width":need_fixed.parent().width()
    });
  }
}

var zoom = 1;
var ZOOM_SPEED = 0.05;
function LargeVideo_do(zoomElement) {
  if ($(".topofLargeVideo").length == 0) {
    return;
  }
  if ($(".LargeVideo_bottomofLargeVideo").length == 0) {
    return;
  }
  var scrollBottom = $(this).scrollTop() + $(this).height();
  var elementBottom =
    $(".topofLargeVideo").offset().top + $(".topofLargeVideo").outerHeight();
  var distanceToTop = scrollBottom - elementBottom; //开始 出头往上距离，   > 0 开始生效，
  var LargeVideo_middleofLargeVideo =
    $("#LargeVideo_middleofLargeVideo").height() - 200; //   200 之前 已经 满了 100%
  var bottom_section_to_page_top =
    $(".LargeVideo_bottomofLargeVideo").offset().top - $(window).scrollTop(); //LargeVideo_bottomofLargeVideo 到 页面 topofLargeVideo 距离
  // console.log("LargeVideo_bottomofLargeVideo到topofLargeVideo页面的距离 默认 大于0 ，大于0 有效------- ",bottom_section_to_page_top);
  // console.log("topofLargeVideo值 默认小于0 ，大于0 有效-------",distanceToTop);//大于 0 到 LargeVideo_bottomofLargeVideo   默认小于0

  if (distanceToTop > -500 && bottom_section_to_page_top > -100) {
    //进入  topofLargeVideo 下方   有效范围

    // console.log("distanceToTop", distanceToTop);
    // console.log("LargeVideo_middleofLargeVideo", LargeVideo_middleofLargeVideo);
    var dffgg1 =
      100 + (distanceToTop / LargeVideo_middleofLargeVideo) * 100 * 1.25;
    var zoomV2 = 1 + (distanceToTop / LargeVideo_middleofLargeVideo) * 1.25;
    var dffgg2 =
      100 + (distanceToTop / LargeVideo_middleofLargeVideo) * 100 * 1.25;
    // console.log("zoomV2",zoomV2);

    // $(".LargeVideo_change").css({
    //     "width": dffgg1 + "%",
    //     "height": dffgg2 + "%",
    // })

    // ZOOM_SPEED = (distanceToTop / LargeVideo_middleofLargeVideo) * 100;

    // if(rollingDirection == 1){
    //     zoom = zoom + ZOOM_SPEED
    // }else{
    //     zoom = zoom - ZOOM_SPEED
    // }

    if (zoomV2 > 2.18) {
      zoomV2 = 2.18;
    }

    // console.log('start now',zoomV2);
    zoomElement.style.transform = `translateX(-50%) translateY(-50%) scale(${zoomV2})`;

    if (bottom_section_to_page_top < 0) {
      //LargeVideo_bottomofLargeVideo 来了 去除  了LargeVideo_float
      $(".LargeVideo_float")
        .addClass("LargeVideo_hide")
        .removeClass("LargeVideo_show");
    } else {
      $(".LargeVideo_float")
        .addClass("LargeVideo_show")
        .removeClass("LargeVideo_hide");
    }
  } else {
    $(".LargeVideo_float")
      .addClass("LargeVideo_hide")
      .removeClass("LargeVideo_show");
  }
}

$(function () {
  const zoomElement = document.querySelector(".LargeVideo_change");

  LargeVideo_do(zoomElement);
  $(window).scroll(function () {
    LargeVideo_do(zoomElement);
  });
});
