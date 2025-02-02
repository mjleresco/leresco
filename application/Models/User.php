<?php

namespace JSAP\App\Models;


use JSAP\PHP\Core\Model;
use JSAP\PHP\Core\Utils;
use JSAP\PHP\Utils\UserUtils;

class User extends Model{
    
    protected $userUtils;
    
    public function __construct(){
        parent::__construct();
        
        $this->userUtils = new UserUtils($this->connection);
        
        $this->table = 'users';
        $this->primaryKey = 'id';
        
        $this->fields = [
            'id'         => ['type' => 'INT',                                 'nullable' => false, 'unique' => true,  'extra' => 'AUTO_INCREMENT'],
            'phone'      => ['type' => 'INT',                                 'nullable' => false, 'unique' => false, 'extra' => ''],
            'email'      => ['type' => 'VARCHAR(255)',                        'nullable' => false, 'unique' => true,  'extra' => ''],
            'gender'     => ['type' => 'ENUM("male", "female")',              'nullable' => false, 'unique' => false, 'extra' => ''],
            'role'       => ['type' => 'ENUM("user", "admin") DEFAULT "user"',  'nullable' => false, 'unique' => false, 'extra' => ''],
            'password'   => ['type' => 'VARCHAR(255)',                        'nullable' => false, 'unique' => false, 'extra' => ''],
            'created_at' => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP', 'nullable' => false, 'unique' => false, 'extra' => '']
        ];
        
    }
    
    public function create($data){
        return $this->userUtils->registerUser($this->table, $data, 'email', 'password');
    }
    
    public function varifyEmail($email){
        
    }
    
    public function login($email, $password){
        
        $login = $this->userUtils->loginUser($this->table, 'email', $email, 'password', $password);
        return $login;
    }
    
    public function resetPassword($email, $newPassword){
        
    }
    
    public function logout(){
        $logout = $this->userUtils->logoutUser();
        if($logout){
            Utils::redirect('/login');
        }
    }
}


?>