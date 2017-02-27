(function(){
	var oSignBtn=document.querySelector("#Signin");
	var oCloseBtn=document.querySelectorAll(".close-btn")[0];
	var oModal=document.querySelector("#loginAll");
	oSignBtn.onclick=function(){
		oModal.style.display="block";
	}
	oCloseBtn.onclick=function(){
		oModal.style.display="none";
	}

})()