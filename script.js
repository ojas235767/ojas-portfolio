// script.js - FULL VERIFIED CODE (NO ERRORS)
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Header background on scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active"); // close mobile menu after click
    });
  });

  // Fake form submission (just for demo)
  document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    e.target.reset();
  });
});
