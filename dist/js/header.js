document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");

  mobileMenuBtn.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  // Adiciona efeito de destaque para seção atual
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollPos = window.scrollY;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);

  // Efeito hover para desktop
  if (window.innerWidth > 992) {
    const navItems = document.querySelectorAll(".main-nav li");
    navItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        navItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.opacity = "0.5";
          }
        });
      });

      item.addEventListener("mouseleave", function () {
        navItems.forEach((otherItem) => {
          otherItem.style.opacity = "1";
        });
      });
    });
  }
});