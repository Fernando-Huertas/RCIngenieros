<?php
require __DIR__ . '/api-backend/PHPMailer-master/src/Exception.php';
require __DIR__ . '/api-backend/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/api-backend/PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer(true);
try {
    $mail->SMTPDebug = 2; // Enable verbose debug output
    $mail->isSMTP();
    $mail->Host = 'mail.rcingenieros.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ventas01@rcingenieros.com';
    $mail->Password = 'ventas01RC';
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->setFrom('ventas01@rcingenieros.com', 'Test Ventas WEBRCINGENIEROS');
    $mail->addAddress('ventas01@rcingenieros.com');
    $mail->Subject = 'Test SMTP - RC Ingenieros';
    $mail->Body = 'Test';
    $mail->send();
    echo "Message has been sent\n";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}\n";
}
