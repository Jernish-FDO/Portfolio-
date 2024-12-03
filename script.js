
// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  });
});

// Form Validation
if (document.querySelector('form')) {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    let valid = true;
    if (!name.value.trim()) valid = false;
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) valid = false;
    if (!message.value.trim()) valid = false;
    if (!valid) e.preventDefault();
  });
}

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.5 });
document.querySelectorAll('.content, .projects .project').forEach(element => {
  observer.observe(element);
});
