<?php
header('Location: http://localhost/Teststuff/Angular_learning/#Friends');
require 'connect.php';

$name=$_GET['friendName'];
$age=$_GET['friendAge'];
$ntly=$_GET['friendNtly'];
$kwds=$_GET['friendkws'];
$spl_ftr=$_GET['friendftr'];

$query="INSERT INTO friends(name,age,nationality,keywords,spl_ftr) VALUES
	('$name', '$age','$ntly', '$kwds', '$spl_ftr')";
$conn->query($query);
?>
