currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page7 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page7 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};