<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="form">
    <center><h2>Create Account</h2></center>
    <br />
    <form action="/register" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>

        <button type="submit">Register</button>
    </form>
    <center><h3>OR</h3></center>
    <p>Already have an account? <a href="/login" >Login</a></p>
</section>
<?php
// Include footer
include 'templates/footer.php';
?>