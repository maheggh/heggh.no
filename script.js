// Select the menu and links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navLinks.classList.toggle('open');
  overlay.classList.toggle('active'); // Toggle the 'active' class on the overlay
});


