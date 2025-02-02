<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="/FustJSAP/src/PHP/Core/admin/statics/css/styles.css">
</head>
<body>
    <h2>Admin Dashboard</h2>
    <p>Hello <?php echo $_SESSION['admin']['username']; ?>
    <div class="tools">
        <span class="logout"><a href="/admin/logout">Logout</a></span></p>
        <span class="profile"><a href="/admin/profile">Profile</a></span></p>
    </div>
    <div class="stat-card">
        <h2 style="width: 100%; text-align: center;">Statistics</h2>
        <div class="stat-card-group">
            <div class="adb-stat">
                <div class="stat-header">
                    <span class="stat-text">Total Admins: <br /> <?php echo $data['total_admins']; ?> admins</span>
                </div>
                <br />
                <div class="btn-con">
                    <button><a href="/admin/user-list">Manage Admins</a></button>
                </div>
            </div>
            <div class="adb-stat">
                <div class="stat-header">
                    <span class="stat-text">Total Models: <br /> <?php echo $data['total_admins']; ?> models</span>
                </div>
                <br />
                <div class="btn-con">
                    <button><a href="/admin/models">Manage Models</a></button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>