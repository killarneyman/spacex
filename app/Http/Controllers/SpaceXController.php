<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class SpaceXController extends Controller
{
    public function index($year = null)
    {
        return response()->json([
            'success' => true
        ]);
    }
}

