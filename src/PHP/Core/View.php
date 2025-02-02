<?php

namespace JSAP\PHP\Core;

class View
{
    public function render($view, $data = [])
    {
        extract($data);
        require __DIR__ . '/../../../application/Views/' . str_replace('.', '/', $view) . '.php';
    }
    
    public function renderSPA($view, $data = [])
    {
        extract($data);
        require __DIR__ . '/../../../application/SPAs/' . str_replace('.', '/', $view) . '.php';
    }
}

?>