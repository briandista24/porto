/* ============================================================
   BRIAN DISTA – Portfolio JS
   File: script.js
   ============================================================ */

/* ── Typewriter Effect ── */
const roles = [
  'DevOps Engineer',
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


/* ── Active nav link & Section Toggling ── */
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Abaikan link eksternal atau email agar tetap berfungsi normal
    const href = item.getAttribute('href');
    if (!href.startsWith('#')) return;
    
    e.preventDefault();

    // Hapus class active dari semua menu
    navItems.forEach(n => n.classList.remove('active'));
    // Tambahkan class active ke menu yang diklik
    item.classList.add('active');

    // Ambil ID target (hapus tanda '#')
    const targetId = href.substring(1);

    // Sembunyikan semua section, tampilkan yang dipilih
    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });
});

/* ── Project Sub-Tab Logic (NEW) ── */
const tabBtns = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Reset semua status tab
    tabBtns.forEach(b => b.classList.remove('active'));
    // 2. Beri class 'active' ke tab yang sedang diklik
    btn.classList.add('active');

    const targetTab = btn.getAttribute('data-tab');

    // 3. Sembunyikan atau tampilkan konten project yang sesuai
    projectCards.forEach(card => {
      if (card.getAttribute('data-category') === targetTab) {
        card.style.display = 'block'; // Tampilkan card kategori ini
      } else {
        card.style.display = 'none'; // Sembunyikan card kategori lain
      }
    });
  });
});