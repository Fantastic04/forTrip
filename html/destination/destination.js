angular.module('project.destination',[])
.config(function($stateProvider){
$stateProvider
.state({
    name:'destination',
    url:'/destination',
    css:'html/destination/destination.css',
    templateUrl:'html/destination/destination.html'
})
})



//document.documentElement.style.fontSize=innerWidth/10+"px";
//		window.onresize = function(){
//			document.documentElement.style.fontSize=innerWidth/10+"px";
//		}
//		
//
//$(".page-destination .seek").click(function(){
//		$(".page-destination .bgSeek").css("display","block")
//	})
//	$(".page-destination .back").click(function(){
//		$(".page-destination .bgSeek").css("display","none")
//	})