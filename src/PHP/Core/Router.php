<?php

namespace JSAP\PHP\Core;

class Router
{
    protected $routes = [];
    protected $is_admin_request = false;
    
    public function add($method, $route, $controller, $action, $is_admin_route = false) {
        //controller namespace
        $c_ns = '\\JSAP\\App\\Controllers\\';
        
        if($is_admin_route){
            $c_ns = '\\JSAP\\PHP\\Core\\Admin\\Controllers\\';
        }
        $this->routes[] = [
            'method' => $method,
            'route' => $route,
            'controller' => $c_ns . $controller,
            'action' => $action
        ];
    }
        
    public function match($request) {
        // Strip query parameters from the request path
        $path = strtok($request->getPath(), '?'); // Get the part before the query string
        
        foreach ($this->routes as $route) {
            $pattern = preg_replace('/\{(\w+)\}/', '([^\/]+)', $route['route']);
            $pathMatch = preg_match('#^' . $pattern . '$#', $path, $matches);
            
            if ($pathMatch && $request->getMethod() === $route['method']) {
                // Extract route parameters
                $params = [];
                foreach ($matches as $key => $value) {
                    $params[$key] = $value;
                }
                return [$route, $params];
            }
        }
        
        return null;
    }
}

?>