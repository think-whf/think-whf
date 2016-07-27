/*----------表单验证-----------*/
$(function(){
	var $txt = $("#logTxt");
	var $psw = $("#logpsw");
	var $zhuCe = $(".zhuCe");
	var $nextpsw = $("#nextpsw");
	var $login = $(".loginBtn");

	var txtval;
	var pswval;

	$("<span/>").addClass("yzTxt").insertAfter($zhuCe);
	$("<span/>").addClass("yzPsw").insertAfter($zhuCe);
	$("<span/>").addClass("nextpsw").insertAfter($zhuCe);
	//帐号验证
	$txt.on("fous",function(){
		$(".yzTxt").css("zIndex",20);
	});


	$txt.on("blur",function(){
		var regphone = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;

		txtval = $txt.val();
		
		if(txtval==""){
			$(".yzTxt").html("请输入常用手机号或邮箱");
		}
		else if(!regphone.test(txtval)){
			$(".yzTxt").html("请输入正确的常用手机号或邮箱");
		}
		else{
			$(".yzTxt").html("");
			$(".yzTxt").css("zIndex",0);
		}
	});
	//密码验证
	$psw.on("fous",function(){
		$(".yzPsw").css("zIndex",20);
	});
	
	$psw.on("blur",function(){
		
		var regPsw = /^[a-zA-z0-9]\w{3,15}$/;
		pswval = $psw.val();

		if(pswval==" "){
			$(".yzPsw").html("请输入密码");
		}
		else if(!regPsw.test(pswval)){
			$(".yzPsw").html("密码要在4到16之间哦");
		}
		else{
			$(".yzPsw").html("");
			$(".yzPsw").css("zIndex",0);
		};
	});
	$login.on("click",function(){
		$.ajax({
			url:'http://10.16.155.27:3000/ajax/whf?type=check',
				dataType:"json",
				success:function(res){
					var checkTrue = false;
					$.each(res,function(idx,item){
						console.log(txtval,pswval,$(item));
						if(txtval==item.name && pswval==item.password){
							checkTrue = true;
							alert("登录成功");
						}
					})
					if(checkTrue==false){
						alert("用户名或密码不正确");
					}
					else{
						var userinfo = {user:txtval,password:pswval};
						document.cookie = 'userinfo=' + JSON.stringify(userinfo);
						 window.location.href="/index.html"; 
					}
			}
		});
	});
});