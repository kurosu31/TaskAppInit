<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\TodoResource;


class PostController extends Controller
{
    // postの一覧を表示する
    public function index()
    {
        return TodoResource::collection(Post::all());
    }
    // public function show()
    // {
    //     $todo = Post::find();
    //     return new TodoResource($todo);
    // }
}
