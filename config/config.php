<?php

return [
    'app' => [
        'name' => 'leresco',
        'version' => '1.0.0',
        'use-default-admin' => false,
        'app-debug' => 'true'
    ],
    'database' => [
        'host' => 'localhost:3306',
        'dbname' => 'portfolio',
        'user' => 'root',
        'password' => 'MJL1137IFlrc',
        'charset' => 'utf8mb4'
    ],
    'auth' => [
        'users_table' => 'users',
        'user_roles_table' => 'user_roles',
        // Add more configuration as needed
    ],
    'paystack' => [
        'api_key' => 'pk_test_3a4363cb90f11b1ae466bd2c9598c8cc8345cbbc'
    ],
    'flutterwave' => [
        'api_key' => 'your_flutterwave_api_key'
    ],
    'email' => [
        'smtp_host' => 'smtp.gmail.com',
        'smtp_port' => 587,
        'username' => 'mj.leresco@gmail.com',
        'password' => 'mjl-1137'
    ]
];

?>