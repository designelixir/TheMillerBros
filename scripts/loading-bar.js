////////HTML 

{/* <div class="loader-wrapper texture">
            <div class="loader-contents">

                <img style="height: 100px; padding: 5px 50px;" src="assets/steering-wheel.svg"/>
                <div class='progress' id="progress_div">
                    <div class='bar' id='bar1'></div>
                    <div class='percent' id='percent1'></div>
                </div>                
                <input type="hidden" id="progress_width" value="0">
            </div>
        </div> */}
      



document.onreadystatechange = function(e){
  if(document.readyState=="interactive"){
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
      set_ele(all[i]);
    }
  }
}
function check_element(ele){
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on()){
    var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value=prog_width;
    $("#bar1").animate({width:prog_width+"%"},10,function(){
      if(document.getElementById("bar1").style.width=="100%")
      {
        $("header").fadeIn(1000);
        $(".loader-wrapper").fadeOut(1000);
        $(".loader-wrapper").css("display","none")
        $('#next-slide').fadeIn(1000);
        $('#project-counter').fadeIn(1000);
        $(".loader-contents").css("display","none")
        $(".title-container").css("animation","fade-in 1s cubic-bezier(.39,.575,.565,1.000) both");
        $(".project-wrapper").fadeIn(1000);
        $("iframe").fadeIn(1000);
        $('.counter:eq('+active+')').attr("src", "../assets/yellow-textured-circle.svg")  

      }			
    });
  }else{
    set_ele(ele);}
}
function set_ele(set_element){check_element(set_element);}