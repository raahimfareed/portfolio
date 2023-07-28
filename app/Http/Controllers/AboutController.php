<?php

namespace App\Http\Controllers;

use App\Models\Config;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $about = Config::where("key", "about")->first();
        $images = Media::where("type", "gallery")->get()->map(function ($media) {
            $media->path = Storage::url($media->path);
            return $media;
        });

        return Inertia::render('About', [
            "about" => $about->value,
            'images' => $images->toArray()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $about = Config::where("key", "about")->first();
        $images = Media::where("type", "gallery")->get()->map(function ($media) {
            $media->path = Storage::url($media->path);
            return $media;
        });

        return Inertia::render('Admin/About', [
            "about" => $about->value,
            "images" => $images->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "body" => "required|max:65535",
        ]);

        $about = Config::where("key", "about")->first();
        if (!$about) {
            $about = Config::create([
                "key" => "about",
                "value" => $request->body
            ]);
        } else {
            $about->value = $request->body;
            $about->save();
        }
    }

    public function upload(Request $request)
    {
        $request->validate([
            "media" => ["required", "mimes:jpeg,jpg,png,webp,gif"]
        ]);

        $path = $request->file("media")->storePublicly("public");

        $media = Media::create([
            "path" => $path,
            "type" => "gallery"
        ]);

        $media->path = Storage::url($media->path);
    }

    public function destroyImage(Request $request, Media $media)
    {
        Storage::delete($media->path);
        $media->delete();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
