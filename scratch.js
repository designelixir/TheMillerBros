





  function bringTheDivs(){
    console.log('called bring the divs')
    $('#next-slide').fadeIn(1000);
    $('#project-counter').fadeIn(1000);
    $(".title-container").css("animation","fade-in 1s cubic-bezier(.39,.575,.565,1.000) both");
    $(".project-wrapper").fadeIn(1000);
    $("iframe").fadeIn(1000);
    $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  
  }
