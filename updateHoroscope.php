<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $_PUT);

    $currentHoroscope = calculateHoroscope($_PUT["birthday"]);
    $horoscopeInputText = $_PUT["horoscope-input"];

    if (isset($_SESSION[$currentHoroscope])) {
        $_SESSION[$currentHoroscope] = $horoscopeInputText;
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
}

?>