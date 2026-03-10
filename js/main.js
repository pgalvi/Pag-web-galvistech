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

// ===== CONTACT FORM LOGIC (Senior Frontend Implementation) =====

const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const FORMSPREE_ID = "mwvrvgnw"; // Tu ID de Formspree

if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, select, textarea');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('has-error')) {
                validateField(input);
            }
        });
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Final validation check
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) isFormValid = false;
        });

        if (!isFormValid) return;

        // UI States
        const submitBtn = document.getElementById('contactSubmit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');

        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');

        try {
            const formData = new FormData(contactForm);
            
            // Mapeo de campos del Frontend a los campos esperados por el Backend Senior
            const data = {
                nombre_completo: formData.get('name'),
                email_corporativo: formData.get('email'),
                tipo_proyecto: formData.get('project_type'),
                presupuesto_estimado: formData.get('budget'),
                mensaje: formData.get('message')
            };

            const response = await fetch('./contacto.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                contactForm.classList.add('hidden');
                contactSuccess.classList.remove('hidden');
                contactForm.reset();
            } else {
                throw new Error('Error en el servidor de Galvis Tech');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Lo sentimos, hubo un problema al enviar tu mensaje. ¿Está el servidor activo?');
        } finally {
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnLoader.classList.add('hidden');
        }
    });
}

function validateField(input) {
    const group = input.parentElement;
    let isValid = true;

    if (input.required && !input.value.trim()) {
        isValid = false;
    } else if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(input.value.trim());
    }

    if (!isValid) {
        group.classList.add('has-error');
    } else {
        group.classList.remove('has-error');
    }

    return isValid;
}

// Global function to reset form view
window.resetContactForm = function () {
    contactForm.classList.remove('hidden');
    contactSuccess.classList.add('hidden');
    // Scroll a la parte superior del formulario
    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// ===== CONSOLE EASTER EGG =====

console.log('%c¡Hola Developer! 👋', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%c¿Buscas talento para tu equipo? Contacta con Galvis Tech Solutions', 'color: #00D9FF; font-size: 14px;');
console.log('%cEste sitio fue construido con ❤️ y código limpio.', 'color: #E5E7EB; font-size: 12px;');
