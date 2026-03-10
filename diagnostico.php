<?php
$para = "contacto@galvistech.com";
$titulo = "Prueba Tecnica de Servidor - Galvis Tech";
$mensaje = "Si recibes este correo, el servidor PHP de Hostinger esta funcionando correctamente.";
$cabeceras = "From: noreply@galvistech.com\r\n" .
             "Reply-To: contacto@galvistech.com\r\n" .
             "Content-Type: text/plain; charset=UTF-8\r\n" .
             "X-Mailer: PHP/" . phpversion();

if(mail($para, $titulo, $mensaje, $cabeceras)) {
    echo "<h1>✓ El servidor completo el envio satisfactoriamente.</h1><p>Por favor revisa tu bandeja de entrada y la carpeta de SPAM en <b>contacto@galvistech.com</b>.</p>";
} else {
    echo "<h1>✗ Error tecnico de servidor.</h1><p>Hostinger no permitio el envio. Es posible que debas habilitar los correos desde el hPanel.</p>";
}
?>
