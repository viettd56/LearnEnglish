currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page10 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page10 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};