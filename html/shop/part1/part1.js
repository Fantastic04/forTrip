angular.module('project.part1',[])
.config(function($stateProvider){
$stateProvider
.state({
    name:'part1',
    url:'/Sindex/part1',
    css:'html/shop/part1/part1.css',
    templateUrl:'html/shop/part1/part1.html'
})

.state({
    name:'Sindex.part1.hotSite',
    url:'/hotSite',
    css:'html/shop/part1/hotSite/hotSite.css',
    templateUrl:'html/shop/part1/hotSite/hotSite.html',
   	controller:function($css){
   		$css.add('html/shop/Sindex.css');
   		$css.add('html/shop/part1/part1.css');
   		
   	}
  })

.state({
    name:'Sindex.part1.allState',
    url:'/allState',
    css:'html/shop/part1/allState/allState.css',
    templateUrl:'html/shop/part1/allState/allState.html',
   	controller:function($css){
   		$css.add('html/shop/Sindex.css');
   		$css.add('html/shop/part1/part1.css');
   		
   	}
  })




})


