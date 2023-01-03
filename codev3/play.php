<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>BeatMaking</title>
<link rel="icon" href="img\logo.png">	
<link rel="stylesheet" type="text/css" href="css/play.css">
<script src="js/play.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
</style>


<header>

<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">Accueil</a>
  <a href="#">Communauté</a>
  <a href="#">FAQ</a>
  <a href="#" class="rainbow" >Contact</a>
  azduaizudjiudjad
</div>

<div id="main">
  <img class="logoMenu" src="img/logo.png" onclick="openNav()">
</div>

<li class="hud">
<button class="supprimer" onclick="supprimerPistes()">supprimer</button>
<button class="download" >download</button>
</li>

</header>


<body>

<!-- <div class="filtre"></div> -->

<!-- Listes de sons -->

<ul class="hList">

	<div class="dropdown">
	  <button class="dropbtn">Hats ▽</button>
	  <p>|</p>
	  <input name="hats" class="indicateursA" type="text" placeholder="">
	  <div class="dropdown-content">
	  	<a onclick="hatsn()">Aucun</a>
	    <a onclick="hats1()">1 - Le Pchit</a>
	    <a onclick="hats2()">2 - Hat Rapide</a>
	    <a onclick="hats3()">3 - Hat Lent</a>
	  </div>
	</div>
	<div class="dropdown">
	  <button class="dropbtn">Kick ▽</button>
	  <p>|</p>
	  <input name="kick" class="indicateursA" type="text" placeholder="">
	  <div class="dropdown-content">
	  	<a onclick="drumsn()">Aucun</a>
	    <a onclick="drums1()">1 - Bum Tss</a>
	    <a onclick="drums2()">2 - Ballon qui rebondit</a>
	    <a onclick="drums3()">3 - Kick</a>
	  </div>
	</div>
	<div class="dropdown">
	  <button class="dropbtn">Claps ▽</button>
	  <p>|</p>
	  <input name="claps" class="indicateursA" type="text" placeholder="">
	  <div class="dropdown-content">
	  	<a onclick="clapsn()">Aucun</a>
	    <a onclick="claps1()">1 - m TCHHH m TCHHHHH</a>
	    <a onclick="claps2()">2 - m   TCHH    m    TCHH</a>
	    <a onclick="claps3()">3 - Juste un clap</a>
	  </div>
	</div>
	<div class="dropdown">
	  <button class="dropbtn">Melodies ▽</button>
	  <p>|</p>
	  <input name="melodies" class="indicateursA" type="text" placeholder="">
	  <div class="dropdown-content">
	  	<a onclick="melodiesn()">Aucun</a>
	    <a onclick="melodies1()">1 - Jul type beat</a>
	    <a onclick="melodies2()">2 - Drill couteau</a>
	    <a onclick="melodies3()">3 - L'époque des anienc</a>
	  </div>
	</div>
	<div class="dropdown">
	  <button class="dropbtn">Basse ▽</button>
	  <p>|</p>
	  <input name="basse" class="indicateursA" type="text" placeholder="">
	  <div class="dropdown-content">
	  	<a onclick="bassesn()">Aucun</a>
	    <a onclick="basses1()">1 - BonnnBONWINWOUINNwonn</a>
	    <a onclick="basses2()">2 - BUM bin boum boum binbim</a>
	    <a onclick="basses3()">3 - bonnnnnnnnbonbBINNNNBONBONbonbinnn</a>
	  </div>
	</div>

</ul>  

<!-- Lecteurs audio -->

<li class="player1">

	<p></p>
	<audio id="refresh" class="piste1" controls loop >
		<source id="choix1" type="audio/mp3" src="">
	</audio>

	<p></p>
	<audio id="refresh1" class="piste2" controls loop >
		<source id="choix2" type="audio/mp3" src="">
	</audio>

	<p></p>
	<audio id="refresh2" class="piste3" controls loop >
		<source id="choix3" type="audio/mp3" src="">
	</audio>

	<p></p>
	<audio id="refresh3" class="piste4" controls loop >
		<source id="choix4" type="audio/mp3" src="">
	</audio>

	<p></p>
	<audio id="refresh4" class="piste5" controls loop >
		<source id="choix5" type="audio/mp3" src="">
	</audio>

</li>

<!-- ⏵︎ ⏸︎ ⏹︎ -->

<nav class="controllerS">
	<button class="controllerPlay" onclick="playMusic()" type="button">⏵︎</button>
	<button class="controllerPause" onclick="pauseAudio()" type="button">⏸︎</button> 
	<button class="controllerStop" onclick="stopAudio()" type="button">⏹︎</button>
</nav>

	<video id="vid" class="bcg" autoplay loop muted>
		<source src="vid\DJ.mp4" type="video/mp4">
	</video>

</body>

<footer>
	<p>Site crée par Wassim et Nathan, PPE pour l'école IMIE PARIS</p>
<a target="file" href="https://www.imie-paris.fr/"><img class="imie" src="img\logoIMIE.png"></a>

</footer>

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="none"><style>@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(1px)}}</style><path fill="#9bb7e2" d="M12.75 6.432a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zm1.97 3.03l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 00-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z" style="animation:slide-right .5s cubic-bezier(1,-.43,.68,.57) infinite alternate both"/><path fill="#9bb7e2" d="M8.398 15.37a.75.75 0 10-.796 1.27l.796-1.27zm-.319.685l.398-.636-.398.636zm8.327.58a.75.75 0 00-.812-1.26l.812 1.26zm-8.804.006l.08.05.795-1.272-.079-.05-.796 1.272zm.08.05a8.14 8.14 0 008.724-.055l-.812-1.262a6.64 6.64 0 01-7.117.045l-.796 1.271z"/></svg>