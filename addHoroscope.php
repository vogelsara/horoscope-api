<?php

session_start();

require 'commonFunctions.php';

$currentHoroscope = calculateHoroscope($_POST["birthday"]);
$horoscopeInputText = $_POST["horoscope-input"];

if (isHoroscopeAlreadySet($currentHoroscope) == 0) {
    $_SESSION[$currentHoroscope] = $horoscopeInputText;
}

function isHoroscopeAlreadySet($horoscope) {
    if (isset($_SESSION[$horoscope])) {
        return 1;
    } else {
        return 0;
    }
}

?>