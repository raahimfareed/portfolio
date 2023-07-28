<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "company",
        "description",
        "start",
        "end",
        "media_id"
    ];

    protected $dates = [
        "start",
        "end"
    ];

    public function media()
    {
        return $this->belongsTo(Media::class);
    }
}
