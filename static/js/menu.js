$(document).ready(function(){
	$(".menu2").addClass("menuFocus");

	$(".menuRightImg").click(function(){
		$(".setImg1").css("display","none");
		$(".setDetail").css("display","block");
		$(".setImg2").addClass("menuRightImgClick");
	});

	$(".menuRightImg").outerClick(function(){
		$(".setImg2").removeClass("menuRightImgClick");
		$(".setDetail").css("display","none");
		$(".setImg1").css("display","block");
		
	});

	$(".inputBlock").mouseover(function(){
		$(".inputBlock").css("border-color","rgb(184,184,184)");
	});
	$(".inputBlock").mouseout(function(){
		$(".inputBlock").css("border","1px solid #d9d9d9");
		$(".inputBlock").css("border-top-color","#c0c0c0");
	});
	
	$(".inputText").focus(function(){
		$(".inputText").css("outline-color","rgba(256,256,256,0)");
	});


	$(".inputImg").mouseover(function(){
		$(".inputImg").css("opacity","0.8");
	});
	$(".inputImg").mouseout(function(){
		$(".inputImg").css("opacity","0.6");
	});

	$(".contentBut1").mouseover(function(){
		$(".contentBut1").addClass("contentButMouseover");
	});
	$(".contentBut1").mouseout(function(){
		$(".contentBut1").removeClass("contentButMouseover");
	});

	$(".contentBut2").mouseover(function(){
		$(".contentBut2").addClass("contentButMouseover");
	});
	$(".contentBut2").mouseout(function(){
		$(".contentBut2").removeClass("contentButMouseover");
	});

	$(".menu9").click(function(){
		$(".menu9").addClass("menuClick");
		$(".moreDetail").css("display","block");
	});

	$(".menu9").outerClick(function(){
		$(".menu9").removeClass("menuClick");
		$(".moreDetail").css("display","none");
	});

	$(".menu1").mouseover(function(){
		$(".menu1").addClass("menuMouseover");
	});
	$(".menu1").mouseout(function(){
		$(".menu1").removeClass("menuMouseover");
	});

	$(".menu2").mouseover(function(){
		$(".menu2").addClass("menuMouseover");
	});
	$(".menu2").mouseout(function(){
		$(".menu2").removeClass("menuMouseover");
	});

	$(".menu3").mouseover(function(){
		$(".menu3").addClass("menuMouseover");
	});
	$(".menu3").mouseout(function(){
		$(".menu3").removeClass("menuMouseover");
	});

	$(".menu4").mouseover(function(){
		$(".menu4").addClass("menuMouseover");
	});
	$(".menu4").mouseout(function(){
		$(".menu4").removeClass("menuMouseover");
	});

	$(".menu5").mouseover(function(){
		$(".menu5").addClass("menuMouseover");
	});
	$(".menu5").mouseout(function(){
		$(".menu5").removeClass("menuMouseover");
	});

	$(".menu6").mouseover(function(){
		$(".menu6").addClass("menuMouseover");
	});
	$(".menu6").mouseout(function(){
		$(".menu6").removeClass("menuMouseover");
	});

	$(".menu7").mouseover(function(){
		$(".menu7").addClass("menuMouseover");
	});
	$(".menu7").mouseout(function(){
		$(".menu7").removeClass("menuMouseover");
	});

	$(".menu8").mouseover(function(){
		$(".menu8").addClass("menuMouseover");
	});
	$(".menu8").mouseout(function(){
		$(".menu8").removeClass("menuMouseover");
	});

	$(".menu9").mouseover(function(){
		$(".menu9").addClass("menuMouseover");
	});
	$(".menu9").mouseout(function(){
		$(".menu9").removeClass("menuMouseover");
	});

	$(".menu10").mouseover(function(){
		$(".menu10").addClass("menuMouseover");
	});
	$(".menu10").mouseout(function(){
		$(".menu10").removeClass("menuMouseover");
	});

	$(".menu11").mouseover(function(){
		$(".menu11").addClass("menuMouseover");
	});
	$(".menu11").mouseout(function(){
		$(".menu11").removeClass("menuMouseover");
	});

});