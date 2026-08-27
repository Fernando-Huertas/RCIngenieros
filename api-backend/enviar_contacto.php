<?php
// Permitir peticiones desde cualquier origen (CORS) para desarrollo local
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Si es una petición OPTIONS (Preflight de CORS), terminamos aquí exitosamente
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Obtener datos del frontend (JSON)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "No se recibieron datos válidos"]);
    exit();
}

// Capturar variables
$nombre = htmlspecialchars(strip_tags($data['nombre']));
$email_cliente = htmlspecialchars(strip_tags($data['email']));
$telefono = htmlspecialchars(strip_tags($data['telefono']));
$asunto_cliente = htmlspecialchars(strip_tags($data['asunto']));
$mensaje_cliente = htmlspecialchars(strip_tags($data['mensaje']));

// Cargar clases de PHPMailer
require __DIR__ . '/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';

// ==========================================
// ==========================================
// CONFIGURACIÓN SMTP (PRODUCCIÓN)
// ==========================================
$smtp_user = 'ventas01@rcingenieros.com';
$smtp_pass = 'ventas01RC';
$destinatario = 'ventas01@rcingenieros.com';
// ==========================================

$mail = new PHPMailer\PHPMailer\PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.rcingenieros.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_user;
    $mail->Password = $smtp_pass;
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // Evitar error de certificado en local
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Remitente y Destinatario
    $mail->setFrom($smtp_user, 'Web RC Ingenieros (Contacto)');
    $mail->addAddress($destinatario);
    $mail->addReplyTo($email_cliente, $nombre);

    // Contenido
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = "Nuevo Mensaje de Contacto: " . $asunto_cliente;

    // Cuerpo del correo
    $body = "
    <h2>Nuevo Mensaje desde el Formulario de Contacto Web</h2>
    <p><strong>Nombre:</strong> {$nombre}</p>
    <p><strong>Correo Electrónico:</strong> {$email_cliente}</p>
    <p><strong>Teléfono:</strong> {$telefono}</p>
    <p><strong>Asunto:</strong> {$asunto_cliente}</p>
    <br/>
    <h3>Mensaje:</h3>
    <p>" . nl2br($mensaje_cliente) . "</p>
    <br/>
    <hr/>
    <p><em>Este correo fue generado automáticamente desde el sitio web de RC Ingenieros.</em></p>
    ";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace("<br/>", "\n", $body));

    $mail->send();

    // Enviar correo de copia al cliente (Opcional, pero da buena imagen)
    $mail2 = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail2->isSMTP();
        $mail2->Host = 'mail.rcingenieros.com';
        $mail2->SMTPAuth = true;
        $mail2->Username = $smtp_user;
        $mail2->Password = $smtp_pass;
        $mail2->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail2->Port = 587;
        
        $mail2->SMTPOptions = array(
            'ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)
        );

        $mail2->setFrom($smtp_user, 'RC Ingenieros');
        $mail2->addAddress($email_cliente);
        $mail2->CharSet = 'UTF-8';
        $mail2->isHTML(true);
        $mail2->Subject = "Hemos recibido tu mensaje - RC Ingenieros";
        $mail2->Body = "Hola {$nombre},<br><br>Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y se pondrá en contacto contigo a la brevedad.<br><br>Saludos cordiales,<br>El equipo de RC Ingenieros";
        
        $mail2->send();
    } catch (Exception $e) {
        // Ignorar fallo de copia
    }

    echo json_encode([
        "success" => true,
        "mensaje" => "Correo enviado exitosamente"
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error al enviar el correo",
        "detalle" => $mail->ErrorInfo
    ]);
}
?>
