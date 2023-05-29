<?php 

include("connect.php");
header("Access-Control-Allow-Origin: * ");
// header('Content-type: application/json;');

// var_dump(file_get_contents('php://input'));
$poster=json_decode(file_get_contents('php://input'), true);
if (is_string($poster)) {
    $poster=json_decode($poster,true);
}

// $poster=json_decode("{\"0\":{\"value\":1}, \"1\":{\"value\":8}}",true);
// var_dump($poster);
// echo"br";

(string)$rq="SELECT idTag FROM lienstartag WHERE ";
foreach ($poster as $key => $value) {
    $rq.="idStar = :idstar".$key." OR ";
}
$rq.="idStar = 0;";

$stat=$bdd->prepare($rq);
foreach ($poster as $key => $value) {
    // var_dump($value);
    $stat->bindParam(":idstar".$key,$value["value"],PDO::PARAM_INT);
}
// var_dump($stat);
$stat->execute();
// var_dump($stat);
// $result = $stat->fetchAll();

$rq2="SELECT * FROM tag WHERE ";
while ($row = $stat->fetch()) {
    // var_dump($row);
    $rq2.="idTag = ".$row["idTag"]." OR ";
}
$rq2.="idTag = 0";
// var_dump($rq2);

$stat2=$bdd->prepare($rq2);
$stat2->execute();
$result = $stat2->fetchAll();
// var_dump($result);

$js=json_encode($result);
// var_dump($js);
echo $js;