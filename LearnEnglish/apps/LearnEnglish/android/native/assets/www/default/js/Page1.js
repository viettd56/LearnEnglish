
/* JavaScript content from js/Page1.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page1 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page1 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};