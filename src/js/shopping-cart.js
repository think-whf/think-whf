//猜你喜欢

$(function(){
	var timer;
	var $thing = $(".thing");
	
	var $corLeft = $('.corLeft');
	var $corRight = $('.corRight');

	var spe= 960;
	timer = setInterval(thingShow,2000);
	thingShow();

	function thingShow(){
		$.each($thing,function(idx,item){
			var zero = parseInt($(item).css("left"));
			$(item).animate({left: zero-spe},function(){
				if(parseInt($(this).css("left"))<0){
					$(item).css("left",-spe);
				}
			})
		});
	};

});