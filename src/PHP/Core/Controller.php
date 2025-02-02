<?php

namespace JSAP\PHP\Core;

use \JSAP\PHP\Utils\DatabaseUtils;

class Controller
{
    protected $view;
    protected $databaseUtils;

    public function __construct()
    {
        $this->view = new View();
        $config = new Config(__DIR__.'/../../../config/config.php');
        $this->databaseUtils = new DatabaseUtils(Database::getInstance($config->__get('database')));
    }
}

?>