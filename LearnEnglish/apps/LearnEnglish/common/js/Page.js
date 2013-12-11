currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page :: init");
	$("#body").hide();
	$("#body").slideDown(1500);
	var style = $.cookie('style');
	switch (style)
	{
	case "1":
		document.getElementById("nav").style.background="#46629E";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#46629E";
		break;
	case "2":
		document.getElementById("nav").style.background="#000000";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
		break;
	case "3":
		document.getElementById("nav").style.background="#FCC300";
		document.getElementById("title").style.color="#000000";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#369CFA";
		break;
	default:
		document.getElementById("nav").style.background="#000000";
		document.getElementById("title").style.color="#FFFFFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
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

function test(name){
	var sound = "sounds/Animal/" + name + ".mp3";
	document.getElementById("sound").src=sound;
	document.getElementById("sound").play();
}