
 
$(document).ready(function() {
  

    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile : [650,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });

   
});


var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();


function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

;(function($){
  "use strict"
  var nav_offset_top = $('.header_area').height()+50; 
  /*-------------------------------------------------------------------------------
  Navbar 
-------------------------------------------------------------------------------*/

//* Navbar Fixed  
  function navbarFixed(){
      if ( $('.header_area').length ){ 
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();   
              if (scroll >= nav_offset_top ) {
                  $(".header_area").addClass("navbar_fixed");
              } else {
                  $(".header_area").removeClass("navbar_fixed");
              }
          });
      };
  };
  navbarFixed();

})(jQuery)