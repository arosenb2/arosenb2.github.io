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
    var gallery = {
      scribe: [ //2
        "",
        ""
      ],
      owa: [ //5
        "",
        "",
        "",
        "",
        ""
      ],
      nha: [ //9
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      myiqs: [ //3
        "",
        "",
        ""
      ],
      iqs2: [ //6
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      iqm: [ //12
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      ehr: [ //4
        "",
        "",
        "",
        ""
      ],
      eadash: [ //1
        ""
      ],
      crms: [ //1
        ""
      ],
      cbs: [ //0

      ],
      github: [ //0

      ]
    }

    var projects = [{
      id:1,
      title: "CGI IQ Suite &reg; Mobile",
  		src: "build/img/other/650x450.png",
  		description: "CGI IQ Suite &reg; is CGI's registered project management suite. It provides high visibility of operations to team members and clients, as well as informative dashboards for management. CGI IQ Suite &reg; Mobile is currently being used by over 10 projects internally.",
      tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery"],
      key: "iqm",
      images:gallery["iqm"]
	  },{
      id:2,
      title: "CGI Assistant",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Objective C","iOS","XML","SOAP"],
      key: "owa",
      images:gallery["owa"]
    },{
      id:3,
      title: "MyIQS",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Objective C","iOS","XML","SOAP"],
      key: "myiqs",
      images:gallery["myiqs"]
    },{
      id:4,
      title: "CGI IQ Suite &reg; 2.0",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Objective C","iOS","XML","SOAP"],
      key: "iqs2",
      images:gallery["iqs2"]
    },{
      id:5,
      title: "EHR Gateway - Powered by CGI Connect &reg;",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Objective C","iOS","XML","SOAP"],
      key: "ehr",
      images:gallery["ehr"]
    },{
      id:6,
      title: "Emerging Accounts Dashboard",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["HTML5","CSS3","jQuery","Objective C","iOS","JSON","PHP"],
      key: "eadash",
      images:gallery["eadash"]
    },{
      id:7,
      title: "IRS ACA 5.0 RMS (Hybrid)",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["HTML5","CSS3","jQuery","Objective C","iOS","JSON","PHP"],
      key: "irs",
      images:gallery["irs"]
    },{
      id:8,
      title: "IRS ACA 5.0 RMS (Native)",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Swift","iOS","JSON","REST"],
      key: "irs2",
      images:gallery["irs2"]
    },{
      id:9,
      title: "IQS Requests",
      src: "build/img/other/650x450.png",
      description: "",
      tags:["Swift","iOS","JSON","REST"],
      key: "engineering",
      images:gallery["engineering"]
    },{
      id:10,
  		title: "Nursing Home Advisor",
  		src: "build/img/other/650x450.png",
  		description: "Nursing Home Advisor (NHA) is an ongoing app that we expect to release in 2014 that helps individuals find the best nursing homes in the area, based on community data and surveys.",
      tags:["Objective C","iOS","PHP","MySQL"],
      key: "nha",
      images:gallery["nha"]
    },{
      id:11,
  		title: "Vets Guide",
  		src: "build/img/other/650x450.png",
  		description: "This app for iPhone was used in a demo with the Department of Veteran's Affairs to help provide services to those who have returned from serving their country. It showed local and regional VA clinics, food pantries, etc.",
      tags:["Objective C","iOS","PHP","MySQL"],
      key: "vets",
      images:gallery["vets"]
    },{
      id:12,
  		title: "CGI IQ Suite &reg; Scribe",
  		src: "build/img/other/650x450.png",
  		description: "Scribe is a specialty app I'm currently working on that combines advanced note taking capabilities with the robustness of CGI IQ Suite &reg;. Features will include live writing through web sockets and synchronization with CGI IQ Suite &reg;",
      tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery","MySQL"],
      key: "scribe",
      images:gallery["scribe"]
    },{
      id:13,
      title: "arosenb2.github.io",
      src: "build/img/other/650x450.png",
      description: "I designed and coded this site you are currently on to help showcase my talent.",
      tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Grunt.js","Web Design","Pagespeed Optimization"],
      key: "github",
      images:gallery["github"]
    },{
      id:14,
		  title: "Highlands Fellowship Small Groups",
		  src: "build/img/other/650x450.png",
      description: "This is a personal project I'm working on for my church that aims to provide a social media experience for small groups, allowing them to meet online or facilitate in person meetings.",
      tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Node.js","Passport.js","Mongoose.js","MongoDB","Web Design"],
      key: "hfsg",
      images:gallery["hfsg"]
    },{
      id:15,
		  title: "Custom Building Solutions Inc.",
  		src: "build/img/other/650x450.png",
  		description: "I am currently desigining and coding a custom Wordpress theme for a local general contractor.",
      tags:["HTML5","CSS3","Responsive Web Design","Wordpress","Web Design"],
      key: "cbs",
      images:gallery["cbs"]
    }
  ];

  return {
    getProjects : function(){
      return projects;
    },
    getProject : function(index){
      return projects[index];
    }
  };
});

app.service("indicatorService",["$rootScope","$window",function($rootScope,$window){
    return {
      reset : function(){
        $rootScope.main = false;
        $rootScope.about = false;
        $rootScope.tech = false;
        $rootScope.portfolio = false;
        $rootScope.resume = false;

		    $window.scrollTo(0,0);
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

app.controller("DetailsCtrl",["$scope","$routeParams","$window","projectService",function($scope,$routeParams,$window,projectService){
  $scope.project = projectService.getProject($routeParams.id);
	$window.scrollTo(0,0);
}]);
