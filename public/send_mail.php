<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit();
}

$to = "jvyas096@gmail.com";
$subject = "New Response: Adventure Invitation! 🎉";

$fashionStrategy = htmlspecialchars($data['fashionStrategy'] ?? 'None provided');
$reviewText = htmlspecialchars($data['reviewText'] ?? 'None provided');

$message = "
<html>
<head>
<title>New Response</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
<div style='max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;'>
    <h2 style='color: #e91e63;'>You have a new response from the invitation! 💌</h2>
    <div style='background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;'>
        <h3 style='margin-top: 0; color: #4CAF50;'>👗 Fashion Strategy:</h3>
        <p>" . nl2br($fashionStrategy) . "</p>
    </div>
    <div style='background-color: #f9f9f9; padding: 15px; border-radius: 8px;'>
        <h3 style='margin-top: 0; color: #2196F3;'>🤩 Excitement Review:</h3>
        <p>" . nl2br($reviewText) . "</p>
    </div>
</div>
</body>
</html>
";

$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'your-domain.com';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <noreply@" . $host . ">" . "\r\n";

// Log the email locally for easy testing/double checking
file_put_contents(__DIR__ . "/mail_log.txt", "Date: " . date('Y-m-d H:i:s') . "\nTo: $to\nSubject: $subject\nMessage:\n$message\n=========================================\n\n", FILE_APPEND);

if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully (and logged to mail_log.txt)']);
} else {
    // If mail() fails (common on local machines), we still return success if logged so they can verify locally
    http_response_code(200); 
    echo json_encode([
        'success' => true, 
        'message' => 'Logged locally to mail_log.txt! (Note: Live mail() failed, which is normal on local machines without SMTP configured.)'
    ]);
}
?>
