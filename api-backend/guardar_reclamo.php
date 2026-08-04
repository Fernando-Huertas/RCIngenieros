<?php
// Permitir peticiones desde cualquier origen (CORS) para desarrollo local con Vite
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Si es una petición OPTIONS (Preflight de CORS), terminamos aquí exitosamente
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 1. Configuración de la Base de Datos
$host = "localhost";
$user = "root";
$pass = "";
$db = "rc_ingenieros_bd";

// Conexión
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Error de conexión a la base de datos: " . $conn->connect_error]);
    exit();
}
$conn->set_charset("utf8mb4");

// 2. Obtener datos del frontend (JSON)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "No se recibieron datos válidos"]);
    exit();
}

// Extraer variables
$es_menor = isset($data['esMenor']) && $data['esMenor'] ? 1 : 0;
$nombre = $conn->real_escape_string($data['nombre'] ?? '');
$tipoDocumento = $conn->real_escape_string($data['tipoDocumento'] ?? '');
$numeroDocumento = $conn->real_escape_string($data['numeroDocumento'] ?? '');
$domicilio = $conn->real_escape_string($data['domicilio'] ?? '');
$telefono = $conn->real_escape_string($data['telefono'] ?? '');
$email = $conn->real_escape_string($data['email'] ?? '');

$nombreApoderado = $conn->real_escape_string($data['nombreApoderado'] ?? '');
$documentoApoderado = $conn->real_escape_string($data['documentoApoderado'] ?? '');

$tipoBien = $conn->real_escape_string($data['tipoBien'] ?? '');
$montoReclamado = floatval($data['montoReclamado'] ?? 0);
$descripcionBien = $conn->real_escape_string($data['descripcionBien'] ?? '');

$tipoReclamacion = $conn->real_escape_string($data['tipoReclamacion'] ?? '');
$detalleReclamacion = $conn->real_escape_string($data['detalleReclamacion'] ?? '');
$pedidoConsumidor = $conn->real_escape_string($data['pedidoConsumidor'] ?? '');

$aceptaTerminos = 1; // Si llega aquí, es porque aceptó

// 3. Insertar registro inicial con correlativo temporal
$sql = "INSERT INTO registro_reclamos (
            correlativo, es_menor, nombre, tipo_documento, numero_documento, 
            domicilio, telefono, email, nombre_apoderado, documento_apoderado, 
            tipo_bien, monto_reclamado, descripcion_bien, tipo_reclamacion, 
            detalle_reclamacion, pedido_consumidor, acepta_terminos
        ) VALUES (
            'TEMP', $es_menor, '$nombre', '$tipoDocumento', '$numeroDocumento', 
            '$domicilio', '$telefono', '$email', '$nombreApoderado', '$documentoApoderado', 
            '$tipoBien', $montoReclamado, '$descripcionBien', '$tipoReclamacion', 
            '$detalleReclamacion', '$pedidoConsumidor', $aceptaTerminos
        )";

if ($conn->query($sql) === TRUE) {
    // 4. Generar el Correlativo Oficial
    $id_insertado = $conn->insert_id;
    $anio_actual = date("Y");

    // Formatear el ID con 6 ceros (ej. 000001)
    $numero_formateado = str_pad($id_insertado, 6, "0", STR_PAD_LEFT);
    $correlativo_oficial = $numero_formateado . "-" . $anio_actual;

    // Actualizar la tabla con el correlativo final
    $sql_update = "UPDATE registro_reclamos SET correlativo = '$correlativo_oficial' WHERE id = $id_insertado";
    $conn->query($sql_update);

    // 5. Enviar el Correo de Notificación con PHPMailer
    $destinatario = "huertassupafernando@gmail.com";
    $asunto = "Nuevo " . strtoupper($tipoReclamacion) . " - " . $correlativo_oficial;

    $mensaje = "Se ha registrado un nuevo formulario en el Libro de Reclamaciones Virtual:\n\n";
    $mensaje .= "N° Correlativo: " . $correlativo_oficial . "\n";
    $mensaje .= "Tipo: " . $tipoReclamacion . "\n";
    $mensaje .= "Cliente: " . $nombre . "\n";
    $mensaje .= "Documento: " . $tipoDocumento . " " . $numeroDocumento . "\n";
    $mensaje .= "Teléfono: " . $telefono . "\n";
    $mensaje .= "Correo: " . $email . "\n";
    $mensaje .= "Monto Reclamado: S/. " . $montoReclamado . "\n\n";
    $mensaje .= "Detalle del Reclamo/Queja:\n" . $detalleReclamacion . "\n\n";
    $mensaje .= "Pedido del Consumidor:\n" . $pedidoConsumidor . "\n";

    // Cargar clases de PHPMailer
    require __DIR__ . '/PHPMailer-master/src/Exception.php';
    require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer-master/src/SMTP.php';

    // ==========================================
    // CONFIGURACIÓN SMTP (GMAIL)
    // ==========================================
    $smtp_user = 'huertassupafernando@gmail.com';
    $smtp_pass = 'yemf wcil bvom ymsk';
    // ==========================================

    // --- CORREO 1: Al Administrador (destinatario principal) ---
    $mail1 = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail1->isSMTP();
        $mail1->Host = 'smtp.gmail.com';
        $mail1->SMTPAuth = true;
        $mail1->Username = $smtp_user;
        $mail1->Password = $smtp_pass;
        $mail1->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail1->Port = 465;

        $mail1->setFrom($smtp_user, 'Libro de Reclamaciones RC');
        $mail1->addAddress($destinatario);
        $mail1->addReplyTo($email, $nombre);

        $mail1->CharSet = 'UTF-8';
        $mail1->isHTML(false);
        $mail1->Subject = $asunto;
        $mail1->Body = $mensaje;

        $mail1->send();
    } catch (Exception $e) {
        error_log("Error al enviar correo al administrador: {$mail1->ErrorInfo}");
    }

    // --- CORREO 2: Copia al Cliente ---
    $mail2 = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail2->isSMTP();
        $mail2->Host = 'smtp.gmail.com';
        $mail2->SMTPAuth = true;
        $mail2->Username = $smtp_user;
        $mail2->Password = $smtp_pass;
        $mail2->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail2->Port = 465;

        $mail2->setFrom($smtp_user, 'Libro de Reclamaciones RC');
        $mail2->addAddress($email);

        $mail2->CharSet = 'UTF-8';
        $mail2->isHTML(false);
        $mail2->Subject = "Copia de su " . $tipoReclamacion . " - " . $correlativo_oficial . " - RC Ingenieros";
        $mail2->Body = $mensaje;

        $mail2->send();
    } catch (Exception $e) {
        error_log("Error al enviar copia al cliente: {$mail2->ErrorInfo}");
    }

    // 6. Respuesta Exitosa a React
    echo json_encode([
        "success" => true,
        "correlativo" => $correlativo_oficial,
        "mensaje" => "Reclamo registrado exitosamente"
    ]);

} else {
    http_response_code(500);
    echo json_encode(["error" => "Error al guardar el reclamo: " . $conn->error]);
}

$conn->close();
?>