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
