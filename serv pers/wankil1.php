<?php
header("Access-Control-Allow-Origin: *");
include("connect.php");

$poster=json_decode(file_get_contents('php://input'), true);
if (is_string($poster)) {
    $poster=json_decode($poster,true)
}

