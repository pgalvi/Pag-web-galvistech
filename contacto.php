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

// Determinar el origen (Contact Form o AI Generator)
$is_ai_generator = isset($data['fuente']) && $data['fuente'] === 'Generador de IA - Galvis Tech';

if ($is_ai_generator) {
    if (empty($data['email'])) {
        http_response_code(400);
        echo json_encode(["status" => 400, "message" => "Falta el email del cliente."]);
        exit;
    }
} else {
    if (empty($data['nombre_completo']) || empty($data['email_corporativo'])) {
        http_response_code(400);
        echo json_encode(["status" => 400, "message" => "Datos incompletos"]);
        exit;
    }
}

// 2. Configuración de Formspree
$formspree_url = "https://formspree.io/f/mwvrvgnw";

// 3. Preparar los datos para Formspree de forma inteligente
if ($is_ai_generator) {
    $payload = [
        'Email' => filter_var($data['email'], FILTER_SANITIZE_EMAIL),
        'Descripción del Negocio' => strip_tags($data['descripcion_negocio']),
        'Paleta de Colores' => strip_tags($data['colores']),
        'Tiene Logo' => strip_tags($data['tiene_logo']),
        'Formulario' => 'Generador de IA / Visualización',
        '_subject' => "✨ Nuevo Concepto de IA solicitado por: " . $data['email']
    ];
} else {
    $payload = [
        'Nombre' => strip_tags($data['nombre_completo']),
        'Email' => filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL),
        'Proyecto' => strip_tags($data['tipo_proyecto'] ?? 'No especificado'),
        'Presupuesto' => strip_tags($data['presupuesto_estimado'] ?? 'No especificado'),
        'Mensaje' => strip_tags($data['mensaje']),
        '_subject' => "🚀 Nuevo Lead de Contacto: " . strip_tags($data['nombre_completo']),
        '_replyto' => filter_var($data['email_corporativo'], FILTER_SANITIZE_EMAIL)
    ];
}

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
    echo json_encode(["status" => 200, "message" => "¡Mensaje enviado con éxito!"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error en la entrega", "debug" => $response]);
}
?>
