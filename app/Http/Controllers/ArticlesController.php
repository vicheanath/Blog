<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticlesStoreReques;
use Illuminate\Http\Request;
use App\Models\Articles;
use App\Models\Categories;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Articles::latest()->simplePaginate(10);
        return view('articles.index')->with('articles', $articles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = array();
        foreach (Categories::all() as $category) {
            $categories[$category->id] = $category->name;
        }
        return view('articles.create')->with('categories', $categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticlesStoreReques $request)
    {
        $image_path = '';
        if($request->hasFile('thumbnail')){
            $image_path = $request->file('thumbnail')->store('thumbnail');
        }
        // dd($image_path);
        $article = Articles::create([
            'user_id' =>$request->userid,
            'category_id' =>$request->category,
            'thumbnail' =>$image_path,
            'title' =>$request->title,
            'body' =>$request->body,
            'slug' =>$request->slug,
            'status' =>$request->status
        ]);
        if (! $article){
            return redirect()->back()->with('error','Sorry, there a problen while post article');
        }
        return redirect()->route('articles.index')->with('success','Articles, created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
