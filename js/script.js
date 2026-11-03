// Ano automático no rodapé
const footer = document.querySelector("footer p");

if (footer) {
  footer.textContent = `© ${new Date().getFullYear()} Minha Marca. Todos os direitos reservados.`;
}

// Animação de entrada das seções
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
