
/* JavaScript content from js/ChangeStyle.js in folder common */

function ChangeStyle1(){
	document.getElementById("nav").style.background="#46629E";
	document.getElementById("title").style.color="#FFFFFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#000000";
	document.getElementById("homebutton").src="images/home.png";
	$.cookie('style', '1');
};

function ChangeStyle2(){
	document.getElementById("nav").style.background="#FCC300";
	document.getElementById("title").style.color="#000000";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#369CFA";
	document.getElementById("homebutton").src="images/home2.png";
	$.cookie('style', '2');
};

function ChangeStyle3(){
	document.getElementById("nav").style.background="rgb(95,178,33)";
	document.getElementById("title").style.color="#FFFFFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#000000";
	document.getElementById("homebutton").src="images/home.png";
	$.cookie('style', '3');
};
function ChangeStyleDefault(){
	document.getElementById("nav").style.background="#000000";
	document.getElementById("title").style.color="#FFFFFF";
	document.getElementById("body").style.background="#FFFFFF";
	document.getElementById("body").style.color="#000000";
	document.getElementById("homebutton").src="images/home.png";
	$.cookie('style', 'default');
};