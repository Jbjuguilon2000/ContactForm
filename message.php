<?php

$Name = $_POST["Name"];
$Email = $_POST["Email"];
$Phone = $_POST["Phone"];
$Message = $_POST["Message"];

if (!empty($Email) && !empty($Message)) {
    if (filter_var($Email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "jbjuguilon2000@gmail.com";
        $subject = "From: $Name <$Email>";
        $body = "Name: $Name\nEmail: $Email\nPhone: $Phone\n\n Message: $Message\n\n Regards,\n$Name";
        $sender = "From: $Email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Message have been sent";
        } else {
            echo "Failed to send the message!";
        }
    } else {
        echo "Enter a valid email address!";
    }
} else {
    echo "Email and Message is required!";
}
