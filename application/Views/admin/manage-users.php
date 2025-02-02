<html>
<head>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <header>
        <h1>Manage Users</h1>
    </header>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($users as $user): ?>
            <tr>
                <td><?= htmlspecialchars($user['name']) ?></td>
                <td><?= htmlspecialchars($user['email']) ?></td>
                <td><?= htmlspecialchars($user['role']) ?></td>
                <td>
                    <a href="/admin/edit-user/<?= $user['id'] ?>">Edit</a> |
                    <a href="/admin/delete-user/<?= $user['id'] ?>">Delete</a>
                </td>
            </tr>
            <?php endforeach; ?>
            
        </tbody>
    </table>
    <!-- Pagination Links -->
    <div class="pagination">
        <?php if ($currentPage > 1): ?>
            <a href="/admin/manage-users?page=1">First</a>
            <a href="/admin/manage-users?page=<?= $currentPage - 1 ?>">Prev</a>
        <?php endif; ?>
    
        <?php if ($currentPage < $totalPages): ?>
            <a href="/admin/manage-users?page=<?= $currentPage + 1 ?>">Next</a>
            <a href="/admin/manage-users?page=<?= $totalPages ?>">Last</a>
        <?php endif; ?>
    </div>
    <footer>
        <p>&copy; 2024 Charity Foundation</p>
    </footer>
</body>
</html>