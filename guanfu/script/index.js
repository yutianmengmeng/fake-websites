(function(){
	function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle.attr;
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}
	function startMove(obj,attr,iTarget){
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var cur=0;
					if(attr=='opacity'){
						cur=Math.round(parseFloat(getStyle(obj,attr))*100);
					}else{
						cur=parseInt(getStyle(obj,attr));
					}
					
					var speed=(iTarget-cur)/7;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);

					if(cur==iTarget){
						clearInterval(obj.timer);
					}else{
						if(attr=='opacity'){
							obj.style.filter="alpha(opacity:"+(cur+speed)+")";
							obj.style.opacity=(cur+speed)/100
						}else{
							obj.style[attr]=cur+speed+"px";
						}
						
					}
				},30);

			}
	function banner(){
		var oBannerCon=document.querySelectorAll(".banner")[0];
		var oUl=oBannerCon.querySelectorAll(".banner-img")[0];
		var oBtnPrev=document.querySelectorAll(".btn-prev")[0];
		var oBtnNext=document.querySelectorAll(".btn-next")[0];
		var ali=document.querySelectorAll(".banner-btn");
		// oUl.innerHTML+=oUl.innerHTML;
		var aBanner=oUl.querySelectorAll("li");
		oUl.style.width=aBanner.length*aBanner[0].offsetWidth+"px";

		var now=0;
		for(var i=0;i<ali.length;i++){
			ali[i].index=i;
			ali[i].onclick=function(){
				now=this.index;
				tab();
		}
		function tab(){
			for(var i=0;i<ali.length;i++){
					ali[i].className='';
				}
				ali[now].className='active';
				startMove(oUl,'left',-aBanner[0].offsetWidth*now);
			}
		}
		function next(){
			now++;
			if(now==aBanner.length){
				now=0;
			}
			tab();
		}
		var timer=setInterval(next, 2000);
		oBtnPrev.onclick=function(){
			now--;
			if(now==-1){
				now=aBanner.length-1;
			}
			tab();
		}
		oBtnNext.onclick=function(){
			next();
		}
		oBannerCon.onmousemove=function(){
			clearInterval(timer);
		}
		oBannerCon.onmouseout=function(){
			timer=setInterval(next, 2000);
		}
	}
	banner();
	function Artcile(){
		var oUl=document.querySelector("#Article-nav");
		var aLi=oUl.querySelectorAll("li");
		var oArticleSec=document.querySelector("#articleSec");
		var aUl=oArticleSec.querySelectorAll("ul");

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className=''
					aUl[i].className='';
				}
				this.className="active";
				aUl[this.index].className="show";
			}
		}


	}
Artcile();
})()