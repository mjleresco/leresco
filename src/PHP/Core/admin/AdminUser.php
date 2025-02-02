<?php

namespace JSAP\PHP\Core\Admin;

use JSAP\PHP\Core\Model;

class AdminUser extends Model {
    public function __construct() {
        parent::__construct();
        
        $this->table = "admin_users";
        $this->primaryKey = "id";
        
        $this->fields = [
            'id'                       => ['type' => 'INT',                                   'nullable' => false, 'unique' => false,  'extra' => 'AUTO_INCREMENT'],
            'username'                 => ['type' => 'VARCHAR(50)',                           'nullable' => false, 'unique' => true,   'extra' => ''],
            'email'                    => ['type' => 'VARCHAR(100)',                          'nullable' => false, 'unique' => true,   'extra' => ''],
            'reset_token'              => ['type' => 'VARCHAR(255)',                          'nullable' => true, 'unique'  => true,   'extra' => ''],
            'email_verification_token' => ['type' => 'VARCHAR(255)',                          'nullable' => true, 'unique'  => true,   'extra' => ''],
            'email_verificated'        => ['type' => 'ENUM("yes", "no")',                     'nullable' => true, 'unique'  => true,   'extra' => ''],
            'login_attempts'           => ['type' => 'VARCHAR(255)',                          'nullable' => true, 'unique'  => true,   'extra' => ''],
            'login_lock_time'          => ['type' => 'VARCHAR(255)',                          'nullable' => true, 'unique'  => true,   'extra' => ''],
            'two_fa_secret'            => ['type' => 'VARCHAR(255)',                          'nullable' => true, 'unique'  => true,   'extra' => ''],
            'password'                 => ['type' => 'VARCHAR(255)',                          'nullable' => false, 'unique' => false,  'extra' => ''],
            'created_at'               => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',   'nullable' => false, 'unique' => false,  'extra' => '']
        ];
    }
    
    public function create($data){
        parent::insert($data);
    }
    
    public function getById($id){
        return parent::selectOne(['id' => $id]);
    }
    
    public function getByEmail($email){
        return parent::selectOne(['email' => $email]);
    }
    
    public function getByResetToken($reset_token){
        return parent::selectOne(['reset_token' => $reset_token]);
    }
    
    public function updatePassword($id, $password){
        return parent::update(['password' => $password], ['id' => $id]);
    }
    
    public function createResetToken($id, $reset_token){
        return parent::update(['reset_token' => $reset_token], ['id' => $id]);
    }
    
    public function deleteResetToken($id){
        return parent::update(['reset_token' => null], ['id' => $id]);
    }
    
    public function createVerificationToken($id, $token) {
        return parent::update(['email_verification_token' => $token], ['id' => $id]);
    }
    
    public function getByVerificationToken($token) {
        return parent::selectOne(['email_verification_token' => $token]);
    }

    public function updateEmailVerified($id, $verified) {
        return parent::update(['email_verificated' => $verified], ['id' => $id]);
    }

    public function deleteVerificationToken($token) {
        return parent::update(['email_verification_token' => ''], ['email_verification_token' => $token]);
    }
    
    public function getLoginAttempts($id) {
        return parent::selectOne(['id' => $id], ['login_attempts']);
    }

    public function getLockTime($id) {
        return parent::selectOne(['id' => $id], ['login_lock_time']);
    }

    public function resetLoginAttempts($id) {
        return parent::update(['login_attempts' => 0, 'login_lock_time' => null], ['id' => $id]);
    }

    public function incrementLoginAttempts($id) {
        // Lock account after 3 attempts
        $attempts = $this->getLoginAttempts($id);
        
        parent::update(['login_attempts' => $attempts + 1], ['id' => $id]);
        
        if ($attempts >= 3) {
            $lockTime = time() + (30 * 60); // 30 minutes
            parent::update(['login_lock_time' => $attempts + 1], ['id' => $id]);
            
        }
    }
    
    public function updateTwoFASecret($id, $secretKey) {
        return parent::update(['two_fa_secret' => $secretKey + 1], ['id' => $id]);
    }

    public function getTwoFASecret($id) {
        return parent::selectOne(['id' => $id], ['two_fa_secret']);
    }
    
    public function deleteUser($id) {
        return parent::delete(['id' => $id]);
    }
    
}

