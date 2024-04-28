<?php


require '../vendor';
require '../vendor/SMTP.php';
require '../vendor/Exception.php';



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 's.abeshov@gmail.com'; // Здесь укажите вашу почту Gmail
    $mail->Password   = 'uxahnaxmrqwzcfwd'; // Здесь укажите пароль от вашей почты Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587; // Используйте 465, если хотите использовать SSL

    // Устанавливаем от кого
    $mail->setFrom('your@gmail.com', 'Your Name'); // Здесь укажите вашу почту и имя отправителя

    // Устанавливаем получателя
    $mail->addAddress('s.abeshov@gmail.com', 'Recipient Name'); // Здесь укажите почту и имя получателя

	$headers .= "Content-Type: text/html; charset=utf-8" ;

    // Устанавливаем тему письма
    $mail->Subject = 'Mail';

    // Устанавливаем тело письма
	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

    $mail->Body = $project_name .' '. $admin_email . ' '. $form_subject;

    // Отправляем письмо
    $mail->send();
    echo 'Письмо успешно отправлено!';
} catch (Exception $e) {
    echo "Ошибка при отправке письма: {$mail->ErrorInfo}";
}