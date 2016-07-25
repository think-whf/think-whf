$(function(){
	//搜索栏
	$(window).on("scroll",function(){
		var $sou = $('.meiXi');
		var $list = $('.pro-list').offset().top;
		var $souTop = $(window).scrollTop();

		if($souTop>$list){
			$sou.show().css("top",$souTop);
		}
		else{
			$sou.hide();
		};
	});	
});

$(function(){
	var $xuan = $('.xuanze').children("p");
	console.log($xuan);
	$.each($xuan,function(idx,item){
		$(item).on("click",function(){
			var $content = $(this).next();
			$content.show();
		});
	});
});