<?php

namespace App\Http\Controllers;

use App\Models\Config;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AboutController extends Controller
{
    public function store(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(["message" => "Unauthorized"], 403);
        }

        $validator = Validator::make($request->all(), [
            "body" => "required|max:65535",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->error(), 422);
        }

        $validated = $validator->validated();

        $about = Config::where("key", "about")->first();
        if (!$about) {
            $about = Config::create([
                "key" => "about",
                "value" => $validated["body"]
            ]);
        } else {
            $about->value = $validated["body"];
            $about->save();
        }

        return response()->json([
            "message" => "Saved about",
            "body" => $about->value,
        ]);
    }

    public function get()
    {
        $about = Config::where("key", "about")->first();
        if (!$about) {
            return response()->json(["message" => "Not found!"], 404);
        }

        return response()->json(["body" => $about->value]);
    }

    public function upload(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(["message" => "Unauthorized"], 403);
        }

        $validator = Validator::make($request->all(), [
            "media" => ["required", "mimes:jpeg,jpg,png,webp,gif"]
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $path = $request->file("media")->storePublicly("public");

        $media = Media::create([
            "path" => $path,
            "type" => "gallery"
        ]);

        $media->path = Storage::url($media->path);

        return response()->json(["message" => "Uploaded media", "image" => $media->toArray()]);
    }

    public function getImages()
    {
        $images = Media::where("type", "gallery")->get()->map(function ($media) {
            $media->path = Storage::url($media->path);
            return $media;
        });

        return response()->json(["images" => $images->toArray()]);
    }

    public function deleteImage(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(["message" => "Unauthorized"], 403);
        }

        $validator = Validator::make($request->all(), [
            "id" => "required|integer",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $validated = $validator->validated();

        $media = Media::find($validated["id"]);
        if (!$media) {
            return response()->json(["message" => "Not found"], 404);
        }

        Storage::delete($media->path);
        $media->delete();
        return response()->json(["message" => "Deleted image successfully"]);
    }
}
