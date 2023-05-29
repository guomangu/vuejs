<?php 
header("Access-Control-Allow-Origin: *");

include("connect.php");

// header('Content-type: application/json;');

// $poster2="{\"0\":{\"value\":1}, \"1\":{\"value\":4}}";
// $poster2='{"0":{"value":3}}';
// $poster2=json_decode("{\"0\":{\"value\":1}, \"1\":{\"value\":3}}",true);

$poster2=json_decode(file_get_contents('php://input'), true);
if (is_string($poster2)) {
    $poster2=json_decode($poster2,true);
}
if (is_string($poster2)) {
    $poster2=json_decode($poster2,true);
}


// var_dump($poster2);
// var_dump($poster2["0"]);

// ======================


// (string)$rq="SELECT idStar FROM lienstartag WHERE ";
// foreach ($poster2 as $key => $value) {
//     $rq.="idTag = :idtag".$key." OR ";
// }
// $rq.="idTag = 0;";

// $stat=$bdd->prepare($rq);
// foreach ($poster2 as $key => $value) {
//     $stat->bindParam(":idtag".$key,$value["value"],PDO::PARAM_INT);
// }
// $stat->execute();




$arr=[];
foreach ($poster2 as $key => $value) {
    (string)$rq="SELECT idStar FROM lienstartag WHERE idTag = :idtag";
    $stat=$bdd->prepare($rq);
    $stat->bindParam(":idtag",$value["value"],PDO::PARAM_INT);
    $stat->execute();
    array_push($arr, $stat->fetchAll());
}


// var_dump($arr);
// var_dump("<br><br>");

$finalTab=[];
if (count($arr)>1) {
    foreach ($arr as $key0 => $valuebasic) {
        foreach ($arr[$key0] as $key => $value) {
            if (isset($arr[$key0+1])) {
                foreach ($arr[$key0+1] as $key2 => $value2) {
                    if ($value["idStar"]==$value2["idStar"]) {
                        // var_dump($value["idStar"]);
                        array_push($finalTab,$value["idStar"]);
                    }
                }
            }
            
        }
    }
}else {
    foreach ($arr[0] as $key => $value) {
        array_push($finalTab,$value["idStar"]);
    }
}
// var_dump($finalTab);



// ====================

// var_dump($stat->fetch());
$rq2="SELECT * FROM star WHERE ";
// while ($row = $stat->fetch()) {
// // foreach ($tab as $key => $value) {
//     // var_dump($value);
//     $rq2.="idStar = ".$row["idStar"]." OR ";
// }
foreach ($finalTab as $key => $value) {
    $rq2.="idStar = ".$value." OR ";
}
    
$rq2.="idStar = 0 ;";

// var_dump($rq2);
// var_dump($rq2);

$stat2=$bdd->prepare($rq2);
$stat2->execute();
$result = $stat2->fetchAll();
// var_dump($result);

$js=json_encode($result);
// var_dump($js);



header("Access-Control-Allow-Origin: *");
echo $js;
?>