var app = angular.module("app",[]);

app.controller("MainCtrl", function($scope){
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
	
	
});
