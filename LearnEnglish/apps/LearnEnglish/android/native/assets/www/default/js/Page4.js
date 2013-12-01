
/* JavaScript content from js/Page4.js in folder common */
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