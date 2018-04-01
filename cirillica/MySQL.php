<?php

function mySQLConnect(){    //Функция коннекта к БД (К стати, используется тот самый ООП'шный способ работы с БД mysqli, а не как раньше всегда был mysql)
	$host = 'localhost';
	$database = 'cyrillica';
	$user = 'Vlad';
	$pswd = '12345';

	$dbh = new mysqli($host, $user, $pswd, $database);
	if ($dbh->connect_error) {
		echo('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
		return 0;
	}
	$dbh->query("SET NAMES 'utf8'");
	return $dbh;
}

?>