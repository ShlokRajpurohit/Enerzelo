gsap.registerPlugin(ScrollTrigger);

// 1. STICKY NAV SCROLL STATE (DAWN Logic)
const mainNav = document.querySelector('.navbar');
const logoImg = document.querySelector('.navbar .logo img');
const navLinks = document.querySelectorAll('.navbar .nav-links a, .navbar .nav-icons a');

// --- Global Navigation Behavior ---
ScrollTrigger.create({
    trigger: "body",
    start: 'top top-=80', // Trigger after scrolling past the hero
    onEnter: () => {
        mainNav.classList.add('scrolled');
        logoImg.style.filter = 'none'; // Revert logo to its natural color
        navLinks.forEach(link => link.style.color = 'var(--color-primary-dark)');
    },
    onLeaveBack: () => {
        mainNav.classList.remove('scrolled');
        logoImg.style.filter = 'invert(100%) brightness(1.5)'; // Set logo to white for hero
        navLinks.forEach(link => link.style.color = 'var(--color-text-light)');
    }
});

// 2. HERO CTA HOVER (Minimalist Bouncing)
const heroCta = document.querySelector('.hero-cta-btn');

if (heroCta) {
    heroCta.addEventListener('mousemove', (e) => {
        const rect = heroCta.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(heroCta, {
            x: x * 0.1, // Subtle inertia
            y: y * 0.1,
            scale: 1.02,
            ease: "power1.out",
            duration: 0.3
        });
    });

    heroCta.addEventListener('mouseleave', () => {
        gsap.to(heroCta, {
            x: 0,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.5)",
            duration: 0.6
        });
    });
}

// 3. PRODUCT GRID STAGGERED REVEAL (for both homepage and products page)
const productItems = document.querySelectorAll('.product-grid-section .product-item');

if (productItems.length > 0) {
    gsap.from(productItems, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".product-grid-section",
            start: "top 85%",
            once: true,
        }
    });
}