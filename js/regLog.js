function reg(){
	var regNum = /\d+/;
	var regLetter = /[a-zA-Z]+/;
	var regChar = /[\W_]+/;
	var _regNum = /^\d+$/;
	var _regLetter = /^[a-zA-Z]+$/;
	var _regChar = /^[\W_]+$/;
	var reg_email = /[\w!_]+@[\w!_]+(\.[a-z])+/;
	//var flag = true;
	//用户名验证
	
	$("#pname").on("blur",function(){
		var $pname=$("#pname").val();
		var reg_pname = /^[\da-zA-Z]{6}$/;//用户名:单词数字组成
		
			if($pname.length<6){
				$("#pname").parent().next("div").html("<span><img src='../img/camera.png'></span><span>用户名需要六位以上</span>");
			}else if(reg_pname.test($pname)){
				$("#pname").parent().next("div").html("<span><img src='../img/camera.png'></span><span>用户名注册成功</span>");
			}else{
				$("#pname").parent().next("div").html("<span><img src='../img/camera.png'></span><span>用户名只能包含字母和数字</span>");
			}
	})
	
	//登录密码验证8-20位字符,至少含两种;
	$("#pwd").on("blur",function(){
		var $pwd=$("#pwd").val();
		//console.log($("#pwd").parent().next("div"))
		if($pwd.length<8||$pwd.length>20){
			$("#pwd").parent().next("div").html("<span><img src='../img/camera.png'></span><span>密码为8-20位的字符组合</span>")
		}else if(_regNum.test($pwd)||_regLetter.test($pwd)||_regChar.test($pwd)){
			$("#pwd").parent().next("div").html("<span><img src='../img/camera.png'></span><span>密码为两种及以上任意字符组合</span>")
		}else{
			$("#pwd").parent().next("div").html("<span><img src='../img/camera.png'></span><span>密码可以使用</span>")
		}
	})
	//确认密码:cookie中取出登录密码与值比较;
	$("#repwd").on("blur",function(){
		var $pwd=$("#pwd").val();
		var $repwd = $("#repwd").val();
		if($pwd==$repwd){
			$("#repwd").parent().next("div").html("<span><img src='../img/camera.png'></span><span>密码一致</span>")
		}else{
			$("#repwd").parent().next("div").html("<span><img src='../img/camera.png'></span><span>两次密码输入不一致</span>")
		}
		
	})
	//手机号验证
	$("#tel").on("blur",function(){
		var $tel = $("#tel").val();
		var regTel = /^1[0-9]{10}$/;
		if(regTel.test($tel)){
			$("#tel").parent().next("div").html("<span><img src='../img/camera.png'></span><span>手机号格式正确</span>");
		}else{
			$("#tel").parent().next("div").html("<span><img src='../img/camera.png'></span><span>请输入正确的手机号</span>");
		}
	})
	//点击生成四位验证码;
	function rand(min,max){
		return Math.round(Math.random()*(max-min)+min);
	}
	$("#yzm").on("click",function(){
		var str = "";
		for(var i = 0 ; i < 4 ;i++){
			str+=rand(0,9);
		}
		$("#yzm").val(str);
		$("#yzm").parent().next("div").html("<span>看不清，换一张</span>")
	})
	$("#yzm").parent().next("div").on("click",function(){
		var str = "";
		for(var i = 0 ; i < 4 ;i++){
			str+=rand(0,9);
		}
		$("#yzm").val(str);
	})
	//验证码输入后确认;
	$("#reyzm").on("blur",function(){
		var _reyzm=$("#reyzm").val();
		var _yzm = $("#yzm").val();
		console.log(_reyzm,_yzm)
		if(_reyzm==_yzm){
			$("#reyzm").parent().next("div").html("<span><img src='../img/camera.png'></span><span>验证码正确</span>");
		}else{
			$("#reyzm").parent().next("div").html("<span><img src='../img/camera.png'></span><span>验证码错误</span>");
		}
	})
	//邮箱验证:
	$("#email").on("blur",function(){
		var $email = $("#email").val();
		var reg_email = /[\w!_]+@[\w!_]+(\.[a-z])+/;
		if(reg_email.test($email)){
			$("#email").parent().next("div").html("<span><img src='../img/camera.png'></span><span>该邮箱可以使用</span>");
		}else{
			$("#email").parent().next("div").html("<span><img src='../img/camera.png'></span><span>邮箱格式不正确</span>")

		}
	})
	
	//注册成功后用户信息存入,跳转到登录页面;

	$("#regBtn").on("click",function(){
		var $pname=$("#pname").val();
		var reg_pname = /^[\da-zA-Z]+$/;
		var reg_email = /[\w!_]+@[\w!_]+(\.[a-z])+/;
		var $pwd=$("#pwd").val();
		var $repwd=$("#repwd").val();
		var $email=$("#email").val();
		var $tel = $("#tel").val();
		var _reyzm=$("#reyzm").val();
		var _yzm = $("#yzm").val();
		var $btn=$("#reg").find(":button");
		let infoJson = {
			"uname" :　$pname , 
			"upwd" : $pwd,
			"repwd":$repwd,
			"tel" : $tel,
			"email":$email
				}
		//console.log(infoJson);--{uname: "123123", upwd: "123123aa", repwd: "123123aa", email: "123@11.cn"}
		
		var now=new Date();
		now.setDate(now.getDate()+7);		  
		document.cookie = "userinfo="+JSON.stringify(infoJson)+";path=/;expires="+now;
		console.log(document.cookie);
		//$.cookie('the_cookie',"userinfo="+JSON.stringify(infoJson),{expires:7});
		//var _json =JSON.parse(str.split("=")[1]);
		if(reg_pname.test($pname)&&reg_email.test($email)&&_reyzm==_yzm){
			location.href="login.html";
		}
		
		
    })    
}		
reg();	
