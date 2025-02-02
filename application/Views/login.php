<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="form">
    <center><h2>Login</h2></center>
    <br />
    <form action="/login" method="POST">
        <!-- CSRF Token -->
        <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
    
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
    
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>

        <?php if (isset($error)): ?>
            <p class="error"><?= $error ?></p>
        <?php endif; ?>

        <button type="submit">Login</button>
    </form>
    <center><h3>OR</h3></center>
    <p>Does't have an account? <a href="/register" >Register</a></p>
</section>
<?php
// Include footer
include 'templates/footer.php';
?>