<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin List</title>
    <link rel="stylesheet" href="/FustJSAP/src/PHP/Core/admin/statics/css/styles.css">
</head>
<body>
    <header>
        <h2>Admin List</h2>
        <nav>
            <a href="/admin/dashboard">Dashboard</a>
            <a href="/admin/createAdmin">Create Admin</a>
            <a href="/admin/logout">Logout</a>
        </nav>
    </header>
    <main>
        <!-- <div class="admin-user-list">-->
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Creared_On</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($admins as $admin): ?>
                    <tr>
                        <td><?php echo $admin['id']; ?></td>
                        <td><?php echo $admin['username']; ?></td>
                        <td><?php echo $admin['email']; ?></td>
                        <td><?php echo $admin['created_at']; ?></td>
                        <td>
                            <a href="/admin/manage-user/<?php echo $admin['id']; ?>/edit">Edit<a/><br /><br />
                            <a href="/admin/manage-user/<?php echo $admin['id']; ?>/delete">Delete<a/>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        </div>
    </main>
</body>
</html>