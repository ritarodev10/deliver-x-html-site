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

// Autohide Navbar on Scroll using gsap
gsap.registerPlugin(ScrollTrigger);

let lastScrollTop = 0;

ScrollTrigger.create({
  onUpdate: (self) => {
    let scrollDirection = self.direction;

    if (scrollDirection === 1 && self.scroll() > lastScrollTop) {
      // Scrolling down
      gsap.to("#navbar", { y: "-100%", duration: 0.1 });
    } else if (scrollDirection === -1) {
      // Scrolling up
      gsap.to("#navbar", { y: "0%", duration: 0.1 });
    }
    lastScrollTop = self.scroll();
  },
  end: "bottom bottom",
});
