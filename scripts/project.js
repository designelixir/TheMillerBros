
//toggle open close of full case study window
$('.toggle-case-study').click(function(){
    clearInterval(timerID);
    $('.case-study-window:eq('+active+')').toggle(50);
    $('.case-study-wraper:eq('+active+')').css({"animation":"scale-up-bottom .4s cubic-bezier(.39,.575,.565,1.000) both", "animation-delay":"500ms"})
    $( '.case-study-wrapper' ).toggle(300);
    //reset iframes to prevent audio playing outside of case study
    $('.case-study-iframe:eq('+active+')').attr("src", $('.case-study-iframe:eq('+active+')').attr("src"));
    $('.additional-video-iframe-one:eq('+active+')').attr("src", $('.additional-video-iframe-one:eq('+active+')').attr("src"));
    $('.additional-video-iframe-two:eq('+active+')').attr("src", $('.additional-video-iframe-two:eq('+active+')').attr("src"));

})

//  count number of slides  
var theseProjects = document.getElementsByClassName('project');
var active = 0;
var counter = theseProjects.length;

//add indexing dots 
for (let i = 1; i < counter; i++) {
$("#project-counter").append($(".counter").last().clone(true));
}

//  change slide  
$('#next-slide').click(function(){
    $('.project:eq('+active+')').delay(400).hide(0, function(){console.log("hiding!!")})
    $('.counter:eq('+active+')').attr("src", "../assets/tan-textured-circle.svg")  

     if(active >= counter - 1){active = 0;} 
     else {active = active + 1;}
    $('.project:eq('+active+')').show(250)
    $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  

    clearInterval(timerID);
})
// delayed slides  
var timerID = 
    setInterval(function() {
    $('.project:eq('+active+')').css("display", "none");
    $('.counter:eq('+active+')').attr("src", "../assets/tan-textured-circle.svg")  

        if(active >= counter - 1){active = 0;} 
        else {active = active + 1;}
    $('.project:eq('+active+')').css("display", "block");
        $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  

    }, 10000);


//click linked slider 




//  initial setup  
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
$('.project:eq('+active+')').css("display", "block")
$('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  

  

});




$('.back-to-top').click(function(){
  $('.case-study-wrapper').scrollTop(0);
})

$('.expand-button').click(function() {
  console.log('ya')
    let elem = document.getElementById("fullcut-iframe");

  elem.requestFullscreen()

})

