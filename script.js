// Theme Toggle
const toggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = toggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});