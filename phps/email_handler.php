<?php

$sender_name=$_POST['sender_name'];
$sender_email=$_POST['sender_email'];
$sender_subject=$_POST['sender_subject'];
$sender_message=$_POST['sender_message'];

$to='leocapillo@gmail.com';
$headers='From: '.$sender_email;

if(mail($to, $sender_subject, $sender_message, $headers)){
	echo "Sent";
}

else{
	echo "not sent";
}




?>