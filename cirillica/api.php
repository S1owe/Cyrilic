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

if(isset($_POST['mode'])) $mode = $_POST['mode'];
if(isset($_GET['mode'])) $mode = $_GET['mode'];
if(!(isset($mode))) exit(0);

switch($mode) {
	case "registration": 
	{
		isset($_POST['last_name']) ? $lastname = correctVal($_POST['last_name'], $regexp_name, "last_name") : $json_error["errorcode"][] = "last_name";
		isset($_POST['first_name']) ? $firstname = correctVal($_POST['first_name'], $regexp_name, "first_name") : $json_error["errorcode"][] = "first_name";
		isset($_POST['email']) ? $email = correctVal($_POST['email'], $regexp_email, "email") : $json_error["errorcode"][] = "email";
		isset($_POST['password']) ? $password = correctVal($_POST['password'], $regexp_password, "password") : $json_error["errorcode"][] = "password";
		
		if(isset($json_error["errorcode"])) {
			echo json_encode($json_error);
			exit(0);
		}
		
		$result = selectDB("SELECT id FROM users WHERE email = '$email'");
		if($result == 0) {
			$register_key = generateVal($email);
			$subject = 'Подтверждение регистрации';
			$message = "Здравствуйте! Благодарим Вас за регистрацию на сайте сyrillic.ru! Для подтверждения регистрации перейдите по ссылке: http://сyrillic.ru/api.php?mode=activate&register_key=$register_key";
			$headers = "From: Театр Кириллица <noreply@support.ru>" . "\r\n" . "Reply-To: <noreply@support.ru>";
			mail($email, $subject, $message, $headers);
			
			$password = generateVal($password);
			insertDB("INSERT INTO users (last_name, first_name, email, password, register_key) VALUES('$lastname', '$firstname', '$email', '$password', '$register_key')");
			$json_success["status"] = 0; // "Мы выслали письмо для подтверждения аккаунта вам на почтовый ящик";
			echo json_encode($json_success);
		}
		else {
			$json_error["status"] = 1;
			echo json_encode($json_error);
		}
		exit(0);
	}
	
	case "activate": 
	{
		isset($_GET['register_key']) ? $register_key = correctVal($_GET['register_key'], $regexp_reg_key) : print("Неверный ключ");
		
		$result = selectDB("SELECT id FROM users WHERE register_key = '$register_key' AND activated = 0");
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
		isset($_POST['email']) ? $email = correctVal($_POST['email'], $regexp_email, "email") : $json_error["errorcode"][] = "email";
		isset($_POST['password']) ? $password = correctVal($_POST['password'], $regexp_password, "password") : $json_error["errorcode"][] = "password";
		
		if(isset($json_error["errorcode"])) {
			echo json_encode($json_error);
			exit(0);
		}
		
		$result = selectDB("SELECT last_name FROM users WHERE email = '$email' AND password = '$password' AND activated = 1");
		if($result != 0) {
			setcookie("lastname", $result[0]['last_name'], time()+60*60*24*365, '/');
			$_SESSION['user_mail'] = $email;
			$json_success["status"] = 0; // "Вход подтвержден";
			echo json_encode($json_success);
		}
		else {
			$json_error["status"] = 1; //"Неверный логин или пароль";
			echo json_encode($json_error);
		}
		exit(0);
	}
	
	case "news": 
	{
		isset($_GET['id']) ? $id = correctVal($_GET['id'], $regexp_id) : die(json_encode($json_error));
		$result = selectDB("SELECT name, description, photos, date FROM news WHERE id_news = '$id' AND id_session IS NULL AND visible = 1");
		if($result != 0) {
			$json_success["data"] = $result;
			echo json_encode($json_success);
		}
		else echo json_encode($json_error);
		exit(0);
	}
	
	case "all_news": 
	{
		$result = selectDB("SELECT name, description, photos, date, id_session FROM news WHERE visible = 1");
		if($result != 0) {
			$json_success["data"] = $result;
			echo json_encode($json_success);
		}
		else echo json_encode($json_error);
		exit(0);
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

function correctVal($somevar, $someregexp, $name = "") {
	global $json_error;
	if (preg_match($someregexp, $somevar)) {
		return $somevar;
	}
	else {
		$json_error["errorcode"][] = $name;
		return 0;
	}
}

function generateVal($somevar) {
	return md5(md5($somevar)."dTsdLtf53345DFr");
}
?>

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
 </head>
</html>