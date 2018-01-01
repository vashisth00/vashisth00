<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['msg'];

		$to='vashisthbhushan@gmail.com'; // My GMAIL ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", I will Surely Contact you! </h1>";
			echo "<h2>Regards : Vashisth Bhushan</h2>";
			echo "<h3>Manipal University Jaipur B.Tech IT</h3>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
