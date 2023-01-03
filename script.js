// HATS

function hats1(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat1.mp3"
	document.getElementById("refresh").load();
}

function hats2(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat2.mp3"
	document.getElementById("refresh").load();
}

function hats3(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat3.mp3"
	document.getElementById("refresh").load();
}

function hatsn(){
	var audio = document.getElementById("choix1");
	audio.src = ""
	document.getElementById("refresh").load();
}

// DRUMS

function drums1(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick1.mp3"
	document.getElementById("refresh1").load();
}

function drums2(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick2.mp3"
	document.getElementById("refresh1").load();
}

function drums3(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick3.mp3"
	document.getElementById("refresh1").load();
}

function drumsn(){
	var audio = document.getElementById("choix2");
	audio.src = ""
	document.getElementById("refresh1").load();
}

// CLAPS

function claps1(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps1.mp3"
	document.getElementById("refresh2").load();
}

function claps2(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps2.mp3"
	document.getElementById("refresh2").load();
}

function claps3(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps3.mp3"
	document.getElementById("refresh2").load();
}

function clapsn(){
	var audio = document.getElementById("choix3");
	audio.src = ""
	document.getElementById("refresh2").load();
}

// MELODIES

function melodies1(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie1.mp3"
	document.getElementById("refresh3").load();
}

function melodies2(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie2.mp3"
	document.getElementById("refresh3").load();
}

function melodies3(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie3.mp3"
	document.getElementById("refresh3").load();
}

function melodiesn(){
	var audio = document.getElementById("choix4");
	audio.src = ""
	document.getElementById("refresh3").load();
}

// BASSES

function basses1(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse1.mp3"
	document.getElementById("refresh4").load();
}

function basses2(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse2.mp3"
	document.getElementById("refresh4").load();
}

function basses3(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse3.mp3"
	document.getElementById("refresh4").load();
}

function bassesn(){
	var audio = document.getElementById("choix5");
	audio.src = ""
	document.getElementById("refresh4").load();
}

// Controlleur

function playMusic(){
	document.getElementById("refresh").play();
	document.getElementById("refresh1").play();
	document.getElementById("refresh2").play();
	document.getElementById("refresh3").play();
	document.getElementById("refresh4").play();
}

function pauseAudio() { 
	document.getElementById("refresh").pause();
	document.getElementById("refresh1").pause();
	document.getElementById("refresh2").pause();
	document.getElementById("refresh3").pause();
	document.getElementById("refresh4").pause();
} 

function stopAudio() { 
	document.getElementById("refresh").load();
	document.getElementById("refresh1").load();
	document.getElementById("refresh2").load();
	document.getElementById("refresh3").load();
	document.getElementById("refresh4").load();
} 

