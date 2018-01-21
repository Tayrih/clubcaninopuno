$(document).ready(function(){
  $('.search-open').click(function(){
    $('#search-toggle').toggle();
  });
  $('[data-id = "home-art"]').on('click', function() {
    window.location.href = '../index.html';
  });

  $('[data-id = "more1"]').on('click', function() {
    window.location.href = 'views/articulos.html#comportation';
  });

  $('[data-id = "more2"]').on('click', function() {
    window.location.href = 'views/articulos.html#education';
  });

  $('[data-id = "more3"]').on('click', function() {
    window.location.href = 'views/articulos.html#problems';
  });
});