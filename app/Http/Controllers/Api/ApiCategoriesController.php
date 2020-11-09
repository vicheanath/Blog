<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categories;

class ApiCategoriesController extends Controller
{
    public function index()
    {
        $categories = Categories::all();
        return json_decode($categories);
    }
}
