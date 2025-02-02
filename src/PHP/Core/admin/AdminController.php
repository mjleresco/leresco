<?php

namespace JSAP\PHP\Core\Admin\Controllers;

use JSAP\PHP\Core\Controller;
use JSAP\PHP\Core\View;
use JSAP\PHP\Core\Admin\AdminUser;

class AdminController extends Controller {

    private $adminUser;
    public function __construct(){
        $this->adminUser = new AdminUser();
        $this->view = new View();
    }
    
    public function login($request) {
        \session_start();
        if(isset($_SESSION['admin'])){
            header('Location: /admin');
            exit;
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = $_POST['username'];
            $password = $_POST['password'];
            
            $admin = $this->adminUser->selectOne(['username' => $username]);
            
            if ($admin && password_verify($password, $admin['password'])) {
                //Login successfully
                
                $_SESSION['admin'] = $admin;
                header('Location: /admin/dashboard');
                exit;
            } else {
                $msg = 'Incorrect Password';
                if(!$admin){
                    $msg = 'User, '.$username.' not found!';
                }
                //Error occur
                $data = ['error' => $msg];
            }
        }
        require __DIR__.'/views/login.php';
        
    }

    public function logout($request) {
        \session_start();
        unset($_SESSION['admin']);
        header('Location: /admin/login');
    }

    public function dashboard($request) {
        $this->checkAuth();
        if($_SERVER['REQUEST_URI'] === '/admin/dashboard'){
            $total_admins = count($this->adminUser->selectAll());
            $data = ['total_admins' => $total_admins];
            require(__DIR__.'/views/dashboard.php');
        }else{
            header('Location: /admin/dashboard');
        }
    }

    public function createAdmin($request) {
        //$this->checkAuth();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

            $this->adminUser->create([
                'username' => $username,
                'email' => $email,
                'password' => $password
            ]);

            header('Location: /admin/login');
        } else {
            require(__DIR__.'/views/createAdmin.php');
        }
    }

    public function listAdmins($request) {
        $this->checkAuth();
        $admins = $this->adminUser->selectAll();
        $data = ['admins' => $admins];
        require(__DIR__.'/views/listAdmins.php');
    }
    
    public function manageUser($request, $user_id, $action){
        echo $user_id;
        echo "<br />action: ".$action;
    }
    
    private function checkAuth() {
        \session_start();
        if (!isset($_SESSION['admin'])) {
            header('Location: /admin/login');
            exit;
        }
    }
    
    public function requestReset() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $email = $_POST['email'];
    
            $admin = $this->adminUser->getByEmail($email);
    
            if($admin) {
                // Generate reset token and send to user's email
                $token = \bin2hex(random_bytes(16));
                $this->adminUser->createResetToken($admin['id'], $token);
    
                // Send reset email
                $to = $admin['email'];
                $subject = 'Password Reset Request';
                $message = 'Click this link to reset your password: ' . $_SERVER['HTTP_HOST'] . '/reset-password?token=' . $token;
                \mail($to, $subject, $message);
    
                header('Location: /admin/reset-password');
                exit;
            } else {
                echo 'Email not found!';
            }
        }
    
        require(__DIR__.'/views/password-reset.php');
    }
    
    public function resetPassword() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $token = $_POST['token'];
            $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    
            $admin = $this->adminUser->getByResetToken($token);
    
            if ($admin) {
                // Update user's password
                $this->adminUser->updatePassword($admin['id'], $password);
    
                // Remove reset token
                $this->adminUser->deleteResetToken($admin['id']);
    
                echo 'Password reset successfully!';
            } else {
                echo 'Invalid reset token!';
            }
        }
    
        require(__DIR__.'/views/reset-password.php');
    }
    
    public function sendVerificationEmail() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $email = $_POST['email'];
    
            $user = $this->adminUser->getByEmail($email);
    
            if ($user) {
                // Generate verification token and send to user's email
                $token = \bin2hex(\random_bytes(16));
                $this->adminUser->createVerificationToken($user->id, $token);
    
                // Send verification email
                $to = $user->email;
                $subject = 'Email Verification';
                $message = 'Click this link to verify your email: ' . $_SERVER['HTTP_HOST'] . '/verify-email?token=' . $token;
                \mail($to, $subject, $message);
    
                echo 'Verification email sent!';
            } else {
                echo 'Email not found!';
            }
        }
    
        require(__DIR__.'/views/email-verification.php');
    }
    
    public function verifyEmail() {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            $token = $_GET['token'];
    
            $user = $this->userModel->getUserByVerificationToken($token);
    
            if ($user) {
                // Update user's email verified status
                $this->userModel->updateEmailVerified($user->id, true);
    
                // Remove verification token
                $this->userModel->deleteVerificationToken($token);
    
                echo 'Email verified successfully!';
            } else {
                echo 'Invalid verification token!';
            }
        }
    
        require(__DIR__.'/views/verify-email.php');
    }
}

?>