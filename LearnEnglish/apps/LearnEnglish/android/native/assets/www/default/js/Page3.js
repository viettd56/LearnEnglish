
/* JavaScript content from js/Page3.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page3 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page3 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};