window.onload = function(){
	new TimeOut().init();
	
}
function TimeOut(){
	this.ms= new Date("2019-7-24 24:00:00");
	this.obj1 = document.getElementsByClassName("msL")
	this.obj = $(".msL").children()[1];
}
TimeOut.prototype = {
	init:function(){
		//获取秒 分 时
		this.timer = setInterval(this.autoPlay.bind(this),1000);
		return this;
		
	},
	autoPlay:function(){
		this.now= new Date();
		this.deff = (this.ms.getTime()-this.now.getTime())/1000;
		this.deff--;
		this.hours = parseInt(this.deff/60/60);
		this.minutes = parseInt((this.deff-this.hours*3600)/60);
		this.seconds = parseInt(this.deff-this.hours*3600-this.minutes*60);
		this.obj.innerHTML= this.hours+"小时"+this.minutes+"分"+this.seconds+"秒";
		this.obj.style.color="#fff";
		this.obj.style.background="url(../img/img1.0/ms_time.png)";
		this.obj.style.fontSize = "20px";
		this.obj.style.marginTop = "2px";
		if(this.deff<=0){
			this.obj.innerHTML= "活动已结束";
		}
	}
}

//列表页动态生成
// function _list_move(){
// 	var arr=["生活电器","电风扇","冷风扇","空气净化器"];
// 	console.log(arr);
// 	arr.forEach(function(item,index){
// 		var _fragment= document.createDocumentFragment();
// 		var _dl = document.createElement("dl");
// 		console.log(item,index);
// 		if(index!=0){
// 			var _dd = document.createElement("dd");
// 			_dd.innerHTML=item;
// 			_dl.appendChild(_dd);
			
// 		}
// 		else{	
// 			var _dt = document.createElement("dt");
// 			_dt.innerHTML=item;
// 			_dl.appendChild(_dt);
// 		}
		
		
// 		_fragment.appendChild(_dl);
// 		console.log(_dt,_dd,_dl)
// 		$(".jiadian_left").appendChild(_fragment);
		
// 	})
// }
// _list_move();

//列表页加载
$("#jd ul>li").click(function(){
	console.log($(this).index());
	$("#jd ol").css("z-index",100);
	if($(this).index()<=1){
		$("#jd ol>li").eq($(this).index()).css("display","block").siblings().css("display","none");
	}else{
		$("#jd ol>li:nth-child(1)").clone(true).appendTo($("#jd ol>li").eq($(this).index()));
		$("#jd ol>li").eq($(this).index()).css("display","block").siblings().css("display","none");

	}
})
$("#jd ol").click(function(){
	alert();
	location.href="list.html";
})

