$(document).ready(function(){
 document.ontouchmove = function(e){ e.preventDefault(); }
  p1dh();
  linedh($(".line").show());
  });
function p1dhrc(){	
	$(".jjx_1").addClass("jjx_1dh");
	$(".jjx_2").addClass("jjx_2dh");
	$(".jjx_3").addClass("jjx_3dh");
	$(".jjx_4").addClass("jjx_4dh");
	$(".jjx_5").addClass("jjx_5dh");
	$(".jjx_6").addClass("jjx_6dh");
	$(".jjx_7").addClass("jjx_7dh");
    $(".jjx_8").addClass("jjx_8dh");
	$(".jjx_81").addClass("jjx_81dh");
	$(".jjx_82").addClass("jjx_82dh");
	$(".jjx_83").addClass("jjx_83dh");
	$(".jjx_9").addClass("jjx_9dh");
	$(".jjx_10").addClass("jjx_10dh");
	$(".jjx_101").addClass("jjx_101dh");
	$(".jjx_11").addClass("jjx_11dh");
	$(".jjx_13").addClass("jjx_13dh");
	$(".jjx_14").addClass("jjx_14dh");
    $(".jjx_15").addClass("jjx_15dh");
    $(".jjx_151").addClass("jjx_151dh");
    $(".jjx_152").addClass("jjx_152dh");
    $(".jjx_16").addClass("jjx_16dh");
    $(".jjx_17").addClass("jjx_17dh");
    $(".jjx_18").addClass("jjx_18dh");
    $(".jjx_20").addClass("jjx_20dh");
    $(".jjx_201").addClass("jjx_201dh");
    $(".jjx_x1").addClass("jjx_x1dh");
    $(".jjx_x2").addClass("jjx_x2dh");
    $(".jjx_x3").addClass("jjx_x3dh");
    $(".jjx_x4").addClass("jjx_x4dh");
    $(".jjx_x5").addClass("jjx_x5dh");
    $(".jjx_x6").addClass("jjx_x6dh");
    $(".jjx_x7").addClass("jjx_x7dh");
    $(".jjx_x8").addClass("jjx_x8dh");
    $(".jjx_x9").addClass("jjx_x9dh");
    $(".jjx_x10").addClass("jjx_x10dh");
    $(".jjx_x11").addClass("jjx_x11dh");
	$('#music0')[0].play();
	//3秒立即出现定制自己的舞台
	setTimeout(function(){
		if(isshare=='true'){
			$('.popUpBox .friend').fadeIn(500).siblings().hide();		
		}else{
			$('.popUpBox .share').fadeIn(500).siblings().hide();
		}
	},6000)	
}
function p1dh(){
	$('.jjx_1').from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 0.8} ,1);
	$('.jjx_2').from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.2} ,1);
	$('.jjx_3').from({ transform : 'translate(0 , -100px)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_4').from({ transform : 'translate(0 ,100px)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_5').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.4} ,1);
	$('.jjx_6').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.3} ,1.5);
	$('.jjx_7').from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 0.8} ,1);
	$('.jjx_8').from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.2} ,0.5);
	$('.jjx_81').from({ transform : 'translate(-100px , 0)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_82').from({ transform : 'translate(100px , 0)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_83').from({ transform : 'scale(0.8)', opacity : 0 , delay : 1.5} ,1);
	$('.jjx_9').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.4} ,1);
	$('.jjx_10').from({ transform : 'translate(0 , 100px)' , opacity : 0 , delay : 1} ,1);
	$('.jjx_101').from({ transform :'translate(0 , -100px)' , opacity : 0 , delay : 1.5} ,1.5);
	$('.jjx_11').from({ transform : 'translate(0 , 100px)' , opacity : 0 , delay : 0.8} ,1);
	$('.jjx_12').from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.2} ,0.5);
	$('.jjx_13').from({ transform : 'translate(-100px , 0)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_14').from({ transform : 'translate(100px , 0)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_15').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.4} ,1);
	$('.jjx_151').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.3} ,1);
	$('.jjx_152').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_16').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.3} ,1);
	$('.jjx_17').from({ transform : 'translate(0, -50px)' , opacity : 0 , delay : 0.8} ,1);
	$('.jjx_18').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 0.8} ,1);
	//$('.jjx_19').from({ transform : 'scale(0.5)', opacity : 0 , delay : 1.5} ,1);
	//$('.jjx_201').from({ transform : 'scale(0.5)', opacity : 1, delay : 1.5} ,2);
	$('.jjx_202').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_203').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_204').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 1.5} ,1);
	$('.jjx_205').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 1.5} ,1);
    $('.jjx_20').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.5} ,1);
    $('.jjx_201').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 1.5} ,1);
    $('.jjx_22').from({ transform : 'translate(-100px, 0px)' , opacity : 0 , delay : 1.5} ,1);
    $('.wallet').from({ transform : 'scale(0.5)' , opacity : 0 , delay : 2} ,1);
    setTimeout("p1dhrc()",3000);
};	
function linedh( obj ){
	 obj.find('img').each( function ( i ){
		$(this).from({ transform : 'translate(0px , -20px)' , opacity : 0 , delay : 0.3 + i * 0.2} ,2); 		
	});	
	}


