<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Admin</title>
    <link rel="stylesheet" href="/FustJSAP/src/PHP/Core/admin/statics/css/styles.css">
</head>
<body>
    <center>
        <h2>Create Admin</h2>
       <!-- <div class="container"-->
            <form class="admin-user-form" method="POST" action="/admin/createAdmin">
                <label for="username">Username:</label>
                <input type="text" name="username" required>
                
                <label for="email">Email:</label>
                <input type="email" name="email" required>
                
                <label for="password">Password:</label>
                <input type="password" name="password" required>
                <br />
                <input type="submit" value="Create">
            </form>
        <!--/div-->
    </center>
</body>
</html>