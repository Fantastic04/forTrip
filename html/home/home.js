angular.module('project.home',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'html/home/home.css',
    templateUrl:'html/home/home.html'
  })
   .state({
    name:'home.part1',
    url:'/part1',
    css:'html/home/home.css',
    templateUrl:'html/home/homepart1/part1.html'
  })
    .state({
    name:'home.part2',
    url:'/part2',
    css:'html/home/home.css',
    templateUrl:'html/home/homepart2/part2.html'
  })
 
  }) 
  .controller("home",function($scope){
  	$scope.showNav=function(){
  		var nav = document.querySelector('nav');
  		nav.className='showAll';
		}
		$scope.hideNav=function(){
			var nav = document.querySelector('nav')
			nav.className='';
		}
  })

