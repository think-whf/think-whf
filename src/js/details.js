$(function(){
	//详情页放大镜
	var $proList = $(".proList").find('li');
	var $proPic = $('.pro-pic').find('img');
	var $pro = $('.pro-pic');
	var $setBig = $('.setBig');
	var $bigTu = $('.setBig').find("img");
	//小图片跟商品的联系
	$.each($proList,function(idx,item){
		$(this).on("mouseenter",function(){
			$(this).css({
				border:"2px solid #ccc"
			}).siblings().css({
				border:"2px solid #fff"
			});
			$proPic.css('zIndex',0).eq(idx).css('zIndex',5);
			$setBig.find("img").css('zIndex',0).eq(idx).css('zIndex',5);
		});
	});
	//放大镜
	$pro.on("mouseover",function(e){
			$(".fangda").show();
			$setBig.show();
			$pro.on('mousemove',function(e){
				//e.offsetX
				var offX = ($(".fangda").outerWidth())/2;
				var offY = ($(".fangda").outerHeight())/2;

				var fdleft = $(this).outerWidth();
				var fdTop = $(this).outerHeight();


				var fdX = $(this).offset().left;
				var fdY = $(this).offset().top;


				var Xbianju = e.pageX - fdX-offX;
				var Ybianju = e.pageY - fdY-offY;

				var rightX = fdX+fdleft-offX;
				var bomY = fdY+fdTop-offY;

				if(Xbianju<0){
					Xbianju = 0;
				};
				if(Ybianju<0){
					Ybianju = 0;
				};

				console.log(e.pageX)
				if(e.pageX>rightX){
					Xbianju = fdleft-offX*2;
				};

				if(e.pageY>bomY){
					Ybianju = fdTop-offY*2;
				};				
				
				$(".fangda").css({
					left : Xbianju,
					top : Ybianju
				});
				var bigX = $(".fangda").position().left;
				var bigY = $(".fangda").position().top;


				$bigTu.css({
					left : -bigX*2,
					top : -bigY*2
				});
				/*if(e.clientX<offX+fdX){
					$(".fangda").css({
						left:0
					});
				};
				if(e.clientY<offY+fdY){
					$(".fangda").css({
						top:0
					});
				};*/
				//if()
				return false;
			});			
		}).on('mouseout',function(){
			$(".fangda").hide();
			$setBig.hide();
		});	


});
//详情页切换窗口
$(function(){
	var $msg = $('.pro-msg');
	var $content = $('#pro-content').children("div");
	$msg.on("click","li",function(){
		var idx = $(this).index();
		$content.hide().eq(idx).show();
		$(this).css({
			background:"#333",
			color:"#fff"
		}).siblings("li").css({
			background:"#e6e6e6",
			color:"#333"
		});
	});
});

//侧边栏事件
$(function(){
	$(window).on("scroll",function(){

		var cbY = $(window).scrollTop();
		var winSize = $(window).height();


		var $consult = $(".consult");
		var gouWu = $(".gouwu");
		var msgX = $(".details-msg").offset().left;
		var msgY = $(".details-msg").offset().top+$(".details-msg").height();

		$consult.css({
			top:cbY +0.6*winSize
		});
		if(cbY>msgY){
			gouWu.show();
			gouWu.css({
				left:msgX,
				top:cbY
			})
		}else{
			gouWu.hide();
		}
	});
//回顶部
	var $ding = $("#dingBu");
	$ding.on("click",function(){
		$(window).scrollTop(0);
	});
});
//尺码事件	
$(function(){
	var $Ma = $(".size");
	$Ma.on("click","span",function(){
		$(this).css("borderColor","#d60000").siblings().css("borderColor","#ccc");
	})
});
//购物车cookie事件
$(function(){
	var $shopping = $('.gouwudai');
	var $deta = $(".pro-tips").find("h3").text();
	var $img = $("#model").attr("src");
	var money = $("#money").text();

	$shopping.on("click",function(){
		console.log($img.substring(3));
		var shopping = {goods:$deta,src:$img,money:money};
		document.cookie = 'shopping=' + JSON.stringify(shopping);
		console.log(document.cookie);
	});
});