currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page16 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page16 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};