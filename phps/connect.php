<?php
$server="localhost";
$username="root";
$password="";
$db="chakrdb";

//MySqli connection

//create connection
$conn = new mysqli($server,$username,$password,$db);

//check connection
if($conn->connect_error){
	die("connection failed".$conn->connect_error);
}

//echo "connected via mysqli";





//PDO connection

/*try{
	$conn = new PDO("mysql:host=$server;dbname=chakrdb", $username, $password);
	//set the PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);*/

	//echo "connected!<br/>";
	/*$sql="";

	$conn->exec($sql);
	$last_id=$conn->lastInsertId();
	echo "entry created! Last inserted id is".$last_id;*/

/*}

catch(PDOException $e){
	echo $sql."<br/>".$e->getMessage();
}*/

?>