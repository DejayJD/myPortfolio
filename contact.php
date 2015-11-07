<?php

if (isset($_POST['email'])) {

	$email_to = "jdfrancis@smu.edu";
	$email_subject = "Potential Employer - Mail from your portfolio site!";

	$name = $_POST['name'];
	$email_from = $_POST['email'];
	$company = $_POST['company'];
	$message = $_POST['message'];

	function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
	// create email headers
	 
	$headers = 'From: '.$email_from."\r\n".
	 
	'Reply-To: '.$email_from."\r\n" .
	 
	'X-Mailer: PHP/' . phpversion();
	 
	@mail($email_to, $email_subject, $message, $headers);  
}
 
?>