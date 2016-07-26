//猜你喜欢

$(function(){
	var timer;
	var $thing = $(".thing");
	
	var $corLeft = $('.corLeft');
	var $corRight = $('.corRight');

	var spe= 960;
	speInit();
	timer = setInterval(thingShow,5000);
	thingShow();


	function speInit(){
		for(var i=0;i<$thing.length;i++){
			$($thing.eq(i)).css("left",i*spe);
		}
	};
	function thingShow(){
		/*$.each($thing,function(idx,item){
			var zero = parseInt($(item).css("left"));
			$(item).animate({left: zero-spe},function(){
				if(parseInt($(this).css("left"))<0){
					$(item).css("left",spe);
				}
			});
			$(item).next("div").animate({left : zero});
		});*/
		for(var i=0;i<$thing.length;i++){
			var zero = parseInt($thing.eq(i).css("left"));
			$thing.eq(i).stop().animate({left: zero-spe,zIndex:10},function(){
				if(parseInt($(this).css("left"))<-spe){
					$(this).css({left:spe,zIndex:10});
				}
			});
			$thing.eq(i+1).stop().animate({left : zero});
		};
	};

});