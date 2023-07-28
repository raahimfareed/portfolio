<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ExperienceController extends Controller
{

    public function index()
    {
        $experiences = Experience::with("media")->orderByDesc("start")->get()->map(function ($experience) {
            if ($experience->media) {
                $experience->media->path = Storage::url($experience->media->path);
            }
            return $experience;
        });

        return Inertia::render('Experience', compact("experiences"));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "title" => "required|max:255",
            "company" => "required|max:255",
            "description" => "required|max:1000",
            "start" => "required|date",
            "end" => "nullable|date",
            "image" => "nullable|file|mimes:jpg,jpeg,png,webp|max:4096",
        ]);
        $image = $request->file("image");
        $media = null;
        if ($image) {
            $path = $image->storePublicly("public");
            $media = Media::create([
                "path" => $path,
                "type" => "gallery"
            ]);
        }

        $exp = Experience::create($validated);
        if ($media) {
            $exp->media_id = $media->id;
            $exp->save();
        }
    }

    public function create () {
        $experiences = Experience::with("media")->orderByDesc("start")->get()->map(function ($experience) {
            if ($experience->media) {
                $experience->media->path = Storage::url($experience->media->path);
            }
            return $experience;
        });
        return Inertia::render('Admin/Experience', compact('experiences'));
    }


    public function destroy(Experience $experience)
    {
        $experience->delete();
    }
}
