<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $_PUT);

    $currentHoroscope = calculateHoroscope($_PUT["birthday"]);

    if (isset($_SESSION["horoscope"])) {
        if (($currentHoroscope != "no date specified") && ($currentHoroscope != "No horoscope found"))
        {
            $_SESSION["horoscope"] = $currentHoroscope;
            echo json_encode(true);
        }
    } else {
        echo json_encode(false);
    }
} else {
    http_response_code(400);
}

?>