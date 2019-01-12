<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $currentHoroscope = calculateHoroscope($_GET["birthday"]);

    if(isset($_SESSION[$currentHoroscope])){
        echo json_encode($_SESSION[$currentHoroscope]);
    }
}

traceSession();

?>