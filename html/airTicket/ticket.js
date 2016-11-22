angular.module('project.ticket',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'ticket',
    url:'/ticket',
    css:'html/airTicket/ticket.css',
    templateUrl:'html/airTicket/ticket.html'
  })
})

.controller("ctrl",function($scope){
	//点击hotText让hotTips显示，weekTips隐藏
	$scope.showHotText = function () {
		var hotTips = document.querySelector(".hotTips");
		var weekTips = document.querySelector(".weekTips");
		var after = document.querySelector(".hotText a");
		var deleteafter = document.querySelector(".weekText a");
		after.className = "chooseNow";
		after.style.color = "#2BAB79";
		deleteafter.className ="";
		deleteafter.style.color = "#444444";
		after.style.display = "block";
		hotTips.style.display = "block";
		weekTips.style.display = "none";
	}
	
	//点击weekText让weekTips显示，hotTips隐藏
	$scope.showWeekText = function () {
		var hotTips = document.querySelector(".hotTips");
		var weekTips = document.querySelector(".weekTips");
		var after = document.querySelector(".weekText a");
		var deleteafter = document.querySelector(".hotText a");
		after.className = "chooseNow";
		after.style.color = "#2BAB79";
		deleteafter.className ="";
			deleteafter.style.color = "#444444";
		after.style.display = "block";
		hotTips.style.display = "none";
		weekTips.style.display = "block";
	}
})
