<?php

namespace JSAP\PHP\Core;

class Utils {
    // Password Hashing
    public static function hashPassword($password){
        return password_hash($password, PASSWORD_DEFAULT);
    }

    public static function verifyPassword($password, $hash){
        return password_verify($password, $hash);
    }

    public static function needsRehash($hash){
        return password_needs_rehash($hash, PASSWORD_DEFAULT);
    }

    // Data Validation
    public static function validateEmail($email){
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function validateURL($url){
        return filter_var($url, FILTER_VALIDATE_URL) !== false;
    }

    public static function validateInt($int){
        return filter_var($int, FILTER_VALIDATE_INT) !== false;
    }

    public static function validateFloat($float){
        return filter_var($float, FILTER_VALIDATE_FLOAT) !== false;
    }

    // Data Sanitization
    public static function sanitizeString($string){
        return filter_var($string, FILTER_SANITIZE_STRING);
    }

    public static function sanitizeEmail($email){
        return filter_var($email, FILTER_SANITIZE_EMAIL);
    }

    public static function sanitizeURL($url){
        return filter_var($url, FILTER_SANITIZE_URL);
    }

    public static function sanitizeInt($int){
        return filter_var($int, FILTER_SANITIZE_NUMBER_INT);
    }

    public static function sanitizeFloat($float){
        return filter_var($float, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    }

    // String Manipulation
    public static function startsWith($string, $startString){
        return (substr($string, 0, strlen($startString)) === $startString);
    }

    public static function endsWith($string, $endString){
        return (substr($string, -strlen($endString)) === $endString);
    }

    public static function contains($string, $substring){
        return strpos($string, $substring) !== false;
    }

    // Generate Random Strings
    public static function generateRandomString($length = 32){
        return bin2hex(random_bytes($length / 2));
    }

    // Session Management
    public static function startSession(){
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
    }

    public static function regenerateSession(){
        session_regenerate_id(true);
    }

    public static function destroySession(){
        session_unset();
        session_destroy();
    }

    // Encryption/Decryption
    public static function encrypt($data, $key){
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encrypted = openssl_encrypt($data, 'aes-256-cbc', $key, 0, $iv);
        return base64_encode($encrypted . '::' . $iv);
    }

    public static function decrypt($data, $key){
        list($encrypted_data, $iv) = explode('::', base64_decode($data), 2);
        return openssl_decrypt($encrypted_data, 'aes-256-cbc', $key, 0, $iv);
    }

    // URL Handling
    public static function redirect($url){
        header("Location: $url");
        exit();
    }

    public static function currentURL(){
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        return $url;
    }

    // Date/Time Utilities
    public static function formatDate($date, $format = 'Y-m-d H:i:s'){
        $datetime = new \DateTime($date);
        return $datetime->format($format);
    }

    public static function getCurrentDate($format = 'Y-m-d H:i:s'){
        return date($format);
    }

    // CSRF Token
    public static function generateCsrfToken(){
        return self::generateRandomString(32);
    }

    public static function validateCsrfToken($token, $sessionToken){
        return hash_equals($sessionToken, $token);
    }
}

?>