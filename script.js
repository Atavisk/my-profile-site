const year = new Date().getFullYear();
const footerText = document.querySelector('footer p');
footerText.textContent = `© ${year} 【Atavisk】`;
const toggleBtn = document.querySelector('#theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});