<?php

$correct=$_POST['correct'];

$conn = mysqli_connect("localhost","root","","keyboard");

$result = mysqli_query($conn, "Insert into result set correct='$correct'");

$desc = mysqli_query($conn, "Select * from result order by 2 desc");

$position=$desc->num_rows;

for($i=1; $i<=$desc->num_rows; $i++){
	$row=mysqli_fetch_assoc($desc);
	if($correct==$row['correct']){
		print $i."/".$position;
		die;
	}
}









?>