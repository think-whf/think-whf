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

//购物车实况更新
$(function(){
	var cookie = document.cookie;
	if(cookie){
		var arr = cookie.split("&");
		var newArr = arr.toString().split(";");

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
					cart();
				};
			}	
		};
		function cart(){
			var $cart = $(".cart");
				var img = $("<img/>").attr("src",userInfo.src).addClass("cartPic");
				var div = $("<div/>").addClass("cartBox");
				var goods = $("<span/>").html(userInfo.goods).addClass("cartSp");
				var money = $("<span/>").html("￥"+userInfo.money).addClass("cartMoney");
				var close = $("<span/>").html('&times;').addClass("cartClose");
				div.append(img,goods,money,close);

				var total = $("<div/>").html("总价 : "+userInfo.money).addClass("cartTotal");

				$cart.empty();
				$cart.append(div,total);
		};
		$(".cartClose").on("click",function(){
			var now = new Date();
				now.setDate(now.getDate()-1);
				document.cookie = 'shopping=null;expires=' +now+";path=/";
				location.reload();
		});
	};
});