<?php 
require_once 'dbConnect.php';
session_start();

$checkUser = mysql_query ("SELECT * FROM users WHERE email = '$email' and pass = '$password', $mysql);
$result = mysql_fetch_assoc($checkUser);
    if ($result == false) print_f ("Неверный логин или пароль");

$_SESSION["result"] = $validUser;
?>