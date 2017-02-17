/**
 * Created by Round on 2017/2/17.
 */
(function(){
	var oMenuLi=document.querySelectorAll('.menu-list');
	var oSubmenu=document.querySelectorAll(".nav-submenu");
	var len=oMenuLi.length;
	for(let i=1;i<len;i++){
		oMenuLi[i].onmouseover=function(){
			oSubmenu[i-1].style.visibility='visible';
			oSubmenu[i-1].style.bottom='-40px';
			oSubmenu[i-1].style.left=(-260)*(i-1)-161+"px";
		}
		oMenuLi[i].onmouseout=function(){
			oSubmenu[i-1].style.visibility='hidden';
		}
	}
})();
