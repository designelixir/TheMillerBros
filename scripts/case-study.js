
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





