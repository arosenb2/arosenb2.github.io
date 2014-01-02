var app = angular.module("app",[]);

app.controller("MainCtrl", function($scope){
	$scope.summary = false;
	$scope.tech = false;
	$scope.screenshots = false;
	$scope.resume = false;
	
	$scope.resetPages = function(){
		$scope.summary = false;
		$scope.tech = false;
		$scope.screenshots = false;
		$scope.resume = false;	
	}
	
	$scope.showSummary = function(){
		resetPages();
		$scope.summary = true;
	};
	
	$scope.showTech = function(){
		resetPages();
		$scope.tech = true;
	};
	
	$scope.showScreenshots = function(){
		resetPages();
		$scope.screenshots = true;
	};
	
	$scope.showResume = function(){
		resetPages();
		$scope.resume = true;
	};
	
	
});
