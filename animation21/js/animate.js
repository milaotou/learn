//document.addEventListener('touchmove', function (e) {e.preventDefault()});



function p1dh(){
	$('.p1_1 img').eq(0).from({ transform : 'scale(0.5)' , opacity : 0 , delay : 0.2} ,2.5);
	$('.p1_1 img').eq(1).from({ transform : 'scale(0.5)' , opacity : 0 , delay : 0.4} ,2.5);
	$('.p1_1 img').eq(2).from({ transform : 'scale(0.5)' , opacity : 0 , delay : 0.6} ,2.5);
	$('.p1_1 img').eq(3).from({ transform : 'scale(0.6)' , opacity : 0 , delay : 0.8} ,2.5);
	$('.p1_1 img').eq(4).from({ transform : 'scale(0.6)' , opacity : 0 , delay : 1.0} ,2.5);
	$('.p1_1 img').eq(5).from({ transform : 'scale(0.6)' , opacity : 0 , delay : 1.2} ,2.5);
	$('.p1_1 img').eq(6).from({ transform : 'scale(0.6)' , opacity : 0 , delay : 1.4} ,2.5);
	$('.p1_1 img').eq(7).from({ transform : 'scale(0.7)' , opacity : 0 , delay : 1.5} ,2.5);
	$('.p1_1 img').eq(8).from({ transform : 'scale(0.7)' , opacity : 0 , delay : 1.6} ,2.5);
	$('.p1_1 img').eq(9).from({ transform : 'scale(0.7)' , opacity : 0 , delay : 1.7} ,2.5);
	$('.p1_1 img').eq(10).from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.1} ,2.5);
	$('.p1_1 img').eq(11).from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.2} ,2.5);
	$('.p1_1 img').eq(12).from({ transform : 'scale(0.8)' , opacity : 0 , delay : 1.3} ,2.5);
	$('.rwbox').from({ transform : 'scale(0.7)' , opacity : 0 , delay : 0.1} ,0.8);
	
	$('.p2_1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.5} ,1);
	$('.p3_1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.5} ,1);
	$('.p4_1').from({ transform : 'scale(0.9)' , opacity : 0 , delay :1} ,0.5);
	
	
	$('.p5_1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.8} ,1);
	$('.p6_1').from({ transform : 'scale(0.8)' , opacity : 0 , delay : 0} ,1.2);
	$('.p8_1').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 1.2} ,0.8);
	$('.p9_1').from({ transform : 'translate(0px , 50px)' , opacity : 0 , delay : 2} ,0.8);
	$('.p10_1').from({ transform : 'translate(0px , 50px)' , opacity : 0 , delay : 1.5} ,0.8);
	$('.p10_2').from({ transform : 'translate(0px , 50px)' , opacity : 0 , delay : 1.6} ,0.8);
	$('.geci').from({ transform : 'scale(1.3)' , opacity : 0 , delay : 2.5} ,0.8);
	$('.geci2').from({ transform : 'scale(1.3)' , opacity : 0 , delay : 3} ,0.8);
	$('.geci3').from({ transform : 'scale(1.3)' , opacity : 0 , delay : 3} ,0.8);
	
	
	setTimeout("p1dhrc()",4000);
}

function p1dhrc (){
	$(".p1_1").addClass("p1_1dh");
	$(".p2_sx").addClass("p2_sxdh");
	$(".p3_1").addClass("p3_1dh");
	$(".p4_1").addClass("p4_1dh");
	$(".p4_1f").addClass("p4_1fdh");
	$(".p12_1").addClass("p12_1dh");
	$(".p12_1a").addClass("p12_1adh");
	$(".p8_1").addClass("p8_1dh");
	$(".p6_1").addClass("p6_1dh");
	//$(".rwbox").addClass("rwdh");
	$(".geci").addClass("gecidh");	
	$(".p11_1").addClass("p11_1dh");
	//$(".p9_1").addClass("p9_1dh");
	$(".p10_1").addClass("p10_1dh");
	$(".p10_2").addClass("p10_2dh");
	$(".p2_1").addClass("p2_1dh");
	$(".guang").addClass("guangdh");
	$(".geci2").addClass("geci2dh");
	$(".geci3").addClass("geci3dh");
	$(".gecimh").addClass("gecimhdh");
	$(".gecibox").addClass("geciboxdh");
	$(".p7_1").addClass("p7_1dh");
	$(".p7_2").addClass("p7_2dh");
	$(".p7_1 img").addClass("p7_1img");
	$(".p7_2 img").addClass("p7_2img");
	$(".p3_1").addClass("p3_1sd");
	$(".p2_1").addClass("p2_1sd");

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



var interval;
var imageLength = 462;
var current=0;
function showImage()
{
	current=(++current)%imageLength;
	$(".pbg_1 div").removeClass().addClass("pbg_1_"+current);
}
$(document).ready(function() {
	interval = setInterval(showImage,200);
	p1dh();
});
