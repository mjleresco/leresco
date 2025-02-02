<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="contact">
    <h2>We'd Love to Hear From You!</h2>
    <p>If you have any questions, comments, or suggestions, feel free to reach out to us using the form below. We are here to help!</p>
    <form action="/contact/submit" method="POST">
        <label for="name">Full Name:</label>
        <input type="text" name="name" id="name" required>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
        <label for="message">Your Message:</label>
        <textarea name="message" id="message" rows="5" required></textarea>
        <button type="submit" class="btn">Send Message</button>
    </form>
</section>
<?php
// Include footer
include 'templates/footer.php';
?>