<?php

namespace JSAP\PHP\Utils;

use JSAP\PHP\Core\Config;
use JSAP\PHP\Core\Database;
use JSAP\PHP\Core\DatabaseUtils;

class UserUtils {
    private $db;

    public function __construct($connection) {
        $config = new Config(__DIR__ . '/../../../config/config.php');
        $this->connection = Database::getInstance($config->__get('database'));
        $this->db = $this->connection;
    }

    // Register a user
    public function registerUser($table, $data, $uniqueField, $passwordField) {
        // Check if user already exists
        $sql = "SELECT COUNT(*) FROM $table WHERE $uniqueField = :uniqueValue";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(['uniqueValue' => $data[$uniqueField]]);
        $userExists = $stmt->fetchColumn();

        if($userExists > 0) {
            return ['success' => false, 'message' => '"The user "'.ucfirst($data[$uniqueField]) . '" already exists.'];
        }

        // Proceed with registration if user does not exist
        $fields = implode(', ', array_keys($data));
        $placeholders = ':' . implode(', :', array_keys($data));
        
        $sql = "INSERT INTO $table ($fields) VALUES ($placeholders)";
        $stmt = $this->db->prepare($sql);
        
        // Hash the password before saving
        if(isset($data[$passwordField])) {
            $data[$passwordField] = password_hash($data[$passwordField], PASSWORD_DEFAULT);
        }
        
        try {
            $stmt->execute($data);
            return ['success' => true, 'message' => 'User registered successfully.'];
        } catch (PDOException $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
    
    public function sendVerificationEmail($table, $emailField, $email, $data) {
        $sql = "SELECT * FROM $table WHERE $emailField = :$emailField LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$emailField => $email]);
        
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);
        $error = '';
        
        if ($user) {
            // Generate verification token and send to user's email
            $token = bin2hex(random_bytes(16));
            $this->userModel->createVerificationToken($user->id, $token);

            // Send verification email
            $to = $user[$emailField];
            $subject = $data['subject'];
            $message = $data['body'];
            \mail($to, $subject, $message);

            echo 'Verification email sent!';
        } else {
            echo 'Email not found!';
        }
    }
    
    public function varifyEmail($table, $tokenField, $token, $emailField, $email){
        $sql = "SELECT * FROM $table WHERE $emailField = :$emailField LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$emailField => $email]);
        
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);
        
        if ($user) {
            if($user[$tokenField] === $token){
                return ['success' => true, 'message' => 'Email verified successfully!'];
            } else {
                return ['success' => false, 'message' => 'Invalid varification token!'];
            }
        } else {
            return ['success' => false, 'message' => 'No user found with this email!'];
        }
    }
    
    // Log in a user
    public function loginUser($table, $uniqueField, $uniqueFieldValue, $passwordField, $password) {
        $sql = "SELECT * FROM $table WHERE $uniqueField = :$uniqueField LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$uniqueField => $uniqueFieldValue]);
        
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);
        $error = '';
        $passwordVerify = false;
        
        if($user){
            if(password_verify($password, $user[$passwordField])){
                $passwordVerify = true;
            }else{
                $error = 'Invalid password!';
            }
        }else{
            $error = 'No user registered with this '.$uniqueField.'!';
        }
        
        if($error != '') {
            session_start();
            $_SESSION['user'] = $user;
            return ['success' => true, 'message' => 'User logged in successfully.'];
        } else {
            return ['success' => false, 'message' => $error];
        }
    }
    
    //Authenticate a user
    public static function authUser(){
        session_start();
        if(isset($_SESSION['user'])) {
            return true;
        }else{
            return false;
        }
        
    }
    
    // Log out a user
    public function logoutUser(){
        session_start();
        if(isset($_SESSION['user'])) {
            // Unset all of the session variables
            $_SESSION = array();
            // Destroy the session.
            session_destroy();
            return ['success' => true];
        } else {
            return ['success' => false];
        }
    }
}


?>