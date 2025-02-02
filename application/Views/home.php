<?php
// Include header and navigation
include 'templates/header.php';
?>
<div class="container">
    <div class="ab-cont">
        <center>
            <h1>WELCOME TO</h1>
            <h2>OUR CHARITY FOUNDATION</h2>
        </center>
        <br />
        <img class="welcome-img" src="/MeerahCharityFoundation/public/assets/images/mcf-image.jpg" alt="Charity Foundation">
        <a href="/about" class="btn w-100">Know more about us</a>
    </div>
    <!-- Call to Action Section -->
    <section id="donate" class="cta">
        <div class="container">
            <h2>Your Contribution Can Make a Difference</h2>
            <p>Donate today and help us continue our mission to support those in need. Every donation counts, no matter how small.</p>
            <a href="/donate" class="btn w-100">Donate Now</a>
        </div>
    </section>
    <!-- Impact Metrics Section -->
    <section class="impact">
        <div class="container">
            <h2>Our Impact in Numbers</h2>
            <div class="impact-stats">
                <div class="stat">
                    <h3>500+</h3>
                    <p>Lives Impacted</p>
                </div>
                <div class="stat">
                    <h3>100+</h3>
                    <p>Volunteers Mobilized</p>
                </div>
                <div class="stat">
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                </div>
            </div>
        </div>
    </section>
    <section class="featured-programs">
        <h2>Our Featured Programs</h2>
        <div class="program">
            <h3>Health and Wellness</h3>
            <p>Providing essential healthcare to underserved communities.</p>
        </div>
        <div class="program">
            <h3>Education for All</h3>
            <p>Building schools and providing educational resources in remote areas.</p>
        </div>
        <div class="program">
            <h3>Clean Water Initiatives</h3>
            <p>Bringing access to clean and safe drinking water to communities in need.</p>
        </div>
    </section>
    <!-- Call to Action Section -->
    <section id="volunteer" class="cta">
        <div class="container">
            <h2>Get Involved: Volunteer with Us</h2>
            <p>We are always looking for passionate individuals to join our cause. Your time and skills can make a huge impact in the communities we serve.</p>
            <a href="/volunteer" class="btn w-100">Sign Up to Volunteer</a>
        </div>
    </section>
    <!-- Upcoming Events -->
    <section class="events">
        <h2>Our Upcoming Events</h2>
        <div class="event">
            <h3>Charity Gala 2024</h3>
            <p><strong>Date:</strong> June 12, 2024 | <strong>Location:</strong> Downtown Hotel</p>
            <p>Join us for a night of celebration and fundraising to support our clean water initiatives.</p>
            <a href="/event/charity-gala-2024" class="btn">Learn More</a>
        </div>
        <div class="event">
            <h3>5K Fun Run</h3>
            <p><strong>Date:</strong> July 20, 2024 | <strong>Location:</strong> City Park</p>
            <p>Run or walk with us to raise funds for education in rural areas.</p>
            <a href="/event/5k-fun-run" class="btn">Learn More</a>
        </div>
        <div class="event">
            <h3>Virtual Charity Auction</h3>
            <p><strong>Date:</strong> August 5, 2024 | <strong>Location:</strong> Online</p>
            <p>Bid on exclusive items to support our health and wellness programs.</p>
            <a href="/events/virtual-charity-auction" class="btn">Learn More</a>
        </div>
    </section>
    
</div>
<!-- Include footer -->
<?php
include 'templates/footer.php';
?>