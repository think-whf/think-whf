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

/*----------denglu-----------*/
$(function(){
	var cookie = document.cookie;
	if(cookie){
		var arr = cookie.split("&");
		var newArr = arr.toString().split(";");

		var userInfo;
		
		//用户名cokkie验证
		for(var i=0;i<arr.length;i++){

			for(var n=0;n<newArr.length;n++){
				if(newArr[n].indexOf("userinfo=")!=-1){

					var userArr;
					if(n==0){
						userArr = newArr[n].substring("userinfo=".length);
					}else{
						userArr = newArr[n].substring("userinfo=".length+1);
					}
					
					console.log(userArr);
					userInfo = JSON.parse(userArr.toString());

					userInit();
				};
			}
					
		};
			


		function userInit(){			
			var username = userInfo.user;
			var $hede = $(".headLeft");

			if(userInfo !="null"){
				$hede.html(username+" 欢迎您 "+"<span id='userSpan'>退出</span>");
			}
			$("#userSpan").on("click",function(){
				console.log("11");
				var now = new Date();
				now.setDate(now.getDate()-1);
				document.cookie = 'userinfo=null;expires=' + now;

				location.reload();
			});
		}
		//购物车cokkie
		
		for(var j=0;j<arr.length;j++){
			for(var k=0;k<newArr.length;k++){
				if(newArr[j].indexOf("shopping=")!=-1){
					var shopArr;
					var shop;
					var shopping;

					if(j==0){
						shopArr = newArr[j].substring("shopping=".length);
					}
					else{
						shopArr = newArr[j].substring("shopping=".length+1);
					}					
					var userInfo = JSON.parse(shopArr.toString());
					shopping();
				};
			}	
		};
		function shopping(){
				var $cartList = $(".cartList");
				var img = $("<img/>").attr("src",userInfo.src).addClass("shopPic");
				var div = $("<div/>").addClass("picBox");
				var goods = $("<span/>").html(userInfo.goods).addClass("shopGoods");
				var money = $("<span/>").html("￥"+userInfo.money).addClass("shopMoney");
				var close = $("<span/>").html('&times;').addClass("shopClose");
				div.append(img,goods,money,close);

				$cartList.html(div);
		};
		$(".shopClose").on("click",function(){
			var now = new Date();
				now.setDate(now.getDate()-1);
				document.cookie = 'shopping=null;expires=' + now;
				location.reload();
		});			
	};
	
});

/*$(function(){
	var $cartList = $('.cartList');
	$cartList.on("click",function(){
		window.location.href="/html/shopping-cart.html"; 
	});
});*/

