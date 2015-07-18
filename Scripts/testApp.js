
var app= angular.module("testApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',
		{
			templateUrl:"partials/index.html",
			controller:"homeController"
		})

	.when('/Friends',
		{
			templateUrl:"partials/friends.html",
			controller:"friendsController"
		})

	.when('/About',
		{
			templateUrl:'partials/about.html',
			controller:'aboutController'
		})
	.when('/Contact',
		{
			templateUrl:'partials/contact.html',
			controller:'contactController'
		})
	.otherwise({redirectTo:'/'});
});

/*app.config('$urlRouterProvider','$stateProvider',
	function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:"partials/index.html",
		controller:'testController'
	})

	.state('about',{
		url:'/about',
		templateUrl:"partials/about.html"
	})

});*/



app.controller('defController',function($scope){
	$scope.navLinks=["About","Contact","Friends"];

	$("#account").click(function(){
		$(".dropdown-menu").slideToggle();
	});

	$(".dropmenubtn").click(function(){
		$('.dropdown-menu').slideUp();
	});

	$('#collapserbtn').click(function(){
		$('#collapsible').slideToggle(500);
	});

	$('a').not('#account').click(function(){

		$('#collapsible').slideUp(200);
	});


});

app.controller('homeController',function($scope){
	$scope.load=function(){
		$(document).ready(function(){
			$("#popbtn").click(function(e){
				e.preventDefault();
				$("#successAlert").slideToggle(600);
			});

			$("a.pop").click(function(e){
				e.preventDefault();
			});

			$("a.pop").popover();

			$("[rel='tooltips']").tooltip();
			/*$("#hellish").animate({left:'0px'}, 5000, function(){
				$("#tohell").fadeIn(15000,function(){
					$("#pic").fadeIn(10000, function(){
						$("#hellish").fadeOut(10000);
					});
				});
			});*/
		});		

	};

	$scope.load();
});

app.controller('aboutController',function($scope){
	$scope.details=['Indian', 'Amateur Guitarist', 'Polyglot','Software Enthusiast', 'Football and cricket fan', 'Music admirer'];
});


app.controller('contactController',function($scope){
	$scope.load=function(){
		$(document).ready(function(){

			$("#callbutton").click(function(){
				$(".hiddendivs").hide();
				$("#calldiv").slideToggle();
			});
			/*$("#emailbutton").click(function(){
				$(".hiddendivs").hide();
				$("#emaildiv").slideToggle();
			});*/
			$("#fbbutton").click(function(){
				$(".hiddendivs").hide();
				$("#fbdiv").slideToggle();
			});
			$("#twitbutton").click(function(){
				$(".hiddendivs").hide();
				$("#twitdiv").slideToggle();
			});
		});
	};	

	$scope.load();
});


app.controller("friendsController",function($scope){
	
	
});