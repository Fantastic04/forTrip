angular.module('project.Sindex',[])
.config(function($stateProvider){
$stateProvider
.state({
    name:'Sindex',
    url:'/Sindex',
    css:'html/shop/Sindex.css',
    templateUrl:'html/shop/Sindex.html'
  })
.state({
    name:'Sindex.part1',
    url:'/part1',
    css:'html/shop/part1/part1.css',
    templateUrl:'html/shop/part1/part1.html',
   	controller:function($css){
   		$css.add('html/shop/Sindex.css');
   	}
  })

.state({
    name:'Sindex.part2',
    url:'/part2',
    css:'html/shop/part2/part2.css',
    templateUrl:'html/shop/part2/part2.html',
   	controller:function($css){
   		$css.add('html/shop/Sindex.css');
   	}
  })
.state({
    name:'Sindex.login',
    url:'/login',
    css:'html/home/login.css',
    templateUrl:'html/home/login.html',
   	controller:function($css){
   		$css.add('html/shop/Sindex.css');
   	}
  })

})