<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::all();

        return $users->toArray();
    }
    public function store(Request $request)
    {
        //追加
        $users = new User;

        $users->name = $request->input('name');
        $users->email = $request->input('email');

        $users->save();
    }

    public function show($id)
    {
        //追加
        $users = User::find($id);

        return  $users->toArray();
    }

    public function update(Request $request, $id)
    {
        //追加
        $users = User::find($id);

        $users->name = $request->input('name');
        $users->email = $request->input('email');

        $users->save();
    }

    public function destroy($id)
    {
        //追加
        $users = User::find($id);

        $users->delete();
    }
}
