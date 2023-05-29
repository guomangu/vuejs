<?php
header("Access-Control-Allow-Origin: *");
// $lol='[{
//     "type": "kawaii",
//     "group":{
//       "uno":{
//         "s":"https://giphy.com/embed/oufD9vopmRy3vpF44m",
//         "h":"Je suis gentil",
//         "p":"Je cherche le lover supreme"
//       },
//       "dos":{
//         "s":"https://giphy.com/embed/L5f4Z5JoOKARG",
//         "h":"Je suis bizarre",
//         "p":"Je cherche le pain"
//       },
//       "tres": {
//         "s":"https://giphy.com/embed/2NJkigfPiu2dmpZg99",
//         "h":"Je suis interessant",
//         "p":"Je cherche le sushi"
//       }
//     }
//   },{
//     "type": "bad",
//     "group":{
//       "uno":{
//         "s":"https://giphy.com/embed/SFKnWcs4gMHTgQLu27",
//         "h":"Je profite de la vie",
//         "p":"Je mappelle Guillaume et je fais du cachou"
//       },
//       "dos":{
//         "s":"https://giphy.com/embed/XGsapliCHRoo6xxW3l",
//         "h":"Je profite de la mort",
//         "p":"Je mappelle Guillaume et je fais du cash"
//       },
//       "tres": {
//         "s":"https://giphy.com/embed/SVZz4fczta90Y",
//         "h":"Je profite de la defaite",
//         "p":"Je mappelle Guillaume et je fais du mounou"
//       }
//     }
//   }]'; 


// $lol=array(
//   "tag"=>array(
//     1=>"commentary",
//     2=>"gaming",
//     6=>"defi",
//     12=>"compilation"
//   ),
//   "star"=>array(
//     3=>"biili",
//     4=>"mick",
//     5=>"gu",
//     13=>"jesus",
//   )
// );


include("connect.php");

$rq="SELECT * FROM star ORDER BY RAND();";
$state=$bdd->prepare($rq);
$state->execute();
$result = $state->fetchAll();
$lol["star"]=$result;

$rq="SELECT * FROM tag;";
$state=$bdd->prepare($rq);
$state->execute();
$result = $state->fetchAll();
$lol["tag"]=$result;

// var_dump($lol);



$lol2=json_encode($lol)."\n"; 

// var_dump($lol2);

echo $lol2;

?>