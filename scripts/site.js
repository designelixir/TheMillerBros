(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';


var ohSheActive = document.getElementById('home-link').classList.contains('active-link');
if (ohSheActive){
  $('#lil-bus').attr("src","../assets/bus-hover-icon.svg");
  $('#lil-bus').css("margin-bottom","0px")

} else {
  $('#lil-bus').attr("src","../assets/bus-icon.svg");
  $('#lil-bus').css("margin-bottom","-5px")
}




function requestFullscreen(el){
  if (el.requestFullscreen) {
          el.requestFullscreen();
      } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
      }
  }

$('.mobile-navigation-button').click(function(){
  var count = $('.mobile-navigation-button').data("count") || 0;
  $('.mobile-navigation-button').data("count", ++count);
  if ((count % 2) != 0 ){
    $('.mobile-navigation-button img').attr("src", "../assets/nav/Close-Mobile.svg");
    $('.mobile-navigation-container').slideDown(500);
    $('.site-header').css({"background-color":"#241E1F"})

  } else {
      $('.mobile-navigation-button img').attr("src", "../assets/nav/Open-Mobile.svg");
      $('.mobile-navigation-container').slideUp(500);
      $('.site-header').css({"background-color":"transparent"})

  }
});

// MEDIA QUERIES 

function mediaQuery(x800) {
  if (x800.matches) { 
    $('.site-navigation-list').css({"display":"none"})
    $('.mobile-navigation-button').css({"display":"block"})
    $('#contact-title-2').css("font-size", "11vw")
    $('.footer-left').css({"display":"none"})

  } else {
    $('.site-navigation-list').css({"display":"inline-flex"})
    $('.mobile-navigation-button').css({"display":"none"})
    $('#contact-title-2').css("font-size", "6vw")
    $('.mobile-navigation-container').css("display","none");
    $('.site-header').css({"background-color":"transparent"})
    $('.footer-left').css({"display":"flex"})

  }
}
var x800 = window.matchMedia("(max-width: 800px)")
mediaQuery(x800) 
x800.addListener(mediaQuery); 

