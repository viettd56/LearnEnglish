/**
 * 
 */
var pagesHistory = [];
var currentPage = {};

function wlCommonInit(){
	
	$("#pagePort").load("pages/MainPage.html", function(){
		currentPage.init();
	});
}