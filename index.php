<?php
session_start();
if(!isset($_SESSION['username'])){
	header('Location: login.html');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<title>Test</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="CSS/styles.css">
</head>

<body ng-app="testApp" ng-controller="defController">


	<!--nav bar start-->
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button id="collapserbtn" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapsible">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a id="test" class="navbar-brand" href="#/">Chakra's Club
				</a>
			</div>
			

			<div class="collapse navbar-collapse" id="collapsible">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#/">Home</a></li>
					<li><a href="#/About">About</a></li>
					<li><a href="#/Contact">Contact</a></li>
					<li><a href="#/Friends">Friends</a></li>
					<!-- <li><a href="friends.html">FriendsN</a></li> -->
				</ul>
				<ul class="nav navbar-nav navbar-right">

					<li class="dropdown">
						<a id="account" href="" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span>Your account<strong class="caret"></strong></a>

						<ul class="dropdown-menu">
							<li><a class="dropmenubtn"href="">Settings</a></li>
							<li><a class="dropmenubtn"href="">Edit profile</a></li>
							<li class="divider"></li>
							<li><a class="dropmenubtn"href="phps/logout.php">Log out</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!--nav bar end-->


	<div class="container" id="main" style="position:relative;top:80px">
		<div ng-view>
			
		</div>
	</div>
	<script src="Scripts/jquery-1.11.3.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="Scripts/angular.min.js"></script>
	<script src="Scripts/angular-route.min.js"></script>
	
	<script type="text/javascript" src="Scripts/testApp.js"></script>

	<div ng-include src="'partials/footer.html'">
	</div>

	<footer>
		<!-- <embed src="sounds/conj.mp3/> -->
	</footer>
		
</body>
</html>
