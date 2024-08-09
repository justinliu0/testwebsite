document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarText = document.querySelector('.navbar-text');
  var navbarIcon = document.querySelector('.navbar-icon');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navbarText.classList.remove('expanded');
      navbarIcon.classList.remove('expanded');
      
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('visible'); 
      } else {
        scrollToTopBtn.classList.remove('visible'); 
      }
    } else {
      navbar.classList.remove('scrolled');
      navbarText.classList.add('expanded');
      navbarIcon.classList.add('expanded');
      scrollToTopBtn.classList.remove('visible'); 
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56, 
          behavior: 'smooth'
        });
      }
    });
  });

  scrollToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
