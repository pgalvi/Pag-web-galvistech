const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/**
 * Servidor Backend para Galvis Tech Solutions
 * Configurado para Hostinger SMTP (Puerto 465 - SSL)
 */

app.post('/api/contacto', async (req, res) => {
    const { nombre_completo, email_corporativo, tipo_proyecto, presupuesto_estimado, mensaje } = req.body;

    // Validación de campos requeridos
    if (!nombre_completo || !email_corporativo || !mensaje) {
        return res.status(400).json({ 
            status: 400, 
            message: 'Error: Nombre, Email y Mensaje son obligatorios.' 
        });
    }

    try {
        // Configuración de transporte para Hostinger
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true, // true para puerto 465 (SSL)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Diseño del correo electrónico en HTML
        const htmlContent = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #007bff, #0056b3); padding: 30px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Contacto</h1>
                    <p style="color: rgba(255,255,255,0.8); margin-top: 10px;">Galvis Tech Solutions CRM</p>
                </div>
                
                <div style="padding: 30px; background: #ffffff;">
                    <h3 style="color: #007bff; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Detalles del Cliente</h3>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <tr>
                            <td style="padding: 10px 0; color: #666; width: 150px;"><strong>Nombre:</strong></td>
                            <td style="padding: 10px 0;">${nombre_completo}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Email Corporativo:</strong></td>
                            <td style="padding: 10px 0;"><a href="mailto:${email_corporativo}" style="color: #007bff; text-decoration: none;">${email_corporativo}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Tipo de Proyecto:</strong></td>
                            <td style="padding: 10px 0;">${tipo_proyecto || 'No especificado'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666;"><strong>Presupuesto:</strong></td>
                            <td style="padding: 10px 0;"><span style="background: #e7f3ff; color: #007bff; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${presupuesto_estimado || 'Por definir'}</span></td>
                        </tr>
                    </table>

                    <h3 style="color: #007bff; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 30px;">Mensaje</h3>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; line-height: 1.6; color: #444; border-left: 4px solid #007bff;">
                        ${mensaje.replace(/\n/g, '<br>')}
                    </div>
                </div>

                <div style="background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                    Este es un aviso automático enviado desde el sitio web oficial de Galvis Tech Solutions.
                </div>
            </div>
        `;

        // Opciones del envío
        const mailOptions = {
            from: `"Galvis Tech CRM" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Se auto-envía para notificación
            subject: `🚀 Prospecto: ${nombre_completo} - ${tipo_proyecto || 'Consulta'}`,
            html: htmlContent,
            replyTo: email_corporativo // Permite responder directamente al cliente
        };

        // Ejecutar envío
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            status: 200, 
            message: 'Mensaje enviado correctamente a Galvis Tech.' 
        });

    } catch (error) {
        console.error('Error SMTP Hostinger:', error);
        res.status(500).json({ 
            status: 500, 
            message: 'Error al procesar el mensaje.', 
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend de Galvis Tech activo en http://localhost:${PORT}`);
});
