var app = angular.module("app",["ngSanitize"]);

app.controller("MainCtrl",['$scope',function($scope){
	$scope.main = true;
	$scope.summary = false;
	$scope.tech = false;
	$scope.screenshots = false;
	$scope.resume = false;
	
	$scope.back = function(){
		$scope.resetPages();
		$scope.main = true;
	}
	$scope.resetPages = function(){
		$scope.main = false;
		$scope.summary = false;
		$scope.tech = false;
		$scope.screenshots = false;
		$scope.resume = false;	
	}
	
	$scope.showSummary = function(){
		$scope.resetPages();
		$scope.summary = true;
	};
	
	$scope.showTech = function(){
		$scope.resetPages();
		$scope.tech = true;
	};
	
	$scope.showScreenshots = function(){
		$scope.resetPages();
		$scope.screenshots = true;
	};
	
	$scope.showResume = function(){
		$scope.resetPages();
		$scope.resume = true;
	};
	
	$scope.portfolio = [{
		title: "CGI IQ Suite &reg; Mobile",
		src: "//www.placehold.it/650x450",
		description: "CGI IQ Suite &reg; is CGI's registered project management suite. It provides high visibility of operations to team members and clients, as well as informative dashboards for management. CGI IQ Suite &reg; Mobile is currently being used by over 10 projects internally.",
        slideshow:[]
	},{
		title: "Nursing Home Advisor",
		src: "//www.placehold.it/650x450",
		description: "Nursing Home Advisor (NHA) is an ongoing app that we expect to release in 2014 that helps individuals find the best nursing homes in the area, based on community data and surveys.",
        slideshow:[]
	},{
		title: "Vets Guide",
		src: "//www.placehold.it/650x450",
		description: "This app for iPhone was used in a demo with the Department of Veteran's Affairs to help provide services to those who have returned from serving their country. It showed local and regional VA clinics, food pantries, etc.",
        slideshow:[]
	},{
		title: "CGI IQ Suite &reg; Scribe",
		src: "//www.placehold.it/650x450",
		description: "Scribe is a specialty app I'm currently working on that combines advanced note taking capabilities with the robustness of CGI IQ Suite &reg;. Features will include live writing through web sockets and synchronization with CGI IQ Suite &reg;",
        slideshow:[]
	},{
		title: "arosenb2.github.io",
		src: "//www.placehold.it/650x450",
		description: "I designed and coded this site you are currently on to help showcase my talent.",
        slideshow:[]
	},{
		title: "Highlands Fellowship Small Groups",
		src: "//www.placehold.it/650x450",
		description: "This is a personal project I'm working on for my church that aims to provide a social media experience for small groups, allowing them to meet online or facilitate in person meetings.",
        slideshow:[]
	},{
		title: "Custom Building Solutions Inc.",
		src: "//www.placehold.it/650x450",
		description: "I am currently desigining and coding a custom Wordpress theme for a local general contractor.",
        slideshow:[]
	}];
}]);
