<?php
// Root
$app->router->add('GET', '/portfolio', 'SPAs\\PortfolioController', 'index');
$app->router->add('GET', '/me',        'SPAs\\PortfolioController', 'me');
?>
