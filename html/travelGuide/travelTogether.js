angular.module('project.travelTogether',[])
//全部的tab切换
.controller("travelTogether", function($scope) {
	
	//点击hotText让hotTips显示，weekTips隐藏
	$scope.showall = function () {
		var total = document.querySelector(".total");
		var essence = document.querySelector(".essence");
		var after = document.querySelector(".all a");
		var deleteafter = document.querySelector(".essen a");
		after.className = "chooseNow";
		deleteafter.className ="";
		after.style.display = "block";
		total.style.display = "block";
		essence.style.display = "none";
	}
	
	//点击weekText让weekTips显示，hotTips隐藏
	$scope.shomajor = function () {
		var total = document.querySelector(".total");
		var essence = document.querySelector(".essence");
		var after = document.querySelector(".essen a");
		var deleteafter = document.querySelector(".all a");
		after.className = "chooseNow";
		deleteafter.className ="";
		after.style.display = "block";
		total.style.display = "none";
		essence.style.display = "block";
	}
})