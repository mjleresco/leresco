<?php

namespace JSAP\App\Models;

use JSAP\PHP\Core\Model;

class Volunteer extends Model{
    
    public function __construct(){
        parent::__construct();
        
        $this->table = "volunteers";
        $this->primaryKey = "id";
        
        $this->fields = [
            'id'          => ['type' => 'INT',                                 'nullable' => false, 'unique' => true,  'extra' => 'AUTO_INCREMENT'],
            'user_id'     => ['type' => 'INT',                                 'nullable' => false, 'unique' => false, 'extra' => ''],
            'program_id'  => ['type' => 'INT',                                 'nullable' => false, 'unique' => false, 'extra' => ''],
            'hours'       => ['type' => 'INT',                                 'nullable' => false, 'unique' => false, 'extra' => ''],
            'date'        => ['type' => 'DATETIME',                            'nullable' => false, 'unique' => false, 'extra' => ''],
            'created_at'  => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP', 'nullable' => false, 'unique' => false, 'extra' => '']
        ];
        
        
        $this->foreignKeys = [
            'user_id'    => ['users',    'id', 'CASCADE', 'CASCADE'],
            'program_id' => ['programs', 'id', 'CASCADE', 'CASCADE']
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
    
    public function getByUserProgramId($program_id) {
        return parent::selectOne(['id' => $program_id]);
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