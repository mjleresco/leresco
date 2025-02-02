<?php

// Load Composer's autoloader
require __DIR__ . '/../../vendor/autoload.php';
/*
// Load environment variables from .env file
if (file_exists(__DIR__ . '/../.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->load();
}
*/
// Error reporting
//error_reporting(E_ALL);
//ini_set('display_errors', getenv('APP_DEBUG') === 'true' ? '1' : '0');

// Initialize the application
$app = new \JSAP\PHP\Core\Application();

// Load routes
require __DIR__ . '/../../application/routes/routes.php';
require __DIR__ . '/../../application/routes/api.php';
require __DIR__ . '/../../application/routes/spa.php';

use JSAP\PHP\Core\Config;

$config = new Config(__DIR__.'/../../config/config.php');
//$this->databaseUtils = new DatabaseUtils(Database::getInstance($config->__get('database')));
// Load core classes
if($config->__get('app')['use-default-admin']){
    require __DIR__ . '/Core/admin/AdminController.php';
    require __DIR__ . '/Core/admin/AdminUser.php';
    require __DIR__ . '/Core/admin/routes.php';
}

// Handle the request and send the response
$app->run();

?>