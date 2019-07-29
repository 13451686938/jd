
function Mirror(){
    this.small = $id("small");//中图区
    this.smallImg = this.small.getElementsByTagName("img");//中图片
    this.index=3;
    this.big = $id("big");//大图区
    this.bigImg = this.big.children;//大图
    this.btmList = $id("bottom").children;//小图
    this.box = $id("box");//大容器
    this.mask = $id("mask");//遮罩层
    //入口方法--选项卡
    this.initTab = function(){
        for( let i = 0 ; i < this.btmList.length ; i++ ){
            this.btmList[i].onmouseenter = function(){
                //定义一个属性，根据小图下标获取对应的大图
                this.index = i;
                //排他思想
               
                this.clearAll();
                this.smallImg[i].style.display = "block";
                this.bigImg[i].style.display = "block";
            }.bind(this)
        }
        return this;
    }
    //排他方法--隐藏所有的中图和大图
    this.clearAll = function(){
        for( var i = 0 ; i < this.bigImg.length ; i++ ){
            this.smallImg[i].style.display = "none";
            this.bigImg[i].style.display = "none";
        }
    }
    //鼠标移入移出中图区域 显示和隐藏mask和big
    this.bindMouse = function(){
        this.small.onmouseenter = function(){
            this.big.style.display = "block";
            this.mask.style.display = "block";
        }.bind(this)
        this.small.onmouseleave = function(){
            this.big.style.display = "none";
            this.mask.style.display = "none";
        }.bind(this)
        
        return this;
    }
    //鼠标移动
    this.bindMove = function(){
        this.small.onmousemove = function(e){
            var e = e || event;
            //获取mask的left和top值
            var x = e.pageX - this.mask.offsetWidth/2 - this.box.offsetLeft;
            var y = e.pageY - this.mask.offsetHeight/2 - this.box.offsetTop;
            //获取最大的边界
            var maxL = this.box.offsetWidth-this.mask.offsetWidth;
            var maxT = this.box.offsetHeight-this.mask.offsetHeight;
            //边界处理
            x = Math.min(Math.max(0,x),maxL);
            y = Math.min(Math.max(0,y),maxT);
            
            //设置mask的位置
            this.mask.style.left = x +"px";
            this.mask.style.top = y +"px";
            
            //获取大图的移动left和top值
            //大图宽度/小图宽度=大图显示区宽度/mask宽度 = 大图的left /mask的left
            var bigImgLeft = x*this.bigImg[this.index].offsetWidth/this.smallImg[this.index].offsetWidth;
            var bigImgTop = y*this.bigImg[this.index].offsetHeight/this.smallImg[this.index].offsetHeight;
            //设置大图的left和top
            this.bigImg[this.index].style.left = -bigImgLeft+"px";
            this.bigImg[this.index].style.top = -bigImgTop+"px";
        }.bind(this)
    }
}
new Mirror().initTab().bindMouse().bindMove();


//购物车内商品数量加减
function shopnum(){
    var num=$(".shop-num").html();
        $(".shop-count input") [0].onclick = function(){
        num++;
        $(".shop-num").html(num);
        $(".shopcar-num").html(num);
    }
    $(".shop-count input") [1].onclick = function(){
        if(num>1){ 
            num--;
                $(".shop-num").html(num);
                $(".shopcar-num").html(num);
        }else{
            $(".shop-num").html(1);
            
        }
        
    }
    
    
}
shopnum();
//点击加入购物车，存入storage;
function storage(){
    $("#shopcar .car").on("click",function(){
        //存入本地
        var _num  = $('#shopcar .shop-num').html();//商品数量
        var _src = $("#small img").first().attr("src");
        var _pid= $("#pname").attr("pid");
        var _pname = $("#pname").html();
        var _price = $("#price").html();
        var _rest_num  = $("#rest_num").html();
        var arr=[];
        
        var json = {
            "pid":_pid,
            "num":_num,
            "src":_src,
            "pname":_pname,
            "price":_price,
            "_rest_num":_rest_num
        }
        arr.push(json);
        //console.log(_shopinfo)
        // if(_shopinfo){
        //     arr.push(_shopinfo);alert();
        // }
        
        localStorage.setItem("shoplist",JSON.stringify(arr));
        //在购物车页面显示出来
       var _shopinfo = JSON.parse(localStorage.getItem("shoplist"));
        console.log(_shopinfo);
    })
}
storage();

