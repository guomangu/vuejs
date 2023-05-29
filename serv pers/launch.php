<?php 

include("connect.php");
header("Access-Control-Allow-Origin: *");

// $lol2=json_decode('{"star":{"idStar":18,"repTag":"perdu"},"tag":{"idTag":20,"repStar":"squeezie"}}',true);
$lol2=json_decode(file_get_contents('php://input'), true);

// var_dump($lol2);
// var_dump($lol2["star"]["repTag"]);
echo('<br>');

// ==========

$sqverif="SELECT idTag from tag where libTag LIKE :libtag";
$st=$bdd->prepare($sqverif);
$st->bindParam(":libtag",$lol2["star"]["repTag"],PDO::PARAM_STR);
$st->execute();
$rep=$st->fetch();
// var_dump($rep);
if($rep){
 $id=$rep["idTag"];
}else {
    $val=$lol2["star"]["repTag"];
    $sqlstar="INSERT INTO tag(libTag) VALUES (:libtag);";
    $stat=$bdd->prepare($sqlstar);
    $stat->bindParam(":libtag",$val,PDO::PARAM_STR);
    
    $stat->execute();
    $id = $bdd->lastInsertId();
}


// var_dump($id);

$sqlstar2="INSERT INTO lienstartag(idStar,idTag) VALUES (:idstar,:idtag);";
$stat3=$bdd->prepare($sqlstar2);
$stat3->bindParam(":idstar",$lol2["star"]["idStar"],PDO::PARAM_INT);
$stat3->bindParam(":idtag",$id,PDO::PARAM_INT);
$stat3->execute();













// ========================


$sqverif2="SELECT idStar from star where libStar LIKE :libstar";
$st2=$bdd->prepare($sqverif2);
$st2->bindParam(":libstar",$lol2["tag"]["repStar"],PDO::PARAM_STR);
$st2->execute();
$rep2=$st2->fetch();
// var_dump($rep2);
if ($rep2) {
    // var_dump("oui");
    $id2=$rep2["idStar"];
} else {
    $val2=$lol2["tag"]["repStar"];
    $sqltag="INSERT INTO star(libStar) VALUES (:libstar);";
    $stat2=$bdd->prepare($sqltag);
    $stat2->bindParam(":libstar",$val2,PDO::PARAM_STR);
    
    $stat2->execute();
    $id2 = $bdd->lastInsertId();
}



// var_dump($id2);

$sqltag2="INSERT INTO lienstartag(idStar,idTag) VALUES (:idstar,:idtag);";
$stat4=$bdd->prepare($sqltag2);
$stat4->bindParam(":idstar",$id2,PDO::PARAM_INT);
$stat4->bindParam(":idtag",$lol2["tag"]["idTag"],PDO::PARAM_INT);
$stat4->execute();



?>