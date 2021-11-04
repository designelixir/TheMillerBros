
var allSlides = document.getElementsByClassName('project');
console.log(allSlides)
var active = 0;
var counter = allSlides.length;


  $('#next-slide').click(function(){
    $('.project-case-study-window').scrollTop(0);
    $('.counter:eq('+active+')').attr("src", "../assets/tan-textured-circle.svg")  
    if(counter > active + 1){active++;} 
    else {active = 0;}
    var activate = allSlides[active];
    activate.scrollIntoView();
    activate.style.left = "0";
    $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  
    clearInterval(timerID);
  })
  
  var timerID = 
  setInterval(function() {
  $('.counter:eq('+active+')').attr("src", "../assets/tan-textured-circle.svg")  
      if(active >= counter - 1){active = 0;} 
      else {active = active + 1;}
      var activate = allSlides[active];
      activate.scrollIntoView();
      $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  
  }, 10000);


$('.toggle-case-study').click(function(){
  clearInterval(timerID);
  var count = $('.toggle-case-study').data("count") || 0;
  $('.toggle-case-study').data("count", ++count);
  console.log("count is "+count)
  if ((count % 2) != 0 ){
    $('.case-study-window:eq('+active+')').slideDown(500);
  } else {
    $('.case-study-window:eq('+active+')').slideUp(500);
    $('.case-study-iframe:eq('+active+')').attr("src", $('.case-study-iframe:eq('+active+')').attr("src"));
    $('.additional-video-iframe-one:eq('+active+')').attr("src", $('.additional-video-iframe-one:eq('+active+')').attr("src"));
    $('.additional-video-iframe-two:eq('+active+')').attr("src", $('.additional-video-iframe-two:eq('+active+')').attr("src"));
  }
});

var sliderTop = $("#featured-projects").offset().top; //gets offset of header
var sliderHeight = $("#featured-projects").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (sliderTop + sliderHeight)){
      clearInterval(timerID);
    }
});

$('#next-slide').fadeIn(1000);
  $('#project-counter').fadeIn(1000);
  
  $(".title-container").css("animation","fade-in 1s cubic-bezier(.39,.575,.565,1.000) both");
  $(".project-wrapper").fadeIn(1000);
  $("iframe").fadeIn(1000);
  $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  

// counter dots
  for (let i = 1; i < counter; i++) {
    $("#project-counter").append($(".counter").last().clone(true));
  }



$('.back-to-top').click(function(){$('.project-case-study-window').scrollTop(0);})
$('.expand-button').click(function() { let elem = document.getElementById("fullcut-iframe"); elem.requestFullscreen()})

var counter1 = $('.counter:nth-child(1)');

$('counter').click(function(){
  console.log($('.counter:nth-child()') + "this")
})




// MEDIA QUERY 
function mediaQuery(x800) {
  if (x800.matches) { 
    $('.project-title').css({"font-size":"55px", "line-height":"55px"});
    $('.link-title').css({"font-size":"55px" , "line-height":"55px"});
    $('.case-study-block').css({"display":"block"})
    $('.summary').css({"width":"100%"});
    $('.credits').css({"width":"100%"});
    $('.yellow-line').css("width", "75%");
    $('#bts-photos-grid').css('column-count', '1')

  } else {
    $('.project-title').css({"font-size":"75px", "line-height":"75px"});
    $('.link-title').css({"font-size":"75px", "line-height":"75px"});
    $('.case-study-block').css({"display":"inline-flex"})
    $('.summary').css({"width":"70%"});
    $('.credits').css({"width":"30%"});
    $('#bts-photos-grid').css('column-count', '3')
    $('.yellow-line').css({"width":"50%", "min-width":"150px"});
  }
}
var x800 = window.matchMedia("(max-width: 800px)")
mediaQuery(x800) 
x800.addListener(mediaQuery); 
