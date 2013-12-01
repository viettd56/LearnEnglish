
/* JavaScript content from js/Page8.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page8 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page8 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};