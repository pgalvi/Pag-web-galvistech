// ==========================================
// PREMIUM WEBSITE SKETCH TEMPLATES
// High-quality HTML/CSS generation with animations and advanced styling
// ==========================================

// ========== ECOMMERCE TEMPLATE (PREMIUM) ==========
function generateEcommerceSketch(formData, colors, logo) {
    const businessName = extractBusinessName(formData.description);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #FAFAFA;
            overflow-x: hidden;
        }
        
        /* Header Premium */
        .header {
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(20px);
            padding: 20px 80px;
            box-shadow: 0 2px 20px rgba(0,0,0,0.04);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            animation: slideDown 0.6s ease-out;
        }
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .logo { 
            height: 48px; 
            object-fit: contain;
            transition: transform 0.3s ease;
        }
        .logo:hover { transform: scale(1.05); }
        .nav { display: flex; gap: 40px; align-items: center; }
        .nav a {
            color: #1F2937;
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            position: relative;
            transition: color 0.3s ease;
            margin-right: 40px;
        }
        .nav a:last-child {
            margin-right: 0;
        }
        .nav a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: ${colors[0]};
            transition: width 0.3s ease;
        }
        .nav a:hover::after { width: 100%; }
        .nav a:hover { color: ${colors[0]}; }
        .cart-btn {
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            color: white;
            padding: 12px 28px;
            border-radius: 12px;
            font-weight: 600;
            box-shadow: 0 4px 15px ${colors[0]}40;
            transition: all 0.3s ease;
        }
        .cart-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px ${colors[0]}60;
        }
        
        /* Hero Premium */
        .hero {
            background: linear-gradient(135deg, ${colors[0]}12 0%, ${colors[1]}12 50%, ${colors[2]}12 100%);
            padding: 100px 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, ${colors[0]}20, transparent 70%);
            top: -250px;
            right: -150px;
            border-radius: 50%;
        }
        .hero h1 {
            font-size: 64px;
            color: #111827;
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: -1px;
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .hero p {
            font-size: 22px;
            color: #6B7280;
            margin-bottom: 40px;
            animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .cta-btn {
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            color: white;
            padding: 18px 48px;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 30px ${colors[0]}50;
            transition: all 0.4s ease;
            animation: fadeInUp 0.8s ease-out 0.6s both;
            position: relative;
            overflow: hidden;
        }
        .cta-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }
        .cta-btn:hover::before { left: 100%; }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px ${colors[0]}70;
        }
        
        /* Products Premium */
        .products {
            max-width: 1300px;
            margin: 80px auto;
            padding: 0 80px;
        }
        .section-title {
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 16px;
            color: #111827;
            letter-spacing: -0.5px;
        }
        .section-subtitle {
            font-size: 18px;
            color: #6B7280;
            margin-bottom: 60px;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 36px;
        }
        .product-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
        }
        .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .product-img {
            width: 100%;
            height: 280px;
            background: linear-gradient(135deg, ${colors[0]}25, ${colors[1]}25);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
            position: relative;
            overflow: hidden;
        }
        .product-img::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            top: -50%;
            left: -100%;
            transition: left 0.5s;
        }
        .product-card:hover .product-img::before {
            left: 100%;
        }
        .product-badge {
            position: absolute;
            top: 16px;
            right: 16px;
            background: ${colors[2]};
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
        }
        .product-info {
            padding: 24px;
        }
        .product-category {
            color: ${colors[0]};
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .product-name {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 12px;
            line-height: 1.3;
        }
        .product-description {
            color: #6B7280;
            font-size: 14px;
            margin-bottom: 16px;
            line-height: 1.5;
        }
        .product-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .product-price {
            font-size: 28px;
            font-weight: 800;
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .add-btn {
            background: ${colors[2]};
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .add-btn:hover {
            background: ${colors[0]};
            transform: scale(1.05);
        }
        
        /* Rating Stars */
        .rating {
            display: flex;
            gap: 4px;
            margin-bottom: 12px;
        }
        .star {
            color: #FCD34D;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="header">
        ${logo ? `<img src="${logo}" alt="Logo" class="logo">` : `<h2 style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 26px; font-weight: 800;">${businessName}</h2>`}
        <div class="nav">
            <a href="#">Productos</a> <a href="#">Categorías</a> <a href="#">Ofertas</a> <a href="#">Blog</a> <a href="#" class="cart-btn">🛒 Carrito (3)</a>
        </div>>
    </div>
    
    <div class="hero">
        <h1>Descubre Productos Únicos</h1>
        <p>La mejor selección premium para ti y tu familia</p>
        <button class="cta-btn">Ver Catálogo Completo →</button>
    </div>
    
    <div class="products">
        <h2 class="section-title">Productos Destacados</h2>
        <p class="section-subtitle">Selección curada especialmente para ti</p>
        <div class="product-grid">
            <div class="product-card">
                <div class="product-img">
                    🎁
                    <div class="product-badge">Nuevo</div>
                </div>
                <div class="product-info">
                    <div class="product-category">Premium</div>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <div class="product-name">Producto Premium Exclusivo</div>
                    <div class="product-description">Calidad excepcional con acabados de lujo</div>
                    <div class="product-footer">
                        <div class="product-price">$99.990</div>
                        <button class="add-btn">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-img">
                    ⭐
                    <div class="product-badge">-20%</div>
                </div>
                <div class="product-info">
                    <div class="product-category">Destacado</div>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                    </div>
                    <div class="product-name">Producto Especial del Mes</div>
                    <div class="product-description">Oferta limitada por tiempo limitado</div>
                    <div class="product-footer">
                        <div class="product-price">$79.990</div>
                        <button class="add-btn">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-img">
                    🔥
                    <div class="product-badge">Hot</div>
                </div>
                <div class="product-info">
                    <div class="product-category">Trending</div>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <div class="product-name">Producto Más Vendido</div>
                    <div class="product-description">El favorito de nuestros clientes</div>
                    <div class="product-footer">
                        <div class="product-price">$59.990</div>
                        <button class="add-btn">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

// ========== RESTAURANT/FOOD TEMPLATE (PREMIUM) ==========
function generateRestaurantSketch(formData, colors, logo) {
    const businessName = extractBusinessName(formData.description);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #FFFFFF;
            overflow-x: hidden;
        }
        
        /* Header Elegant */
        .header {
            background: ${colors[0]};
            color: white;
            padding: 24px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 30px rgba(0,0,0,0.15);
            position: relative;
            z-index: 100;
        }
        .logo { 
            height: 55px; 
            object-fit: contain; 
            filter: brightness(0) invert(1);
            transition: transform 0.3s ease;
        }
        .logo:hover { transform: scale(1.05) rotate(-2deg); }
        .nav { display: flex; gap: 48px; }
        .nav a {
            color: white;
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            transition: opacity 0.3s;
            margin-right: 48px;
        }
        .nav a:last-child {
            margin-right: 0;
        }
        .nav a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: white;
            transition: width 0.3s ease;
        }
        .nav a:hover::after { width: 100%; }
        
        /* Hero Immersive */
        .hero {
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            color: white;
            padding: 140px 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%);
            top: -300px;
            left: -200px;
            animation: float 6s ease-in-out infinite;
        }
        .hero::after {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%);
            bottom: -200px;
            right: -100px;
            animation: float 8s ease-in-out infinite reverse;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 76px;
            margin-bottom: 24px;
            font-weight: 900;
            letter-spacing: -1px;
            position: relative;
            z-index: 1;
            animation: fadeInUp 1s ease-out;
        }
        .hero p {
            font-size: 26px;
            margin-bottom: 48px;
            opacity: 0.95;
            position: relative;
            z-index: 1;
            animation: fadeInUp 1s ease-out 0.2s both;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .reserve-btn {
            background: white;
            color: ${colors[0]};
            padding: 20px 56px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 35px rgba(0,0,0,0.25);
            transition: all 0.4s ease;
            position: relative;
            z-index: 1;
            animation: fadeInUp 1s ease-out 0.4s both;
        }
        .reserve-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 45px rgba(0,0,0,0.35);
        }
        
        /* Menu Premium */
        .menu {
            max-width: 1200px;
            margin: 100px auto;
            padding: 0 80px;
        }
        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            text-align: center;
            margin-bottom: 20px;
            color: #1F2937;
            font-weight: 900;
            letter-spacing: -1px;
        }
        .section-subtitle {
            text-align: center;
            color: #6B7280;
            font-size: 18px;
            margin-bottom: 70px;
        }
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
        }
        .menu-item {
            background: white;
            border-radius: 24px;
            padding: 36px;
            box-shadow: 0 4px 30px rgba(0,0,0,0.06);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            gap: 28px;
            cursor: pointer;
        }
        .menu-item:hover {
            transform: translateX(8px);
            box-shadow: 0 12px 50px rgba(0,0,0,0.12);
        }
        .menu-icon {
            font-size: 64px;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, ${colors[0]}20, ${colors[2]}20);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 20px ${colors[0]}15;
        }
        .menu-info h3 {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            color: #111827;
            margin-bottom: 10px;
            font-weight: 800;
        }
        .menu-desc {
            color: #6B7280;
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 16px;
        }
        .menu-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .menu-price {
            font-size: 24px;
            font-weight: 800;
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .menu-rating {
            color: #FCD34D;
            font-size: 14px;
        }
        .special-badge {
            display: inline-block;
            background: ${colors[2]};
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            margin-left: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        ${logo ? `<img src="${logo}" alt="Logo" class="logo">` : `<h2 style="font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 900;">${businessName}</h2>`}
        <div class="nav">
            <a href="#">Menú</a>
            <a href="#">Reservas</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
        </div>
    </div>
    
    <div class="hero">
        <h1>Sabor Auténtico</h1>
        <p>Una experiencia gastronómica inolvidable</p>
        <button class="reserve-btn">Reservar Mesa Ahora</button>
    </div>
    
    <div class="menu">
        <h2 class="section-title">Nuestro Menú</h2>
        <p class="section-subtitle">Platos preparados con pasión y los mejores ingredientes</p>
        <div class="menu-grid">
            <div class="menu-item">
                <div class="menu-icon">🍽️</div>
                <div style="flex: 1;">
                    <h3>Plato Especial del Chef <span class="special-badge">Especial</span></h3>
                    <p class="menu-desc">Exquisita selección preparada con ingredientes frescos siguiendo receta tradicional familiar</p>
                    <div class="menu-footer">
                        <div class="menu-price">$35.990</div>
                        <div class="menu-rating">★★★★★</div>
                    </div>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">🥘</div>
                <div style="flex: 1;">
                    <h3>Bandeja Tradicional</h3>
                    <p class="menu-desc">Lo mejor de nuestra cocina en un plato abundante con todos los sabores que amas</p>
                    <div class="menu-footer">
                        <div class="menu-price">$42.990</div>
                        <div class="menu-rating">★★★★★</div>
                    </div>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">🥗</div>
                <div style="flex: 1;">
                    <h3>Ensalada Gourmet <span class="special-badge">Vegano</span></h3>
                    <p class="menu-desc">Ingredientes orgánicos seleccionados con vinagreta especial de la casa</p>
                    <div class="menu-footer">
                        <div class="menu-price">$24.990</div>
                        <div class="menu-rating">★★★★☆</div>
                    </div>
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-icon">☕</div>
                <div style="flex: 1;">
                    <h3>Café Premium</h3>
                    <p class="menu-desc">Selección de origen con notas únicas y preparación artesanal por baristas expertos</p>
                    <div class="menu-footer">
                        <div class="menu-price">$8.990</div>
                        <div class="menu-rating">★★★★★</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

// ========== AGENCY TEMPLATE (PREMIUM) ==========
function generateAgencySketch(formData, colors, logo) {
    const businessName = extractBusinessName(formData.description);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #FFFFFF;
            color: #1F2937;
        }
        
        /* Header Modern */
        .header {
            padding: 24px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        .logo { height: 42px; object-fit: contain; }
        .nav { display: flex; gap: 48px; align-items: center; }
        .nav a {
            color: #374151;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            transition: color 0.3s;
            margin-right: 48px;
        }
        .nav a:last-child {
            margin-right: 0;
        }
        .nav a:hover { color: ${colors[0]}; }
        .contact-btn {
            background: ${colors[0]};
            color: white;
            padding: 12px 32px;
            border-radius: 10px;
            font-weight: 700;
            transition: all 0.3s ease;
        }
        .contact-btn:hover {
            background: ${colors[1]};
            transform: translateY(-2px);
            box-shadow: 0 8px 25px ${colors[0]}40;
        }
        
        /* Hero Bold */
        .hero {
            padding: 120px 80px;
            background: linear-gradient(135deg, ${colors[0]}06 0%, ${colors[1]}06 100%);
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, ${colors[2]}10, transparent 70%);
            top: -400px;
            right: -200px;
            animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.5; }
        }
        .hero-content {
            max-width: 900px;
            position: relative;
            z-index: 1;
        }
        .hero h1 {
            font-size: 82px;
            color: #111827;
            margin-bottom: 28px;
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -2px;
            animation: slideInLeft 0.8s ease-out;
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .hero p {
            font-size: 24px;
            color: #6B7280;
            margin-bottom: 48px;
            line-height: 1.6;
            animation: slideInLeft 0.8s ease-out 0.2s both;
        }
        .cta-group {
            display: flex;
            gap: 20px;
            animation: slideInLeft 0.8s ease-out 0.4s both;
        }
        .cta-primary {
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            color: white;
            padding: 20px 48px;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 30px ${colors[0]}40;
            transition: all 0.4s ease;
        }
        .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px ${colors[0]}60;
        }
        .cta-secondary {
            background: transparent;
            color: ${colors[0]};
            padding: 20px 48px;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 700;
            border: 2px solid ${colors[0]};
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .cta-secondary:hover {
            background: ${colors[0]};
            color: white;
            transform: translateY(-3px);
        }
        
        /* Services Premium */
        .services {
            max-width: 1300px;
            margin: 120px auto;
            padding: 0 80px;
        }
        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }
        .section-title {
            font-size: 56px;
            font-weight: 900;
            margin-bottom: 20px;
            color: #111827;
            letter-spacing: -1px;
        }
        .section-subtitle {
            font-size: 20px;
            color: #6B7280;
            max-width: 600px;
            margin: 0 auto;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }
        .service-card {
            padding: 48px;
            background: white;
            border: 2px solid #E5E7EB;
            border-radius: 24px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${colors[0]}03, ${colors[1]}03);
            opacity: 0;
            transition: opacity 0.4s;
        }
        .service-card:hover::before {
            opacity: 1;
        }
        .service-card:hover {
            border-color: ${colors[0]};
            transform: translateY(-8px);
            box-shadow: 0 20px 60px ${colors[0]}15;
        }
        .service-icon {
            font-size: 56px;
            margin-bottom: 28px;
            display: block;
            transition: transform 0.4s ease;
        }
        .service-card:hover .service-icon {
            transform: scale(1.1) rotate(5deg);
        }
        .service-title {
            font-size: 26px;
            font-weight: 800;
            color: #111827;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }
        .service-desc {
            color: #6B7280;
            line-height: 1.7;
            font-size: 16px;
            position: relative;
            z-index: 1;
        }
        .service-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${colors[0]};
            font-weight: 700;
            margin-top: 20px;
            font-size: 15px;
            position: relative;
            z-index: 1;
            transition: gap 0.3s ease;
        }
        .service-card:hover .service-link {
            gap: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        ${logo ? `<img src="${logo}" alt="Logo" class="logo">` : `<h2 style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 900;">${businessName}</h2>`}
        <div class="nav">
            <a href="#">Servicios</a>
            <a href="#">Portfolio</a>
            <a href="#">Equipo</a>
            <a href="#">Blog</a>
            <a href="#" class="contact-btn">Contactar</a>
        </div>
    </div>
    
    <div class="hero">
        <div class="hero-content">
            <h1>Transformamos Ideas en Realidad Digital</h1>
            <p>Soluciones creativas y estratégicas para hacer crecer tu negocio en el mundo digital con resultados medibles</p>
            <div class="cta-group">
                <button class="cta-primary">Ver Casos de Éxito →</button>
                <button class="cta-secondary">Agenda una Consulta</button>
            </div>
        </div>
    </div>
    
    <div class="services">
        <div class="section-header">
            <h2 class="section-title">Nuestros Servicios</h2>
            <p class="section-subtitle">Soluciones integrales para impulsar tu presencia digital</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <span class="service-icon">🎨</span>
                <h3 class="service-title">Diseño & Branding</h3>
                <p class="service-desc">Identidad visual única que conecta emocionalmente con tu audiencia y diferencia tu marca en el mercado</p>
                <div class="service-link">Ver más →</div>
            </div>
            <div class="service-card">
                <span class="service-icon">💻</span>
                <h3 class="service-title">Desarrollo Web</h3>
                <p class="service-desc">Sitios web profesionales, ultrarrápidos y optimizados para maximizar conversiones y experiencia de usuario</p>
                <div class="service-link">Ver más →</div>
            </div>
            <div class="service-card">
                <span class="service-icon">📈</span>
                <h3 class="service-title">Marketing Digital</h3>
                <p class="service-desc">Estrategias data-driven para maximizar tu ROI y acelerar el crecimiento sostenible de tu negocio</p>
                <div class="service-link">Ver más →</div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

// ========== PORTFOLIO TEMPLATE (PREMIUM) ==========
function generatePortfolioSketch(formData, colors, logo) {
    const businessName = extractBusinessName(formData.description);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #0A0A0A;
            color: white;
        }
        
        .header {
            padding: 32px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(10,10,10,0.95);
            backdrop-filter: blur(20px);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .logo { 
            height: 38px; 
            object-fit: contain; 
            filter: brightness(0) invert(1);
        }
        .nav { display: flex; gap: 48px; }
        .nav a {
            color: rgba(255,255,255,0.85);
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            transition: all 0.3s;
            margin-right: 48px;
        }
        .nav a:last-child {
            margin-right: 0;
        }
        .nav a:hover {
            color: ${colors[0]};
        }
        
        .hero {
            padding: 160px 80px;
            text-align: center;
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect fill="rgba(255,255,255,0.02)" x="0" y="0" width="50" height="50"/></svg>');
            background-size: 50px 50px;
            opacity: 0.5;
        }
        .hero h1 {
            font-size: 108px;
            font-weight: 900;
            margin-bottom: 24px;
            letter-spacing: -3px;
            position: relative;
            z-index: 1;
        }
        .hero p {
            font-size: 28px;
            opacity: 0.95;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
            z-index: 1;
        }
        
        .gallery {
            padding: 100px 60px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
        }
        .gallery-item {
            aspect-ratio: 1;
            background: linear-gradient(135deg, ${colors[0]}50, ${colors[1]}50);
            border-radius: 12px;
            display: flex;
            align-items: center;
      justify-content: center;
            font-size: 72px;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        .gallery-item::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${colors[2]}30, transparent);
            opacity: 0;
            transition: opacity 0.5s;
        }
        .gallery-item:hover::before {
            opacity: 1;
        }
        .gallery-item:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .gallery-item:nth-child(1) { grid-column: span 2; grid-row: span 1; }
        .gallery-item:nth-child(4) { grid-column: span 2; }
        .gallery-item:nth-child(2) {
            background: linear-gradient(135deg, ${colors[1]}50, ${colors[2]}50);
        }
        .gallery-item:nth-child(3) {
            background: linear-gradient(135deg, ${colors[2]}50, ${colors[0]}50);
        }
    </style>
</head>
<body>
    <div class="header">
        ${logo ? `<img src="${logo}" alt="Logo" class="logo">` : `<h2 style="font-size: 22px; font-weight: 800; letter-spacing: 2px;">${businessName.toUpperCase()}</h2>`}
        <div class="nav">
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>
    
    <div class="hero">
        <h1>${businessName}</h1>
        <p>Creative Portfolio</p>
    </div>
    
    <div class="gallery">
        <div class="gallery-item">📷</div>
        <div class="gallery-item">🎨</div>
        <div class="gallery-item">✨</div>
        <div class="gallery-item">🖼️</div>
        <div class="gallery-item">🎭</div>
    </div>
</body>
</html>
    `;
}

// ========== GENERIC TEMPLATE (PREMIUM) ==========
function generateGenericSketch(formData, colors, logo) {
    const businessName = extractBusinessName(formData.description);

    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #FFFFFF;
        }
        
        .header {
            background: white;
            padding: 22px 80px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.04);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        .logo { height: 44px; object-fit: contain; }
        .nav { display: flex; gap: 40px; }
        .nav a {
            color: #374151;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            transition: color 0.3s;
            margin-right: 40px;
        }
        .nav a:last-child {
            margin-right: 0;
        }
        .nav a:hover { color: ${colors[0]}; }
        
        .hero {
            background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
            color: white;
            padding: 140px 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%);
            top: -300px;
            right: -200px;
        }
        .hero h1 {
            font-size: 72px;
            margin-bottom: 28px;
            font-weight: 900;
            letter-spacing: -1px;
            position: relative;
            z-index: 1;
        }
        .hero p {
            font-size: 24px;
            margin-bottom: 48px;
            opacity: 0.95;
            position: relative;
            z-index: 1;
        }
        .cta-btn {
            background: white;
            color: ${colors[0]};
            padding: 20px 56px;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 800;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            transition: all 0.4s ease;
            position: relative;
            z-index: 1;
        }
        .cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        
        .features {
            max-width: 1300px;
            margin: 120px auto;
            padding: 0 80px;
        }
        .section-title {
            font-size: 52px;
            font-weight: 900;
            text-align: center;
            margin-bottom: 80px;
            color: #111827;
            letter-spacing: -1px;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 52px;
        }
        .feature-card {
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: all 0.4s ease;
        }
        .feature-card:hover {
            background: #F9FAFB;
            transform: translateY(-8px);
        }
        .feature-icon {
            font-size: 72px;
            margin-bottom: 28px;
            display: inline-block;
            transition: transform 0.4s ease;
        }
        .feature-card:hover .feature-icon {
            transform: scale(1.15) rotate(5deg);
        }
        .feature-title {
            font-size: 26px;
            font-weight: 800;
            color: #111827;
            margin-bottom: 16px;
        }
        .feature-desc {
            color: #6B7280;
            line-height: 1.7;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="header">
        ${logo ? `<img src="${logo}" alt="Logo" class="logo">` : `<h2 style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 26px; font-weight: 900;">${businessName}</h2>`}
        <div class="nav">
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
        </div>
    </div>
    
    <div class="hero">
        <h1>Bienvenido a ${businessName}</h1>
        <p>Soluciones profesionales de alta calidad para tu negocio</p>
        <button class="cta-btn">Comienza Ahora →</button>
    </div>
    
    <div class="features">
        <h2 class="section-title">¿Por Qué Elegirnos?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon" style="color: ${colors[0]}">💼</div>
                <h3 class="feature-title">Profesionalismo</h3>
                <p class="feature-desc">Servicios de alta calidad con atención personalizada y dedicación excepcional</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon" style="color: ${colors[1]}">⚡</div>
                <h3 class="feature-title">Eficiencia</h3>
                <p class="feature-desc">Resultados rápidos y efectivos sin comprometer la excelencia en cada entrega</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon" style="color: ${colors[2]}">🎯</div>
                <h3 class="feature-title">Precisión</h3>
                <p class="feature-desc">Soluciones exactamente adaptadas a tus necesidades y objetivos específicos</p>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

// ========== UTILITY FUNCTIONS ==========
function extractBusinessName(description) {
    // Extract first few words as business name
    const words = description.split(' ').filter(w => w.length > 2);
    if (words.length > 0) {
        // Capitalize first letter of each word
        return words.slice(0, 3).map(w =>
            w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        ).join(' ');
    }
    return 'Mi Negocio';
}
