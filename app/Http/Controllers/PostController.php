<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;


class PostController extends Controller
{
    public function getPosts($page)
    {

        if ($page <= 0) {
            abort(400);
        }

        $perPage = 100;
        $skip = ($page - 1) * $perPage;

        $posts = Post::skip($skip)->take($perPage)->get();

        if ($posts->isEmpty()) {
            return response()->json(['next_page' => null, 'posts' => []]);
        }

        $nextPage = $page + 1;

        return response()->json(['next_page' => $nextPage, 'posts' => $posts]);
    }

    public function getPostsById($id)
    {

        $posts = Post::where("_id", '=', $id)->first();

        return response()->json(["posts" => $posts]);
    }

    public function getPostsByUsername($username, $page)
    {

        if ($page <= 0) {
            abort(400);
        }

        $perPage = 100;
        $skip = ($page - 1) * $perPage;

        $posts = Post::where('author', $username)
            ->skip($skip)
            ->take($perPage)
            ->get();

        if ($posts->isEmpty()) {
            return response()->json(['next_page' => null, 'posts' => []]);
        }

        $nextPage = $page + 1;

        return response()->json(['next_page' => $nextPage, 'posts' => $posts]);
    }

    public function store(Request $request)
    {
       $post = new Post;

       $post->title = $request->title;
       $post->_id = $request->id;
       $post->type = $request->type;
       $post->author = $request->author;
       $post->body = $request->body;
       $post->likes =0;
       $post->dislikes =0;
       $post->image_link = $request->has('image_link') ? $request->image_link : null;
       $post->save();

       return response()->json(["post" => $post], 201);
   }

   public function update(Request $request, $postId)
   {
       $post = Post::find($postId);

       if ($request->has('is_like')) {
          $post->likes = $post->likes + 1;
       }
       else {
          $post->dislikes = $post->dislikes + 1;
       }

       $post->save();

       return response()->json(["post" => $post], 201);
   }

    public function destroy($postId)
    {
        $post = Post::find($postId);
        $post->delete();

        return response()->json(["result" => "ok"], 200);
    }
}
