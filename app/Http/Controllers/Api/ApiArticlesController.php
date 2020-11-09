<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Articles;
use Illuminate\Http\Request;

class ApiArticlesController extends Controller
{
    public function index()
    {
        $articles = Articles::all();
        return json_decode($articles);
    }
}
