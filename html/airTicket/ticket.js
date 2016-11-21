angular.module('project.ticket',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'ticket',
    url:'/ticket',
    css:'html/airTicket/ticket.css',
    templateUrl:'html/airTicket/ticket.html'
  })
// .state({
//	    name:'hotTips.travelTogether',
//	    url:'/part1',
//	    css:'html/airTicket/travelTogether.css',
//	    templateUrl:'html/airTicket/travelTogether.html'
//	})
//  .state({
	//  name:'home.part2',
	//  url:'/part2',
	//  css:'html/home/home.css',
	//  templateUrl:'html/home/homepart2/part2.html'
//	})
	
})
