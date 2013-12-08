currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page :: init");
	$("#body").hide();
	$("#body").slideDown(1500);
	var style = $.cookie('style');
	switch (style)
	{
	case "1":
		document.getElementById("nav").style.background="#FCFCFC";
		document.getElementByClass("title").style.color="#007AFF";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#007AFF";
		break;
	case "2":
		document.getElementById("nav").style.background="#45619D";
		document.getElementById("body").style.background="#FBF0DA";
		document.getElementById("body").style.color="#8A7E66";
		break;
	case "3":
		document.getElementById("nav").style.background="#000000";
		document.getElementById("body").style.background="#FFFFFF";
		document.getElementById("body").style.color="#000000";
		break;
	default:
		document.getElementById("nav").style.background="#45619D";
		document.getElementById("body").style.background="#FBF0DA";
		document.getElementById("body").style.color="#8A7E66";
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