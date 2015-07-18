<?php
require 'connect.php';

$username=$_POST['username'];
$password=md5($_POST['password']);

$query= "SELECT * FROM users WHERE Username='$username' AND Password='$password'";

$result=$conn->query($query);

$num_rows=$result->num_rows;

if($num_rows==0){
	//echo "Incorrect username and password";
	header('Location: ../login.html');
	//echo "not found";

}
else{
	//Login sucessful
	session_start();
	$_SESSION['username']=$username;
	header('Location: ../index.php');

}


$conn->close();



?>