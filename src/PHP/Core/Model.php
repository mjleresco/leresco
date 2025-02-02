<?php

namespace JSAP\PHP\Core;

use PDO;
use JSAP\PHP\Utils\DatabaseUtils;

class Model {
    protected $connection;
    protected $table;
    protected $databaseUtils;
    protected $primaryKey = 'id';
    protected $foreignKeys = [];
    protected $fields = [];

    public function __construct() {
        $config = new Config(__DIR__ . '/../../../config/config.php');
        $this->connection = Database::getInstance($config->__get('database'));
        $this->dbUtils = new DatabaseUtils($this->connection);
    }

    public function getTable() {
        return $this->table;
    }

    public function createTableWithoutForeignKeys() {
        $fields = $this->fields;
        $primaryKey = $this->primaryKey;
        // Create table without foreign keys
        $this->dbUtils->createTable($this->table, $fields, $primaryKey, []);
    }

    public function addForeignKeys() {
        $foreignKeys = $this->foreignKeys;
        // Add foreign keys separately
        $this->dbUtils->addForeignKeys($this->table, $foreignKeys);
    }
    
    public function updateTable(){
        $table = $this->table;
        $fields = $this->fields;
        $primaryKey = $this->primaryKey;
        $foreignKeys = $this->foreignKeys;
        // Update an existing tables
        $this->dbUtils->updateTable($table, $fields, $primaryKey, $foreignKeys);
    }
    
    // CRUD functions
    
    public function insert($data) {
        $table = $this->table;
        
        $keys = implode(', ', array_keys($data));
        $values = implode("', '", array_values($data));
        $sql = "INSERT INTO $table ($keys) VALUES ('$values')";
        $this->connection->exec($sql);
    }
    
    public function update($data, $conditions){
        $table = $this->table;
        // Build the SET part of the query
        $setParts = [];
        foreach ($data as $key => $value) {
            $setParts[] = "$key = :$key";
        }
        $setString = implode(', ', $setParts);
        // Build the WHERE part of the query
        $whereParts = [];
        foreach ($conditions as $key => $value) {
            $whereParts[] = "$key = :where_$key";
        }
        $whereString = implode(' AND ', $whereParts);
        // Combine the SET and WHERE parts into a full SQL query
        $sql = "UPDATE $table SET $setString WHERE $whereString";
        // Prepare the statement
        $stmt = $this->connection->prepare($sql);
        // Bind the data values
        foreach ($data as $key => $value) {
            $stmt->bindValue(":$key", $value);
        }
        // Bind the condition values
        foreach ($conditions as $key => $value) {
            $stmt->bindValue(":where_$key", $value);
        }
        // Execute the statement
        return $stmt->execute();
    }
    
    public function selectOne($conditions) {
        $table = $this->table;
        $where = '';
        foreach ($conditions as $key => $value) {
            $where .= "$key = '$value' AND ";
        }
        $where = rtrim($where, ' AND ');
    
        $sql = "SELECT * FROM $table WHERE $where LIMIT 1";
        $statement = $this->connection->query($sql);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
    
    public function selectMultiple($conditions = [], $limit = 10, $offset = 0) {
        $table = $this->table;
        $where = '';
        $params = [];
    
        if (!empty($conditions)) {
            foreach ($conditions as $key => $value) {
                $where .= "$key = :$key AND ";
                $params[":$key"] = $value;
            }
    
            $where = rtrim($where, ' AND ');
            $sql = "SELECT * FROM $table WHERE $where LIMIT $limit OFFSET $offset";
        } else {
            $sql = "SELECT * FROM $table LIMIT $limit OFFSET $offset";
        }
    
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($params);
    
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function selectFiltered($conditions = [], $filter = [], $limit = 10, $offset = 0) {
        $table = $this->table;
        $where = '';
        $params = [];
        $orderBy = '';
        $orderDirection = '';
    
        if (!empty($conditions)) {
            foreach ($conditions as $key => $value) {
                $where .= "$key = :$key AND ";
                $params[":$key"] = $value;
            }
    
            $where = rtrim($where, ' AND ');
        }
    
        if (!empty($filter)) {
            if (isset($filter['orderBy'])) {
                $orderBy = $filter['orderBy'];
            }
    
            if (isset($filter['orderDirection'])) {
                $orderDirection = $filter['orderDirection'];
            }
        }
    
        $sql = "SELECT * FROM $table";
    
        if (!empty($where)) {
            $sql .= " WHERE $where";
        }
    
        if (!empty($orderBy)) {
            $sql .= " ORDER BY $orderBy $orderDirection";
        }
    
        $sql .= " LIMIT $limit OFFSET $offset";
    
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($params);
    
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function selectAll() {
        $sql = "SELECT * FROM ".$this->table;
        $statement = $this->connection->query($sql);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function delete($conditions){
        $table = $this->table;
        // Build the WHERE part of the query
        $whereParts = [];
        foreach ($conditions as $key => $value) {
            $whereParts[] = "$key = :$key";
        }
        $whereString = implode(' AND ', $whereParts);
        // Combine the WHERE parts into a full SQL query
        $sql = "DELETE FROM $table WHERE $whereString";
        // Prepare the statement
        $stmt = $this->connection->prepare($sql);
        // Bind the condition values
        foreach ($conditions as $key => $value) {
            $stmt->bindValue(":$key", $value);
        }
    
        // Execute the statement
        return $stmt->execute();
    }
    
    public function getLastInsertId() {
        return $this->connection->lastInsertId();
    }

    public function migrate() {
        // Deprecated: Use createTableWithoutForeignKeys() and addForeignKeys() instead
    }
}

?>