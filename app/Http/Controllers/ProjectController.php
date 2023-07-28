<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with("media")->get()->map(function ($project) {
            $project->media->path = Storage::url($project->media->path);
            $project->description = Str::words(preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $project->description), 10);
            return $project;
        });

        return Inertia::render('Projects', compact("projects"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            "name" => "string|max:255|required",
            "description" => "required",
            "date" => "required",
            "github" => "nullable|url|regex:/^https?:\/\/(www\.)?github\.com\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)(\/)?$/i",
            "live" => "nullable|url",
            "image" => "file|required|mimes:jpg,jpeg,png,webp",
        ]);

        $image = $request->file("image");
        $path = $image->storePublicly("public");
        $media = Media::create([
            "path" => $path,
            "type" => "project"
        ]);
        $validated["github_link"] = $validated["github"];
        $validated["live_link"] = $validated["live"];
        $validated["media_id"] = $media->id;

        Project::create($validated);
    }

    public function create() {
        $projects = Project::get();
        return Inertia::render('Admin/Projects', [
            'projects' => $projects
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
