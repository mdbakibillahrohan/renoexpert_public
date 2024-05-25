document.addEventListener("DOMContentLoaded", function() {
    // Helper function to check if IntersectionObserver is supported
    function supportsIntersectionObserver() {
      return 'IntersectionObserver' in window;
    }

    // Function to lazy load images
    function lazyLoadImages() {
      const lazyImages = document.querySelectorAll('img.lazyload');
      if (supportsIntersectionObserver()) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                console.log(lazyImage.dataset.src)
                lazyImage.classList.remove('lazyload');
                lazyImage.classList.add('lazyloaded');
                observer.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(image => {
          imageObserver.observe(image);
        });
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyLoadThrottleTimeout = null;
        function lazyLoadFallback() {
          if (lazyLoadThrottleTimeout) {
            clearTimeout(lazyLoadThrottleTimeout);
          }

          lazyLoadThrottleTimeout = setTimeout(() => {
            const scrollTop = window.pageYOffset;
            lazyImages.forEach(img => {
              if (img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazyload');
                img.classList.add('lazyloaded');
              }
            });
            if (lazyImages.length === 0) {
              document.removeEventListener('scroll', lazyLoadFallback);
              window.removeEventListener('resize', lazyLoadFallback);
              window.removeEventListener('orientationChange', lazyLoadFallback);
            }
          }, 20);
        }

        document.addEventListener('scroll', lazyLoadFallback);
        window.addEventListener('resize', lazyLoadFallback);
        window.addEventListener('orientationChange', lazyLoadFallback);
      }
    }

    // Call the lazy load function
    lazyLoadImages();
  });