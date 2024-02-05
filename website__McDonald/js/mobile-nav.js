  // Menu button drop-down menu toggle
  const button = document.querySelector('.mobile-menu-dropdown-button');
  const content = document.querySelector('.mobile-menu-dropdown-content');

  // Set initial state
  content.style.display = 'none';
  button.dataset.toggle = 'open'; // Set the data-toggle attribute to show the open menu icon
  button.style.setProperty('--button-content', '"\f067"');

  button.addEventListener('click', function () {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.dataset.toggle = 'close'; // Set the data-toggle attribute to show the close menu icon
      button.style.setProperty('--button-content', '"\f00d"');
    } else {
      content.style.display = 'none';
      button.dataset.toggle = 'open'; // Set the data-toggle attribute to show the open menu icon
      button.style.setProperty('--button-content', '"\f067"');
    }
  });

  // Burger Toggle Menu
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNavLinks = document.querySelector('.mobile-nav__links');
    const menuIconClose = document.querySelector('.menu-icon-close');

    // Function to toggle the display of mobileNavLinks and menuIconClose
    function toggleMenu() {
      const isMobileNavVisible = mobileNavLinks.style.display === 'block';
      mobileNavLinks.style.display = isMobileNavVisible ? 'none' : 'block';
      menuIcon.style.display = isMobileNavVisible ? 'block' : 'none';
      menuIconClose.style.display = isMobileNavVisible ? 'none' : 'block';
    }

    // Add click event listener to menuIcon
    menuIcon.addEventListener('click', toggleMenu);

    // Add click event listener to menuIconClose
    menuIconClose.addEventListener('click', toggleMenu);
  });