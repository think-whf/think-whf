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

/*----------表单验证-----------*/
$(function(){
	var $txt = $("#logTxt");
	var $psw = $("#logpsw");
	var $zhuCe = $(".zhuCe");
	var $nextpsw = $("#nextpsw");

	var txtTrue = true;
	var pswTrue = true;
	var nextpsw = true;

	$("<span/>").addClass("yzTxt").insertAfter($zhuCe);
	$("<span/>").addClass("yzPsw").insertAfter($zhuCe);
	$("<span/>").addClass("nextpsw").insertAfter($zhuCe);
	//帐号验证
	$txt.on("fous",function(){
		$(".yzTxt").css("zIndex",20);
	});


	$txt.on("blur",function(){
		var regphone = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;

		var txtval = $txt.val();
		
		if(txtval==""){
			$(".yzTxt").html("请输入常用手机号或邮箱");
			txtTrue = false;
		}
		else if(!regphone.test(txtval)){
			$(".yzTxt").html("请输入正确的常用手机号或邮箱");
			txtTrue = false;
		}
		else{
			$(".yzTxt").html("");
			txtTrue = true;
			$(".yzTxt").css("zIndex",0);
		}
	});
	//密码验证
	$psw.on("fous",function(){
		$(".yzPsw").css("zIndex",20);
	});
	
	$psw.on("blur",function(){
		
		var regPsw = /^[a-zA-z0-9]\w{3,15}$/;
		var pswval = $psw.val();

		if(pswval==" "){
			$(".yzPsw").html("请输入密码");
			pswTrue = false;
		}
		else if(!regPsw.test(pswval)){
			$(".yzPsw").html("密码要在4到16之间哦");
			pswTrue = false;
		}
		else{
			$(".yzPsw").html("");
			$(".yzPsw").css("zIndex",0);
		};
	});

	$nextpsw.on("fous",function(){
		$(".nextpsw").css("zIndex",20);
	});


	$nextpsw.on("blur",function(){
		if($nextpsw.val() != $psw.val()){
			$(".nextpsw").html("两次密码不一致");
			nextpsw = false;
		}
		else{
			$(".nextpsw").html("");
			nextpsw = true;
			$(".nextpsw").css("zIndex",0);
		}
	});
});