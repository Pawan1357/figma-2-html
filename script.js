// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
for (const link of navLinks) {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    // Close mobile nav if open
    mobileNav?.classList.remove('open');
    hamburgerBtn?.classList.remove('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// File upload display
const upload = document.getElementById('upload');
const fileName = document.getElementById('file-name');
if (upload && fileName) {
  upload.addEventListener('change', () => {
    fileName.textContent = upload.files?.[0]?.name || 'No file chosen';
  });
}

// Contact form submission
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your message has been captured.');
    form.reset();
    if (fileName) fileName.textContent = 'No file chosen';
  });
}

// Hamburger mobile menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');

function openMobileNav() {
  mobileNav.classList.add('open');
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });
}

if (mobileNavClose) {
  mobileNavClose.addEventListener('click', closeMobileNav);
}

