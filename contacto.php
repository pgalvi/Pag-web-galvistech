<?php
/**
 * Script de Procesamiento de Contacto - Galvis Tech Solutions
 * Integración con Formspree (Bridge PHP)
 * Garantiza entrega del 100% sin depender de SMTP del hosting.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

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

// 2. Configuración de Formspree
$formspree_url = "https://formspree.io/f/mwvrvgnw";

// 3. Preparar los datos para Formspree
$payload = [
    'Nombre' => strip_tags($data['nombre_completo']),
    'Email' => filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL),
    'Proyecto' => strip_tags($data['tipo_proyecto'] ?? 'No especificado'),
    'Presupuesto' => strip_tags($data['presupuesto_estimado'] ?? 'No especificado'),
    'Mensaje' => strip_tags($data['mensaje']),
    '_subject' => "🚀 Nuevo Prospecto: " . strip_tags($data['nombre_completo']),
    '_replyto' => filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL)
];

// 4. Enviar a Formspree usando cURL (Transmisión segura de servidor a servidor)
$ch = curl_init($formspree_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 5. Respuesta al Frontend
if ($http_code >= 200 && $http_code < 300) {
    http_response_code(200);
    echo json_encode(["status" => 200, "message" => "¡Mensaje enviado con éxito via Formspree!"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error en la entrega profesional", "debug" => $response]);
}
?>
