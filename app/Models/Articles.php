<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->belongsTo(Users::class);
    }
    public function categories()
    {
        return $this->belongsTo(Users::class);
    }
}
