<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION["horoscope"])) {
        echo json_encode($_SESSION["horoscope"]);
    } else {
        echo json_encode("");
    }
} else {
    http_response_code(400);
}

traceSession();

?>