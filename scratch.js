function trackMouse(){$('.project').mousemove(followMouse);}

function followMouse(e) {
    if (e.pageX >= divRect.left && e.pageX <= divRect.right &&
      e.pageY >= divRect.top && e.pageY <= divRect.bottom && followMouseBool) {
        var xPos = e.pageX - itemRect.width / 2;
        var yPos = e.pageY - itemRect.height / 2;
        $('#traveling-button').animate({
          'top':'0', 'left':'0', 'right':'0', 'bottom':'0'
        }, 0, function(){
          travelingbutton.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        })
    } else {

        var small = document.getElementById('orange');
        var big = document.getElementById('salmon'); 
        var smallRect = small.getBoundingClientRect();
        var bigRect = big.getBoundingClientRect();
        var x = smallRect.right - 50 ;
        var y = bigRect.bottom - 100 ;
        $('#traveling-button').animate({
          'top':'0', 'left':'0', 'right':'0', 'bottom':'0'
        }, 0, function(){
          travelingbutton.style.transform = "translate3d(" +  x + "px, " + y + "px, 0)";
        })
    }
} 



if (!mobileDevice) {
    let beginMouseTrack = setTimeout(trackMouse, 1000);
  } 

  function bringTheDivs(){
    console.log('called bring the divs')
    $('#next-slide').fadeIn(1000);
    $('#project-counter').fadeIn(1000);
    $(".title-container").css("animation","fade-in 1s cubic-bezier(.39,.575,.565,1.000) both");
    $(".project-wrapper").fadeIn(1000);
    $("iframe").fadeIn(1000);
    $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  
  }
