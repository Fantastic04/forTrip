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
	$scope.showreturn = function () {
		var returns = document.querySelector(".return-ticket");
		var oneway = document.querySelector(".oneway-ticket");
		var after = document.querySelector(".return");
		var deleteafter = document.querySelector(".singel");
		after.className = "chooseNow";
		after.style.color = "#2BAB79";
		deleteafter.className ="";
		deleteafter.style.color = "#444444";
		after.style.display = "block";
		returns.style.display = "block";
		oneway.style.display = "none";
	}
	
	//点击weekText让weekTips显示，hotTips隐藏
	$scope.showsingel = function () {
		var returns = document.querySelector(".return-ticket");
		var oneway = document.querySelector(".oneway-ticket");
		var after = document.querySelector(".singel");
		var deleteafter = document.querySelector(".return");
		after.className = "chooseNow";
		after.style.color = "#2BAB79";
		deleteafter.className ="";
		deleteafter.style.color = "#444444";
		after.style.display = "block";
		returns.style.display = "none";
		oneway.style.display = "block";
	}
})
