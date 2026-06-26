document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 🎬 INTERSECTION OBSERVER FOR APPLE-STYLE SCROLL REVEALS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.scroll-reveal, .card-reveal');

  const revealOptions = {
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // offset so animations trigger slightly early
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        // Unobserve once revealed to keep animation static on subsequent scrollings
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================================================
  // 🕶️ GLASSMORPHIC NAVBAR SCROLL RESPONSE
  // ==========================================================================
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(5, 5, 8, 0.9)';
      navbar.style.borderBottomColor = 'rgba(102, 252, 241, 0.15)';
      navbar.style.padding = '0.4rem 0';
    } else {
      navbar.style.background = 'rgba(5, 5, 8, 0.7)';
      navbar.style.borderBottomColor = '#222530';
      navbar.style.padding = '0';
    }
  });

  // ==========================================================================
  // 🎢 HERO PARALLAX / ZOOM EFFECT ON SCROLL
  // ==========================================================================
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const zoomFactor = 1 + (scrollPosition * 0.00008); // micro scale change
      
      // Limit scale factor
      if (zoomFactor < 1.05) {
        heroImage.style.transform = `scale(${zoomFactor})`;
      }
    });
  }

});
