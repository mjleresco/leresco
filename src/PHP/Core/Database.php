<?php

namespace JSAP\PHP\Core;

use PDO;

class Database
{
    private static $instance;

    public static function getInstance($config)
    {
        if (self::$instance === null) {
            $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}";
            self::$instance = new PDO($dsn, $config['user'], $config['password']);
            self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        return self::$instance;
    }
}

?>