
/* JavaScript content from js/LearnEnglish.js in folder common */
var pagesHistory = [];
var currentPage = {};

function wlCommonInit(){
	
	$("#pagePort").load("pages/MainPage.html", function(){
		currentPage.init();
	});
}

/* JavaScript content from js/LearnEnglish.js in folder android */
/**
 *  @license
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}