<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'thumbnail',
        'title',
        'body',
        'slug',
        'status'
    ];
    public function users()
    {
        return $this->belongsTo(Users::class);
    }
    public function categories()
    {
        return $this->belongsTo(Users::class);
    }
}
