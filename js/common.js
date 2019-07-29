//根据id获取页面元素
function $id(id){
	return document.getElementById(id);
}
//获取任意区间的整数值
function rand(min,max){ //[min,max]
	return Math.round( Math.random()*(max-min) + min );
}

function rand2(min,max){ //[min,max]
	return Math.floor( Math.random()*(max-min+1) + min );
}

//获取随机的颜色值
function getColor2(){
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += rand(0,15).toString(16);
	}
	return color;
}
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//获取时间格式 年月日 时分秒
function dateToString(now){
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var d = now.getDate();
	//获取时分秒
	var h = now.getHours();
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	 
	return year+"-"+month+"-"+d + " "+ h + ":" + m + ":" +s;
}
//判断参数是否小于10  小于10 前面拼接0
function toTwo( val ){
	return val < 10 ? "0"+val : val;
}
function createEle(obj){
	return document.createElement(obj);
}



//获取非行内元素样式
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
//自定义一个日期时间格式
function dateToString(now,sign){
	var sign =  sign || "-";//默认拼接符号是 - 
	var y = now.getFullYear();
	var m = now.getMonth()+1;
	var d = now.getDate();
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s =toTwo( now.getSeconds() );
	return y + sign + m + sign + d + " " + h + ":" + mi + ":" +s;
}
function toTwo(num){
	return num < 10 ? "0"+num : num;
}
//将字符串转成日期时间格式
function stringToDate(str){
	return new Date( str );
}

//时间差
function diff(start,end){
	//得到秒
	return (end.getTime() - start.getTime())/1000;
}

//碰撞函数
function pz(obj1,obj2){
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var L1 = obj1.offsetLeft;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var L2 = obj2.offsetLeft;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	
	//碰不上条件   如果碰上了返回true  碰不上返回false
	if( R1<L2||L1>R2||B1<T2||T1>B2 ){//碰不上
		return false;
	}else {
		return true;
	}
}
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft+obj1.offsetWidth;
	var T1 = obj1.offsetTop;
	var T2 = obj1.offsetTop + obj1.offsetHeight;
}
