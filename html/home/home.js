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
//		$scope.showAside=function(){
//			var div = document.querySelector(".asideDiv");
//			div.style.left='0px';
//			var d = document.querySelector("#container")
//			d.style.left='250px';
//			var height = document.body.clientHeight;
//			div.style.height=height+"px";
//		}
//		$scope.asideHide=function(){
//			var div = document.querySelector(".asideDiv");
//			div.style.left='-250px';
//			var d = document.querySelector("#container")
//			d.style.left='0px';
//		} 
  })

