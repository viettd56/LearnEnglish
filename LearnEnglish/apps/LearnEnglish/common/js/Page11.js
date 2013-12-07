currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page11 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page11 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};