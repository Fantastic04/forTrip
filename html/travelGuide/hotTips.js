angular.module('project.hotTips',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'hotTips',
    url:'/hotTips',
    css:'html/travelGuide/hotTips.css',
    templateUrl:'html/travelGuide/hotTips.html'
  })
   .state({
	    name:'travelTogether',
	    url:'/travelTogether',
	    css:'html/travelGuide/travelTogether.css',
	    templateUrl:'html/travelGuide/travelTogether.html'
	})
//  .state({
	//  name:'home.part2',
	//  url:'/part2',
	//  css:'html/home/home.css',
	//  templateUrl:'html/home/homepart2/part2.html'
//	})
	
})
