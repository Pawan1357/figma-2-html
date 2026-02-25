const navLinks = document.querySelectorAll('a[href^="#"]');
for (const link of navLinks) {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const upload = document.getElementById('upload');
const fileName = document.getElementById('file-name');
if (upload && fileName) {
  upload.addEventListener('change', () => {
    fileName.textContent = upload.files?.[0]?.name || 'No file chosen';
  });
}

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your message has been captured.');
    form.reset();
    if (fileName) fileName.textContent = 'No file chosen';
  });
}
