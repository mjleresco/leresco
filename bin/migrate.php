<?php

namespace JSAP\Core;

require_once(__DIR__.'/../src/PHP/Core/Model.php');
require_once(__DIR__.'/../src/PHP/Core/Config.php');
require_once(__DIR__.'/../src/PHP/Core/Database.php');
require_once(__DIR__.'/../src/PHP/Utils/DatabaseUtils.php');
require_once(__DIR__.'/../src/PHP/Utils/UserUtils.php');

use JSAP\PHP\Core\Model;
use JSAP\PHP\Core\Config;
use JSAP\PHP\Core\Database;
use JSAP\PHP\Utils\DatabaseUtils;
use JSAP\App\Models;

use PDO;

class Migration {
    protected $connection;
    protected $databaseUtils;
    protected $models;
    protected $use_default_admin = false;

    public function __construct() {
        $config = new Config(__DIR__.'/../config/config.php');
        
        $this->use_default_admin = $config->__get('app')['use-default-admin'];
        
        $this->connection = Database::getInstance($config->__get('database'));
        $this->databaseUtils = new DatabaseUtils($this->connection);
        $this->models = $this->getAllModels();
    }

    public function migrate() {
        $models = $this->models;
        // Get all existing tables in the database
        $existingTables = $this->databaseUtils->getAllTables();
        // New created tables array
        $newCreatedTables = array();
        
        // First pass: Create tables without foreign key constraints
        foreach ($models as $model) {
            if(!in_array($model->getTable(), $existingTables)){
                $model->createTableWithoutForeignKeys();
                $newCreatedTables[] = $model->getTable(); 
            }else{
                $model->updateTable();
                $oldCreatedTable[] = $model->getTable();
            }
        }

        // Second pass: Add foreign key constraints
        foreach ($models as $model) {
            if(in_array($model->getTable(), $newCreatedTables)){
                $model->addForeignKeys();
            }
        }

        // Get all tables after migration
        $tablesAfterMigration = $this->databaseUtils->getAllTables();

        // Find tables to delete
        $tablesToDelete = array_diff($existingTables, array_map(function($model) {
            return $model->getTable();
        }, $models));

        // Drop tables that are not part of any model
        foreach ($tablesToDelete as $table) {
            $this->connection->exec("DROP TABLE $table");
        }
    }

    private function getAllModels() {
        $namespacePrefix = 'JSAP\\App\\Models\\';
        $models = array();
        $modelsPath = __DIR__.'/../application/Models/';
        $files = scandir($modelsPath);
        
        if($this->use_default_admin){
            require __DIR__.'/../src/PHP/Core/admin/AdminUser.php';
            $models[] = new \Fust\PHP\Core\Admin\AdminUser();
        }
        
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..' && pathinfo($file, PATHINFO_EXTENSION) === 'php') {
                $className = $namespacePrefix . basename($file, '.php');
                require $modelsPath.basename($file, '.php').'.php';
                $models[] = new $className();
            }
        }

        return $models;
    }
}

$migration = new Migration();
$migration->migrate();

?>