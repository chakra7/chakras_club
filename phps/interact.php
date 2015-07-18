<?php
header("Content-Type: application/json");
//establish connection 
require 'connect.php';
/*$input=$_GET['search'];
if(!isset($input)){
	echo "not set";
}*/


//make query as required
//if($input==''){
	$query="SELECT * FROM friends ORDER BY name";
/*}else{
	$query="SELECT * FROM friends WHERE name LIKE '$input%' ORDER BY name";
}*/

function jumble($array){
	$temp=array();
	foreach ($array as $key=>$value) {	
		$value_j=str_shuffle($value);
		$temp[$key]=$value_j;
	}
	return $temp;
}

$rows=array();

if($result=$conn->query($query)){
	
	while($row=$result->fetch_assoc()){
		//jumbling
		$row=jumble($row);

		$rows[]=$row;
	}
	echo json_encode($rows);
	$result->free();
}

else{
	die($conn->error);
}





?>