<?php

//Admin routes
$app->router->add('GET',  '/admin/login',                          AdminController::class, 'login',                 true);
$app->router->add('POST', '/admin/login',                          AdminController::class, 'login',                 true);
$app->router->add('GET',  '/admin/request-reset',                  AdminController::class, 'requestReset',          true);
$app->router->add('POST', '/admin/request-reset',                  AdminController::class, 'requestReset',          true);
$app->router->add('GET',  '/admin/reset-password',                 AdminController::class, 'resetPassword',         true);
$app->router->add('POST', '/admin/reset-password',                 AdminController::class, 'resetPassword',         true);
$app->router->add('GET',  '/admin/email-verification',             AdminController::class, 'sendVerificationEmail', true);
$app->router->add('POST', '/admin/email-verification',             AdminController::class, 'sendVerificationEmail', true);
$app->router->add('GET',  '/admin/verify-email',                   AdminController::class, 'verifyEmail',           true);
$app->router->add('POST', '/admin/verify-email',                   AdminController::class, 'verifyEmail',           true);
$app->router->add('GET',  '/admin/logout',                         AdminController::class, 'logout',                true);
$app->router->add('GET',  '/admin',                                AdminController::class, 'dashboard',             true);
$app->router->add('GET',  '/admin/dashboard',                      AdminController::class, 'dashboard',             true);
$app->router->add('GET',  '/admin/createAdmin',                    AdminController::class, 'createAdmin',           true);
$app->router->add('POST', '/admin/createAdmin',                    AdminController::class, 'createAdmin',           true);
$app->router->add('GET',  '/admin/user-list',                      AdminController::class, 'listAdmins',            true);
$app->router->add('GET',  '/admin/manage-user/{user_id}/{action}', AdminController::class, 'manageUser',            true);

?>