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
// let lastScrollY = window.scrollY;
// const navbar = document.getElementById("navbar");
// const scrollThreshold = 30; // Delay before hide or show navbar in pixels

// window.addEventListener("scroll", () => {
//   const currentScrollY = window.scrollY;

//   if (Math.abs(lastScrollY - currentScrollY) >= scrollThreshold) {
//     if (lastScrollY < currentScrollY) {
//       navbar.classList.add("hide");
//       navbar.classList.remove("show");
//     } else {
//       navbar.classList.remove("hide");
//       navbar.classList.add("show");
//     }
//     lastScrollY = currentScrollY;
//   }
// });

// Sticky menu GSAP animation
// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#navbar", {
//   scrollTrigger: {
//     trigger: "#navbar",
//     start: "top+=1 top",
//     endTrigger: "html",
//     end: "bottom top",
//     pin: true,
//     pinSpacing: false,
//   },
//   y: 0, // Ensure the menu is in the correct position to start with
// });
