<?php

namespace JSAP\App\Models;

use JSAP\PHP\Core\Model;

class Post extends Model{
    
    public function __construct(){
        parent::__construct();
        
        $this->table = "posts";
        $this->primaryKey = "id";
        
        $this->fields = [
            'id'         => ['type' => 'INT',                                 'nullable' => false, 'unique' => false, 'extra' => 'AUTO_INCREMENT'],
            'title'      => ['type' => 'VARCHAR(255)',                        'nullable' => false, 'unique' => false, 'extra' => ''],
            'content'    => ['type' => 'TEXT',                                'nullable' => false, 'unique' => false, 'extra' => ''],
            'created_at' => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP', 'nullable' => false, 'unique' => false, 'extra' => '']
        ];
        
    }
    
    public function create($data) {
        return parent::insert($data);
    }
    
    public function getById($id) {
        return parent::selectOne(['id' => $id]);
    }
    
    public function getAll($id) {
        return parent::selectAll();
    }
    
    public function update($id, $status) {
        return parent::update(['status' => $status], ['id' => $id]);
    }
    
    public function delete($id) {
        return parent::delete(['id' => $id]);
    }
}

?>