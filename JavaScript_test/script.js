var main_h1 = document.getElementById("main_h1");
var main_p = document.getElementById("main_h1");

main_p.addEventListener("onclick", function(){console.log("Happy BirthDay");});

main_h1.onmouseover = main_h1.onmouseout = handler;

function handler(event){
	if (event.type == "mouseover"){
		event.target.style.color = "brown";
	}
	if (event.type == "mouseout"){
		event.target.style.color = "";
	}
}