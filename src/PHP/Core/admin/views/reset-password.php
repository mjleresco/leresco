<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link rel="stylesheet" href="/FustJSAP/src/PHP/Core/admin/statics/css/styles.css">
</head>
<body>
<body>
    <center>
        <h2>Admin Reset Password</h2>
        <div class="container">
            <form class="admin-user-form" method="POST" action="/admin/reset-password">
                <label for="token">Enter the reset token you receive via email::</label>
                <input type="text" name="token" required>
                <br /><br />
                <label for="password">Enter new Password:</label>
                <input type="password" name="password" required>
                <br />
                <label for="c_password">Confirm Password:</label>
                <input type="password" name="c_password" required>
                <br /><br />
                <button type="submit">Contineu</button>
            </form>
            <?php if (isset($data['error'])) { echo "<p>".$data['error']."</p>"; } ?>
        </div>
    </center>
</body>
</html>








