
function ChangeStyle1(){
	document.getElementById("nav").style.background="#46629E";
	document.getElementById("title").style.color="#FFFFFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#46629E";
	$.cookie('style', '1');
};

function ChangeStyle2(){
	document.getElementById("nav").style.background="#000000";
	document.getElementById("title").style.color="#FFFFFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#000000";
	$.cookie('style', '2');
};

function ChangeStyle3(){
	document.getElementById("nav").style.background="#FCC300";
	document.getElementById("title").style.color="#000000";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#369CFA";
	$.cookie('style', '3');
};