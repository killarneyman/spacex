<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use App\Http\Controllers\Controller;

class SpaceXController extends Controller
{
    private const URL = 'https://api.spacexdata.com/v3/';
    
    private $client;

    public function index($year = null)
    {
        $this->client = new Client([
            'base_uri' => self::URL,
            'http_errors' => true,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        $results = $this->client->get('launches');

        if($results->getStatusCode() == '200') {
            $response = $results->getBody()->getContents();

            return response($response)->header('Content-Type', 'application/json');
        }

        return response()->json([
            'success' => false
        ]);
    }
}

