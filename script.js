document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');
  
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
  
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var targetOffsetTop = targetElement.offsetTop;
  
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    }
  });

