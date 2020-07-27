<?php
    $to = 'corlukantonio@gmail.com';
    $subject = 'The Subject';
    $message = 'Hello!';
    $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>