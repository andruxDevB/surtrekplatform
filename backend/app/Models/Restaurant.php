<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'city',
        'sales_executive',
        'email',
        'phone',
        'active'
    ];

    public $timestamps = false;

    public function menus(): HasMany
    {
        return $this->hasMany(Menu::class, 'restaurant_id');
    }
}
