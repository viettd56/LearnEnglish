
/* JavaScript content from js/Page2.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page2 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page2 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};