angular.module('project.mine',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'mine',
    url:'/mine',
    css:'html/home/mine.css',
    templateUrl:'html/home/mine.html'
  })
}) 
  .controller("mine",function($scope){
	$scope.showAside=function(){
		var div = document.querySelector(".asideDiv");
		div.style.left='0px';
		var d = document.querySelector("#container")
		d.style.left='250px';
		var height = document.body.clientHeight;
		div.style.height=height+"px";
	}
//	$scope.asideHide=function(){
//		var div = document.querySelector(".asideDiv");
//		div.style.left='-250px';
//		var d = document.querySelector("#container")
//		d.style.left='0px';
//	} 
  })

