document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const header = document.querySelector(".header");
    const navigationLinks = document.querySelectorAll(".navigation a");

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            header.classList.toggle("menu-open");
        });
    }

    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("menu-open");
        });
    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       SPACE CARDS
    ========================= */

    const spaceCards = document.querySelectorAll(".space-card");

    spaceCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            spaceCards.forEach(item => {
                item.classList.remove("active");
            });

            card.classList.add("active");

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section, .number-item, .space-card, .architecture-main, .small-image, .construction-image, .contact-item"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================
       CURSOR GOLD GLOW
    ========================= */

    const glow = document.querySelector(".cursor-glow");

    if (glow) {

        window.addEventListener("pointermove", event => {

            glow.style.left = `${event.clientX}px`;
            glow.style.top = `${event.clientY}px`;

        });

    }


    /* =========================
       HERO PARALLAX
    ========================= */

    const heroImage = document.querySelector(".hero-background img");

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        if (heroImage && scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.03) translateY(${scroll * 0.12}px)`;

        }

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerYear = document.querySelector(".footer-right");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()}`;

    }


    /* =========================
       LOADER
    ========================= */

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 1700);

});
