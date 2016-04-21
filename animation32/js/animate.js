

function madian(){
	$('.ma11').addClass("maidiana");
    $('.ma12').addClass("maidiana");
    $('.ma13').addClass("maidiana");
    $('.ma14').addClass("maidiana");
    $('.ma15').addClass("maidiana");
	$('.ma21').addClass("maidiana");
	$('.ma31').addClass("maidiana");
	$('.ma42').addClass("maidiana");
	$('.ma52').addClass("maidiana");
	$('.ma62').addClass("maidiana");
	$('.b1').addClass("b1a");
	$('.b2').addClass("b2ab");
	$('.b3').addClass("b1a");
	$('.b4').addClass("b1a");
	$('.b5').addClass("b5ab");
	$('.ma16').addClass("huatong");
	$('.ma22').addClass("huatong");
	$('.ma32').addClass("huatong");
	$('.ma51').addClass("huatong");
	$('.ma61').addClass("huatong");
	$('.ma41').addClass("huatong");
	$('.wenzi1').addClass("wenzia");
	$('.wenzi2').addClass("wenzib");
	$('.wenzi3').addClass("wenzic");
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
function wenziin(){
	$('.wenzi1').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 0} ,1);
	$('.wenzi2').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 0.1} ,1);
	}
function wenziout(){
	$('.wenzi1').fadeOut();
	$('.wenzi2').fadeOut();
	}		
function ss(){
	$('.logo').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0.2} ,0.5);
	$('.toua').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0} ,1.2);
	$('.ma1').from({ transform : 'translate(50px , -50px)' , opacity : 0 , delay : 6} ,0.2);
	$('.ma2').from({ transform : 'translate(50px , 0px)' , opacity : 0 , delay : 2} ,0.2);
	$('.ma3').from({ transform : 'translate(50px , 50px)' , opacity : 0 , delay : 6} ,0.2);
	$('.ma4').from({ transform : 'translate(-50px , 50px)' , opacity : 0 , delay : 6} ,0.2);
	$('.ma5').from({ transform : 'translate(-50px , 0px)' , opacity : 0 , delay : 2} ,0.2);
	$('.ma6').from({ transform : 'translate(-50px , -50px)' , opacity : 0 , delay : 6} ,0.2);
	$('.sla').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 0.8} ,0.5);
	$('.slb').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 1.0} ,0.5);
	$('.slc').from({ transform : 'translate(0px , -50px)' , opacity : 0 , delay : 1.4} ,0.5);
	$('.z1').from({  opacity : 0 , delay : 1.4} ,1.5);	
	$('.z2').from({  opacity : 0 , delay : 1.4} ,1.5);	
	$('.z3').from({  opacity : 0 , delay : 1.4} ,1.5);	
	$('.z4').from({  opacity : 0 , delay : 1.4} ,1.5);	
	$('.z5').from({  opacity : 0 , delay : 1.4} ,1.5);
	
setTimeout(function(){
	$(".sla").addClass("slz");
	$(".slb").addClass("slz");
	$(".slc").addClass("slz");
	madian();
	},2300);
	
	}

$(document).ready(function(){
 document.ontouchmove = function(e){ e.preventDefault(); }
 ss();
  });

