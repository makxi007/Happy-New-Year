var day_list = document.getElementsByClassName("day_list");

for (var i = 0; i < day_list.length; i++){
	day_list[i].onmouseover = day_list[i].onmouseout = handler;
	day_list[i].innerHTML = "<p>Day" + (i+1) + "</p>";
}

function handler(event){
	if (event.type == "mouseover"){
		event.target.style.color = "purple";
	}
	if (event.type == "mouseout"){
		event.target.style.color = "";
	}
}