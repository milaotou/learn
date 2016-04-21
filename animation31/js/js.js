 function LoadFn ( arr , fn , fn2){
		var loader = new PxLoader();
		for( var i = 0 ; i < arr.length; i ++)
		{
			loader.addImage(arr[i]);
		};
		
		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				if(fn2) fn2(percent)
		});	
		
		
		loader.addCompletionListener( function(){
			if(fn) fn();

		});
		loader.start();	
}

var LoadingImg = [];

$('img').each( function (){
	
	if(!$(this).attr('src')) return;
	LoadingImg.push($(this).attr('src'));
		
});

LoadingImg.push('images/jjx_01.png');
LoadingImg.push('images/jjx_02.png');
LoadingImg.push('images/jjx_03.png');
LoadingImg.push('images/jjx_04.png');
LoadingImg.push('images/jjx_05.png');
LoadingImg.push('images/jjx_06.png');
LoadingImg.push('images/jjx_07.png');
LoadingImg.push('images/jjx_08_1.png');
LoadingImg.push('images/jjx_08_2.png');
LoadingImg.push('images/jjx_08_3.png');
LoadingImg.push('images/jjx_09.png');
LoadingImg.push('images/jjx_10.png');
LoadingImg.push('images/jjx_11.png');
LoadingImg.push('images/jjx_12.png');
LoadingImg.push('images/jjx_13.png');
LoadingImg.push('images/jjx_14.png');
LoadingImg.push('images/jjx_15_1.png');
LoadingImg.push('images/jjx_15_2.png');
LoadingImg.push('images/jjx_15_3.png');
LoadingImg.push('images/jjx_16.png');
LoadingImg.push('images/jjx_17.png');
LoadingImg.push('images/jjx_18.png');
LoadingImg.push('images/jjx_phone.png');
LoadingImg.push('images/jjx_x2.png');
LoadingImg.push('images/jjx_x3.png');
LoadingImg.push('images/jjx_x4.png');
LoadingImg.push('images/jjx_x5.png');
LoadingImg.push('images/jjx_x6.png');
LoadingImg.push('images/jjx_x7.png');
LoadingImg.push('images/jjx_x8.png');
LoadingImg.push('images/jjx_x9.png');
LoadingImg.push('images/jjx_x10.png');
LoadingImg.push('images/jjx_x11.png');
function HTMLStart  (){
	/*
	swipeUpFn(4);
	*/
	
}


LoadFn(LoadingImg , function (){
	$('#loading').fadeOut();
	ss();
	HTMLStart ();
} , function ( p ){
	$('#loading p').html(p + '%')
});


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
	
	$('#music0')[0].play();
	}
function ss(){
		$('.b1').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0.5} ,0.5);	  	
    
	$('.wenzi').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0.8} ,0.5);
	$('.logo').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0.2} ,0.5);
	$('.toua').from({ transform : 'scale(0.2)' , opacity : 0 , delay : 0} ,1.2);
	$('.ma1').from({ transform : 'translate(50px , -50px)' , opacity : 0 , delay : 0.8} ,0.2);
	$('.ma2').from({ transform : 'translate(50px , 0px)' , opacity : 0 , delay : 0.2} ,0.2);
	$('.ma3').from({ transform : 'translate(50px , 50px)' , opacity : 0 , delay : 0.8} ,0.2);
	$('.ma4').from({ transform : 'translate(-50px , 50px)' , opacity : 0 , delay : 0.8} ,0.2);
	$('.ma5').from({ transform : 'translate(-50px , 0px)' , opacity : 0 , delay : 0.2} ,0.2);
	$('.ma6').from({ transform : 'translate(-50px , -50px)' , opacity : 0 , delay : 0.8} ,0.2);
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
	},1500)
	}

$(document).ready(function(){
 document.ontouchmove = function(e){ e.preventDefault(); }
  });

