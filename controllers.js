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
	
	
});
