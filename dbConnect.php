<?php
    $email = $_REQUEST["email"];
    $password = $_REQUEST["password"];

    $db_server = "localhost";
    $db_user = "root";
    $db_password = "codio";
    $db_name = "WDB";

        $mysql = mysql_connect($db_server, $db_user, $db_password);
            if (!$mysql) { die ('Connection error: ' . mysql_error()); }
        
        $db = mysql_select_db($db_name, $mysql);
            if (!$db) { die ('Error select db : ' . mysql_error()); }
?>