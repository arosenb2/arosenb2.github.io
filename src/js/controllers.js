/*
 Digital Portfolio Controller
*/
var app = angular.module("app",["ngRoute","ngSanitize"]);

app.run(['$rootScope',function($rootScope){
    $rootScope.main = true,
    $rootScope.about = false,
    $rootScope.tech = false,
    $rootScope.portfolio = false,
    $rootScope.resume = false;
}]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        controller: "PageCtrl",
        templateUrl: "views/home.html"
    }).when("/about",{
        controller: "PageCtrl",
        templateUrl: "views/about.html"
    }).when("/tech",{
        controller: "PageCtrl",
        templateUrl: "views/tech.html"
    }).when("/portfolio",{
        controller: "PageCtrl",
        templateUrl: "views/portfolio.html"
    }).when("/portfolio/:id",{
        controller: "DetailsCtrl",
        templateUrl: "views/portfolio-details.html"
    }).when("/resume",{
        controller: "PageCtrl",
        templateUrl: "views/resume.html"
    }).otherwise({
        redirectTo: "/"
    });
}]);

app.service("projectService",function(){
    var projects = [{
        id:1,
		title: "CGI IQ Suite &reg; Mobile",
		src: "build/img/other/650x450.png",
		description: "CGI IQ Suite &reg; is CGI's registered project management suite. It provides high visibility of operations to team members and clients, as well as informative dashboards for management. CGI IQ Suite &reg; Mobile is currently being used by over 10 projects internally.",
        tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery"],
        images:[]
	},{
        id:2,
		title: "Nursing Home Advisor",
		src: "build/img/other/650x450.png",
		description: "Nursing Home Advisor (NHA) is an ongoing app that we expect to release in 2014 that helps individuals find the best nursing homes in the area, based on community data and surveys.",
        tags:["Objective C","iOS","PHP","MySQL"],
        images:[]
	},{
        id:3,
		title: "Vets Guide",
		src: "build/img/other/650x450.png",
		description: "This app for iPhone was used in a demo with the Department of Veteran's Affairs to help provide services to those who have returned from serving their country. It showed local and regional VA clinics, food pantries, etc.",
        tags:["Objective C","iOS","PHP","MySQL"],
        images:[]
	},{
        id:4,
		title: "CGI IQ Suite &reg; Scribe",
		src: "build/img/other/650x450.png",
		description: "Scribe is a specialty app I'm currently working on that combines advanced note taking capabilities with the robustness of CGI IQ Suite &reg;. Features will include live writing through web sockets and synchronization with CGI IQ Suite &reg;",
        tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery","MySQL"],
        images:[]
	},{
        id:5,
		title: "arosenb2.github.io",
		src: "build/img/other/650x450.png",
		description: "I designed and coded this site you are currently on to help showcase my talent.",
        tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Grunt.js","Web Design","Pagespeed Optimization"],
        images:[]
	},{
        id:6,
		title: "Highlands Fellowship Small Groups",
		src: "build/img/other/650x450.png",
		description: "This is a personal project I'm working on for my church that aims to provide a social media experience for small groups, allowing them to meet online or facilitate in person meetings.",
        tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Node.js","Passport.js","Mongoose.js","MongoDB","Web Design"],
        images:[]
	},{
        id:7,
		title: "Custom Building Solutions Inc.",
		src: "build/img/other/650x450.png",
		description: "I am currently desigining and coding a custom Wordpress theme for a local general contractor.",
        tags:["HTML5","CSS3","Responsive Web Design","Wordpress","Web Design"],
        images:[]
	}];
    
    return {
        getProjects : function(){
            return projects;
        },
        getProject : function(index){
            return projects[index];
        }
    };
});

app.service("indicatorService",["$rootScope",function($rootScope){
    return {
        reset : function(){
            $rootScope.main = false;
            $rootScope.about = false;
            $rootScope.tech = false;
            $rootScope.portfolio = false;
            $rootScope.resume = false;
        },
        setActive : function(page){
            this.reset();
            switch(page){
                    case "about": $rootScope.about = true; $rootScope.$broadcast("pageLoaded"); break;
                    case "tech": $rootScope.tech = true; $rootScope.$broadcast("pageLoaded");  break;
                    case "portfolio": $rootScope.portfolio = true; $rootScope.$broadcast("pageLoaded"); break;
                    case "resume": $rootScope.resume = true; $rootScope.$broadcast("pageLoaded"); break;
                    default: $rootScope.main = true; $rootScope.$broadcast("pageClosed"); break;
            }
			
        },
        isActive : function(page){
           switch(page){
                    case "about": return $rootScope.about; break;
                    case "tech": return $rootScope.tech; break;
                    case "portfolio": return $rootScope.portfolio; break;
                    case "resume": return $rootScope.resume; break;
                    default: return $rootScope.main; break;
            } 
        }
    };
}]);

app.controller("MainCtrl",['$scope','$rootScope','projectService','indicatorService',function($scope,$rootScope,projectService,indicatorService){
    $scope.main = $rootScope.main,
    $scope.about = $rootScope.about,
    $scope.tech = $rootScope.tech,
    $scope.portfolio = $rootScope.portfolio,
    $scope.resume = $rootScope.resume;
    
    $scope.setActive = function(p){
        indicatorService.setActive(p);
    };
    
    $scope.init = function(){
		$scope.main = $rootScope.main,
		$scope.about = $rootScope.about,
		$scope.tech = $rootScope.tech,
		$scope.portfolio = $rootScope.portfolio,
		$scope.resume = $rootScope.resume;
    };
    $scope.init();
	
	$scope.$on("pageLoaded",function() {
		$scope.init();
	});
	$scope.$on("pageClosed", function(e) {
		$scope.init();
	});
}]);

app.controller("PageCtrl",["$scope","$location","indicatorService","projectService",function($scope,$location,indicatorService,projectService){
	$scope.go = function(path){
		indicatorService.setActive(path);
        $location.path("/"+path);
	};
    
    $scope.projects = projectService.getProjects();
}]);

app.controller("DetailsCtrl",["$scope","$routeParams","projectService",function($scope,$routeParams,projectService){
    $scope.project = projectService.getProject($routeParams.id);
}]);