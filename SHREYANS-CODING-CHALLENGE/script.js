
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,

    })

    .to(".boundingelem", {
      y: 0,
      duration: 2,
      delay:-1,
      ease: Expo.easeInOut,
      stagger:.1,
    })
    tl.from("#herofooter", {
      y: -10,
    opacity: 0,
    duration: 1.5,
    delay:-1,
     ease: Expo.easeInOut,
   })
}


var timeout;
function circleChaptaKaro(){

    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev= 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
      clearTimeout(timeout);

      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX- xprev);
      yscale = gsap.utils.clamp(0.8, 1.2,  dets.clientY- yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;

     circleMouseFollower(xscale,yscale);
     timeout = setTimeout(function () {
        document.querySelector("#minicircle").style.transform =
          `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
     },100);

    });
}


function circleMouseFollower(xscale,yscale){
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();


// teeno element ko select karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to
// ye pata karo ki mouse kkaha par hai, jiska matlab ki x and y position pata karo, ab
// mouuse ki x y position ke badle us imaage koshow karo and us image ko move  karo move karte
//waqt rotate karo, jaise jasie mouse tez chale waise waise rotaion bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
   


    elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
     diffrot = dets.clientX - rotate;
     rotate = dets.clientX;
    
    gsap.to(elem.querySelector("img"),{
    opacity:1,
    ease:Power1,
    top:diff,
    left:dets.clientX,
     //rotate:gsap.utils.clamp(-20,20,diffrot),
    });
 });
});



