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

// Typing Animation
const typingText = document.querySelector('.typing');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;
function type() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
    } else {
        setTimeout(() => { typingText.textContent = ''; i = 0; type(); }, 2000);
    }
}
type();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
