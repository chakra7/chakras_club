<?php
require 'connect.php';

$first_name=$_POST['first_name'];
$last_name=$_POST['last_name'];
$email=$_POST['email'];
$dob=$_POST['date_of_birth'];
$username=$_POST['username'];
$gender=$_POST['gender'];
$password=md5($_POST['password']);

$query="INSERT INTO users(Username,First_Name, Last_Name, Gender, EMail_address, Date_of_birth, Password) VALUES 
	('$username','$first_name', '$last_name', '$gender', '$email', '$dob', '$password')";

$conn->query($query);


$conn->close();

//echo "registration successful";

header("Location: ../index.php");

?>