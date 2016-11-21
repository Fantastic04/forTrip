angular.module('project.shop',[])
.config(function($stateProvider){
$stateProvider
.state({
    name:'shop',
    url:'/shop',
    css:'html/shop/shop.css',
    templateUrl:'html/shop/shop.html'
})
})


document.documentElement.style.fontSize=innerWidth/10+"px";
	window.onresize = function(){
		document.documentElement.style.fontSize=innerWidth/10+"px";
	}