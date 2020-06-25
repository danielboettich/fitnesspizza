/*$(function scrolly(){
    //Keep track of last scroll
    var lastScroll = 0;
    $(window).scroll(function(event){
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll){
           //Replace this with your function call for downward-scrolling
          //Maybe some timeout?
         // setTimeout( function () {  
          $('nav').addClass('fixedAtTop');
         // }, 800);
        }
        else {
           //Replace this with your function call for upward-scrolling
          
          $('nav').removeClass('fixedAtTop');
          
        }
        //Updates scroll position
        lastScroll = st;
    });
  $('nav').hover(function(){
    $(this).removeClass('fixedAtTop');
  });
});*/

window.addEventListener("scroll", function()){
  var header = document.querySelector("nav");
  navigator.classList.toggle("sticky", window.scrollY > 0);
}

