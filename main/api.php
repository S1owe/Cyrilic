<?php
include "MySQL.php";
session_start();

$json_error = array('error' => 1);
$json_success = array('error' => 0);

$regexp_name = "/^[A-ZА-ЯЁ]{1}[a-zа-яё]{1,19}$/u";
$regexp_email = "/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/";
$regexp_password = "/^[a-z0-9]{6,}$/"; //(Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов)
$regexp_reg_key = "/^[a-z0-9]{32}$/";
$regexp_id = "/^[0-9]{1,6}$/";
$regexp_bool = "/^[0-1]{1}$/";
$regexp_date = "/^(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/";

if(isset($_POST['mode'])) $mode = $_POST['mode'];
if(isset($_GET['mode'])) $mode = $_GET['mode'];
if(!(isset($mode))) exit(0);

switch($mode) {
	case "registration": 
	{
		$first_name = guard('first_name', $_POST['first_name'], "regexp", $regexp_name);
		$last_name = guard('last_name', $_POST['last_name'], "regexp", $regexp_name);
		$password = guard('password', $_POST['password'], "regexp", $regexp_password);
		$email = guard('email', $_POST['email'], "regexp", $regexp_email);
		
		checkError();
		
		$result = selectDB("SELECT id_person FROM users WHERE email = '$email'");
		if($result == 0) {
			$register_key = generateVal($email);
			$subject = 'Подтверждение регистрации';
			$message = "Здравствуйте! Благодарим Вас за регистрацию на сайте сyrillic.ru! Для подтверждения регистрации перейдите по ссылке: http://сyrillic.ru/api.php?mode=activate&register_key=$register_key";
			$headers = "From: Театр Кириллица <noreply@support.ru>" . "\r\n" . "Reply-To: <noreply@support.ru>";
			mail($email, $subject, $message, $headers);
			
			$password = generateVal($password);
			insertDB("INSERT INTO users (last_name, first_name, email, password, register_key) VALUES('$last_name', '$first_name', '$email', '$password', '$register_key')");
			$json_success["status"] = 0; // "Мы выслали письмо для подтверждения аккаунта вам на почтовый ящик";
			print(json_encode($json_success));
		}
		else {
			$json_error["status"] = 1;
			print(json_encode($json_error));
		}
		exit(0);
	}
	
	case "activate": 
	{
		$register_key = guard('key', $_GET['register_key'], "regexp", $regexp_reg_key);
		checkError();
		
		$result = selectDB("SELECT id_person FROM users WHERE register_key = '$register_key' AND activated = 0");
		if($result != 0) {
			updateDB("UPDATE users SET activated = 1 WHERE register_key = '$register_key'");
			// header
			echo "Ваш аккаунт подтвержден";
		}
		else
			echo "Неверный код, или вы уже подтвердили свой аккаунт";
		exit(0);
	}
	
	case "auth": 
	{
		$password = generateVal(guard('password', $_POST['password'], "regexp", $regexp_password));
		$email = guard('email', $_POST['email'], "regexp", $regexp_email);
		checkError();
		
		$result = selectDB("SELECT last_name FROM users WHERE email = '$email' AND password = '$password' AND activated = 1");
		if($result != 0) {
			setcookie("lastname", $result[0]['last_name'], time()+60*60*24*365, '/');
			$_SESSION['user_mail'] = $email;
			$json_success["status"] = 0; // "Вход подтвержден";
			print(json_encode($json_success));
		}
		else {
			$json_error["status"] = 1; //"Неверный логин или пароль";
			print(json_encode($json_error));
		}
		exit(0);
	}
	
	case "news": 
	{
		$id = guard('id', $_GET['id'], "regexp", $regexp_id);
		checkError();
		$result = selectDB("SELECT name, text, photos, date FROM news WHERE id_news = '$id'");
		sendFront($result);
		exit(0);
	}
	
	case "slaider_news": 
	{
		$result = selectDB("SELECT name, description, photos, date, id_news FROM news WHERE visible = 1");
		if($result != 0) {
			$json_success["data"] = $result;
			for($i = 0; $i < count($result); $i++)
				$json_success["data"][$i]["photos"] = explode(";", $json_success["data"][$i]["photos"])[0];
			
			print(json_encode($json_success));
		}
		else print(json_encode($json_error));
		exit(0);
	}
	
	case "slaider_session":
	{
		$result = selectDB("SELECT name, description, photo, date, id_session FROM slaiders WHERE visible = 1");
		sendFront($result);
		exit(0);
	}
	
	case "people": 
	{
		$result = selectDB("SELECT id_category, name, photo FROM workers");
		if($result != 0) {
			for($i = 0; $i < count($result); $i++){
				if($result[$i]['id_category'] == "1") {
					$json_success["data"]["1"][] = $result[$i]['name'];
					$json_success["data"]["1"][] = $result[$i]['photo'];
				}
				if($result[$i]['id_category'] == "2") {
					$json_success["data"]["2"][] = $result[$i]['name'];
					$json_success["data"]["2"][] = $result[$i]['photo'];
				}
				if($result[$i]['id_category'] == "3") {
					$json_success["data"]["3"][] = $result[$i]['name'];
					$json_success["data"]["3"][] = $result[$i]['photo'];
				}
			}
			print(json_encode($json_success));
		}
		else print(json_encode($json_error));
		exit(0);
	}
	
	case "all_people": 
	{
		$result = selectDB("SELECT id_category, name, photo FROM workers");
		sendFront($result);
		print(json_encode($json_success));
		exit(0);
	}
	
	case "add_news": 
	{
		$date = date('d.m.Y', strtotime($_POST['date']));
		
		$description = guard('description', $_POST['description'], "html_entity_decode");
		$name = guard('name', $_POST['name'], "html_entity_decode");
		$text = guard('text', $_POST['text'], "html_entity_decode");
		$date = guard('date', $date, "regexp", $regexp_date);
		$image = uploadImage();
		
		checkError();
		
		insertDB("INSERT INTO news(name, description, text, date, photos) VALUES ('$name', '$description', '$text', '$date', '$image')");
		print(json_encode($json_success));
		exit(0);
	}
	
	case "edit_news": 
	{
		$date = date('d.m.Y', strtotime($_POST['date']));
		
		$id = guard('id', $_POST['id'], "regexp", $regexp_id);
		$description = guard('description', $_POST['description'], "html_entity_decode");
		$name = guard('name', $_POST['name'], "html_entity_decode");
		$text = guard('text', $_POST['text'], "html_entity_decode");
		$date = guard('date', $date, "regexp", $regexp_date);
		$image = uploadImage();
		
		checkError();
		
		insertDB("UPDATE news SET name = '$name', description = '$description', text = '$text' , date = '$date', photos = '$image'");
		print(json_encode($json_success));
		exit(0);
	}
	
	case "delete_news": 
	{
		$id = guard('id', $_POST['id'], "regexp", $regexp_id);
		$bool = guard('bool', $_POST['bool'], "regexp", $regexp_bool);
		checkError();
		updateDB("UPDATE news SET deleted = $bool WHERE id_news = '$id'");
		print(json_encode($json_success));
		exit(0);
	}
	
	case "visible_news": 
	{
		$id = guard('id', $_POST['id'], "regexp", $regexp_id);
		$bool = guard('bool', $_POST['bool'], "regexp", $regexp_bool);
		checkError();
		updateDB("UPDATE news SET visible = $bool WHERE id_news = '$id'");
		print(json_encode($json_success));
		exit(0);
	}
	
	case "repertoire": 
	{
		$result = selectDB("SELECT id_performance, name, photos, timing FROM performance WHERE visible = 1 AND deleted = 0");
		if($result != 0) {
			$json_success["data"] = $result;
			for($i = 0; $i < count($result); $i++) {
				$json_success["data"][$i]["photos"] = explode(";", $json_success["data"][$i]["photos"])[0];
				$id = $json_success["data"][$i]["id_performance"];
				$price = selectDB("SELECT prices FROM session WHERE id_performance = $id");
				$json_success["data"][$i]["price"] = $price[0]["prices"];
			}
			print(json_encode($json_success));
		}
		else print(json_encode($json_error));
		exit(0);
	}
	
	case "performance": 
	{
		$id = guard('id', $_GET['id'], "regexp", $regexp_id);
		$result = selectDB("SELECT name, photos, description, timing, actions, actors  FROM performance WHERE visible = 1 AND deleted = 0 AND id_performance = $id");
		if($result != 0) {
			$json_success["data"] = $result;
			for($i = 0; $i < count($result); $i++) {
				$price = selectDB("SELECT prices FROM session WHERE id_performance = $id");
				$json_success["data"][$i]["price"] = $price[0]["prices"];
				$id = $json_success['data'][$i]['actors'];
				$actors = selectDB("SELECT name, photo FROM workers WHERE id_worker IN ($id)");
				$json_success["data"][$i]["actors"] = $actors;
			}
			print(json_encode($json_success));
		}
		else print(json_encode($json_error));
		exit(0);
	}
	
	case "sessions": 
	{
		$result = selectDB("SELECT id_performance, id_session, date, time, prices FROM session");
		if($result != 0) {
			for($i = 0; $i < count($result); $i++) {
				$id = $result[$i]["id_performance"];
				$data = selectDB("SELECT name, photos, timing FROM performance WHERE visible = 1 AND deleted = 0 AND id_performance = $id");
				if($data != 0) {
					$data[0]["photos"] = explode(";", $data[0]["photos"])[0];
					$json_success["data"][$i] = $data[0];
					$json_success["data"][$i]["id_session"] = $result[$i]["id_session"];
					$json_success["data"][$i]["date"] = $result[$i]["date"];
					$json_success["data"][$i]["prices"] = $result[$i]["prices"];
					$json_success["data"][$i]["time"] = $result[$i]["time"];
				}
			}
			print(json_encode($json_success));
		}
		else print(json_encode($json_error));
		
		
		//$massiv = Array ( 'error' => 0, 'data' => Array ( '0' => Array ( 'name' => 'Master and Marg', 'photos' => '1', 'timing' => '2', 'id_session' => '1', 'date' => '5 april', 'prices' => 450, 'time' => '13:00' )));
		//echo json_encode($massiv);
	}
}


function insertDB($query) {
	$dbc = mySQLConnect();
	$dbc->query($query);
	$dbc->close();
}

function selectDB($query) {
	$dbc = mySQLConnect();
	$result = $dbc->query($query);
	while ($row = $result->fetch_assoc()) {
        $massiv[] = $row;
    }
	
	if(isset($massiv)) {
		$result->free();
		$dbc->close();
		return $massiv;
	}
	else {
		$result->free();
		$dbc->close();
		return 0;
	}
}

function deleteDB($query) {
	$dbc = mySQLConnect();
	$dbc->query($query);
	$dbc->close();
}

function updateDB($query) {
	$dbc = mySQLConnect();
	$dbc->query($query);
	$dbc->close();
}

function checkError() {
	global $json_error;
	
	if(isset($json_error["errorcode"])) {
		print(json_encode($json_error));
		exit(0);
	}
}

function sendFront($result) {
	global $json_error, $json_success;
	
	if($result != 0) {
		$json_success["data"] = $result;
		print(json_encode($json_success));
	}
	else 
		print(json_encode($json_error));
}

function uploadImage() {
	global $json_error;
	
	if($_FILES['picture']['name'][0] != null & isset($_FILES['picture'])) {
		// Пути загрузки файлов
		$path = 'img/';
		$tmp_path = 'tmp/';
		// Массив допустимых значений типа файла
		$types = array('image/png', 'image/jpeg');
		// Максимальный размер файла
		$size = 1024000;
		$total = count($_FILES['picture']['name']);
		//print_r($_FILES['picture']['name'][1]);
		$str_pach_file = "";
		// Обработка запроса
		for($i = 0; $i < $total; $i++){
			if ($_SERVER['REQUEST_METHOD'] == 'POST') {
				
				// Проверяем тип файла
				if (!in_array($_FILES['picture']['type'][$i], $types)) {
					$json_error["errorcode"][] = "file-$i-type";
				}

				// Проверяем размер файла
				if ($_FILES['picture']['size'][$i] > $size) {
					$json_error["errorcode"][] = "file-$i-size";
				}
				
				if(isset($json_error["errorcode"])) {
					return 0;
				}
				
				// Загрузка файла и вывод сообщения
				if (!@copy($_FILES['picture']['tmp_name'][$i], $path . $_FILES['picture']['name'][$i]))
					$json_error["errorcode"][] = "file-$i-upload";
				else
				{
					$str_pach_file .= $path . $_FILES['picture']['name'][$i] . ";";
				}
					
			}
		}
		return $str_pach_file;
	}
	else {
		$json_error["errorcode"][] = "fileNotFound";
		return 0;
	}
}

function generateVal($somevar) {
	return md5(md5($somevar)."dTsdLtf53345DFr534gfdgt3tgefdget4545");
}

function guard($name_err, $var, $type, $someregexp = "") {
	global $json_error;
	
	if($var != null & isset($var)) {
		
		switch($type){
			case "html_entity_decode": {
				$var = html_entity_decode($var);
				return $var;
			}
			
			case "regexp": {
				if (preg_match($someregexp, $var)) {
					return $var;
				}
				else {
					$json_error["errorcode"][] = $name_err;
					return 0;
				}
			}
		}
	}
	else {
		$json_error["errorcode"][] = $name_err;
		return 0;
	}
}
?>