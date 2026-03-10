<?php
/**
 * Script de Procesamiento de Contacto para Galvis Tech Solutions
 * Optimizado para Hosting Compartido (Hostinger)
 */

// 1. Configuración de seguridad y CORS (Permitir peticiones del frontend)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Manejo de petición preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Solo permitir peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => 405, "message" => "Método no permitido"]);
    exit;
}

// 3. Obtener y decodificar el cuerpo de la petición (JSON)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// 4. Validar campos obligatorios
if (empty($data['nombre_completo']) || empty($data['email_corporativo']) || empty($data['mensaje'])) {
    http_response_code(400);
    echo json_encode(["status" => 400, "message" => "Faltan campos obligatorios."]);
    exit;
}

// 5. Configuración del Email
$to = "contacto@galvistech.com"; // Tu correo de destino
$subject = "🚀 Nuevo Lead: " . $data['nombre_completo'];

// Extraer datos
$nombre = strip_tags($data['nombre_completo']);
$email = filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL);
$proyecto = strip_tags($data['tipo_proyecto'] ?? 'No especificado');
$presupuesto = strip_tags($data['presupuesto_estimado'] ?? 'No especificado');
$mensaje = nl2br(strip_tags($data['mensaje']));

// 6. Diseño del Mensaje HTML
$message = "
<div style='font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 25px; border-radius: 12px;'>
    <h2 style='color: #007bff; text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;'>Nueva Solicitud de Proyecto</h2>
    <p><strong>Nombre:</strong> {$nombre}</p>
    <p><strong>Email:</strong> <a href='mailto:{$email}'>{$email}</a></p>
    <p><strong>Tipo de Proyecto:</strong> {$proyecto}</p>
    <p><strong>Presupuesto Estimado:</strong> <span style='background: #e7f3ff; color: #007bff; padding: 3px 8px; border-radius: 4px;'>{$presupuesto}</span></p>
    <div style='background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin-top: 20px;'>
        <strong>Mensaje del cliente:</strong><br><br>
        {$mensaje}
    </div>
    <hr style='border: 0; border-top: 1px solid #eee; margin-top: 30px;'>
    <p style='font-size: 11px; color: #999; text-align: center;'>Este correo fue generado desde el formulario de Galvis Tech Solutions.</p>
</div>
";

// 7. Cabeceras del Email (Importante para que no llegue a SPAM en Hostinger)
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Galvis Tech CRM <contacto@galvistech.com>" . "\r\n"; // El remitente DEBE ser de tu dominio
$headers .= "Reply-To: {$email}" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 8. Envío del Correo
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => 200, "message" => "Correo enviado con éxito"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error al enviar el correo"]);
}
?>
