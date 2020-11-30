
const circle = document.getElementsByClassName('circle');

const play_but = document.getElementById('play_but');
const stop_but = document.getElementById('stop_but'); 
const hold_but = document.getElementById('submit_but');

var change_buts = document.getElementsByClassName('change_buts');
var aud_play = document.getElementById('audio_play');
var source = document.getElementById('source');

var change_buts_icons = document.getElementsByClassName("change_buts_icons");

var audio = document.getElementById("audio_id");

var in_audio_buts = document.getElementsByClassName("in_audio_buttons");

var len = circle.length;
var count = 0;

//music source
var music_src = [ "music/christmas1.mp3",
				  "music/christmas2.mp3", 
				  "music/christmas3.mp3", 
				  "music/christmas4.mp3",
				  "music/christmas5.mp3",
				  "music/christmas6.mp3"];
// colors for circles when delay
var boxShadows_colors = [ "0 0 20px 5px #C42232", 
						"0 0 20px 5px #FFFA00", 
						"0 0 20px 5px #27B618", 
						"0 0 20px 5px #009D9D",
						"0 0 20px 5px #C42232", 
						"0 0 20px 5px #FFFA00", 
						"0 0 20px 5px #27B618", 
						"0 0 20px 5px #009D9D"];
var boxShadow_len = boxShadows_colors.length;

play_but.onmouseover = play_but.onmouseout = handler_main_buts;
stop_but.onmouseover = stop_but.onmouseout = handler_main_buts;
hold_but.onmouseover = hold_but.onmouseout = handler_main_buts;

for (var i = 0; i < in_audio_buts.length; i++){
	in_audio_buts[i].onmouseover = in_audio_buts[i].onmouseout = handler_audio;
}

//circle play_stop_glow hover effects
function handler_main_buts(event){
	if (event.type == "mouseover"){
		event.target.style.background = "#4F166A";
		event.target.style.cursor = "pointer";
		
	} 
	if (event.type == "mouseout"){
		event.target.style.background = "";
	}
}

//audio div hover effects
function handler_audio(event){
	if (event.type == "mouseover"){
		event.target.style.background = "#686FA9";
	}
	if (event.type == "mouseout"){
		event.target.style.background = "";
	}
}

//on circles
const on = function(){
	for (var i = 0; i < len; i++) {
		circle[i].removeAttribute("style");
		circle[i].style.animationPlayState = "running";	
		circle[i].style.WebkitAnimationPlayState = "running";
	}
}

//off circles
const off = function(){
	for (var i = 0; i < len; i++) {
		circle[i].removeAttribute("style");
		circle[i].style.animation = "none";
		circle[i].style.background = "#1F082C";
	}
}

//Holding glow circles
function hold(){
	for (var i = 0; i < len; i++) {
		circle[i].removeAttribute("style");
		circle[i].style.animation = "none";
		circle[i].style.boxShadow = boxShadows_colors[i];
	}
}

function playSound(){
	source.setAttribute("src", music_src[count]);
	aud_play.load();
	aud_play.play();
}

function stopSound(){
	aud_play.pause();
}

//next music function
function change_next(){
	if (count < music_src.length - 1){
		count++;
		playSound();
	}
	console.log(count);
}

//prev music function
function change_prev(){
	if (count > 0){
		count--;
		playSound();
	}
}
