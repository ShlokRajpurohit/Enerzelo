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

// 2. BUTTON HOVER EFFECTS (Minimalist Bouncing)
function addButtonHoverEffect(button) {
    if (button) {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.1, // Subtle inertia
                y: y * 0.1,
                scale: 1.02,
                ease: "power1.out",
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "elastic.out(1, 0.5)",
                duration: 0.6
            });
        });
    }
}

// Apply hover effects to all important buttons
const heroCta = document.querySelector('.hero-cta-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const addToCartHero = document.querySelector('.add-to-cart-hero');
const productGridButton = document.querySelector('.product-grid-button');

// Apply effects to all buttons
addButtonHoverEffect(heroCta);
addToCartButtons.forEach(button => addButtonHoverEffect(button));
addButtonHoverEffect(addToCartHero);
addButtonHoverEffect(productGridButton);

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

// ================== 4. FEATURE BLOCKS STAGGERED REVEAL ==================

const featureCards = document.querySelectorAll('.feature-blocks-section .feature-card');

if (featureCards.length > 0) {
    gsap.from(featureCards, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".feature-blocks-section",
            start: "top 85%",
            once: true,
        }
    });
}

