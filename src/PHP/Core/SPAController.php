<?php

namespace JSAP\PHP\Core;

use \JSAP\PHP\Utils\DatabaseUtils;

class SPAController
{
    protected $databaseUtils;

    public function __construct()
    {
        $config = new Config(__DIR__.'/../../../config/config.php');
        $this->databaseUtils = new DatabaseUtils(Database::getInstance($config->__get('database')));
    }
    
    public function init($app_name, $data) {
        $data['views'] = $this->getAppViews($app_name);
        $data['views_dir'] = '/.leresco/application/SPAs/' .$app_name.'/views/';
        
        echo "<script>".
                "window.appname = '".$app_name."';".
             "</script>";
        require __DIR__ . '/../../../application/SPAs/' .$app_name.'/index.php';
    }
    
    public function jsonResponse($success, $data) {
        
        //header('Content-Type: application/json');
        $response = array('ok' => $success, 'data' => $data);
        $jsonResponse = json_encode($response);
        error_log('JSON Response: ' . $jsonResponse);
        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(500);
            echo json_encode(array('ok' => false, 'error' => 'Error encoding JSON response'));
            exit;
        }
        echo $jsonResponse;
        exit;
    }
    
    public function getAppViews($app_name) {
      $viewDir = __DIR__.'/../../../application/SPAs/' .$app_name.'/views/';
      
      // Check if the directory exists and is readable
      if (!is_dir($viewDir) || !is_readable($viewDir)) {
        throw new \Exception("Directory '$viewDir' is not readable");
      }
      
      // Get the views
      $views = scandir($viewDir);
      
      // Filter out non-JS files
      $views = array_filter($views, function($file) use ($viewDir) {
        return is_file($viewDir . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'js';
      });
      
      // Extract the file names without extensions
      $views = array_map(function($file) {
        $info = pathinfo($file);
        if (!$info) {
          throw new Exception("Invalid file path '$file'");
        }
        return $info['filename'];
      }, $views);
      return $views;
    }
    
}
?>