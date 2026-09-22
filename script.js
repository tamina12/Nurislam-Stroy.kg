document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });
  }


  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const navigationLinks = document.querySelectorAll(".nav a");

  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      navigation?.classList.remove("open");
    });
  });


  /* =========================
     SMOOTH SCROLL
  ========================= */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

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


  /* =========================
     SCROLL ANIMATIONS
  ========================= */

  const animatedElements =
    document.querySelectorAll(".reveal");

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


  animatedElements.forEach(element => {
    observer.observe(element);
  });


  /* =========================
     CURSOR GOLD EFFECT
  ========================= */

  const cursorGlow =
    document.querySelector(".cursor-glow");

  if (cursorGlow) {

    window.addEventListener("pointermove", event => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    });

  }


  /* =========================
     CONTACT FORM
  ========================= */

  const contactForm =
    document.getElementById("contactForm");

  const toast =
    document.getElementById("toast");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        if (toast) {

          toast.classList.add("show");

          setTimeout(() => {

            toast.classList.remove("show");

          }, 4500);

        }

        contactForm.reset();

      }
    );

  }


  /* =========================
     ACTIVE NAVIGATION
  ========================= */

  const sections =
    document.querySelectorAll("section[id]");

  const navItems =
    document.querySelectorAll(".nav a");


  const activeSectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            navItems.forEach(link => {
              link.classList.remove("active");
            });


            const activeLink =
              document.querySelector(
                `.nav a[href="#${entry.target.id}"]`
              );


            if (activeLink) {
              activeLink.classList.add("active");
            }

          }

        });

      },
      {
        threshold: 0.45
      }
    );


  sections.forEach(section => {
    activeSectionObserver.observe(section);
  });


  /* =========================
     CONSOLE MESSAGE
  ========================= */

  console.log(
    "Nurislam Stroy website loaded successfully."
  );

});
