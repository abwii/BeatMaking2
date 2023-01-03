<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>BeatMaking</title>
	<link rel="icon" href="img\logo.png">
	<link rel="stylesheet" type="text/css" href="css/bienvenue.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Rajdhani&display=swap" rel="stylesheet"> 
	<script src="fond.js"></script>
</head>

<header>

	<a href="bienvenue.php"><img  class="logo" src="img\logo.png"></a>

	

</header>

<body onpageshow="playVideo()">



	<h1 class="motto">Everyone can mix</h1>

	<video id="vid" class="bcg" autoplay loop muted>
		<source src="vid\DJ.mp4" type="video/mp4">
	</video>

	<ul class="menu">
		<a href="play.html"><li>Play</li></a>
		<a href="contact.html"><li>Contact</li></a>
	</ul>


</body>

<footer>
	
	<p>Site crée par Wassim et Nathan, PPE pour l'école IMIE PARIS</p>
<a target="file" href="https://www.imie-paris.fr/"><img class="imie" src="img\logoIMIE.png"></a>
</footer>

<?php

define('HOST','localhost');
define('DB_NAME','beatmakingBDD');
define('USER','root');
define('PASS','');

try{
    $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connecté à la bd !";
}
catch(PDOException $e){
    echo $e;
}



?>

</html>