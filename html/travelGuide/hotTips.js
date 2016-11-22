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
	    url:'/hotTips/travelTogether',
	    css:'html/travelGuide/travelTogether.css',
	    templateUrl:'html/travelGuide/travelTogether.html'
	})
})

//热门话题的tab切换
.controller("hotTips", function($scope) {
	
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

