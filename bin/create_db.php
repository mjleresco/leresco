<?php

namespace JSAP\PHP\Core;

require_once(__DIR__.'/../src/Core/Model.php');
require_once(__DIR__.'/../src/Core/Config.php');
require_once(__DIR__.'/../src/Core/Database.php');
require_once(__DIR__.'/../src/Core/DatabaseUtils.php');

use JSAP\PHP\Core\Model;
use JSAP\PHP\Core\Config;
use JSAP\PHP\Core\Database;
use JSAP\PHP\Core\DatabaseUtils;
use JSAP\PHP\App\Models;

use PDO;

function conn(){
    $db_server_name = '127.0.0.1:3306';
    $db_user_name = 'root';
    $db_password = '';
    $db_name = '';
    
    try {
        $conn = new \PDO("mysql:host=".$db_server_name."", $db_user_name, $db_password);
        // set the PDO error mode to exception
        $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        die("ERROR: Could not connect. <br />" . $e->getMessage());
    }
    return $conn;
}

$cn = conn();
$cn->query('CREATE DATABASE practice_db');

  /*  $connection;
    $databaseUtils;
    $models;

        $config = new Config(__DIR__.'/../config/config.php');
        $connection = Database::getInstance($config->__get('database'));
        $databaseUtils = new DatabaseUtils($connection);
        $models = $this->getAllModels();
    
*/
?>