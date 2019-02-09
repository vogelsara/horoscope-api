<?php

session_start();

require 'commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_SESSION["horoscope"])) {
        unset($_SESSION["horoscope"]);
        error_log("deleteHoroscope.php: isset");
        echo json_encode(true);
    } else {
        error_log("deleteHoroscope.php: NOT isset");
        echo json_encode(false);
    }
}

traceSession();

?>