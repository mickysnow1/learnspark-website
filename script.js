document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.theme-toggle').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.faq-item').classList.toggle('active');
    });
  });
  document.getElementById('start-journey-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Adventure awaits!');
    e.target.reset();
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
        });
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.section').forEach(section => observer.observe(section));
});
