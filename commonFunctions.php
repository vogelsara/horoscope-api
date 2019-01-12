<?php

function traceAssocArray($assocArray) {
    foreach ($assocArray as $key => $value) {
        error_log($key.": ".$value);
    }
}

function traceSession() {
    error_log("SESSION ---------->");
    traceAssocArray($_SESSION);
    error_log("SESSION <----------");
}

function calculateHoroscope($date) {

    $subDate = substr($date, -5);

    if ($date === "") {
        return "no date specified";
    } elseif ("03-21" <= $subDate && $subDate <= "04-19") {
        return "aries";
    } elseif ("04-20" <= $subDate && $subDate <= "05-20") {
        return "taurus";
    } elseif ("05-21" <= $subDate && $subDate <= "06-20") {
        return "gemini";
    } elseif ("06-21" <= $subDate && $subDate <= "07-22") {
        return "cancer";
    } elseif ("07-23" <= $subDate && $subDate <= "08-22") {
        return "leo";
    } elseif ("08-23" <= $subDate && $subDate <= "09-22") {
        return "virgo";
    } elseif ("09-23" <= $subDate && $subDate <= "10-22") {
        return "libra";
    } elseif ("10-23" <= $subDate && $subDate <= "11-21") {
        return "scorpio";
    } elseif ("11-22" <= $subDate && $subDate <= "12-21") {
        return "saggitarius";
    } elseif ("12-22" <= $subDate || $subDate <= "01-19") {
        return "capricorn";
    } elseif ("01-20" <= $subDate && $subDate <= "02-18") {
        return "aquarius";
    } elseif ("02-19" <= $subDate && $subDate <= "03-20") {
        return "pisces";
    } else {
        return "no horoscope found";
    }
}

?>