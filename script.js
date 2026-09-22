document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1400);


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const header = document.querySelector(".header");

    if (menuButton && header) {

        menuButton.addEventListener("click", () => {
            header.classList.toggle("menu-open");
        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (header) {
                header.classList.remove("menu-open");
            }

        });

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const id = link.getAttribute("href");

            if (!id || id === "#") return;

            const target = document.querySelector(id);

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

    const animatedElements = document.querySelectorAll(
        ".section, .space-card, .architecture-main, .plan-image, .contact-item"
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


    animatedElements.forEach(element => {
        observer.observe(element);
    });


    /* =========================
       CURSOR GLOW
    ========================= */

    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow && window.innerWidth > 700) {

        window.addEventListener("pointermove", event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        });

    }


    /* =========================
       HERO PARALLAX
    ========================= */

    const heroImage =
        document.querySelector(".hero-image img");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scroll = window.scrollY;

            if (scroll < window.innerHeight) {

                heroImage.style.transform =
                    `scale(1.03) translateY(${scroll * 0.08}px)`;

            }

        });

    }


    /* =========================
       SPACE CARDS
    ========================= */

    const cards =
        document.querySelectorAll(".space-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            cards.forEach(other => {
                other.style.opacity = "0.55";
            });

            card.style.opacity = "1";

        });


        card.addEventListener("mouseleave", () => {

            cards.forEach(other => {
                other.style.opacity = "1";
            });

        });

    });


    /* =========================
       IMAGE LOADING
    ========================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("load", () => {
            image.classList.add("loaded-image");
        });

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerYear =
        document.querySelector(".footer > span");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()}`;

    }

});
