/**
 * Created by Round on 2017/2/17.
 */
(function(){
	var oMenuLi=document.querySelectorAll('.menu-list');
	var len=oMenuLi.length;
	for(let i=1;i<len;i++){
		oMenuLi[i].onmouseover=function(){
			var oUl=this.querySelectorAll("ul")[0];
			var oIns=this.querySelectorAll("ins")[0];
			oUl.style.left=(-260)*(i-1)-161+"px";
			oUl.style.display='flex';
			oIns.style.display='block';
		}
		oMenuLi[i].onmouseleave=function(){
			var oUl=this.querySelectorAll("ul")[0];
			var oIns=this.querySelectorAll("ins")[0];
			oUl.style.display='none';
			oIns.style.display='none';
		}
	}

})();
