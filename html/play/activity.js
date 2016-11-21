angular.module('project.activity',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'activity',
    url:'/activity',
    css:'html/play/activity.css',
    templateUrl:'html/play/activity.html'
  })
   .state({
	    name:'routeinfo',
	    url:'/routeinfo',
	    css:'html/play/routeinfo.css',
	    templateUrl:'html/play/routeinfo.html'
	})
//  .state({
	//  name:'home.part2',
	//  url:'/part2',
	//  css:'html/home/home.css',
	//  templateUrl:'html/home/homepart2/part2.html'
//	})
	
})
