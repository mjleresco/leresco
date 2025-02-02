<?php

namespace JSAP\App\Controllers;

use JSAP\PHP\Core\Utils;
use JSAP\PHP\Core\Controller;
use JSAP\App\Models\User;

class UserController extends Controller {
    
    public function showLoginForm() {
        $this->view->render('login', ['title' => 'Login', 'c-page' => 'Login']);
    }

    public function login() {
        $username = $_POST['email'];
        $password = $_POST['password'];
        $_user = new User();
        $user = $_user->login($username, $password);
        if($user['success']){
            Utils::redirect('/');
        }else{
            $this->view->render('login', ['title' => 'Login', 'c-page' => 'Login', 'user' => $user]);
        }
    }
    
    public function showRegistrationForm() {
        $this->view->render('register', ['title' => 'Register', 'c-page' => 'Register']);
    }
    
    public function register() {
        $username = $_POST['name'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $gender = 'male';
    
        $user = new User();
        
        $user->create($username, $email, $password, $gender);
    
        header('Location: /login');
        exit;
    }
    
    function donate($data) {
        
    }
    
    public function logout() {
        $_user = new User();
        $user = $_user->logout();
        exit;
    }
}

?>