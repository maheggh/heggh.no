<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "martinheggholmen@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from Website";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Create the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message";
    
    // Send the email
    if (mail($recipient_email, $subject, $email_message)) {
        echo "Thank you for contacting us! Your message has been sent successfully.";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>