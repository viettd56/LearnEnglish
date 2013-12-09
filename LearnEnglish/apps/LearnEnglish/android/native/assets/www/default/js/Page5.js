
/* JavaScript content from js/Page5.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page5 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page5 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};