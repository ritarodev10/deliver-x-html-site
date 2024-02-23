// Toggle hamburger menu handler
const btnHamburger = document.getElementById("hamburger-menu-toggle");
const body = document.querySelector("body");
const mobileNavContainer = document.getElementById("mobile-nav-container");
const mobileNavItems = document.getElementById("mobile-nav-items");

btnHamburger.addEventListener("click", function () {
  if (mobileNavContainer.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    mobileNavContainer.classList.remove("open");
    mobileNavItems.classList.remove("open");
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    mobileNavContainer.classList.add("open");
    mobileNavItems.classList.add("open");
  }
});

// Autohide Navbar on Scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
const scrollThreshold = 50; // Delay before hide or show navbar in pixels

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (Math.abs(lastScrollY - currentScrollY) >= scrollThreshold) {
    if (lastScrollY < currentScrollY) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    lastScrollY = currentScrollY;
  }
});
