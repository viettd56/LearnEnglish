
/* JavaScript content from js/MainPage.js in folder common */
currentPage = {};

currentPage.init = function(){
	WL.Logger.debug("MainPage :: init");
	$(".icon").hide();
	$(".icon").show(1500);
};
	
currentPage.loadPage = function(pageIndex){
	WL.Logger.debug("MainPage :: loadPage :: pageIndex: " + pageIndex);
	pagesHistory.push("pages/MainPage.html");
	var animate = $(".icon").hide(1500);
	$.when(animate).done(function() {
		$("#pagePort").load("pages/Page" + pageIndex + ".html", function(){
		currentPage.init();
	
	});
	});
};