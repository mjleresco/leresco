<?php

$app->router->add('GET',  '/api/projects',     'SPAs\\PortfolioController', 'getProjects');
$app->router->add('GET',  '/articles/{id}',    'SPAs\\PortfolioController', 'show');
$app->router->add('GET',  '/project/{id}',     'SPAs\\PortfolioController', 'getProject');
$app->router->add('POST', '/project',          'SPAs\\PortfolioController', 'addProject');
$app->router->add('POST', '/contact',          'SPAs\\PortfolioController', 'contact');

?>
