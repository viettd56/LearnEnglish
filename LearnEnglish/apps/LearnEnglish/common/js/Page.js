currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page :: init");
	$("#body").hide();
	$("#body").slideDown(1500);
	var style = $("#theme").attr("value");
	switch (style)
	{
	case "1":
		document.getElementById("nav").style.background="#46629E";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
		document.getElementById("homebutton").src="images/home.png";
		break;
	case "2":
		document.getElementById("nav").style.background="#FCC300";
		document.getElementById("title").style.color="#000000";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#369CFA";
		document.getElementById("homebutton").src="images/home2.png";
		break;	
	case "3":
		document.getElementById("nav").style.background="rgb(95,178,33)";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
		document.getElementById("homebutton").src="images/home.png";
		break;
	default:
		document.getElementById("nav").style.background="#000000";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
		document.getElementById("homebutton").src="images/home.png";
	}
};

currentPage.back = function(){
	WL.Logger.debug("Page :: back");
	var up = $("#body").slideUp(1500);
	$.when(up).done(function() 
		{$("#pagePort").load(pagesHistory.pop(), function(){
			currentPage.init();
	});
	});
};