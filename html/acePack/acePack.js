angular.module('project.acePack',[])
.controller("ctrl",function($scope){
	
})

.config(function($stateProvider){
$stateProvider
.state({
    name:'acePack',
    url:'/acePack',
    css:'html/acePack/acePack.css',
    templateUrl:'html/acePack/acePack.html'
})
})


//document.documentElement.style.fontSize=innerWidth/10+"px";
//	window.onresize = function(){
//		document.documentElement.style.fontSize=innerWidth/10+"px";
//	}
//
////显示隐藏
//	$(".page-acePack .show").click(function(){
//		$(".page-acePack .bg").css("display","block");
//	})
//	$(".page-acePack .bg>p").click(function(){
//		$(".page-acePack .bg").css("display","none");
//		return false;
//	})
////搜索
//	$(".page-acePack .seek input").focus(function(){
//		$(".page-acePack .seek span").css("display","block");
//	})
//	$(".page-acePack .seek span").click(function(){
//		$(".page-acePack .seek span").css("display","none");
//		$(".page-acePack .seek input").val("");
//	})
//
