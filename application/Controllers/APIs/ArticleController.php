<?php

namespace App\Http\Controllers\Api;

use JSAP\App\Controllers\Controller;
use JSAPApp\Models\Article;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return response()->json($articles);
    }

    public function show($id)
    {
        $article = Article::find($id);
        return response()->json($article);
    }
}

?>
