<?php

namespace JSAP\App\Models;


use JSAP\PHP\Core\Model;

class Newsletter extends Model{
        
    public function __construct(){
        parent::__construct();
        
        $this->table = 'newsletter';
        $this->primaryKey = 'id';
        
        $this->fields = [
            'id'         => ['type' => 'INT',          'nullable' => false, 'unique' => true,  'extra' => 'AUTO_INCREMENT'],
            'email'      => ['type' => 'VARCHAR(255)', 'nullable' => false, 'unique' => true,  'extra' => '']
        ];
        
    }
    
    public function subscribe($data){
        return parent::insert($data);
    }
    
    public function unsubscribe($email){
        return parent::delete(['email' => $email]);
    }
}


?>