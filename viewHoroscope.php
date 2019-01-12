<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $currentHoroscope = calculateHoroscope($_GET["birthday"]);

    if (($currentHoroscope != "no date specified") && ($currentHoroscope != "no horoscope found")) {
        if (isset($_SESSION[$currentHoroscope])) {
            echo json_encode($_SESSION[$currentHoroscope]);
        } else {
            echo json_encode("");
        }
    } else {
        echo json_encode("");
    }
}

traceSession();

?>