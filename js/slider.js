$(document).ready(function() {
   $('.project-slider').slick({
   // centerMode: true,
   // variableWidth: true,
   slidesToShow: 2,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed: 2000,
   speed: 300,
   dots: true,
   arrows: true,
   // fade: true,
   pauseOnHover: true,
   // infinite: true,
   responsive: [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
   ]
      // slidesToShow: 1,
      // adaptiveHeight: true
   });
});
