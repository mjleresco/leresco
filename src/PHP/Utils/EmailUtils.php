<?php
require __DIR__ . '/../../../vendor/phpmailer/src/Exception.php';
require __DIR__ . '/../../../vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/../../../vendor/phpmailer/src/SMTP.php';

namespace JSAP\PHP\Utils;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class EmailUtils {
    private static $config;

    public static function initializeConfig($configPath){
        if (file_exists($configPath)) {
            self::$config = require $configPath;
        } else {
            throw new Exception('Configuration file not found.');
        }
    }

    public static function sendEmail($to, $subject, $body, $altBody = '', $from = null, $fromName = null, $attachments = []){
        if (!self::$config) {
            throw new Exception('Configuration not initialized.');
        }

        $mail = new PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            
            $mail->Host       = self::$config['host'];                   
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = self::$config['username'];               
            $mail->Password   = self::$config['password'];               
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
            $mail->Port       = self::$config['port'];                   

            // Recipients
            $mail->setFrom($from ?: self::$config['from_email'], $fromName ?: self::$config['from_name']);
            $mail->addAddress($to);                                      

            // Attachments
            if (!empty($attachments)) {
                foreach ($attachments as $attachment) {
                    $mail->addAttachment($attachment);                    
                }
            }

            // Content
            $mail->isHTML(true);                                         
            $mail->Subject = $subject;
            $mail->Body    = $body;
            $mail->AltBody = $altBody;

            $mail->send();
            return ['success' => true, 'message' => 'Email has been sent'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"];
        }
    }

    public static function sendBulkEmails($recipients, $subject, $body, $altBody = '', $from = null, $fromName = null, $attachments = []){
        $results = [];
        foreach ($recipients as $to) {
            $results[] = self::sendEmail($to, $subject, $body, $altBody, $from, $fromName, $attachments);
        }
        return $results;
    }

    public static function isValidEmail($email){
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
}


?>