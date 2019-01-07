<?php

session_start();

require 'commonFunctions.php';

$currentHoroscope = calculateHoroscope($_GET["birthday"]);

if(isset($_SESSION[$currentHoroscope])){
    echo json_encode($_SESSION[$currentHoroscope]);
}

?>