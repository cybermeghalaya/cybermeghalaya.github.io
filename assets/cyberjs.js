document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.sub-nav>a, #menu-toggle').forEach(function(e) {

    e.addEventListener('click', function(event) {
    event.preventDefault();
    const ul = e.nextElementSibling;
    if (ul.classList.contains('open')) {
      ul.classList.remove('open');
    } else {
      ul.classList.add('open');
    }
  });
});

});