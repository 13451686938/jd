//轮播函数一:淡入淡出;
function lunBo($ulist,$olist){
	var timer = null;
	var index = 0;
	timer = setInterval(autoPlay,1000);
	function autoPlay(){
		index++;
		if(index==$ulist.length){
			index=0;
		}
		$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$olist.on("mouseenter",function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$olist.on("mouseleave",function(){
		timer = setInterval(autoPlay,1000);
	})
}

lunBo($(".sliderLeft ul li"),$(".sliderLeft ol li"));
//轮播封装函数二:手动轮播
function lunBo_a(){
	var $span1 = $(".msC span")[0];
	var $span2 = $(".msC span")[1];
	var $ul = $(".msC ul");
	var $ulist = $ul.find("li");
	var num = 0;
	var dis = -203;
	$($span1).on("click",function(){
		num++;
		console.log(num);
		$ulist.append($ulist[num]);
		if(num==$ul.find("li").size()){
			num = 0;
		}
		$ul.css( {"left": dis*num+"px"} );
	})
	
	$($span2).on("click",function(){
		num--;
		console.log(num);
		$ulist.append($ulist[num]);
		if(num==-$ul.find("li").size()){
			num = 0;
		}
		$ul.css( {"left": dis*num+"px"} );
	})
}
lunBo_a();

//用户信息加载
function _userload(){
	//问题：本地cookie无法正确读取，服务器上alert，console.log（）语句失效（本地有效）？
	
	var _json1 = document.cookie.split("=")[0];
	var _json2= JSON.parse(document.cookie.split("=")[1]);
	var _str = _json2.uname;
	console.log(document.cookie,_json1,_json2,_str);
	if(_json1=="userinfo"){
		$(".headerRight ul li:nth-child(1)").html("_str");
		console.log(_json2.uname)
	}
}
_userload();

