<?php

// use App\Http\Controllers\Api\TodoController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/posts', [PostController::class, 'index']);
// Route::post('/posts/store', [PostController::class, 'store']);
// Route::post('/posts/edit', [PostController::class, 'edit']);
// Route::post('/posts/update', [PostController::class, 'update']);
// Route::post('/posts/update', [PostController::class, 'update']);
Route::group(['middleware' => 'api'], function () {
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts/store', [PostController::class, 'store']);
    Route::post('/edit', [PostController::class, 'edit']);
    Route::post('/update', [PostController::class, 'update']);
});

// ルーティング一部分だけ使う
// Route::apiResource('users', UserController::class)->except([
//     'create', 'store', 'update', 'destroy'
// ]);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
