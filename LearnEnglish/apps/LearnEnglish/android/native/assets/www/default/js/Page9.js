
/* JavaScript content from js/Page9.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page9 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page9 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};