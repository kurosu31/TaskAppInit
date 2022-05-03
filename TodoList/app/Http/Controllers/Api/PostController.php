<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\TodoResource;

class PostController extends Controller
{
    // postの一覧を表示する
    public function index()
    {
        return TodoResource::collection(Post::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->title;
        $post->detail = $request->detail;
        $post->complete = $request->complete;
        $post->save();
        //PostをPostResourceとしてJSON形式で返す
        return new TodoResource($post);
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
    public function edit($request)
    {
        //
        $post = Post::find($request->id);
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->detail = $request->detail;
        $post->complete = $request->complete;
        $post->save();
        $posts = Post::find($request->id);
        return $posts;
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
