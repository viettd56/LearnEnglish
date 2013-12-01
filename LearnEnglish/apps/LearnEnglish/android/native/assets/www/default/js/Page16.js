
/* JavaScript content from js/Page16.js in folder common */
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