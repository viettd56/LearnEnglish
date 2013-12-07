currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page :: init");
	$("#body").hide();
	$("#body").slideDown(1500);
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