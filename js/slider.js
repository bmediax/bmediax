// // jQuery
// var $carousel = $('.carousel').flickity({
//   fullscreen: true,
// });

// 1st carousel, main
$('.carousel-main').flickity({
   fullscreen: true,
   contain: true,
   wrapAround: true,
   adaptiveHeight: true,
   selectedAttraction: 0.01,
   friction: 0.15,
   imagesLoaded: true
});
