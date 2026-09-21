
document.addEventListener("DOMContentLoaded", () => {
  // Smooth navigation
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
  });

  // Consultation buttons
  const consultationButtons = document.querySelectorAll(
    'a[href="#contact"]'
  );

  consultationButtons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("Contact section opened");
    });
  });
});
