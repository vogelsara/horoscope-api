<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentHoroscope = calculateHoroscope($_POST["birthday"]);
    
    if (isset($_SESSION["horoscope"])) {
        echo json_encode(false);
    } else {
        if (($currentHoroscope != "no date specified") && ($currentHoroscope != "No horoscope found"))
        {
            $_SESSION["horoscope"] = $currentHoroscope;
            echo json_encode(true);
        }
    }
}

?>