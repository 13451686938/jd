	
	//nav的轮播图效果
	function LunBo(){
		this.$ulist = $(".sliderLeft ul li");
		this.$olist = $(".sliderLeft ol li");
	}
	LunBo.prototype={
		init:function(){
			//this.timer = null;
			this.index = 0;
			this.timer=setInterval(this.autoPlay.bind(this),1000);
			return this;
		},
		autoPlay:function(){
			this.index++;
			//console.log(this.index);
			if(this.index==this.$ulist.length){
				this.index=0;
				//console.log(this.index);
			}
			this.$ulist.eq(this.index).fadeIn(1000).siblings().fadeOut(1000);
			this.$olist.eq(this.index).addClass("current").siblings().removeClass("current");
			return this;
		},
		enter:function(){
			this.$olist.on("mouseenter",function(){
				var that = this;
				clearInterval(that.timer);
				console.log(that);
				$(this).css({
					"backgroundColor":"white",
					"border":"4px dashed gray"
				})
			})
			return this;
		},
		leave:function(){
			this.$olist.on("mouseleave",function(){
				console.log(this);
				//that.init();
				$(this).css({
					"backgroundColor":"rgba(1,1,1,0)",
					"border":"1px solid #ef71ec"
				})
			})
		}
		
	}
	new LunBo().init().enter().leave();;
	
	



