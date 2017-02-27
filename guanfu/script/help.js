(function(){
	NavAside();
	
	function NavAside(){

		var oNav=document.querySelector('#navList');
		var aLi=oNav.querySelectorAll("li");
		var oCon=document.querySelector('#navContent');
		var aCxt=oCon.querySelectorAll("div");

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){

				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					aCxt[i].className=''
				}
				this.className="active";
				aCxt[this.index].className='show';
				console.log(111);
			}

		}

	}
	function JoinUs(){
		var ajobOneli=document.querySelector('#jobCategory').querySelectorAll("li");//一级菜单
		var ajobTwoUl=document.querySelector("#jobSub").querySelectorAll("ul");
		var ajobThreeUl=document.querySelector("#jobDetail").querySelectorAll("ul");
		var now=0;
		for(var i=0;i<ajobOneli.length;i++){
			ajobOneli[i].index=i;
			ajobOneli[i].onclick=function(){
				now=this.index;
				for(var i=0;i<ajobOneli.length;i++){
					ajobOneli[i].className='';
					ajobTwoUl[i].className='';
					var ajobTwoli=ajobTwoUl[i].querySelectorAll("li");
					var ajobThreeli=ajobThreeUl[i].querySelectorAll("li");
					for(var j=0;j<ajobTwoli.length;j++){
						ajobTwoli[j].className='';
						ajobThreeli[j].className='';
					}
				}
				var ajobTwoli=ajobTwoUl[now].querySelectorAll("li");
				var ajobThreeli=ajobThreeUl[now].querySelectorAll("li");
				ajobThreeli[0].className='on';
				ajobTwoli[0].className="on";
				for(var j=0;j<ajobTwoli.length;j++){
						ajobTwoli[j].index=j;
						ajobTwoli[j].onclick=function(){
							for(var j=0;j<ajobTwoli.length;j++){
								ajobTwoli[j].className='';
								ajobThreeli[j].className='';
							}
							this.className='on';
							ajobThreeli[this.index].className='on';
						}
				}
				this.className="on";
				ajobTwoUl[now].className='on';
			}

		}
	}
JoinUs();
})()