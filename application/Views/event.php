<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="event-viewer">
    <div class="container">
        <center><h2>Charity Fundraising Gala</h2></center>
        <p>Our Charity Fundraising Gala is an elegant evening of performances, auctions, and a silent auction, all aimed at raising funds to provide healthcare services in underserved rural areas. Come join us for an inspiring and impactful night!</p>

        <h3>Event Details</h3>
        <ul>
            <li><strong>Date:</strong> January 20, 2025</li>
            <li><strong>Location:</strong> Grand Ballroom, City Hotel</li>
            <li><strong>Time:</strong> 7:00 PM - 11:00 PM</li>
        </ul>

        <h3>Agenda:</h3>
        <ul>
            <li>7:00 PM - Cocktail Hour</li>
            <li>8:00 PM - Dinner and Speeches</li>
            <li>9:00 PM - Live Performances</li>
            <li>10:00 PM - Silent Auction and Closing Remarks</li>
        </ul>

    </div>
    <br />
    <center><h2>Register for the Event</h2></center>
    
    <section class="event-register">
        <br />
        <form action="/event/register" method="POST">
            <label for="name">Full Name:</label>
            <input type="text" name="name" id="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
            <br>
            <button type="submit" class="btn">Register</button>
        </form>
    </section>
</section>
<!-- Include footer -->
<?php
include 'templates/footer.php';
?>