<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <header>
        <h1>Admin Dashboard</h1>
    </header>
    <nav>
        <h2>Admin Dashboard</h2>
        <div class="dashboard-stats">
            <div>Total Users: <?= $totalUsers ?></div>
            <div>Total Donations: <?= $totalDonations ?></div>
            <div>Total Events: <?= $totalEvents ?></div>
            <div>Total Blog Posts: <?= $totalPosts ?></div>
        </div>
        <ul>
            <li><a href="/admin/manage-users">Manage Users</a></li>
            <li><a href="/admin/manage-events">Manage Events</a></li>
            <li><a href="/logout">Logout</a></li>
        </ul>
    </nav>
    <footer>
        <p>&copy; 2024 Charity Foundation</p>
    </footer>
</body>
</html>