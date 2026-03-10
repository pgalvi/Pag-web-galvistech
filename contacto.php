<?php
/**
 * Script de Procesamiento de Contacto - Galvis Tech Solutions
 * Opción de Emergencia: Conexión Directa con Formspree (Sin necesidad de servidor SMTP)
 * Esto garantiza la entrega al 100% independientemente del Hosting.
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

// 2. Configuración de Formspree (Tu ID de Formspree ya lo tenemos de main.js)
$formspree_url = "https://formspree.io/f/mwvrvgnw";

// 3. Preparar los datos para Formspree
$payload = [
    'Nombre' => $data['nombre_completo'],
    'Email' => $data['email_corporativo'],
    'Proyecto' => $data['tipo_proyecto'] ?? 'No especificado',
    'Presupuesto' => $data['presupuesto_estimado'] ?? 'No especificado',
    'Mensaje' => $data['mensaje'],
    '_subject' => "🚀 Nuevo Prospecto: " . $data['nombre_completo']
];

// 4. Enviar a Formspree usando cURL (Método profesional de servidor a servidor)
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
    // Si falla Formspree (raro), intentamos el mail nativo como respaldo final
    $to = "contacto@galvistech.com";
    $subject = "RESPALDO: " . $data['nombre_completo'];
    $body = "Nombre: {$data['nombre_completo']}\nEmail: {$data['email_corporativo']}\nMsg: {$data['mensaje']}";
    mail($to, $subject, $body, "From: contacto@galvistech.com");
    
    http_response_code(500);
    echo json_encode(["status" => 500, "message" => "Error en el puente de envío", "debug" => $response]);
}
?>
