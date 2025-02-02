<?php

namespace JSAP\App\Models;

use JSAP\PHP\Core\Model;

class Projects extends Model{
    
    public function __construct(){
        parent::__construct();
        
        $this->table = "projects";
        $this->primaryKey = "id";
        
        $this->fields = [
            'id'          => ['type' => 'INT',                                         'nullable' => false, 'unique' => true,  'extra' => 'AUTO_INCREMENT'],
            'title'       => ['type' => 'VARCHAR(255)',                                'nullable' => false, 'unique' => false, 'extra' => ''],
            'type'        => ['type' => 'ENUM("front-end", "back-end", "full-stack")', 'nullable' => false, 'unique' => false, 'extra' => ''],
            'description' => ['type' => 'TEXT',                                        'nullable' => false, 'unique' => false, 'extra' => ''],
            'skills'      => ['type' => 'VARCHAR(255)',                                'nullable' => false, 'unique' => false, 'extra' => ''],
            'links'       => ['type' => 'VARCHAR(255)',                                'nullable' => false, 'unique' => false, 'extra' => ''],
            'image'       => ['type' => 'LONGBLOB',                                    'nullable' => false, 'unique' => false, 'extra' => ''],
            'created_at'  => ['type' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',         'nullable' => false, 'unique' => false, 'extra' => '']
        ];
        
    }
    
    public function create($data)
    {
        if (empty($data)) {
            throw new \Exception("Data cannot be empty");
        }
        return parent::insert($data);
    }

    public function getById($id)
    {
        if (empty($id)) {
            throw new \Exception("ID cannot be empty");
        }
        return parent::selectOne(['id' => $id]);
    }

    public function getAll()
    {
        return parent::selectAll();
    }

    public function getMultiple($conditions = [], $limit = 10, $offset = 0)
    {
        if (empty($conditions) && $limit <= 0 && $offset < 0) {
            throw new \Exception("Invalid parameters");
        }
        return parent::selectMultiple($conditions, $limit, $offset);
    }

    public function getFiltered($conditions = [], $filter = [], $limit = 10, $offset = 0)
    {
        if (empty($conditions) && empty($filter) && $limit <= 0 && $offset < 0) {
            throw new \Exception("Invalid parameters");
        }
        return parent::selectFiltered($conditions, $filter, $limit, $offset);
    }

    public function update($id, $data)
    {
        if (empty($id) || empty($data)) {
            throw new \Exception("ID and data cannot be empty");
        }
        return parent::update($data, ['id' => $id]);
    }

    public function delete($id)
    {
        if (empty($id)) {
            throw new \Exception("ID cannot be empty");
        }
        return parent::delete(['id' => $id]);
    }

    public function countProjects()
    {
        $sql = "SELECT COUNT(*) as total FROM " . $this->table;
        $stmt = $this->connection->query($sql);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getLatestProjects($limit = 5)
    {
        $sql = "SELECT * FROM " . $this->table . " ORDER BY created_at DESC LIMIT " . $limit;
        $stmt = $this->connection->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

?>