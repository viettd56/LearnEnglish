
function ChangeStyle1(){
	document.getElementById("nav").style.background="#FCFCFC";
	document.getElementByClass("title").style.color="#007AFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#007AFF";
	$.cookie('style', '1');
};
function ChangeStyle2(){
	document.getElementById("nav").style.background="#45619D";
	document.getElementById("body").style.background="#FBF0DA";
	document.getElementById("body").style.color="#8A7E66";
	$.cookie('style', '2');
};
function ChangeStyle3(){
	document.getElementById("nav").style.background="#000000";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#000000";
	$.cookie('style', '3');
};