var PI=Math.PI;
var userImgSrc;
var isshare=parent.getQueryStringByName('share');
//如果是分享链接，那么图像地址在链接地址中，否则在parent.IMGSRC
var QuerySrc=parent.getQueryStringByName('imgsrc');
var PageNum=parent.getQueryStringByName('PageNum');//分享的pagenum
if(QuerySrc){
	userImgSrc=QuerySrc;
}else{
	userImgSrc=getcookie('IMGSRC');
}



var shareWord=[
{
	'name':'帅的人都已经打开！颜值最高的音乐秀你还不来一起嗨？',  //偶像
	'src':['../img/shareimg1.png','../img/shareimg5.png']
},
{
	'name':'作为一个Rocker，我在台上有100种方法嗨翻全场，不服来战！',//摇滚
	'src':['../img/shareimg2.png','../img/shareimg5.png']
},

{
	'name':'给麦霸一个hold住全场的机会！你敢来登台挑战吗？',//麦霸
	'src':['../img/shareimg3.png','../img/shareimg5.png']
},

{
	'name':'看过这首MV的人梦想都实现了，就等懂的你静静欣赏！',//静静
	'src':['../img/shareimg4.png','../img/shareimg5.png']
}
]
var sharePageNum=getcookie('sharePageNum');//当前是哪个页面

var shareTitle=shareWord[parseInt(parseInt(sharePageNum)/10)-1].name;
/*var shareImg=shareWord[parseInt(parseInt(sharePageNum)/10)-1].src[parseInt(sharePageNum%10)-1];*/
shareImg=getcookie('IMGSRC');



$(function(){
	//返回选择歌曲类型
	$('.returnBtn').click(function(){
		goto('page1');
	});
	//如果是苹果非微信浏览器出现提示按钮
	if(userAgent().isIOS&&(!userAgent().isWX)){
		$('.tipPlayMusic').show();
	}else{
		$('.tipPlayMusic').hide();
	}

	//点击音乐开关后，提示按钮
	$('.musicUI').click(function(){
		$('.tipPlayMusic').fadeOut();
	});

	var userId=getcookie('userId');
	//分享到朋友圈
	var obj1 = {
		title: shareTitle,
		link: resolveUrl('../?share=true&PageNum='+sharePageNum+'&imgsrc='+encodeURIComponent(userImgSrc)+'&to='+userId+'#/animation'+sharePageNum+''),// 分享链接
		imgUrl: resolveUrl(shareImg), // 分享图标
		success: function () {
			_smq.push(['custom','Page Sharing','Wechat Sharing','Mobile']);
			ga('send', 'event', 'button', 'shareTimelineComplete', 'musiccampaign');
		},
		cancel: function () { }
	};
	//分享给朋友
	var obj2 = {
		title: shareTitle,
		desc:'定制你的专属MV',
		link: resolveUrl('../?share=true&PageNum='+sharePageNum+'&imgsrc='+encodeURIComponent(userImgSrc)+'&to='+userId+'#/animation'+sharePageNum+''),// 分享链接
		imgUrl: resolveUrl(shareImg), // 分享图标
		success: function () {
			_smq.push(['custom','Page Sharing','Wechat Sharing','Mobile']);
			ga('send', 'event', 'button', 'shareFriendComplete', 'musiccampaign');
			},
		cancel: function () { }
	};	
	parent.wx.onMenuShareTimeline(obj1);
	parent.wx.onMenuShareAppMessage(obj2);
	//弹出分享浮层,微信浏览器与普通浏览器弹出不同的浮层
	$('.shareBtn').click(function(){
		var shareObj;
		if(parent.$('.shareBoxWX').hasClass('WX')){
			shareObj=parent.$('.shareBoxWX');
		}else{
			shareObj=parent.$('.shareBoxBroser');
		}
		
		shareObj.fadeIn(500,function(){
			//浮层出现时播放vo
			$('#music0')[0].pause();
			$('#shareMusic')[0].play();
			setTimeout(function(){$('#music0')[0].play();},5000);
			shareObj.click(function(){
				shareObj.off('click');
				shareObj.fadeOut(500);
			})						
		});
		//ga
		switch (parseInt(sharePageNum)){
			case 11: ga('send', 'event', 'button', 'Invite_idolMV1', 'Page_MV_friend'); 
					 _smq.push(['custom','Page MV','Invite Idol MV1','Mobile']);

					break;
			case 12: ga('send', 'event', 'button', 'Invite_idolMV2', 'Page_MV_friend');
					_smq.push(['custom','Page MV','Invite Idol MV2','Mobile']);

				break;
			case 21: ga('send', 'event', 'button', 'Invite_rockMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Rock MV1','Mobile']);


				break;
			case 22: ga('send', 'event', 'button', 'Invite_rockMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Rock MV2','Mobile']);


				break;
			case 31: ga('send', 'event', 'button', 'Invite_soloMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Solo MV1','Mobile']);

				break;	
			case 32: ga('send', 'event', 'button', 'Invite_soloMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Solo MV2','Mobile']);

				break;	
			case 41: ga('send', 'event', 'button', 'Invite_selfMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Self MV1','Mobile']);

				break;	
			case 42: ga('send', 'event', 'button', 'Invite_selfMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV','Invite Self MV2','Mobile']);

				break;					
			default:'';
		}	
		//浮层页面的跟踪代码
		_smq.push(['pageview', 'Page_sharing','QRCode']);	
		ga('send', 'pageview', '/Page_sharing');	
		
	});
	//定制自己的舞台
	$('.makeBtn').click(function(e){
		//ga
		switch (parseInt(PageNum)){
			case 11: ga('send', 'event', 'button', 'friend_idolMV1', 'Page_MV_friend'); 
					 _smq.push(['custom','Page MV Friend','Friend Idol MV1','Mobile']);

					break;
			case 12: ga('send', 'event', 'button', 'friend_idolMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Idol MV2','Mobile']);

					break;
			case 21: ga('send', 'event', 'button', 'friend_rockMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Rock MV1','Mobile']);

					break;
			case 22: ga('send', 'event', 'button', 'friend_rockMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Rock MV2','Mobile']);

					break;
			case 31: ga('send', 'event', 'button', 'friend_soloMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Solo MV1','Mobile']);

					break;	
			case 32: ga('send', 'event', 'button', 'friend_soloMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Solo MV2','Mobile']);

					break;	
			case 41: ga('send', 'event', 'button', 'friend_selfMV1', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Self MV1','Mobile']);

					break;	
			case 42: ga('send', 'event', 'button', 'friend_selfMV2', 'Page_MV_friend');
					 _smq.push(['custom','Page MV Friend','Friend Self MV2','Mobile']);
					break;					
			default:'';
		}	
		setTimeout(function(){parent.location='../#home';},10);			
		
		e.stopPropagation();
	});
	
	if(isshare=='true'){
		//隐藏返回按钮
		$('.returnBtn').hide();
		//自己不能给自己投票
		if(userId!=parent.getQueryStringByName('to')){
			$.ajax({
				url:"../../php/vote.php?handler=vote&to="+userId,
				success:function(data){
				}
				
			})					
		}

		//显示站台数
		$.ajax({
			url:"../../php/vote.php?handler=getvote&to="+userId,
			success:function(data){
				$('#num').html(data);	
			}
			
		})
		
		//ga('send', 'pageview', '/Page_MV_friend');		
					
	}else{
		$('.returnBtn').show();
		//ga('send', 'pageview', '/Page_MV');
		
	}





	$('.topDiv').on('touchmove',function(e){
		e.stopPropagation();
	});
	$('body>div').on('touchend',function(e){
		e.stopPropagation();
	});	
				
})

$(window).load(function(){
	if(isshare=='true'){
		ga('send', 'pageview', '/Page_MV_friend');		
	}else{
		ga('send', 'pageview', '/Page_MV');
	}
})
