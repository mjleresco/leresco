<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Handle contact form submission
        // ...
        return response()->json(['message' => 'Message sent successfully!']);
    }
}
?>