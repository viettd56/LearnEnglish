currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MainPage :: init");
};
	
currentPage.loadPage = function(pageIndex){
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + pageIndex);
	pagesHistory.push("pages/MainPage.html");
	$("#pagePort").load("pages/Page" + pageIndex + ".html", function(){
		currentPage.init();
	});
};