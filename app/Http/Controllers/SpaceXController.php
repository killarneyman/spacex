<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use App\Http\Controllers\Controller;

class SpaceXController extends Controller
{
    private const URL = 'https://api.spacexdata.com/v3/';
    
    private $client;
    private $year_regex = '/^(19|20)\d{2}$/';

    public function index($year = null)
    {
        // ignore non years outside the 19's & 20's
        $year = ($year && preg_match($this->year_regex, $year))?$year:null;
        $this->client = new Client([
            'base_uri' => self::URL,
            'http_errors' => true,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        $endpoint = 'launches';

        if($year) {
            $endpoint .= '?launch_year=' . $year;
        }

        $results = $this->client->get($endpoint);

        if($results->getStatusCode() == '200') {
            $response = $results->getBody()->getContents();

            return response($response)->header('Content-Type', 'application/json');
        }

        return response()->json([
            'success' => false
        ]);
    }
}

