<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        "media_id",
        "name",
        "date",
        "description",
        "live_link",
        "github_link",
    ];

    public function media() {
        return $this->belongsTo(Media::class);
    }
}
