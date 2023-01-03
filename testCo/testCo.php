<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>BeatMaking</title>
	<link rel="icon" href="img\logo.png">
	<link rel="stylesheet" type="text/css" href="css\maincss.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Rajdhani&display=swap" rel="stylesheet"> 
</head>
<body>

<p>Salut</p>

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


</body>

<footer>
	


</footer>

</html>