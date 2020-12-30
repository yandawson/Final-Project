<?php

$search = $_POST['search'];

$servername = "localhost";
$username = "yan";
$password = "Bryan2018";
$db = "park";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

$sql = "select * from park where name like '%$search%'";

$result = $conn->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ){
	echo $row["name"]."  ".$row["address"]."  ".$row["phone"]."<br>";
}
} else {
	echo "0 records";
}

$conn->close();

?>
