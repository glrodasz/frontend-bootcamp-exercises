// Modulo Carousel
var carousel = (function() {
  // Selectors
  var carouselGridSelector = '.carousel-grid';
  var carouselItemsSelector = '.carousel-item';
  var carouselModalSelector = '.carousel-modal';
  var carouselModalContentSelector = '.carousel-modal-content';
  var carouselCloseButtonSelector = '.carousel-modal-close';

  // Elements
  var carouselGridElement = document.querySelector(carouselGridSelector);
  var carouselGridItems = carouselGridElement.querySelectorAll(carouselItemsSelector);
  var carouselModalElement = document.querySelector(carouselModalSelector);
  var carouselCloseButtonElement =  carouselModalElement.querySelector(carouselCloseButtonSelector);
  var carouselModalContentElement = carouselModalElement.querySelector(carouselModalContentSelector)

  var showCarousel = function () {
    carouselModalElement.classList.remove('hidden')
    toggleBodyOverflowHidden();
    cloneCarouselItems();
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
    if (carouselModalContentElement && carouselModalContentElement.children && carouselModalContentElement.children.length <= 0) {
      var clonedCarouselGrid = carouselGridElement.cloneNode(true);
      carouselModalContentElement.appendChild(clonedCarouselGrid);
    }
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
