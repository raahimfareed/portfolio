<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $projects = Project::limit(4)->with("media")->get()->map(function ($project) {
        $project->media->path = Storage::url($project->media->path);
        $project->description = Str::words(preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $project->description), 10);
        return $project;
    });
    return Inertia::render('Index', compact('projects'));
})->name("index");

Route::controller(AboutController::class)->group(function() {
    Route::get("/about", "index")->name("about");

    Route::middleware(["auth"])->group(function () {
        Route::get("/admin/about", "create")->name("admin.about");
        Route::post("/admin/about", "store");
        Route::post("/admin/gallery", "upload")->name("admin.gallery");
        Route::delete("/admin/gallery/{media}", "destroyImage")->name("admin.gallery.delete");
    });
});

Route::controller(ProjectController::class)->group(function() {
    Route::get("/projects", "index")->name("projects");
    Route::middleware(["auth"])->group(function () {
        Route::get('/admin/projects', "create")->name('admin.projects');
        Route::post('/admin/projects', "store");
        Route::delete('/admin/projects/{project}', "destroy")->name('admin.projects.delete');
    });
});

Route::controller(ExperienceController::class)->group(function() {
    Route::get("/experience", "index")->name("experience");

    Route::middleware(["auth"])->group(function () {
        Route::get('/admin/experience', 'create')->name('admin.experience');
        Route::post('/admin/experience', 'store');
        Route::delete('/admin/experience/{experience}', 'destroy')->name('admin.experience.delete');
    });
});

Route::controller(ContactController::class)->group(function() {
    Route::get("/contact", "index")->name("contact");
    Route::post("/contact", "store")->middleware('throttle:3,1');

    Route::get('/admin/contact', 'create')->name('admin.contact');
});



Route::middleware('auth')->group(function () {
    Route::prefix("/admin")->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');
    });


    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
