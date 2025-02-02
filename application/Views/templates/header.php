<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="msapplication-TileImage" content="favicon.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $data['title']; ?></title>
    <link rel="stylesheet" href="MeerahCharityFoundation/public/assets/css/styles.css">
</head>
<body>
    <header>
        <img class="logo" src="/MeerahCharityFoundation/public/assets/images/mcf-logo.png" alt="mcf logo" />
        <img class="mcf" src="/MeerahCharityFoundation/public/assets/images/mcf.png" alt="meerah charity foundation" />
    </header>
    <nav>
        <div class="sidebar-openBtn">&#9776</div>
        <div class="cp-title"><?php echo $data['c-page']; ?></div>
        <a class="profile-icon" href="/login" >Login</a>
        <ul class="sidebar" id="sidebar">
            <h2>Menu</h2>
            <span class="cancel">&times</span>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/donate">Donate</a>
            <a href="/volunteer">Volunteer</a>
            <a href="/contact">Contact Us</a>
            <a href="/about">About Us</a>
            <a href="/faqs">FAQs</a>
            
        </ul>
    </nav>
    <script>
        var openBtn = document.querySelector('.sidebar-openBtn');
        var closeBtn = document.querySelector('.cancel');
        openBtn.addEventListener('click', () => {
            document.querySelector('.sidebar').style.display = 'block';
        });
        closeBtn.addEventListener('click', () => {
            document.querySelector('.sidebar').style.display = 'none';
        });
    </script>
    
