"use strict";

$(function () {

  
  $("#hamburger").click(function () {
    $(".header-nav").fadeToggle();
    $("#hamburger").toggleClass("active");
    $(".body").toggleClass("hidden");
  });
  
  $(".mv-text").typed({
    strings: ["I AM AOI KUBO.", "HELLO WORLD!", "WELCOME TO", "MY PORTFOLIO."],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20, 
    loop: true,
    loopCount: 3,
    showCursor: false,
    backDelay: 500
  });
  
  $("#back-to-top").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    }, 600);
  });
  
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let wh = $(window).height();
    if (scroll > wh) {
      $("#back-to-top").addClass("in");
    } else {
      $("#back-to-top").removeClass("in");
    }
  });


  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let wh = $(window).height();
    if (scroll > wh) {
      $(".header").addClass("fix");
    } else {
      $(".header").removeClass("fix");
    }
  });
  
  $(window).scroll(function () {
    let scrollValue = $(window).scrollTop();
    let wh = $(window).height();
    $(".slide-trigger").each(function (idx, elm) {
      let tp = $(elm).offset().top - wh / 2;
      if (scrollValue > tp) {
        $(elm).find(".slide").addClass("in");
      }
    });
  });

});