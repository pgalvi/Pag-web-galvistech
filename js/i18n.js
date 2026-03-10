/**
 * GALVIS TECH SOLUTIONS - MULTILINGUAL ENGINE (ES/EN)
 * Professional translation and language switching logic.
 */

const translations = {
    es: {
        nav_services: "Servicios",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        hero_title: 'Elevamos tu Negocio con Soluciones Digitales de <span class="gradient-text">Alta Gama</span>',
        hero_subtitle: "Desarrollo Web, E-commerce y Estrategia Digital para marcas que exigen excelencia",
        hero_ai_cta: "Ver mi Web con IA",
        hero_quote_cta: "Cotizar Proyecto",
        section_services_title: "Nuestros Servicios",
        section_services_subtitle: "Soluciones digitales que transforman tu negocio",
        service_1_title: "Diseño Web Nativo & Corporativo",
        service_1_desc: "Landing pages y sitios corporativos desarrollados línea por línea para una velocidad y seguridad inigualables. Nos alejamos de las plantillas y los constructores visuales; creamos arquitecturas digitales únicas con código puro, garantizando un rendimiento técnico perfecto y una libertad de diseño absoluta.",
        service_2_title: "Ingeniería E-commerce a Medida",
        service_2_desc: "Tiendas online robustas construidas desde cero, libres de las limitaciones y comisiones de plataformas prefabricadas (como Shopify o Wix). Desarrollamos su motor de ventas con tecnología propia para otorgarle control total, escalabilidad real y una experiencia de compra optimizada al milímetro.",
        service_3_title: "Desarrollo de Software & Apps Propias",
        service_3_desc: "Soluciones digitales y aplicaciones web creadas específicamente para la lógica de su negocio, sin depender de plugins de terceros. Entregamos software de propiedad exclusiva, con una arquitectura de código limpia, segura y diseñada para evolucionar al ritmo de su empresa.",
        section_why_title: "Por Qué Elegirnos",
        section_why_subtitle: "La diferencia que impulsa resultados excepcionales",
        about_text_1: "En Galvis Tech Solutions, entendemos que una presencia web es la extensión más pura de su marca. Por ello, hemos perfeccionado una metodología que fusiona la estética impecable con una eficiencia absoluta. No solo creamos ecosistemas digitales a medida; respetamos el valor de su tiempo garantizando entregas finales ágiles y precisas.",
        about_text_2: "Sabemos que la visión de un líder no puede esperar. Como parte de nuestro compromiso con la excelencia y la inmediatez, le ofrecemos una <strong>Visualización Preliminar Express</strong>: en menos de 24 horas, recibirá un boceto conceptual exclusivo de cómo lucirá su proyecto.",
        about_text_3: "Permítanos transformar sus ideas en una experiencia digital sofisticada, funcional y lista para el mercado en tiempo récord.",
        why_1_title: "Atención Personalizada",
        why_1_desc: "Tu proyecto merece atención dedicada, no un número en la fila. Trabajamos contigo en cada etapa.",
        why_2_title: "Código Limpio Optimizado para Google",
        why_2_desc: "SEO-ready desde el primer día. Rankings que importan, velocidad que convierte, estructura que escala.",
        why_3_title: "Diseño Centrado en Ventas",
        why_3_desc: "Cada pixel diseñado para convertir, no solo para verse bien. UX basado en datos, CRO integrado.",
        section_contact_title: "Hablemos de tu Proyecto",
        section_contact_subtitle: "Estamos listos para transformar tu visión en una realidad digital de clase mundial.",
        contact_label_name: "Nombre Completo",
        contact_label_email: "Email Corporativo",
        contact_label_project: "Tipo de Proyecto",
        contact_label_budget: "Presupuesto Estimado",
        contact_label_message: "Mensaje / Detalles del Proyecto",
        contact_placeholder_name: "Ej: Juan Pérez",
        contact_placeholder_email: "juan@empresa.com",
        contact_placeholder_message: "¿Cómo podemos ayudarte?",
        contact_option_select: "Selecciona una opción",
        contact_option_budget: "Rango de presupuesto",
        contact_option_landing: "Landing Page",
        contact_option_ecommerce: "E-commerce",
        contact_option_corporate: "Web Corporativa",
        contact_option_software: "Software a Medida",
        contact_btn_send: "Enviar Mensaje",
        contact_btn_sending: "Enviando...",
        contact_success_title: "¡Mensaje Recibido!",
        contact_success_desc: "Gracias por contactarnos. Un consultor experto revisará tu propuesta y te responderá en menos de 12 horas.",
        contact_success_reset: "Enviar otro mensaje",
        footer_tagline: "Soluciones digitales de alta gama",
        footer_links_title: "Enlaces Rápidos",
        footer_copyright: "© 2026 Galvis Tech Solutions. Todos los derechos reservados.",
        // AI Generator Page
        ai_hero_title: 'Visualiza tu <span class="gradient-text">Sitio Web Ideal</span>',
        ai_hero_subtitle: "Nuestra IA genera un concepto visual profesional de tu sitio web en segundos.",
        ai_hero_badge: "✨ Recibe tu boceto preliminar en menos de 24 horas",
        ai_form_title: "Datos de tu Proyecto",
        ai_step_1: "1. Elige tu Paleta de Colores (Mínimo 3)",
        ai_color_primary: "Principal",
        ai_color_secondary: "Secundario",
        ai_color_accent: "Acento",
        ai_step_2: "2. ¿A qué se dedica tu negocio?",
        ai_placeholder_desc: "Ej: Agencia de marketing digital especializada en e-commerce para marcas de moda sustentable...",
        ai_desc_hint: "Mínimo 20 caracteres",
        ai_step_3: "3. Tu Correo Corporativo",
        ai_placeholder_email: "nombre@tuempresa.com",
        ai_email_hint: "🔒 Necesario para enviarte el concepto completo en 24h",
        ai_btn_generate: "Generar Concepto con IA",
        ai_btn_generating: "Generando...",
        ai_preview_title: "Vista Previa",
        ai_preview_placeholder: "Completa el formulario para generar<br>tu concepto web personalizado",
        ai_success_title: "¡Concepto Generado!",
        ai_success_desc: "Revisa el boceto arriba. Te enviaremos el concepto completo y refinado a <span id='confirmEmail' class='text-blue-400 font-semibold'></span> en menos de 24 horas.",
        ai_footer_lock: "🔒 Tus datos están seguros. Solo usamos tu información para contactarte sobre tu proyecto."
    },
    en: {
        nav_services: "Services",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_title: 'Elevate Your Business with <span class="gradient-text">High-End</span> Digital Solutions',
        hero_subtitle: "Web Development, E-commerce, and Digital Strategy for brands that demand excellence",
        hero_ai_cta: "Visualize my Web with AI",
        hero_quote_cta: "Get a Quote",
        section_services_title: "Our Services",
        section_services_subtitle: "Digital solutions that transform your business",
        service_1_title: "Native & Corporate Web Design",
        service_1_desc: "Landing pages and corporate sites developed line-by-line for unmatched speed and security. We move away from templates and visual builders; we create unique digital architectures with pure code, ensuring perfect technical performance and absolute design freedom.",
        service_2_title: "Custom E-commerce Engineering",
        service_2_desc: "Robust online stores built from scratch, free from the limitations and commissions of pre-fab platforms (like Shopify or Wix). We develop your sales engine with proprietary technology to grant you total control, real scalability, and a purchasing experience optimized to the millimeter.",
        service_3_title: "Software Development & Proprietary Apps",
        service_3_desc: "Digital solutions and web applications specifically created for your business logic, without relying on third-party plugins. We deliver proprietary software with a clean, secure code architecture designed to evolve at the pace of your company.",
        section_why_title: "Why Choose Us",
        section_why_subtitle: "The difference that drives exceptional results",
        about_text_1: "At Galvis Tech Solutions, we understand that a web presence is the purest extension of your brand. Therefore, we have perfected a methodology that fuses impeccable aesthetics with absolute efficiency. We don't just create custom digital ecosystems; we respect the value of your time by guaranteeing agile and precise final deliveries.",
        about_text_2: "We know that a leader's vision cannot wait. As part of our commitment to excellence and immediacy, we offer an <strong>Express Preliminary Visualization</strong>: in less than 24 hours, you will receive an exclusive conceptual sketch of how your project will look.",
        about_text_3: "Allow us to transform your ideas into a sophisticated, functional, and market-ready digital experience in record time.",
        why_1_title: "Personalized Attention",
        why_1_desc: "Your project deserves dedicated attention, not a number in a queue. We work with you at every stage.",
        why_2_title: "Clean Code Optimized for Google",
        why_2_desc: "SEO-ready from day one. Rankings that matter, speed that converts, structure that scales.",
        why_3_title: "Sales-Centric Design",
        why_3_desc: "Every pixel designed to convert, not just to look good. Data-driven UX, integrated CRO.",
        section_contact_title: "Let's Talk About Your Project",
        section_contact_subtitle: "We are ready to transform your vision into a world-class digital reality.",
        contact_label_name: "Full Name",
        contact_label_email: "Corporate Email",
        contact_label_project: "Project Type",
        contact_label_budget: "Estimated Budget",
        contact_label_message: "Message / Project Details",
        contact_placeholder_name: "Ex: John Doe",
        contact_placeholder_email: "john@company.com",
        contact_placeholder_message: "How can we help you?",
        contact_option_select: "Select an option",
        contact_option_budget: "Budget range",
        contact_option_landing: "Landing Page",
        contact_option_ecommerce: "E-commerce",
        contact_option_corporate: "Corporate Website",
        contact_option_software: "Custom Software",
        contact_btn_send: "Send Message",
        contact_btn_sending: "Sending...",
        contact_success_title: "Message Received!",
        contact_success_desc: "Thank you for contacting us. An expert consultant will review your proposal and respond in less than 12 hours.",
        contact_success_reset: "Send another message",
        footer_tagline: "High-end digital solutions",
        footer_links_title: "Quick Links",
        footer_copyright: "© 2026 Galvis Tech Solutions. All rights reserved.",
        // AI Generator Page
        ai_hero_title: 'Visualize Your <span class="gradient-text">Ideal Website</span>',
        ai_hero_subtitle: "Our AI generates a professional visual concept for your website in seconds.",
        ai_hero_badge: "✨ Receive your preliminary sketch in under 24 hours",
        ai_form_title: "Project Data",
        ai_step_1: "1. Choose Your Color Palette (Min 3)",
        ai_color_primary: "Primary",
        ai_color_secondary: "Secondary",
        ai_color_accent: "Accent",
        ai_step_2: "2. What does your business do?",
        ai_placeholder_desc: "Ex: Digital marketing agency specialized in e-commerce for sustainable fashion brands...",
        ai_desc_hint: "Minimum 20 characters",
        ai_step_3: "3. Your Corporate Email",
        ai_placeholder_email: "name@company.com",
        ai_email_hint: "🔒 Necessary to send you the full concept in 24h",
        ai_btn_generate: "Generate Concept with AI",
        ai_btn_generating: "Generating...",
        ai_preview_title: "Preview",
        ai_preview_placeholder: "Complete the form to generate<br>your personalized web concept",
        ai_success_title: "Concept Generated!",
        ai_success_desc: "Review the sketch above. We will send you the full refined concept to <span id='confirmEmail' class='text-blue-400 font-semibold'></span> within 24 hours.",
        ai_footer_lock: "🔒 Your data is safe. We only use your information to contact you about your project."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Determine initial language
    let currentLang = localStorage.getItem('selectedLanguage') || 'es';
    
    // Create language switcher in header if it doesn't exist
    injectLanguageSwitcher();
    
    // Initial translation
    applyTranslations(currentLang);
    
    // Listen for language change events
    window.addEventListener('languageChange', (e) => {
        currentLang = e.detail;
        localStorage.setItem('selectedLanguage', currentLang);
        applyTranslations(currentLang);
    });
});

function injectLanguageSwitcher() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    
    // Skip if already there
    if (document.getElementById('lang-switcher')) return;
    
    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';
    switcher.className = 'lang-switcher';
    
    const currentLang = localStorage.getItem('selectedLanguage') || 'es';
    
    switcher.innerHTML = `
        <button class="lang-btn ${currentLang === 'es' ? 'active' : ''}" data-lang="es">Esp</button>
        <span class="lang-separator">|</span>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">En</button>
    `;
    
    nav.appendChild(switcher);
    
    // Add event listeners
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            
            // Update UI
            switcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Trigger event
            window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
        });
    });
}

function applyTranslations(lang) {
    const dict = translations[lang];
    
    // Apply translations to elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            // Handle placeholders for inputs
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });
    
    // Special case for select options
    document.querySelectorAll('[data-i18n-options]').forEach(select => {
        const options = select.querySelectorAll('option');
        options.forEach(opt => {
            const key = opt.getAttribute('data-i18n-key');
            if (key && dict[key]) {
                opt.textContent = dict[key];
            }
        });
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
