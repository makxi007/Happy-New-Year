var day_list = document.getElementsByClassName("day_list");
var day = document.getElementById("day");

var weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for (var i = 0; i < day_list.length; i++){
	day_list[i].onmouseover = day_list[i].onmouseout = handler;
	day_list[i].innerHTML = "<p>Day" + (i+1) + "</p>";
	day_list[i].addEventListener("click", function(){showDay();});
}

function handler(event){
	if (event.type == "mouseover"){
		event.target.style.color = "purple";
	}
	if (event.type == "mouseout"){
		event.target.style.color = "";
	}
}

function showDay(){
	for(var i = 0; i < weekdays.length; i++){
		day.innerHTML = "<p>" + weekdays[i] + "</p>";
		day.style.display = "flex";
	}
	
}

function comparison(){
	
}