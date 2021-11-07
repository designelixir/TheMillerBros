document.cookie = "name=oeschger; SameSite=Lax; Secure";
document.cookie = "favorite_food=tripe; SameSite=Lax; Secure";

var mobileDevice;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mobileDevice = true;
 } else {mobileDevice = false;}



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

window.addEventListener('resize', resize);



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

$("#map-img").on('click', function(){
  window.open('https://www.google.com/maps/dir//3+S+Black+Ave,+Bozeman,+MT+59715/@45.6797374,-111.0352918,35a,49.8y,212.88h,67.36t/data=!3m1!1e3!4m17!1m7!3m6!1s0x5345445a168d9681:0x515932edd2633723!2s3+S+Black+Ave,+Bozeman,+MT+59715!3b1!8m2!3d45.6791145!4d-111.035851!4m8!1m0!1m5!1m1!1s0x5345445a168d9681:0x515932edd2633723!2m2!1d-111.035851!2d45.6791145!3e0?hl=en', '_blank');    
});



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

$('.back-to-top').click(function(){$('.project-case-study-window').scrollTop(0);})
$('.expand-button').click(function() { let elem = document.getElementById("fullcut-iframe"); elem.requestFullscreen()})

