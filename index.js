document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 100, // Speed of typing in milliseconds
      backSpeed: 50, // Speed of removing in milliseconds
      loop: true, // Enable looping
      smartBackspace: true, // Smart backspace to only remove necessary characters
      showCursor: false, // Hide the cursor
      shuffle: false // Disable shuffling of strings
    });
  });

  function initializeAOS() {
    AOS.init();
  }
  
  window.onload = function() {
    initializeAOS();
  };

  // Get all the navigation links
const navLinks = document.querySelectorAll('#navbar ul li a');

// Function to handle intersection changes
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    // Check if the section is in view
    if (entry.isIntersecting) {
      const targetLink = document.querySelector(`#navbar ul li a[href="#${entry.target.id}"]`);
      
      // Remove active class from all navigation links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Add active class to the target link
      targetLink.classList.add('active');
    }
  });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust this value as needed
});

// Observe each section
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  observer.observe(section);
});
