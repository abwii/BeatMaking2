// HATS

function hats1(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat1.mp3"
	document.getElementById("refresh").load();
	document.getElementsByName('hats')[0].placeholder='hats 1';
}

function hats2(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat2.mp3"
	document.getElementById("refresh").load();
	document.getElementsByName('hats')[0].placeholder='hats 2';
}

function hats3(){
	var audio = document.getElementById("choix1");
	audio.src = "song/hats/hat3.mp3"
	document.getElementById("refresh").load();
	document.getElementsByName('hats')[0].placeholder='hats 3';
}

function hatsn(){
	var audio = document.getElementById("choix1");
	audio.src = ""
	document.getElementById("refresh").load();
	document.getElementsByName('hats')[0].placeholder='';
}

// DRUMS

function drums1(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick1.mp3"
	document.getElementById("refresh1").load();
	document.getElementsByName('kick')[0].placeholder='drums 1';
}

function drums2(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick2.mp3"
	document.getElementById("refresh1").load();
	document.getElementsByName('kick')[0].placeholder='drums 2';
}

function drums3(){
	var audio = document.getElementById("choix2");
	audio.src = "song/kick/kick3.mp3"
	document.getElementById("refresh1").load();
	document.getElementsByName('kick')[0].placeholder='drums 3';
}

function drumsn(){
	var audio = document.getElementById("choix2");
	audio.src = ""
	document.getElementById("refresh1").load();
	document.getElementsByName('kick')[0].placeholder='';
}

// CLAPS

function claps1(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps1.mp3"
	document.getElementById("refresh2").load();
	document.getElementsByName('claps')[0].placeholder='claps 1';
}

function claps2(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps2.mp3"
	document.getElementById("refresh2").load();
	document.getElementsByName('claps')[0].placeholder='claps 2';
}

function claps3(){
	var audio = document.getElementById("choix3");
	audio.src = "song/claps/claps3.mp3"
	document.getElementById("refresh2").load();
	document.getElementsByName('claps')[0].placeholder='claps 3';
}

function clapsn(){
	var audio = document.getElementById("choix3");
	audio.src = ""
	document.getElementById("refresh2").load();
	document.getElementsByName('claps')[0].placeholder='';
}

// MELODIES

function melodies1(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie1.mp3"
	document.getElementById("refresh3").load();
	document.getElementsByName('melodies')[0].placeholder='melodie 1';
}

function melodies2(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie2.mp3"
	document.getElementById("refresh3").load();
	document.getElementsByName('melodies')[0].placeholder='melodie 2';
}

function melodies3(){
	var audio = document.getElementById("choix4");
	audio.src = "song/melodies/melodie3.mp3"
	document.getElementById("refresh3").load();
	document.getElementsByName('melodies')[0].placeholder='melodie 3';
}

function melodiesn(){
	var audio = document.getElementById("choix4");
	audio.src = ""
	document.getElementById("refresh3").load();
	document.getElementsByName('melodies')[0].placeholder='';
}

// BASSES

function basses1(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse1.mp3"
	document.getElementById("refresh4").load();
	document.getElementsByName('basse')[0].placeholder='basse 1';
}

function basses2(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse2.mp3"
	document.getElementById("refresh4").load();
	document.getElementsByName('basse')[0].placeholder='basse 2';
}

function basses3(){
	var audio = document.getElementById("choix5");
	audio.src = "song/basses/basse3.mp3"
	document.getElementById("refresh4").load();
	document.getElementsByName('basse')[0].placeholder='basse 3';
}

function bassesn(){
	var audio = document.getElementById("choix5");
	audio.src = ""
	document.getElementById("refresh4").load();
	document.getElementsByName('basse')[0].placeholder='';
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

function supprimerPistes() { 
	var audio = document.getElementById("choix1");
	audio.src = ""
	var audio = document.getElementById("choix2");
	audio.src = ""
	var audio = document.getElementById("choix3");
	audio.src = ""
	var audio = document.getElementById("choix4");
	audio.src = ""
	var audio = document.getElementById("choix5");
	audio.src = ""
	document.getElementById("refresh").load();
	document.getElementById("refresh1").load();
	document.getElementById("refresh2").load();
	document.getElementById("refresh3").load();
	document.getElementById("refresh4").load();
	document.getElementsByName('hats')[0].placeholder='';
	document.getElementsByName('kick')[0].placeholder='';
	document.getElementsByName('claps')[0].placeholder='';
	document.getElementsByName('melodies')[0].placeholder='';
	document.getElementsByName('basse')[0].placeholder='';
} 

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    console.log("fermer");
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }