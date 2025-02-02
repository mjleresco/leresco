<?php

namespace JSAP\PHP\Core;

class Application
{
    public $router;
    public $request;

    public function __construct()
    {
        // Initialize the router
        $this->router = new Router();

        // Initialize the request object
        $this->request = new Request();
        
    }
    
    public function run()
    {
        // Match the request to a route
        $route = $this->router->match($this->request);
        
        if ($route) {
            // Call the matched route's controller and action
            $controller = new $route[0]['controller']();
            $action = $route[0]['action'];
            $params = $route[1];
            // Call controller method
            call_user_func_array([$controller, $action], $params);
        } else {
            // Handle 404 - Not Found
            $this->render('errors/404', ['message' => 'Page not found'], 404);
        }
    }

    public function render($view, $data = [], $statusCode = 200)
    {
        http_response_code($statusCode);
        extract($data);
        require __DIR__ . "/../../../application/Views/{$view}.php";
    }
}

?>