var day_list = document.getElementsByClassName("day_list");
var day = document.getElementById("day");
var day_inner = document.getElementsByClassName("day_inner");
//var inner_date = document.getElementById("inner_date");

var weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


/*
var year = date_now.getFullYear();
var month = date_now.getMonth();
var month_in_str = months[month];
var weekday = weekdays[date_now.getDay() - 1];
*/

for (var i = 0; i < day_list.length; i++){
	day_list[i].onmouseover = day_list[i].onmouseout = handler;
	day_list[i].innerHTML = "<p>Day" + (i+1) + "</p>";
	day_list[i].addEventListener("click", function(){showDay();});
}

function updateTime(){
	var date_now = new Date();
	var hours = date_now.getHours();
	var minutes = date_now.getMinutes();
	var seconds = date_now.getSeconds();
	var hours_minutes_secs = hours + ":" + minutes + ":" + seconds;
	document.getElementById("inner_date").innerHTML = hours_minutes_secs;
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
	day.style.display = "flex";
	day.innerHTML = event.target.innerHTML;
}

setInterval(function(){
	updateTime();
}, 1000);


