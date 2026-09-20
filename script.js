/* ============================================================
   BRIAN DISTA – Portfolio JS
   File: script.js
   ============================================================ */

/* ── Typewriter Effect ── */
const roles = [
  'Server Engineer',
  'Technician Support',
  'Infrastructure Architect',
  'Database Administrator',
];

let roleIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;

const typeEl = document.getElementById('typewriter-text');

function typeWriter() {
  const currentWord = roles[roleIndex];

  if (!isDeleting) {
    // Typing
    charIndex++;
    typeEl.textContent = currentWord.slice(0, charIndex);

    if (charIndex === currentWord.length) {
      // Pause at end of word, then start deleting
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 2000);
      return;
    }
  } else {
    // Deleting
    charIndex--;
    typeEl.textContent = currentWord.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting  = false;
      roleIndex   = (roleIndex + 1) % roles.length;
    }
  }

  const speed = isDeleting ? 50 : 85;
  setTimeout(typeWriter, speed);
}

// Start typewriter after entrance animations finish
setTimeout(typeWriter, 1200);


/* ── Active nav link on click ── */
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});
