	$(function(){
		//fous
		var $fousUs = $('.fousUs');
		var $link = $('.fousUs_link');
		$fousUs.hover(function(){
			$link.show();
			$fousUs.find('span').css({background:"url('css/img/headico.png') no-repeat -20px -15px"});
		},function(){
			$link.hide();
			$fousUs.find('span').css({background:"url('css/img/headico.png') no-repeat 0 -15px"});
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
	//---------------------------banner-------
$(function(){
	var timer;
	var $banner = $("#ban-pic");
	var $movePic = $banner.find('ul');
	
	var $picLeft = $('.ban-picLeft');
	var $picRight = $('.ban-picRight');

	var index = 0;
	var speed = 960;
	timer = setInterval(init,1000);
	init();

	function init(){
		index++;
		if(index>5){
			$movePic.css('left',0);
			index = 1;
		};
		show();
	}
	function show(){
		$movePic.stop().animate({
			left : -index*speed
		});
	};

	function move(){
		index--;
		if(index<0){
			index = 4;
			$movePic.css('left',-4740);
		};
		show();
	};


	$banner.hover(function(){
		clearInterval(timer);
		$picLeft.show();
		$picRight.show();
	},function(){
		timer = setInterval(init,4000);
		$picLeft.hide();
		$picRight.hide();
	});

	$picLeft.on('click',function(){
		move();
	}).hover(function(){
		$(this).css('background',"url('css/img/jt.png')")
	},function(){
		$(this).css('background',"url('css/img/jt.png') 0 -201px")
	});

	$picRight.on('click',function(){
		init();
	}).hover(function(){
		$(this).css('background',"url('css/img/jt.png') 0 -66px")
	},function(){
		$(this).css('background',"url('css/img/jt.png') 0 -134px")
	});
});


//---------------------------sold-code-------