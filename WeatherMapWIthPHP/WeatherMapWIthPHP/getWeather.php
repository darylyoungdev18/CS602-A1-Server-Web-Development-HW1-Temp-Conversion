<?php
if ($_SERVER ['REQUEST_METHOD'] === 'POST'){
    $zip = $_POST['zip'] ?? '';
    $countryCode = $_POST['countryCode'] ?? '';

    $apiKey = 'bc7707065fc4f117cd151ebec93b9afc';
    $apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip={$zip},{$countryCode}&appid={$apiKey}";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    header('Content-Type:application/json');
    echo $response;
}else{
    echo json_encode(['error' => 'Invalid request method']);
}

?>