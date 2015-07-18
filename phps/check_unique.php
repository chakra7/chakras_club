<?php
header("Content-Type: text/plain");
require 'connect.php';

$input=$_GET['input'];

$query="SELECT * FROM users WHERE Username='$input' OR EMail_address='$input'";

$result=$conn->query($query);

$num_rows=$result->num_rows;

if($num_rows!=0){
	echo "error";
}


?>