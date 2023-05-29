
<?php 

include("connect.php");
header("Access-Control-Allow-Origin: *");


$rq="SELECT * FROM star where idStar = (SELECT idStar
FROM lienstartag
GROUP BY idStar
HAVING count(*) <= ALL (SELECT count(*)
                    FROM lienstartag
                    GROUP BY idStar)LIMIT 1) ;";
// var_dump($rq);
$state=$bdd->prepare($rq);
$state->execute();
$lol["star"] = $state->fetch();


$rq="SELECT * FROM tag where idTag = (SELECT idTag
FROM lienstartag
GROUP BY idTag
HAVING count(*) <= ALL (SELECT count(*)
                    FROM lienstartag
                    GROUP BY idTag)LIMIT 1) ;";
// var_dump($rq);
$state=$bdd->prepare($rq);
$state->execute();
$lol["tag"]  = $state->fetch();



// var_dump($lol);
echo(json_encode($lol)."\n");
?>