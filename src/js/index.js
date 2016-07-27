	$(function(){
		console.log(document.cookie);
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
	timer = setInterval(init,2000);
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

$(function(){
	var soldL = $('.soldL');
	var soldR = $('.soldR');
	var code = $('.sold-code');
	var coList = code.children("li");
	var soldL = $(".soldL");
	var soldR = $(".soldR");

	var speed = 192;
	var codeTime

	codeInit();
	codeShow();

	 codeTime = setInterval(codeShow,2000);

	
//重置样式
	function codeInit(){
		for(var i=0;i<coList.length;i++){
			$(coList.eq(i)).css("left",i*speed);
		}
	};
//两秒改变li的left的值，大于0重置
	function codeShow(){
		$.each(coList,function(idx,item){
			var checked = parseInt($(item).css("left"));
			$(item).stop().animate({left:checked-speed},function(){
				if(parseInt($(this).css("left"))<0){
					$(this).css("left",960);
				}
			});										
		});
	};

	code.hover(function(){
		clearInterval(codeTime);
	},function(){
		codeTime = setInterval(codeShow,4000);
	});


	soldL.hover(function(){
		clearInterval(codeTime);
	},function(){
		codeTime = setInterval(codeShow,4000);
	});

	soldR.hover(function(){
		clearInterval(codeTime);
	},function(){
		codeTime = setInterval(codeShow,4000);
	});

	soldL.on("click",function(){
		$.each(coList,function(idx,item){
			var checked = parseInt($(item).css("left"));
			$(item).stop().animate({left:checked-speed},function(){
				if(parseInt($(this).css("left"))<0){
					$(this).css("left",960);
				}
			});										
		});
	});

	soldR.on("click",function(){
		$.each(coList,function(idx,item){
			var checked = parseInt($(item).css("left"));
			$(item).stop().animate({left:checked+speed},function(){
				if(parseInt($(this).css("left"))>960){
					$(this).css("left",0);
				}
			});										
		});
	});
});