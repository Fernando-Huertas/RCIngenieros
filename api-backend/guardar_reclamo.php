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
    // Destinatario original de producción
    $destinatario = "administracion@rcingenieros.com";
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

    // ==========================================
    // GENERAR PDF DEL RECLAMO CON FPDF (FORMATO OFICIAL)
    // ==========================================
    require __DIR__ . '/fpdf.php';

    $pdf = new FPDF('P', 'mm', 'A4');
    $pdf->AddPage();
    $pdf->SetAutoPageBreak(true, 10);

    // Configuración de colores
    $pdf->SetDrawColor(0, 0, 0); // Borde negro
    $pdf->SetFillColor(200, 200, 200); // Gris claro para los títulos

    // Título Principal (2 columnas)
    $pdf->SetFont('Arial', 'B', 12);
    // Columna 1: LIBRO DE RECLAMACIONES (ancho 140)
    $pdf->Cell(140, 10, utf8_decode('LIBRO DE RECLAMACIONES'), 1, 0, 'C', true);
    // Columna 2: HOJA DE RECLAMACIÓN (ancho 50)
    $pdf->Cell(50, 10, utf8_decode('HOJA DE RECLAMACIÓN'), 1, 1, 'C', false);

    // Fila FECHA y N°
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(20, 10, utf8_decode('FECHA:'), 1, 0, 'L', true);
    $fecha_actual = date('d/m/Y');
    $pdf->SetFont('Arial', '', 10);
    $pdf->Cell(120, 10, $fecha_actual, 1, 0, 'C');

    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(15, 10, utf8_decode('N°'), 'LTB', 0, 'C');
    $pdf->SetFont('Arial', '', 10);
    $pdf->Cell(35, 10, $correlativo_oficial, 'RTB', 1, 'C');

    // PROVEEDOR
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 6, utf8_decode('PROVEEDOR:'), 'L', 0);
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(160, 6, utf8_decode('Ricardo Calderon Ingenieros SAC'), 'R', 1);

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 6, utf8_decode('RUC:'), 'L', 0);
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(160, 6, utf8_decode('20519069262'), 'R', 1);

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 6, utf8_decode('DOMICILIO:'), 'LB', 0);
    $pdf->SetFont('Arial', '', 7); // Letra más pequeña para que quepa toda la dirección larga
    $pdf->Cell(160, 6, utf8_decode('Av. Augusto B Leguia Nro. 307 Coo. Policial (Acont de Av. Peru -Antes de Zarumilla)'), 'RB', 1);

    // 1. IDENTIFICACIÓN DEL CONSUMIDOR
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(190, 8, utf8_decode('1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE'), 1, 1, 'L', true);

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('NOMBRE:'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(160, 8, utf8_decode($nombre), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('DNI / CE:'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(160, 8, utf8_decode($numeroDocumento), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('DOMICILIO:'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(160, 8, utf8_decode($domicilio), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('TELÉFONO:'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(65, 8, utf8_decode($telefono), 1, 0, 'L');
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(20, 8, utf8_decode('E-MAIL:'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(75, 8, utf8_decode($email), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(190, 8, utf8_decode('SI ES MENOR DE EDAD, NOMBRE DEL PADRE, MADRE O APODERADO:'), 1, 1, 'L');
    $pdf->SetFont('Arial', '', 9);
    $apoderado_str = $es_menor ? $nombreApoderado . ' - ' . $documentoApoderado : '';
    $pdf->Cell(190, 8, utf8_decode($apoderado_str), 1, 1, 'L');

    // 2. IDENTIFICACIÓN DEL BIEN CONTRATADO
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(190, 8, utf8_decode('2. IDENTIFICACIÓN DEL BIEN CONTRATADO'), 1, 1, 'L', true);

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('PRODUCTO'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 12);
    $chk_producto = ($tipoBien === 'Producto') ? 'X' : '';
    $pdf->Cell(15, 8, $chk_producto, 1, 0, 'C'); // Casilla

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(45, 8, utf8_decode('MONTO RECLAMADO:'), 1, 0, 'R');
    $pdf->SetFont('Arial', '', 9);
    $pdf->Cell(100, 8, 'S/. ' . number_format($montoReclamado, 2), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(30, 8, utf8_decode('SERVICIO'), 1, 0, 'L');
    $pdf->SetFont('Arial', '', 12);
    $chk_servicio = ($tipoBien === 'Servicio') ? 'X' : '';
    $pdf->Cell(15, 8, $chk_servicio, 1, 0, 'C'); // Casilla

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(45, 8, utf8_decode('DESCRIPCIÓN:'), 1, 0, 'R');
    $pdf->SetFont('Arial', '', 8);
    $pdf->Cell(100, 8, utf8_decode(substr($descripcionBien, 0, 85)), 1, 1, 'L');

    // 3. DETALLE DE LA RECLAMACIÓN
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(120, 8, utf8_decode('3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR'), 1, 0, 'L', true);

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(20, 8, utf8_decode('RECLAMO¹'), 1, 0, 'C');
    $pdf->SetFont('Arial', '', 12);
    $chk_reclamo = ($tipoReclamacion === 'Reclamo') ? 'X' : '';
    $pdf->Cell(15, 8, $chk_reclamo, 1, 0, 'C'); // Casilla

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(20, 8, utf8_decode('QUEJA²'), 1, 0, 'C');
    $pdf->SetFont('Arial', '', 12);
    $chk_queja = ($tipoReclamacion === 'Queja') ? 'X' : '';
    $pdf->Cell(15, 8, $chk_queja, 1, 1, 'C'); // Casilla

    // DETALLE
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(190, 6, utf8_decode('DETALLE:'), 'LTR', 1, 'L');
    $pdf->SetFont('Arial', '', 9);

    $y = $pdf->GetY();
    $pdf->MultiCell(190, 5, utf8_decode($detalleReclamacion), 'LR', 'L');
    $h_detalle = $pdf->GetY() - $y;
    if ($h_detalle < 30) {
        $pdf->Cell(190, 30 - $h_detalle, '', 'LR', 1);
    }
    $pdf->Cell(190, 0, '', 'T', 1); // Borde inferior

    // PEDIDO Y FIRMA
    $y_pedido = $pdf->GetY();
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(130, 6, utf8_decode('PEDIDO:'), 'LTR', 1, 'L');
    $pdf->SetFont('Arial', '', 9);

    $x_pedido = $pdf->GetX();
    $y_pedido_text = $pdf->GetY();
    $pdf->MultiCell(130, 5, utf8_decode($pedidoConsumidor), 'LR', 'L');
    $h_pedido = $pdf->GetY() - $y_pedido_text;
    if ($h_pedido < 20) {
        $pdf->Cell(130, 20 - $h_pedido, '', 'LR', 1);
    }
    $pdf->Cell(130, 0, '', 'T', 0); // Borde inferior de pedido

    $y_final_pedido = $pdf->GetY();
    $altura_total_firma = $y_final_pedido - $y_pedido;

    $pdf->SetXY($x_pedido + 130, $y_pedido);
    $pdf->Cell(60, $altura_total_firma - 10, '', 'LTR', 2);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->Cell(60, 10, utf8_decode('FIRMA DEL CONSUMIDOR'), 'LBR', 0, 'C');
    $pdf->SetXY($x_pedido, $y_final_pedido);
    $pdf->Ln(0);

    // 4. OBSERVACIONES
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(190, 8, utf8_decode('4. OBSERVACIONES Y ACCIONES ADOPTADAS POR EL PROVEEDOR'), 1, 1, 'L', true);

    $y_obs = $pdf->GetY();
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(130, 6, utf8_decode('FECHA DE COMUNICACIÓN DE LA RESPUESTA:'), 'LTR', 1, 'L');
    $pdf->Cell(130, 20, '', 'LRB', 0);

    $pdf->SetXY(140, $y_obs);
    $pdf->Cell(60, 16, '', 'LTR', 2);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->Cell(60, 10, utf8_decode('FIRMA DEL PROVEEDOR'), 'LBR', 1, 'C');

    // Footer notes
    $pdf->SetFont('Arial', '', 7);
    $pdf->Cell(95, 8, utf8_decode('1 RECLAMO: Disconformidad relacionada a los productos o servicios.'), 1, 0, 'L');
    $pdf->Cell(95, 8, utf8_decode('2 QUEJA: Disconformidad no relacionada a los productos o servicios.'), 1, 1, 'L');

    $pdf->SetFont('Arial', 'B', 9);
    $pdf->Cell(190, 6, utf8_decode('HOJA DE RECLAMACIÓN VIRTUAL'), 1, 1, 'R', true);

    $pdf->SetFont('Arial', '', 7);
    $pdf->MultiCell(190, 4, utf8_decode("* La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo.\n* El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles."), 1, 'L');

    // Obtener contenido del PDF en formato string (S = String)
    $pdf_content = $pdf->Output('S');
    // ==========================================

    // Cargar clases de PHPMailer
    require __DIR__ . '/PHPMailer-master/src/Exception.php';
    require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer-master/src/SMTP.php';

    // ==========================================
    // CONFIGURACIÓN SMTP (HOSTINGER / WEBMAIL / AWS)
    // ==========================================
    $smtp_user = 'administracion@rcingenieros.com';
    $smtp_pass = 'administración.Rci*';
    // ==========================================

    // --- CORREO 1: Al Administrador (destinatario principal) ---
    $errores_correo = [];
    $mail1 = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail1->isSMTP();
        $mail1->Host = 'mail.rcingenieros.com';
        $mail1->SMTPAuth = true;
        $mail1->Username = $smtp_user;
        $mail1->Password = $smtp_pass;
        $mail1->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail1->Port = 587;

        // Evitar error de certificado en local
        $mail1->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        $mail1->setFrom($smtp_user, 'Libro de Reclamaciones RC');
        $mail1->addAddress($destinatario);
        $mail1->addReplyTo($email, $nombre);

        $mail1->CharSet = 'UTF-8';
        $mail1->isHTML(false);
        $mail1->Subject = $asunto;
        $mail1->Body = $mensaje;

        // Adjuntar el PDF
        $mail1->addStringAttachment($pdf_content, 'Reclamo_' . $correlativo_oficial . '.pdf');

        $mail1->send();
    } catch (Exception $e) {
        $errores_correo[] = "Admin: {$mail1->ErrorInfo}";
        error_log("Error al enviar correo al administrador: {$mail1->ErrorInfo}");
    }

    // --- CORREO 2: Copia al Cliente ---
    $mail2 = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail2->isSMTP();
        $mail2->Host = 'mail.rcingenieros.com';
        $mail2->SMTPAuth = true;
        $mail2->Username = $smtp_user;
        $mail2->Password = $smtp_pass;
        $mail2->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail2->Port = 587;

        // Evitar error de certificado en local
        $mail2->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        $mail2->setFrom($smtp_user, 'Libro de Reclamaciones RC');
        $mail2->addAddress($email);

        $mail2->CharSet = 'UTF-8';
        $mail2->isHTML(false);
        $mail2->Subject = "Copia de su " . $tipoReclamacion . " - " . $correlativo_oficial . " - RC Ingenieros";
        $mail2->Body = $mensaje;

        // Adjuntar el PDF
        $mail2->addStringAttachment($pdf_content, 'Copia_Reclamo_' . $correlativo_oficial . '.pdf');

        $mail2->send();
    } catch (Exception $e) {
        $errores_correo[] = "Cliente: {$mail2->ErrorInfo}";
        error_log("Error al enviar copia al cliente: {$mail2->ErrorInfo}");
    }

    // 6. Respuesta Exitosa a React
    echo json_encode([
        "success" => true,
        "correlativo" => $correlativo_oficial,
        "mensaje" => "Reclamo registrado exitosamente",
        "debug_correo" => $errores_correo
    ]);

} else {
    http_response_code(500);
    echo json_encode(["error" => "Error al guardar el reclamo: " . $conn->error]);
}

$conn->close();
?>