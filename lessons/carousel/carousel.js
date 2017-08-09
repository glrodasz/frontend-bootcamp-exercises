// Modulo Carousel
var carousel = (function() {
  // Selectors
  var carouselGridSelector = '.carousel-grid';
  var carouselItemsSelector = '.carousel-item';
  var carouselModalSelector = '.carousel-modal';
  var carouselModalContentSelector = '.carousel-modal-content';
  var carouselCloseButtonSelector = '.carousel-modal-close';
  var carouselModalButtonPrevSelector = '.carousel-modal-prev';
  var carouselModalButtonNextSelector = '.carousel-modal-next';
  var carouselSlidesSelector = '.carousel-modal-content .carousel-item';

  // Elements
  var carouselGridElement = document.querySelector(carouselGridSelector);
  var carouselGridItems = carouselGridElement.querySelectorAll(carouselItemsSelector);
  var carouselModalElement = document.querySelector(carouselModalSelector);
  var carouselCloseButtonElement =  carouselModalElement.querySelector(carouselCloseButtonSelector);
  var carouselModalContentElement = carouselModalElement.querySelector(carouselModalContentSelector)
  var carouselModalButtonPrevElement = carouselModalElement.querySelector(carouselModalButtonPrevSelector);
  var carouselModalButtonNextElement = carouselModalElement.querySelector(carouselModalButtonNextSelector);

  // Variables
  var currentSlideIndex = 0;
  var slidesLen = carouselGridItems.length;

  // Convert an arrayLike into Array and get the index given and element
  var getElementIndexFromArrayLike = function (arrayLike, element) {
    return Array.from(arrayLike).indexOf(element);
  }

  var showCarousel = function () {
    currentSlideIndex = getElementIndexFromArrayLike(carouselGridItems, this);

    carouselModalElement.classList.remove('hidden')
    toggleBodyOverflowHidden();
    cloneCarouselItems();
    showCurrentSlide(currentSlideIndex);
  }

  var hideCarousel = function() {
    carouselModalElement.classList.add('hidden')
    toggleBodyOverflowHidden();
  }

  var nextSlide = function() {
    if(currentSlideIndex === (slidesLen - 1)) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex += 1;
    }

    showCurrentSlide(currentSlideIndex);
  }

  var prevSlide = function() {
    if (currentSlideIndex === 0) {
      currentSlideIndex = (slidesLen - 1);
    } else {
      currentSlideIndex -= 1;
    }

    showCurrentSlide(currentSlideIndex);
  }

  var hideSlides = function(gridItem) {
    gridItem.style.display = 'none';
  }

  var showCurrentSlide = function(currentIndex) {
    var carouselSlideElements = document.querySelectorAll(carouselSlidesSelector)
    carouselSlideElements.forEach(hideSlides);
    carouselSlideElements[currentIndex].style.display = 'block';
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
    carouselModalButtonPrevElement.addEventListener('click', prevSlide);
    carouselModalButtonNextElement.addEventListener('click', nextSlide);
  };

  return {
    init: init
  }
}());

// Entrada de la app
document.addEventListener('DOMContentLoaded', function() {
  carousel.init();
});
