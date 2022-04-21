const slides = document.querySelectorAll(".slide");
const container = document.querySelector("#featured-projects");
let dur = 1.25;
let offsets = [];
let oldSlide = 0;
let activeSlide = 0;
let dots = document.querySelector(".dots");
let navDots = [];
let iw = window.innerWidth;
const mouseAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
const handAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
const cursorAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
const arrowAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });

document.querySelector("#next-slide").addEventListener("click", slideAnim);

// set slides background colors and create the nav dots
for (let i = 0; i < slides.length; i++) {
  let newDot = document.createElement("img");
  gsap.set(newDot, { attr: { src: '../assets/shapes/tan-textured-circle.svg' } });
  newDot.className = "dot";
  newDot.index = i;
  navDots.push(newDot);
  newDot.addEventListener("click", slideAnim);
  dots.appendChild(newDot);
}

// lower screen animation with nav dots and rotating titles
const dotAnim = gsap.timeline({ paused: true });
dotAnim.to(".dot", {attr: {src: '../assets/shapes/yellow-textured-circle.svg'}, stagger: { each: 1, yoyo: true, repeat: 1 }, scale: 1.5, ease: "power2.out"}, 0.5);

dotAnim.time(1);

// make the whole thing draggable
let dragMe = Draggable.create(container, {
  type: "x",
  edgeResistance: 1,
  snap: offsets,
  bounds: "#featured-projects",
  onDrag: tweenDot,
  onThrowUpdate: tweenDot,
  onDragEnd: slideAnim,
  allowNativeTouchScrolling: false,
  zIndexBoost: false
});

dragMe[0].id = "dragger";
sizeIt();

var dotCollection = document.getElementsByClassName('dot');

// main action check which of the 4 types of interaction called the function
function slideAnim(e) {
  oldSlide = activeSlide;
  // dragging the panels
  if (this.id === "dragger") {
    activeSlide = offsets.indexOf(this.endX);
    clearInterval(autoTimer);
  } else {if (gsap.isTweening(container)) {
            clearInterval(autoTimer)
            return;}}
    // arrow clicks
    if (this.id === "next-slide" && activeSlide > (slides.length - 1)){
        console.log("arrow click case 1 ", activeSlide)
        activeSlide = activeSlide +=1;
        clearInterval(autoTimer)
    }
    //dots
    if (this.className === "dot") {
      activeSlide = this.index;
      clearInterval(autoTimer)
        //timer
    } else if (activeSlide === (slides.length - 1)){
        activeSlide = 0;
    } else {
      activeSlide = activeSlide += 1;
    }


  
  // make sure we're not past the end or beginning slide
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  if (oldSlide === activeSlide) {
    return;
  }
  // if we're dragging we don't animate the container
  if (this.id != "dragger") {
    gsap.to(container, dur, { x: offsets[activeSlide], onUpdate: tweenDot });
  }
}

// update the draggable element snap points
function sizeIt() {
  offsets = [];
  iw = window.innerWidth;
  gsap.set("#featured-projects", { width: slides.length * iw });
  gsap.set(slides, { width: iw });
  for (let i = 0; i < slides.length; i++) {
    offsets.push(-slides[i].offsetLeft);
  }
  gsap.set(container, { x: offsets[activeSlide] });
  dragMe[0].vars.snap = offsets;
}


window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", sizeIt);

// update dot animation when dragger moves
function tweenDot() {
  gsap.set(dotAnim, {time: Math.abs(gsap.getProperty(container, "x") / iw) + 1});
  
}

//If only one featured slide, don't show nav buttons 
if (slides.length === 1){
    document.getElementById('slide-arrow').style.display = "none";
    document.getElementById('dots-container').style.display = "none";
}



//launch case study window 
function showCaseStudy(thisurl){
    clearInterval(autoTimer);
    $('body').css("overflow-y","hidden")
    $('#home-page-case-study-window').css("display", "block")
    var windowContents = $('.delay-show');
    var tl = new TimelineMax();

    tl.set(windowContents, {autoAlpha: 0});
    tl.to(windowContents, 1, {autoAlpha:1, ease: Linear.easeNone}, 0)
    
    $('#home-page-case-study-window iframe').attr("src",thisurl)
  }
  
  function toggleiframe(){
    $('body').css("overflow-y","scroll")
    $('#featured-projects').scrollTop(0);
    var windowContents = $('.delay-show');
    var tl = new TimelineMax();
    tl.set(windowContents, {autoAlpha: 1});
    tl.to(windowContents, 0.5, {autoAlpha:0, ease: Linear.easeNone}, 0)
    $('#home-page-case-study-window').delay(500).queue(function (next) {
        $(this).css("display", "none"); next();});
    $('#home-page-case-study-window iframe').attr("src","")
  }
  
  var autoTimer = setInterval(slideAnim, 8000);
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > 100){clearInterval(autoTimer)}
  })