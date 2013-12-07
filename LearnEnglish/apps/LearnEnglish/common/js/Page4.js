currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page4 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page4 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};