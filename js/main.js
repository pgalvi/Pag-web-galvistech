// ==========================================
// GALVIS TECH SOLUTIONS - INTERACTIONS
// ==========================================

// ===== SCROLL ANIMATIONS =====

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with scroll-fade class
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-fade');
    scrollElements.forEach(el => observer.observe(el));
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NEWSLETTER FORM HANDLING =====

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Simple validation
        if (email && email.includes('@')) {
            // Success feedback
            const button = newsletterForm.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = '✓ Suscrito';
            button.style.background = 'linear-gradient(135deg, #10B981 0%, #34D399 100%)';
            
            // Reset after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                emailInput.value = '';
            }, 3000);
        }
    });
}

// ===== PARALLAX EFFECT FOR HERO (Subtle) =====

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-background');
            
            if (heroBackground && scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroBackground.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ===== ACCESSIBILITY: Keyboard Navigation Enhancement =====

// Add visible focus states when navigating with keyboard
let isUsingKeyboard = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        isUsingKeyboard = true;
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    isUsingKeyboard = false;
    document.body.classList.remove('keyboard-nav');
});

// ===== PERFORMANCE: Lazy Loading Images (if added later) =====

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE EASTER EGG =====

console.log('%c¡Hola Developer! 👋', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%c¿Buscas talento para tu equipo? Contacta con Galvis Tech Solutions', 'color: #00D9FF; font-size: 14px;');
console.log('%cEste sitio fue construido con ❤️ y código limpio.', 'color: #E5E7EB; font-size: 12px;');
