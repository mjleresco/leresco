<?php

namespace JSAP\PHP\Core;

class Config
{
    private $config;

    public function __construct($file)
    {
        $this->config = require $file;
    }

    public function __get($name)
    {
        return $this->config[$name] ?? null;
    }
}

?>