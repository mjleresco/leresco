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
        <h2>Admin Password Reset</h2>
        <div class="container">
            <form class="admin-user-form" method="POST" action="/admin/request-reset">
                <label for="email">Enter your email address:</label>
                <input type="email" name="email" required>
                <br /><br />
                <button type="submit">Contineu</button>
            </form>
            <?php if (isset($data['error'])) { echo "<p>".$data['error']."</p>"; } ?>
        </div>
    </center>
</body>
</html>








