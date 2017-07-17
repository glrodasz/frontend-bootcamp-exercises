// Modulo Carousel
var carousel = (function() {
  // Selectors
  var carouselGridSelector = '.carousel-grid .carousel-item';
  var carouselModalSelector = '.carousel-modal';
  var carouselCloseButtonSelector = '.carousel-modal-close';

  // Elements
  var carouselGridItems = document.querySelectorAll(carouselGridSelector);
  var carouselModalElement = document.querySelector(carouselModalSelector);
  var carouselCloseButtonElement =  document.querySelector(carouselCloseButtonSelector);

  var showCarousel = function () {
    carouselModalElement.classList.remove('hidden')
    toggleBodyOverflowHidden();
  }

  var hideCarousel = function() {
    carouselModalElement.classList.add('hidden')
    toggleBodyOverflowHidden();
  }

  var nextSlide = function() {

  }

  var prevSlide = function() {

  }

  var setCurrentSlide = function() {

  }

  var cloneCarouselItems = function() {

  }

  var toggleBodyOverflowHidden =  function() {
    var body = document.querySelector('body');
    var bodyOverflow = body.style.overflow;

    if (bodyOverflow === 'hidden') {
      body.style.overflow = 'visible';
    } else {
      body.style.overflow = 'hidden';
    }
  }

  var init = function() {
    carouselGridItems.forEach(function(gridItem){
      gridItem.addEventListener('click', showCarousel);
    })

    carouselCloseButtonElement.addEventListener('click', hideCarousel);
  };

  return {
    init: init
  }
}());

// Entrada de la app
document.addEventListener('DOMContentLoaded', function() {
  carousel.init();
});
