
// Handling form submission for apply-now.html
document.getElementById("applicationForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevents the default form submission
  // Show the success message
  document.getElementById("successMessage").style.display = "block";
  // Optionally, hide the form or reset it after submission
  setTimeout(function() {
    document.getElementById("applicationForm").reset();
    document.getElementById("successMessage").style.display = "none"; // Hide the success message after a while
  }, 5000); // Hide the success message after 5 seconds
});

// Toggle the navigation menu on small screens (hamburger menu)
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class to show or hide the links
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.add('show');
  } else {
    navLinks.classList.remove('show');
  }
});

// Prevent auto scroll to anchor on load
if (window.location.hash) {
  window.scrollTo(0, 0);
  history.replaceState('', document.title, window.location.pathname + window.location.search);
}
