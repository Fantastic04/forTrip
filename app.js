angular.module('project',['ui.router','angularCSS','project.home','project.partner','project.Sindex','project.acePack','project.destination','project.JNE','project.part1'])
.config(function($stateProvider,$urlRouterProvider){
	//默认的url设置。只有这一句是不生效的，这个只不过把所有例外的url地址变成了这个home。但是具体的根据home这个url指向哪个路由是由具体home页面规定的。
  $urlRouterProvider.otherwise('/home')
})
document.documentElement.style.fontSize=innerWidth/10+"px";
	window.onresize = function(){
		document.documentElement.style.fontSize=innerWidth/10+"px";
	}