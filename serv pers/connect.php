<?php
$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,);
try 
{
	if ( $_SERVER['SERVER_NAME'] == "localhost" ) 
	{
		$bdd = new PDO( 'mysql:host=localhost;dbname=star',
						'root',
						'',
						$options);
	} 
	else 
	{
		$bdd = new PDO( 'mysql:host=alternglol.mysql.db;dbname=alternglol',
						'alternglol',
						'Alternglol2',
					$options);
	}
} 
catch ( Exception $e ) 
{
	die('Erreur : '. $e->getMessage());
}
?>