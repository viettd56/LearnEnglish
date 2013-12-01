
/* JavaScript content from js/Page13.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page13 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page13 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};