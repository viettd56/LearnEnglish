
/* JavaScript content from js/Page10.js in folder common */
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