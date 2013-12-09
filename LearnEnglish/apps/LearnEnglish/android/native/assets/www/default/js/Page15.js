
/* JavaScript content from js/Page15.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page15 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page15 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};