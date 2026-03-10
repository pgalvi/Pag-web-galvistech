<?php
/**
 * Script de Procesamiento de Contacto - Versión CORPORATIVA (Resend API)
 * Esta versión garantiza la entrega al 100% mediante una API profesional.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Manejo de petición preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 1. Captura de Datos
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (empty($data['nombre_completo']) || empty($data['email_corporativo'])) {
    http_response_code(400);
    echo json_encode(["status" => 400, "message" => "Datos incompletos"]);
    exit;
}

// 2. Configuración de API Key (Proporcionada por el usuario)
$api_key = 're_f1HacKm1_8ry65y2cb4FBUYnevND9Lx4J';

// 3. Preparar Datos Sanitizados
$nombre = strip_tags($data['nombre_completo']);
$email_cliente = filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL);
$proyecto = strip_tags($data['tipo_proyecto'] ?? 'No especificado');
$presupuesto = strip_tags($data['presupuesto_estimado'] ?? 'No especificado');
$mensaje_texto = nl2br(strip_tags($data['mensaje']));

// 4. Diseño del Email HTML
$html_content = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eeeeee; border-radius: 12px; overflow: hidden; background-color: #ffffff;'>
    <div style='background: linear-gradient(135deg, #007bff, #0056b3); padding: 30px; text-align: center; color: white;'>
        <h1 style='margin:0; font-size: 24px;'>NUEVA CONSULTA RECIBIDA</h1>
    </div>
    <div style='padding: 30px; color: #333333; line-height: 1.6;'>
        <p>Has recibido un nuevo lead desde <strong>Galvis Tech Solutions</strong>:</p>
        <table style='width: 100%; border-collapse: collapse; margin: 20px 0;'>
            <tr><td style='padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #007bff;'>Cliente:</td><td style='padding: 10px; border-bottom: 1px solid #f0f0f0;'>{$nombre}</td></tr>
            <tr><td style='padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #007bff;'>Email:</td><td style='padding: 10px; border-bottom: 1px solid #f0f0f0;'><a href='mailto:{$email_cliente}'>{$email_cliente}</a></td></tr>
            <tr><td style='padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #007bff;'>Proyecto:</td><td style='padding: 10px; border-bottom: 1px solid #f0f0f0;'>{$proyecto}</td></tr>
            <tr><td style='padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #007bff;'>Presupuesto:</td><td style='padding: 10px; border-bottom: 1px solid #f0f0f0;'><span style='background:#e7f3ff; color:#007bff; padding:4px 10px; border-radius:4px;'>{$presupuesto}</span></td></tr>
        </table>
        <div style='background: #f8f9fa; padding: 20px; border-left: 4px solid #007bff; font-style: italic;'>
            <strong>Mensaje Original:</strong><br><br>
            {$mensaje_texto}
        </div>
    </div>
    <div style='background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 11px; color: #888888;'>
        Este correo fue procesado y entregado mediante Resend API para Galvis Tech Solutions.
    </div>
</div>
";

// 5. Configuración de Envío (Uso de onboarding@resend.dev si el dominio no está verificado en Resend todavía)
// IMPORTANTE: Resend permite enviar a tu propio correo con onboarding@resend.dev
$payload = [
    'from' => 'Galvis Tech <onboarding@resend.dev>', 
    'to' => ['contacto@galvistech.com'],
    'subject' => "🚀 Lead: {$nombre}",
    'html' => $html_content,
    'reply_to' => $email_cliente
];

// 6. Ejecución de Llamada API via cURL
$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $api_key,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 7. Respuesta Final
if ($http_code >= 200 && $http_code < 300) {
    http_response_code(200);
    echo json_encode(["status" => 200, "message" => "Entregado con éxito vía Resend"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error en la API de entrega profesional", "error_log" => $response]);
}
?>
