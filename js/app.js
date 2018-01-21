$(document).ready(function(){
  $('.search-open').click(function(){
    $('#search-toggle').toggle();
  });
  $('[data-id = "home-art"]').on('click', function() {
    window.location.href = '../index.html';
  });

  $('[data-id = "more"]').on('click', function() {
    window.location.href = 'views/articulos.html';
  });
});