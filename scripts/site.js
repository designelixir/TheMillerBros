
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */



(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  function mediaQuery(x) {
    if (x.matches) { 
      $('h1').css({"font-size": "36px"})
      $('#next-slide').css("width", "35px")
      $('#next-slide img').css("margin-left", "0");
      $('#summary-credits-wrapper').css({"display":"block"})
      $('.case-study-summary').css("width", "100%")
      $('.case-study-credits').css({"width":"100%", "margin-top":"17px"})
      $('.case-study-toggle-arrow-wrapper').css("background-image","url('../assets/case-study-circle.svg')")
      $('#bts-photos-grid').css('column-count', '1')
  
    } 
    
     else {
      $('h1').css("font-size", "48px")
      $('#next-slide').css("width", "50px")
      $('#next-slide img').css("margin-left", "20px")
  
      //  case study  }
      $('#summary-credits-wrapper').css({"display":"inline-flex"})
      $('.case-study-summary').css("width", "calc(100% - 425px)")
      $('.case-study-credits').css({"width":"400px", "margin-top":"0px"})
      $('#bts-photos-grid').css('column-count', '3')
      $(".case-study-arrow-wrapper").css("background-image","none")
  
  
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  
  mediaQuery(x) 
  x.addListener(mediaQuery) 
  

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());
