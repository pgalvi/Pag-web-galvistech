<?php
/**
 * Script de Procesamiento de Contacto - Versión ROBUSTA
 * Optimizada para Hostinger y Filtros Anti-SPAM
 */

// 1. Cabeceras CORS y Seguridad
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Captura de Datos
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (empty($data['nombre_completo']) || empty($data['email_corporativo'])) {
    http_response_code(400);
    echo json_encode(["status" => 400, "message" => "Datos incompletos"]);
    exit;
}

// 3. Configuración del Email
$to = "contacto@galvistech.com";
$subject = "🚀 NUEVO PROSPECTO: " . strip_tags($data['nombre_completo']);

// Datos Sanitizados
$nombre = strip_tags($data['nombre_completo']);
$email_cliente = filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL);
$proyecto = strip_tags($data['tipo_proyecto'] ?? 'No especificado');
$presupuesto = strip_tags($data['presupuesto_estimado'] ?? 'No especificado');
$mensaje_texto = nl2br(strip_tags($data['mensaje']));

// 4. Construcción del Mensaje HTML (Diseño Premium)
$message = "
<!DOCTYPE html>
<html>
<head>
    <style>
        .container { font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eeeeee; border-radius: 15px; overflow: hidden; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #007bff, #0056b3); padding: 30px; text-align: center; color: white; }
        .content { padding: 30px; color: #333333; line-height: 1.6; }
        .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 11px; color: #888888; }
        .data-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .data-table td { padding: 12px; border-bottom: 1px solid #f0f0f0; }
        .label { font-weight: bold; color: #007bff; width: 140px; }
        .quote-box { background: #fcfcfc; border-left: 5px solid #007bff; padding: 20px; border-radius: 5px; font-style: italic; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin:0; font-size: 24px;'>Nueva Solicitud Web</h1>
        </div>
        <div class='content'>
            <p>Se ha recibido una nueva consulta desde el sitio oficial <strong>Galvis Tech Solutions</strong>:</p>
            <table class='data-table'>
                <tr><td class='label'>Cliente:</td><td>{$nombre}</td></tr>
                <tr><td class='label'>Email:</td><td><a href='mailto:{$email_cliente}'>{$email_cliente}</a></td></tr>
                <tr><td class='label'>Proyecto:</td><td>{$proyecto}</td></tr>
                <tr><td class='label'>Presupuesto:</td><td><span style='background:#e7f3ff; color:#007bff; padding:4px 10px; border-radius:4px;'>{$presupuesto}</span></td></tr>
            </table>
            <div class='quote-box'>
                <strong>Mensaje del Cliente:</strong><br>
                {$mensaje_texto}
            </div>
        </div>
        <div class='footer'>
            Este es un correo técnico enviado automáticamente por Galvis Tech Solutions CRM.
        </div>
    </div>
</body>
</html>
";

// 5. Cabeceras CRÍTICAS (Evitan SPAM y aseguran entrega en Hostinger)
$from = "contacto@galvistech.com"; // DEBE ser el email real de tu dominio
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Galvis Tech CRM <" . $from . ">" . "\r\n";
$headers .= "Reply-To: " . $email_cliente . "\r\n";
$headers .= "Return-Path: " . $from . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 6. Envío con parámetro adicional -f (Importante en Hostinger/Linux)
$sent = mail($to, $subject, $message, $headers, "-f" . $from);

// Log de depuración (puedes borrar esto después)
$log_entry = date("[Y-m-d H:i:s]") . " Intento de envío a {$to}. Resultado: " . ($sent ? "ÉXITO" : "FALLO") . "\n";
file_put_contents("log_emails.txt", $log_entry, FILE_APPEND);

if ($sent) {
    http_response_code(200);
    echo json_encode(["status" => 200, "message" => "Mensaje procesado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error interno al enviar el correo"]);
}
?>
