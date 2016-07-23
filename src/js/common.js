$(function(){
	//fous
	var $fousUs = $('.fousUs');
	var $link = $('.fousUs_link');
	$fousUs.hover(function(){
		$link.show();
		$fousUs.find('span').css({background:"url('../css/img/headico.png') no-repeat -20px -15px"});
	},function(){
		$link.hide();
		$fousUs.find('span').css({background:"url('../css/img/headico.png') no-repeat 0 -15px"});
	});
	//shoppingCart
	var $cart = $('.shoppingCart');
	var $cartList = $('.cartList');
	$cart.hover(function(){
		$cartList.show();
	},function(){
		$cartList.hide();
	});
});	
$(function(){
//---------------------------Nav-------
	var $Nav = $('.Nav');
	$.each($Nav,function(idx,item){
		var $home = $(item).find('.home');
		$(item).on('mouseenter',function(){
			$home.show();
		}).on('mouseleave',function(){
			$home.hide();
		});
	});
});