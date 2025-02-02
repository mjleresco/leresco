<?php


//Index routes
$app->router->add('GET', '/', 'IndexController', 'home');
$app->router->add('GET', '/blog', IndexController::class, 'blog');
$app->router->add('GET', '/donate', IndexController::class, 'donate');
$app->router->add('GET', '/event/{event}', IndexController::class, 'event');
$app->router->add('GET', '/impact', IndexController::class, 'impact');
$app->router->add('GET', '/volunteer', IndexController::class, 'volunteer');
$app->router->add('GET', '/contact', IndexController::class, 'contact');
$app->router->add('GET', '/faqs', IndexController::class, 'faqs');
$app->router->add('GET', '/about', IndexController::class, 'about');

// User routes
$app->router->add('GET', '/login', UserController::class, 'showLoginForm');
$app->router->add('POST', '/login', UserController::class, 'login');
$app->router->add('GET', '/register', UserController::class, 'showRegistrationForm');
$app->router->add('POST', '/register', UserController::class, 'register');
$app->router->add('POST', '/logout', UserController::class, 'logout');
$app->router->add('POST', '/form-submit', AjaxController::class, 'handle');
$app->router->add('GET', '/logout', UserController::class, 'logout');
// Example AJAX route
$app->router->add('POST', '/ajax/some-action', AjaxController::class, 'someAction');

?>