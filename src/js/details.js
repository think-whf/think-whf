$(function(){
	//详情页放大镜
	var $proList = $(".proList").find('li');
	var $proPic = $('.pro-pic').find('img');
	var $setBig = $('.setBig').find('img');
	//小图片跟商品的联系
	$.each($proList,function(idx,item){
		$(this).on("mouseenter",function(){
			$(this).css({
				border:"2px solid #ccc"
			}).siblings().css({
				border:"2px solid #fff"
			});
			$proPic.eq(idx).css('zIndex',5).siblings().css('zIndex',0);
		});
	});
	//放大镜
	$.each($proPic,function(idx,item){
		$(this).on("mouseenter",function(e){
			$setBig.eq(idx).css('zIndex',5).siblings("img").css('zIndex',0);
			$(".fangda").show();	
			
		}).on('mousemove',function(e){
			//e.offsetX
			var offX = ($(".fangda").width())/2;
			var offY = ($(".fangda").height())/2;
			var fdleft = e.pageX;
			var fdTop = e.pageY;
			var fdX = $(this).offset().left;
			var fdY = $(this).offset().top;

			$(".fangda").css({
				left:fdleft-fdX-offX,
				top:fdTop-fdY-offY
			});
			if(fdleft<offX+fdX){
				$(".fangda").css({
					left:0
				});
			};
			if(fdTop<offY+fdY){
				$(".fangda").css({
					top:0
				});
			};
			if()
			
		}).on('mouseleave',function(){
			$(".fangda").hide();
		});
	});
});