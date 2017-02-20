/**
 * Created by Round on 2017/2/17.
 */
(function(){
	var oMenuLi=document.querySelectorAll('.menu-list');
  var oSubMenu=document.querySelectorAll('.submenu-list');
	var len=oMenuLi.length;
  var timer=null;
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
      // 二级菜单延时消失
      timer=setTimeout(function(){
        oUl.style.display='none';
        oIns.style.display='none';
      },300)
		}
	}
	function showcarousal(){
      var oBox=document.querySelector("#yhbox");
      var lbnext=document.querySelector("#lbnext");
      var lbprev=document.querySelector("#lbprev");

      var timer=setInterval(function(){
          lunbo(1);
      }, 2000);
      function lunbo(flag){
        var left=oBox.offsetLeft;
        if(flag==1){
          oBox.style.left=left-295+'px';
          left<=-2050 ? oBox.style.left="15px":oBox.style.left=left-295+'px';
        }else{
          oBox.style.left=left+295+'px';
          left>=-280? oBox.style.left="-2050px":oBox.style.left=left+295+"px";
        }
      }
      lbnext.onclick=function(){
            lunbo(1);
      }
      lbprev.onclick=function(){
            lunbo(-1);
      }
  }
  showcarousal();
  
  setInterval(function(){
    shownotice();
    }, 2000);
  var oNotice_con=document.querySelector("#notice");
  function shownotice(){
    var left=oNotice_con.offsetLeft;
      left<=-1820 ?oNotice_con.style.left="100px":oNotice_con.style.left=left-480+"px";
      }
})();
