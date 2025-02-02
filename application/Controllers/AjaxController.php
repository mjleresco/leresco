<?php

namespace Fust\App\Controllers;

use Fust\PHP\Core\Controller;

class AjaxController extends Controller
{
    public function handle()
    {
        // Handle AJAX requests
        echo json_encode(['success' => true, 'message' => 'AJAX request handled']);
    }
}

?>