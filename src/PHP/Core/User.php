<?php

namespace JSAP\PHP\Core;

use JSAP\BackEnd\Core\Model;
use JSAP\BackEnd\Core\Utils;
use JSAP\BackEnd\Core\UserUtils;

class User extends Model{
    
    protected $userUtils;
    
    public function __construct(){
        parent::__construct();
        
        $this->userUtils = new UserUtils($this->connection);
        
        $this->table = 'users';
        $this->primaryKey = 'id';
        
        $this->fields = [
            'id' => [
                'type' => 'INT(11)',
                'nullable' => false,
                'unique' => true,
                'extra' => 'AUTO_INCREMENT'
            ],
            'username' => [
                'type' => 'VARCHAR(50)',
                'nullable' => false,
                'unique' => true,
                'extra' => ''
            ],
            'password' => [
                'type' => 'VARCHAR(255)',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ],
            'email' => [
                'type' => 'VARCHAR(100)',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ],
            'gender' => [
                'type' => 'ENUM("male", "female")',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ],
            'active' => [
                'type' => 'ENUM("yes", "no")',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ],
            'last_seen' => [
                'type' => 'DATETIME',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ],
            'created_at' => [
                'type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
                'nullable' => false,
                'unique' => false,
                'extra' => ''
            ]
        ];
        
    }
    
    public function create($username, $email, $password, $gender){
        $data = [
            'username' => $username,
            'email' => $email,
            'password' => $password,
            'gender' => $gender
        ];
        $this->userUtils->registerUser($this->table, $data, 'email', 'password');
    }
    
    public function login($uniqueField, $uniqueFieldValue, $password){
        $login = $this->userUtils->loginUser($this->table, $uniqueField, $uniqueFieldValue, 'password', $password);
        return $login;
    }
    
    public function logout(){
        $logout = $this->userUtils->logoutUser();
        if($logout){
            Utils::redirect('/login');
        }
    }
    
    public function getByEmail($email){
        $user = $this->selectOne($email);
        
    }
    
    public function getByUsername($username){
        $user = $this->selectOne($username);
        
    }
    
    public function getMultiple(){
        $users = $this->selectMultiple($conditions);
    }
}


?>