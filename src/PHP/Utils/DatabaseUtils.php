<?php

namespace JSAP\PHP\Utils;

use PDO;

class DatabaseUtils {
    protected $connection;

    public function __construct(PDO $connection) {
        $this->connection = $connection;
    }

    public function getAllTables() {
        $statement = $this->connection->query("SHOW TABLES");
        return $statement->fetchAll(PDO::FETCH_COLUMN);
    }

    public function getTableColumns($table) {
        $statement = $this->connection->query("DESCRIBE $table");
        $columns = $statement->fetchAll(PDO::FETCH_ASSOC);
        $columnData = [];
        foreach($columns as $column) {
            $columnData[$column['Field']] = [
                'Type' => $column['Type'],
                'Null' => $column['Null'],
                'Key' => $column['Key'],
                'Extra' => $column['Extra']
            ];
        }
        return $columnData;
    }

    public function getTableConstraints($table) {
        $statement = $this->connection->prepare("
            SELECT
                k.COLUMN_NAME,
                k.CONSTRAINT_NAME,
                k.REFERENCED_TABLE_NAME,
                k.REFERENCED_COLUMN_NAME,
                r.UPDATE_RULE,
                r.DELETE_RULE
            FROM
                information_schema.KEY_COLUMN_USAGE k
            JOIN
                information_schema.REFERENTIAL_CONSTRAINTS r
            ON
                k.CONSTRAINT_NAME = r.CONSTRAINT_NAME
            WHERE
                k.TABLE_NAME = :table AND k.TABLE_SCHEMA = DATABASE()
        ");
        $statement->execute([':table' => $table]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createTable($table, $fields, $primaryKey, $foreignKeys) {
        $columns = [];
        foreach($fields as $name => $attributes) {
            $columnDef = "$name {$attributes['type']}";
            if(!$attributes['nullable']) {
                $columnDef .= " NOT NULL";
            }
            if($attributes['unique']) {
                $columnDef .= " UNIQUE";
            }
            if($attributes['extra']) {
                $columnDef .= " {$attributes['extra']}";
            }
            $columns[] = $columnDef;
        }
        $columns[] = "PRIMARY KEY ($primaryKey)";
        $columns = implode(', ', $columns);
        $sql = "CREATE TABLE $table ($columns) ENGINE=InnoDB";
        $this->connection->exec($sql);
    }

    public function addForeignKeys($table, $foreignKeys) {
        foreach($foreignKeys as $field => $references) {
            list($refTable, $refColumn, $onDelete, $onUpdate) = $references;
            $foreignKeyDef = "ALTER TABLE $table ADD CONSTRAINT FOREIGN KEY ($field) REFERENCES $refTable($refColumn) ON DELETE $onDelete ON UPDATE $onUpdate";
            $this->connection->exec($foreignKeyDef);
        }
    }

    public function updateTable($table, $fields, $primaryKey, $foreignKeys) {
        $existingColumns = $this->getTableColumns($table);
        $existingConstraints = $this->getTableConstraints($table);
        
        $updateSQL = "ALTER TABLE $table";
        $count = count($fields);
        $index = 0;
        
        foreach($fields as $name => $attributes) {
            if(isset($existingColumns[$name])) {
                $columnDef = "$name {$attributes['type']}";
                $currentColumn = $existingColumns[$name];
                if($currentColumn['Null'] === 'NO' && $attributes['nullable']) {
                    $columnDef .= " NULL";
                }elseif($currentColumn['Null'] === 'YES' && !$attributes['nullable']) {
                    $columnDef .= " NOT NULL";
                }
                if($attributes['unique'] && $currentColumn['Key'] !== 'UNI' && $currentColumn['Key'] !== 'PRI') {
                    $columnDef .= " UNIQUE";
                }
                if($attributes['extra']) {
                    $columnDef .= " {$attributes['extra']}";
                }
                $index++;
                if($index != $count) {
                    $updateSQL .= " MODIFY COLUMN $columnDef,";
                } else {
                    $updateSQL .= " MODIFY COLUMN $columnDef";
                }
            } else {
                $addColumnDef = "$name {$attributes['type']}";
                if(!$attributes['nullable']) {
                    $addColumnDef .= " NOT NULL";
                }
                if($attributes['unique']) {
                    $addColumnDef .= " UNIQUE";
                }
                if($attributes['extra']) {
                    $addColumnDef .= " {$attributes['extra']}";
                }
                $index++;
                if($index != $count) {
                    $updateSQL .= " ADD COLUMN $addColumnDef,";
                } else {
                    $updateSQL .= " ADD COLUMN $addColumnDef";
                }
            }
        }
        $this->connection->exec($updateSQL);
        
        foreach($existingColumns as $name => $info) {
            if(!isset($fields[$name])) {
                $this->connection->exec("ALTER TABLE $table DROP COLUMN $name");
            }
        }

        // Update primary key
        if($existingColumns[$primaryKey]['Key'] !== 'PRI') {
            $this->connection->exec("ALTER TABLE $table DROP PRIMARY KEY, ADD PRIMARY KEY ($primaryKey)");
        }

        // Update foreign keys
        $existingForeignKeys = [];
        foreach($existingConstraints as $constraint) {
            if($constraint['REFERENCED_TABLE_NAME']) {
                $existingForeignKeys[$constraint['COLUMN_NAME']] = [
                    'REFERENCED_TABLE_NAME' => $constraint['REFERENCED_TABLE_NAME'],
                    'REFERENCED_COLUMN_NAME' => $constraint['REFERENCED_COLUMN_NAME'],
                    'DELETE_RULE' => $constraint['DELETE_RULE'],
                    'UPDATE_RULE' => $constraint['UPDATE_RULE']
                ];
            }
        }

        foreach($foreignKeys as $field => $references) {
            list($refTable, $refColumn, $onDelete, $onUpdate) = $references;
            if(!isset($existingForeignKeys[$field]) || $existingForeignKeys[$field]['REFERENCED_TABLE_NAME'] !== $refTable || $existingForeignKeys[$field]['REFERENCED_COLUMN_NAME'] !== $refColumn || $existingForeignKeys[$field]['DELETE_RULE'] !== $onDelete || $existingForeignKeys[$field]['UPDATE_RULE'] !== $onUpdate) {
                $this->connection->exec("ALTER TABLE $table ADD FOREIGN KEY ($field) REFERENCES $refTable($refColumn) ON DELETE $onDelete ON UPDATE $onUpdate");
            }
        }

        foreach($existingForeignKeys as $field => $references) {
            if(!isset($foreignKeys[$field])) {
                $constraintName = $existingConstraints[array_search($field, array_column($existingConstraints, 'COLUMN_NAME'))]['CONSTRAINT_NAME'];
                $this->connection->exec("ALTER TABLE $table DROP FOREIGN KEY $constraintName");
            }
        }
    }

}

?>