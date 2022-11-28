<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:" .$name. "<" .$email. ">\r\n";

$recipient = "dangelo.watson252@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo '

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        
        <div class="sent">
            <h1 class="verified-header">Thank you for contacting me. I will get back to you as soon as possible!</h1>

            <div class="contact-container-2" id="contact-container-2">
                <div class="contact-button-bg-2" id="contact-button-bg-2">
                    <div class="contact-box-2" id="contact-box-2">
                        <span class="verified-link-back"><a href="./index.html"> Back to Homepage</a></span>
                    </div>
                </div>
            </div>      
        </div>

        <script src="./css/main.js" async defer></script>
    </body>
</html>
';

?>