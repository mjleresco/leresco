<?php

namespace JSAP\App\Models;

use JSAP\PHP\Core\Model;

class Donation extends Model{
    
    public function __construct(){
        parent::__construct();
        
        $this->table = "donations";
        $this->primaryKey = "id";
        
        $this->fields = [
            'id'         => ['type' => 'INT',                                     'nullable' => false, 'unique' => true,  'extra' => 'AUTO_INCREMENT'],
            'user_id'    => ['type' => 'INT',                                     'nullable' => false, 'unique' => false, 'extra' => ''],
            'method'     => ['type' => 'ENUM("one-time", "recurring")',           'nullable' => false, 'unique' => false, 'extra' => ''],
            'frequency'  => ['type' => 'ENUM("monthly", "quartery", "annually")', 'nullable' => true,  'unique' => false, 'extra' => ''],
            'amount'     => ['type' => 'TEXT',                                    'nullable' => false, 'unique' => false, 'extra' => ''],
            'status'     => ['type' => 'ENUM("pending", "successful", "failed")', 'nullable' => false, 'unique' => false, 'extra' => ''],
            'donated_at' => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',     'nullable' => false, 'unique' => false, 'extra' => '']
        ];
        
        $this->foreignKeys = [
            'user_id' => ['users', 'id', 'CASCADE', 'CASCADE']
        ];
        
    }
    
    public function create($data) {
        return parent::insert($data);
    }
    
    public function getById($id) {
        return parent::selectOne(['id' => $id]);
    }
    
    public function getByUserId($id) {
        return parent::selectOne(['id' => $id]);
    }
    
    public function getAll($id) {
        return parent::selectAll();
    }
    
    public function updateStatus($id, $status) {
        return parent::update(['status' => $status], ['id' => $id]);
    }
    
    public function delete($id) {
        return parent::delete(['id' => $id]);
    }
    
}

?>