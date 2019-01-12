<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);

    $currentHoroscope = calculateHoroscope($_DELETE["birthday"]);

    if (isset($_SESSION[$currentHoroscope])) {
        unset($_SESSION[$currentHoroscope]);
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
}

?>