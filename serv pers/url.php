<?php
header("Access-Control-Allow-Origin: *");
include("connect.php");
$id=$_GET["id"];
$rq="SELECT * FROM star WHERE idStar=:idstar";
$state=$bdd->prepare($rq);
$state->bindParam(":idstar",$id,PDO::PARAM_INT);
$state->execute();
$result = $state->fetch();
echo(json_encode($result));
