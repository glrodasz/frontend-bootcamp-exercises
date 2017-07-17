// Declaraciones de modulos

// Modulo Carousel
var carousel = (function() {
  var carouselGridSelector = '.carousel-grid .carousel-item';

  var showCarousel = function () {
    // Mostrar el carousel
    // toggleBody
  }

  var hideCarousel = function() {
    // toggleBody
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

  }

  var init = function() {

  };

  return {
    init: init
  }
}());

// Entrada de la app
document.addEventListener('DOMContentLoaded', function() {
  carousel.init();
});


document.addEventListener('DOMContentLoaded', function() {
  var carouselGridSelector = '.carousel-grid .carousel-item';
  var gridItems = document.querySelectorAll(carouselGridSelector);

  gridItems.forEach(function(gridItem) {
    gridItem.addEventListener('click', function() {
      // var item = this;
      // var parent = item.parentElement;
      // var items = parent.children;
      // var itemsLen = items && items.length;

      var carousel = document.querySelector('.carousel');
      carousel.classList.remove('hidden');


    });
  });
});
