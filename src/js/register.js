$(function(){
	var $txt = $("#logTxt");
	var $psw = $("#logpsw");
	var $zhuCe = $(".zhuCe");
	var $nextpsw = $("#nextpsw");
	var $regBtn = $(".regBtn");

	var txtTrue = false;
	var pswTrue = false;
	var nextpsw = false;
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
			txtTrue = false;
		}
		else if(!regphone.test(txtval)){
			$(".yzTxt").html("请输入正确的常用手机号或邮箱");
			txtTrue = false;
		}
		else{
			$.ajax({
					url:'http://localhost:3000/ajax/whf?type=check',
					dataType:"json",
					success:function(res){
						console.log(res);
						$(".yzTxt").html("");
						txtTrue = true;
						$(".yzTxt").css("zIndex",0);
					}
			})
		}
	});
	//密码验证
	$psw.on("fous",function(){
		$(".yzPsw").css("zIndex",20);
	});
	
	$psw.on("blur",function(){
		
		var regPsw = /^[a-zA-z0-9]\w{3,15}$/;
		pswval = $psw.val();

		if(pswval==""){
			$(".yzPsw").html("请输入密码");
			pswTrue = false;
		}
		else if(!regPsw.test(pswval)){
			$(".yzPsw").html("密码要在4到16之间哦");
			pswTrue = false;
		}
		else{
			$(".yzPsw").html("");
			pswTrue = true;
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

	$regBtn.on("click",function(){
		console.log(txtTrue,pswTrue,nextpsw,txtval,pswval);
		if(txtTrue==true && pswTrue==true && nextpsw==true){
			$.ajax({
					url:'http://localhost:3000/ajax/whf?type=reg',
					data:{sender:txtval,password:pswval},
					success:function(res){
					}
				});

				alert("注册成功");
		}else{
			alert("亲，信息没填好哦");
		}
	});
	
});