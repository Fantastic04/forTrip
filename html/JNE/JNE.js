angular.module('project.JNE',[])
.config(function($stateProvider){
$stateProvider
.state({
    name:'JNE',
    url:'/JNE',
    css:'html/JNE/JNE.css',
    templateUrl:'html/JNE/JNE.html'
})
})


//document.documentElement.style.fontSize=innerWidth/10+"px";
//		window.onresize = function(){
//			document.documentElement.style.fontSize=innerWidth/10+"px";
//		}
//		
//
//var mySwiper = new Swiper ('.swiper-container', {
//	    
//	    direction: 'horizontal',//轮播方向 vertical为垂直轮播
//	    
//	    loop: true,//无限循环
//
//	    autoplay:"2000",//自动播放
//
//	    // slideToClickedSlide:true,
//
//	    autoplayDisableOnInteraction:false,//点击完之后，还可以继续轮播
//
//	    // speed:"500",
//
//	    paginationClickable:true,
//	    
//	    // 如果需要分页器
//	    pagination: '.swiper-pagination',
//	    
//	    // 如果需要前进后退按钮
//	    // nextButton: '.swiper-button-next',
//	    // prevButton: '.swiper-button-prev',
//	    
//	    // 如果需要滚动条
//	    // scrollbar: '.swiper-scrollbar',
//
//	})
