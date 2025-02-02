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
        <h2>Admin Login</h2>
        <div class="container">
            <form class="admin-user-form" method="POST" action="/admin/login">
                <label for="username">Username:</label>
                <input type="text" name="username" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" name="password" required>
                <br><br />
                <button type="submit">Login</button>
            </form>
            <?php if (isset($data['error'])) { echo "<p>".$data['error']."</p>"; } ?>
        </div>
    </center>
</body>
</html>








