
/* JavaScript content from js/Page14.js in folder common */
currentPage={};


currentPage.init = function() {
	WL.Logger.debug("Page14 :: init");
};

currentPage.back = function(){
	WL.Logger.debug("Page14 :: back");
	$("#pagePort").load(pagesHistory.pop(), function(){
		currentPage.init();
	});
};