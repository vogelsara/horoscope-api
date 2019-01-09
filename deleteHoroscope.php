<?php

session_start();

require 'commonFunctions.php';

parse_str(file_get_contents("php://input"), $_PUT);

$currentHoroscope = calculateHoroscope($_PUT["birthday"]);

if (isset($_SESSION[$currentHoroscope])) {
    unset($_SESSION[$currentHoroscope]);
    echo json_encode(true);
} else {
    echo json_encode(false);
}

?>