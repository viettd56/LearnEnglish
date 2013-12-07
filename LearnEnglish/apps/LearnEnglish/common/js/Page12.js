currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page12 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page12 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};