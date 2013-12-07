currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page6 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page6 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};