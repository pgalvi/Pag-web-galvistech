// ==========================================
// AI WEB SKETCH GENERATOR - MAIN LOGIC
// Form handling, Dynamic sketch generation, Logo integration
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // ========== VARIABLES ==========
    const form = document.getElementById('aiGeneratorForm');
    const brandColor1 = document.getElementById('brandColor1');
    const brandColor2 = document.getElementById('brandColor2');
    const brandColor3 = document.getElementById('brandColor3');
    const colorHex1 = document.getElementById('colorHex1');
    const colorHex2 = document.getElementById('colorHex2');
    const colorHex3 = document.getElementById('colorHex3');
    const businessDesc = document.getElementById('businessDesc');
    const userEmail = document.getElementById('userEmail');
    const generateBtn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');

    const placeholderState = document.getElementById('placeholderState');
    const resultState = document.getElementById('resultState');
    const confirmEmail = document.getElementById('confirmEmail');


    // ========== COLOR PICKERS ==========

    brandColor1.addEventListener('input', function (e) {
        colorHex1.textContent = e.target.value.toUpperCase();
    });

    brandColor2.addEventListener('input', function (e) {
        colorHex2.textContent = e.target.value.toUpperCase();
    });

    brandColor3.addEventListener('input', function (e) {
        colorHex3.textContent = e.target.value.toUpperCase();
    });

    // ========== FORM SUBMISSION ==========

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) return;

        // Show loading state
        setLoadingState(true);

        // Collect form data
        const formData = {
            colors: [
                brandColor1.value,
                brandColor2.value,
                brandColor3.value
            ],
            description: businessDesc.value.trim(),
            email: userEmail.value.trim()
        };

        // Enviar datos al Backend Bridge (PHP)
        try {
            await fetch('./contacto.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    descripcion_negocio: formData.description,
                    colores: formData.colors.join(', '),
                    tiene_logo: 'No',
                    fuente: 'Generador de IA - Galvis Tech'
                })
            });
            console.log('✅ Datos de proyecto enviados al servidor');
        } catch (error) {
            console.error('❌ Error enviando datos de proyecto:', error);
        }

        // Generate sketch
        try {
            const result = await generateDynamicSketch(formData);
            displayResult(result, formData);
        } catch (error) {
            alert('❌ Hubo un error generando el concepto. Por favor intenta nuevamente.');
            console.error(error);
        } finally {
            setLoadingState(false);
        }
    });

    // ========== VALIDATION ==========

    function validateForm() {
        // Check business description length
        if (businessDesc.value.trim().length < 20) {
            alert('⚠️ Por favor describe tu negocio con al menos 20 caracteres.');
            businessDesc.focus();
            return false;
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail.value.trim())) {
            alert('⚠️ Por favor ingresa un email válido.');
            userEmail.focus();
            return false;
        }

        return true;
    }

    // ========== DYNAMIC SKETCH GENERATION ==========

    function generateDynamicSketch(formData) {
        return new Promise((resolve) => {
            console.log('🎨 Generating custom sketch for:', formData.description);
            console.log('🎨 Using colors:', formData.colors);

            // Simulate processing delay
            setTimeout(() => {
                // Detect business type
                const businessType = detectBusinessType(formData.description);
                console.log('🏢 Detected business type:', businessType);

                // Generate HTML sketch
                let sketchHTML;

                switch (businessType) {
                    case 'ecommerce':
                        sketchHTML = generateEcommerceSketch(formData, formData.colors, null);
                        break;
                    case 'restaurant':
                    case 'food':
                        sketchHTML = generateRestaurantSketch(formData, formData.colors, null);
                        break;
                    case 'agency':
                    case 'marketing':
                        sketchHTML = generateAgencySketch(formData, formData.colors, null);
                        break;
                    case 'portfolio':
                        sketchHTML = generatePortfolioSketch(formData, formData.colors, null);
                        break;
                    default:
                        sketchHTML = generateGenericSketch(formData, formData.colors, null);
                }

                resolve({
                    sketchHTML: sketchHTML,
                    businessType: businessType
                });
            }, 2500); // 2.5 second delay for realism
        });
    }

    // Detect business type from description
    function detectBusinessType(description) {
        const lower = description.toLowerCase();

        if (lower.match(/tienda|ecommerce|e-commerce|shop|venta|producto|comercio/)) {
            return 'ecommerce';
        }
        if (lower.match(/restaurante|comida|food|café|cafetería|gastronomía|cocina|alimento/)) {
            return 'restaurant';
        }
        if (lower.match(/agencia|marketing|publicidad|consultoría|consulting|servicios profesionales/)) {
            return 'agency';
        }
        if (lower.match(/portafolio|portfolio|fotografía|photography|diseño gráfico|artista/)) {
            return 'portfolio';
        }

        return 'generic';
    }

    // ========== DISPLAY RESULT ==========

    function displayResult(result, formData) {
        // Hide placeholder, show result
        placeholderState.classList.add('hidden');
        resultState.classList.remove('hidden');

        // Create iframe to display the sketch
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.minHeight = '100%';
        iframe.style.height = 'auto';
        iframe.style.border = 'none';
        iframe.style.display = 'block';
        iframe.style.borderRadius = '0';
        iframe.style.backgroundColor = 'white';
        iframe.setAttribute('scrolling', 'auto');

        // Clear previous content
        resultState.innerHTML = '';
        resultState.appendChild(iframe);

        // Write the sketch HTML to iframe
        iframe.contentDocument.open();
        iframe.contentDocument.write(result.sketchHTML);
        iframe.contentDocument.close();

        // Auto-resize iframe based on content
        setTimeout(() => {
            try {
                const iframeBody = iframe.contentDocument.body;
                const iframeHtml = iframe.contentDocument.documentElement;
                const contentHeight = Math.max(
                    iframeBody.scrollHeight,
                    iframeHtml.scrollHeight,
                    600 // minimum height
                );
                iframe.style.height = contentHeight + 'px';
            } catch (e) {
                console.log('Using default iframe height');
                iframe.style.height = '600px';
            }
        }, 100);

        // Show success message
        confirmEmail.textContent = formData.email;
        successMessage.classList.remove('hidden');

        // Scroll to result (smooth)
        setTimeout(() => {
            resultState.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);

        // Log lead capture (in production, send to backend)
        console.log('✅ Lead Captured:', {
            email: formData.email,
            colors: formData.colors,
            description: formData.description,
            businessType: result.businessType,
            hasLogo: false,
            timestamp: new Date().toISOString()
        });

        // Simulate sending email notification (backend would handle this)
        simulateEmailNotification(formData, result.businessType);
    }

    // ========== UI HELPERS ==========

    function setLoadingState(isLoading) {
        generateBtn.disabled = isLoading;

        if (isLoading) {
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
        } else {
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
        }
    }

    // Simulate email notification
    function simulateEmailNotification(formData, businessType) {
        console.log('📧 Email would be sent to:', formData.email);
        console.log('Subject: Tu Concepto Web Personalizado - Galvis Tech Solutions');
        console.log(`Body: Hemos generado un sketch de ${businessType} para tu negocio. Te enviaremos el diseño completo y refinado en menos de 24 horas.`);
    }

});

// ========== UTILITY: Lead Data for Backend Integration ==========
function prepareLeadData(formData, businessType) {
    return {
        email: formData.email,
        businessDescription: formData.description,
        brandColors: formData.colors,
        businessType: businessType,
        hasLogo: false,
        logoDataUrl: null,
        createdAt: new Date().toISOString(),
        source: 'ai-sketch-generator',
        status: 'pending'
    };
}
