/*
 Digital Portfolio Controller
*/
var app = angular.module("app",["ngRoute","ngSanitize"]);

app.run(['$rootScope',function($rootScope){
  $rootScope.main = true,
  $rootScope.about = false,
  $rootScope.tech = false,
  $rootScope.portfolio = false,
  $rootScope.work = false;
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
    }).when("/portfolio/:parentId/:imageId",{
      controller: "ImageCtrl",
      templateUrl: "views/image.html"
    }).when("/work",{
      controller: "PageCtrl",
      templateUrl: "views/work.html"
    }).otherwise({
      redirectTo: "/"
    });
}]);

app.service("projectService",function(){
    var gallery = {
      scribe: [ //2
        "The login screen features a textured background and overridden form controls.",
        "The main screen lists minutes for a meeting, noting the speaker and tags for follow up items."
      ],
      owa: [ //5
        "The login screen provides a simple form which is fully accessible for both the 3.5\" and 4\" iPhone screen.",
        "The home screen greets you with a digital voice, as well as provides you a high level overview of your most recent events, email and tasks.",
        "Clicking on a group will slide in a pane for more details. In this instance, it shows your recent emails.",
        "Users can click on the other icons and the pane scrolls to the other sections, creating a sense of connectivity.",
        "For tasks, users can also filter the items based on their type."
      ],
      nha: [ //9
        "When the app is launched, users are taken to a screen which shows where they are on a map.",
        "Users can change which results are shown based on their rating.",
        "Users can also search for nursing homes in other areas in the US.",
        "Clicking on a result will take the user to the location they were looking for and show nearby nursing homes.",
        "The location markers provide a disclosure showing the community score and their own individual score for a nursing home. The info button will show additional information, such as the address and the survey.",
        "Users can set a nursing home as a favorite or generate their score based on a survey they can fill out.",
        "Here, the user will attempt to add the nursing home to their favorites.",
        "The survey uses a custom algorithm that factors in the importance of a question along with the answer. Users can also add comments for each question for when they go back to review.",
        "The survey also scales appropriately for the landscape orientation."
      ],
      myiqs: [ //3
        "Upon loading, users are presented an opportunity to log in to our enterprise system.",
        "When they log in, they can see items assigned to them, as well as their productivity score and links to commonly used tools.",
        "Aside from a grid and list view, we provided users an alternate navigation method that is controllable via keyboard interaction."
      ],
      iqs2: [ //6
        "In a revamp of design, we created a modern master page style for Sharepoint to allow higher levels of productivity.",
        "We provided 5 dashboard templates. This is the template for a typical data list.",
        "Some dashboards are more specific to KPIs and time metrics.",
        "Other dashboards need to have more information of different types.",
        "Hybrid templates, such as this, are designed to give management teams a greater level of insight into processes and metrics.",
        "Finally, other dashboards need a healthy balance between textual and visual data."
      ],
      iqm: [ //12
        "The IQ Suite Mobile hybrid app combines HTML5 and Objective C to provide a seamless app experience with faster development time. This is the login screen.",
        "Upon logging in, users are presented with different channels of data, as well as a scrolling footer that provides them pertinant information.",
        "The Financial Dashboard provides a great comparative view between projects and time data.",
        "The Ticket Tracker shows breakdowns based on categories, as well as time-series data for tickets that corresponds with the key numbers.",
        "The Concierge Dashboard helps track communication with governmental transition leads and ensures that clients are heard.",
        "Each list type has its own section, as well as folders for documents.",
        "A useful tool is the Out of Office calendar, which lets managers see who is out on a specific calendar day.",
        "CGI News pulls from multiple RSS feeds to keep team members knowledgable of our industry and client.",
        "Users can search, create, edit and view list items from within the mobile application.",
        "Editing is done in a scrollable modal.",
        "The Inbasket is a combination of all items assigned to a user from various lists.",
        "In responsive fashion, the user interface adjusts for different screen orientations."
      ],
      ehr: [ //4
        "The EHR Gateway tool interacts with CONNECT Open Source, which provides linkage between different electronic health record systems.",
        "Custom inline modals are used to fit the theme of the app.",
        "A healthcare provider would have a calendar of their patients for the day, with the ability to drill into their details.",
        "When a patient is selected, the system pulls their information. Unfortunately, due to the proprietary nature of the features, further screenshots cannot be shown."
      ],
      eadash: [ //1
        "The Emerging Accounts Dashboard provides a live preview of current bids and organizational health."
      ],
      crms: [ //1
        "In a client-specific redesign, we modified our IQ Suite 2.0 template to provide users further clarity."
      ],
      cbs: [ //0
        // "Screenshots coming soon."
      ],
      hfsg: [ //0
        // "Screenshots coming soon."
      ],
      engineering: [ //0
        // "Screenshots coming soon."
      ],
      github: [ //5
        "The initial screen has been optimized for fast loading on both mobile and desktop. It features a responsive design combined with Angular.js for a Single-Page-Application.",
        "The portfolio screen lists projects that I felt were relevant in my skillset.",
        "Each project lists a description and has a cover photo. Data is passed through a service with hard-coded data in the Angular application.",
        "This is a continuation of the listing for a project. It shows the technologies used as well as sample screenshots.",
        "Screenshots are each individually accompanied by descriptions. Each image is also a link to the next image in the series."
      ],
      vets: [ //6
        "Upon loading, users will have a way to enter in vital information, such as medical conditions. This is useful for case workers.",
        "The map view is considered the main landing screen. It shows different types of facilities available for veterans, such as clinics, legal services and VA hospitals.",
        "Selecting a map marker reveals the address of the facility and a button to get more information about the facility.",
        "The details screen calculates the distance of the facility from the user while also providering directions and other relevant information.",
        "All Resources shows the facilities around the user in a list rather than on the map. It can sort the facilities by type or name.",
        "In case of an emergency, we provide 1-touch access to important emergency resources, such as the Suicide Prevention Hotline."
      ],
      irs: [ //10
        "The IRS ACA 5.0 RMS iPhone app is a specialized version of CGI IQ Suite &reg; Mobile.",
        "It features a graphical design that corresponds with the web version, as well as a functional design that optimizes the layouts for the smaller screen size.",
        "Once data is downloaded, items are progressively set to a completed state, showing the user that they are ready to receive actions.",
        "The list view shows color coordinated priority filters, as well as a state switching metric on top.",
        "When a filter is selected, the bar beneath the filter changes color to match the selected filter while the arrow moves across the screen to show your selection. In this case, several Hot Topic items are also considered to be a High priority.",
        "Similarly, for the Hot Topics KPI, it shows a disabled state for the other filters.",
        "Creating a functional dashboard required considerable planning for a phone screen. For time-series data, we provide several KPIs that act as switches for the graph below.",
        "On the desktop version, this information is displayed as a pie chart. Having over 12 different series, we designed a mobile optimized version that displays the information in a better way.",
        "The Risk Rating matrix was created using the proper application of <code>&lt;table&rt;</code> tags. Each box allows users to drill down to the corresponding data.",
        "Being a native app, we have a bridge that allows us to call back to native Objective C code and standard Cocoa Touch components, such as UIAlertView."
      ],
      irs2: [ //4
        "As part of a proof of concept in using a REST web service for our mobile apps, I developed a limited version of the IRS app using only native code. This project mainly uses the new language, Swift.",
        "I created custom Cocoa Touch components and utilized the Xcode 6 enhancement of live previews to assist in the design and placement.",
        "The fully native app involved subclassing different components and optimizing calculations in the data model to ensure speed and accuracy.",
        "By switching to native code and having access to full hardware acceleration, the app is much smoother and loads faster than the hybrid counterpart."
      ]
    }

    var projects = [{
      id:1,
      title: "CGI IQ Suite &reg; Mobile",
      cover: 4,
  		description: "CGI IQ Suite &reg; is CGI's registered project management suite. It provides high visibility of operations to team members and clients, as well as informative dashboards for management. CGI IQ Suite &reg; Mobile is currently being used by over 15 projects internally.",
      tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery"],
      key: "iqm",
      images:gallery["iqm"]
	  },{
      id:2,
      title: "CGI Assistant",
      cover: 5,
      description: "CGI Assistant is an iPhone app that providers users a snapshot of their day by combining their calendar, tasks and email.",
      tags:["Objective C","iOS","XML","SOAP"],
      key: "owa",
      images:gallery["owa"]
    },{
      id:3,
      title: "MyIQS",
      cover: 3,
      description: "MyIQS is a proof of concept interactive web dashboard. Users can view open tasks and assign them to themselves, along with assigning them to other team members.",
      tags:["HTML5","CSS3","jQuery","REST","SOAP","JSON","XML"],
      key: "myiqs",
      images:gallery["myiqs"]
    },{
      id:4,
      title: "CGI IQ Suite &reg; 2.0",
      cover: 1,
      description: "IQS 2.0 was a visual and functional redesign of our Sharepoint instance. It was designed to be more intuitive and provide fast access to features designed to help employees increase their productivity.",
      tags:["ASP.NET","HTML","CSS3","jQuery","REST","JSON"],
      key: "iqs2",
      images:gallery["iqs2"]
    },{
      id:5,
      title: "EHR Gateway",
      cover: 3,
      description: "The EHR Gateway provides healthcare providers access to patient health records. Providers can scroll through an interactive timeline to see various diagnoses and recorded conditions.",
      tags:["Objective C","HTML5","CSS3","iOS","jQuery","Java","REST","JSON"],
      key: "ehr",
      images:gallery["ehr"]
    },{
      id:6,
      title: "Emerging Accounts Dashboard",
      cover: 1,
      description: "In Emerging Accounts, there are many bids and proposals that are happening at the same time. This dashboard was designed and created to show progresses as well as a snapshot of important business unit metrics for our senior management team.",
      tags:["HTML5","CSS3","jQuery","Objective C","iOS","JSON"],
      key: "eadash",
      images:gallery["eadash"]
    },{
      id:7,
      title: "IRS ACA 5.0 RMS (Hybrid)",
      cover: 5,
      description: "Our IRS team needed a version of IQ Suite Mobile that better reflected the style of the web for better continuity. In this redesign, sliding filters and a reminders modal were added to provide similar desktop functionality while on an iPhone.",
      tags:["HTML5","CSS3","jQuery","Objective C","iOS","JSON","PHP"],
      key: "irs",
      images:gallery["irs"]
    },{
      id:8,
      title: "IRS ACA 5.0 RMS (Native)",
      cover: 2,
      description: "As projects grew and more data was added, our hybrid app started to grow slower in loading and parsing times, due to the single-threaded nature of JavaScript. The native app utilizes better async technologies and background threads to provide a dramatic speed increase.",
      tags:["Swift","iOS","JSON","REST"],
      key: "irs2",
      images:gallery["irs2"]
    },{
      id:9,
      title: "IQS Requests",
      cover: 1,
      description: "I developed this tool to help our team track requests across multiple sites and projects. It just provides a read-only summary that is organized in a functionally useful set of collections.",
      tags:["Swift","iOS","JSON","REST"],
      key: "engineering",
      images:gallery["engineering"]
    },{
      id:10,
  		title: "Nursing Home Advisor",
  		cover: 9,
  		description: "Nursing Home Advisor (NHA) is an ongoing app that we expect to release in 2014 that helps individuals find the best nursing homes in the area, based on community data and surveys.",
      tags:["Objective C","iOS","PHP","MySQL"],
      key: "nha",
      images:gallery["nha"]
    },{
      id:11,
  		title: "Vets Guide",
  		cover: 2,
  		description: "This app for iPhone was used in a demo with the Department of Veteran's Affairs to help provide services to those who have returned from serving their country. It showed local and regional VA clinics, food pantries, etc.",
      tags:["Objective C","iOS","PHP","MySQL"],
      key: "vets",
      images:gallery["vets"]
    },{
      id:12,
  		title: "CGI IQ Suite &reg; Scribe",
  		cover: 2,
  		description: "Scribe is a specialty app I'm currently working on that combines advanced note taking capabilities with the robustness of CGI IQ Suite &reg;. Features will include live writing through web sockets and synchronization with CGI IQ Suite &reg;",
      tags:["HTML5","CSS3","Objective C","iOS","JSON","PHP","jQuery","MySQL"],
      key: "scribe",
      images:gallery["scribe"]
    },{
      id:13,
      title: "arosenb2.github.io",
      cover: 1,
      description: "I designed and coded this site you are currently on to help showcase my talent.",
      tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Grunt.js","Web Design","Pagespeed Optimization"],
      key: "github",
      images:gallery["github"]
    },{
      id:14,
		  title: "Highlands Fellowship Small Groups",
		  cover: 1,
      description: "This is a personal project I'm working on for my church that aims to provide a social media experience for small groups, allowing them to meet online or facilitate in person meetings.",
      tags:["HTML5","CSS3","Responsive Web Design","AngularJS","Node.js","Passport.js","Mongoose.js","MongoDB","Web Design"],
      key: "hfsg",
      images:gallery["hfsg"]
    },{
      id:15,
		  title: "Custom Building Solutions Inc.",
  		cover: 1,
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
        $rootScope.work = false;

		    $window.scrollTo(0,0);
      },
      setActive : function(page){
        this.reset();
        switch(page){
          case "about": $rootScope.about = true; $rootScope.$broadcast("pageLoaded"); break;
          case "tech": $rootScope.tech = true; $rootScope.$broadcast("pageLoaded");  break;
          case "portfolio": $rootScope.portfolio = true; $rootScope.$broadcast("pageLoaded"); break;
          case "work": $rootScope.work = true; $rootScope.$broadcast("pageLoaded"); break;
          default: $rootScope.main = true; $rootScope.$broadcast("pageClosed"); break;
        }
      },
      isActive : function(page){
        switch(page){
          case "about": return $rootScope.about; break;
          case "tech": return $rootScope.tech; break;
          case "portfolio": return $rootScope.portfolio; break;
          case "work": return $rootScope.work; break;
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
  $scope.work = $rootScope.work;

  $scope.setActive = function(p){
    indicatorService.setActive(p);
  };

  $scope.init = function(){
  	$scope.main = $rootScope.main,
  	$scope.about = $rootScope.about,
  	$scope.tech = $rootScope.tech,
  	$scope.portfolio = $rootScope.portfolio,
  	$scope.work = $rootScope.work;
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

app.controller("ImageCtrl",["$scope","$routeParams","$window","projectService",function($scope,$routeParams,$window,projectService){
  $scope.project = projectService.getProject($routeParams.parentId);
  $scope.image = {};
  $scope.image.parent = {};
  $scope.image.parent.id = $routeParams.parentId;
  $scope.image.parent.title = $scope.project.title;
  $scope.image.source = $scope.project.key + "%20" + ($routeParams.imageId);
  $scope.image.description = $scope.project.images[$routeParams.imageId-1]

  var nextId = parseInt($routeParams.imageId) + 1
  $scope.image.next = nextId <= $scope.project.images.length ? "#portfolio/" + $scope.image.parent.id + "/" + nextId : "#portfolio/" + $scope.image.parent.id;

  $window.scrollTo(0,0);
}])
