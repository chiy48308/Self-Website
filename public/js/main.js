// ── Typewriter Intro ──
const typedEl = document.getElementById('typed');
const intro = document.getElementById('intro');
const text = 'Introduce My Self';
let i = 0;

function type() {
  if (i < text.length) {
    typedEl.textContent += text[i++];
    setTimeout(type, i === 1 ? 180 : 110);
  } else {
    setTimeout(() => {
      intro.classList.add('hidden');
      document.querySelectorAll('#hero .fade-up').forEach((el, idx) => {
        setTimeout(() => el.classList.add('visible'), idx * 180);
      });
    }, 900);
  }
}

setTimeout(type, 400);

// ── IntersectionObserver for scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => {
  if (!el.closest('#hero')) observer.observe(el);
});
