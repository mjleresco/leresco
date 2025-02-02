<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="volunteer">
    <h2>Join Our Team of Volunteers</h2>
    <p>Your time and efforts can make a significant impact in the communities we serve. We have many volunteer opportunities available to fit your schedule and skills.</p>
    <h3>Current Volunteer Opportunities</h3>
    <ul>
        <li><strong>Community Outreach Volunteer:</strong> Help us organize local events and spread awareness about our programs.</li>
        <li><strong>Fundraising Assistant:</strong> Assist in planning and organizing fundraising events, including online and offline campaigns.</li>
        <li><strong>Volunteer Educator:</strong> Teach basic literacy or life skills in underserved communities.</li>
    </ul>
    <p>Ready to make a difference? Fill out the form below to volunteer.</p>
    <form action="/volunteer/register" method="POST">
        <label for="name">Full Name:<span class="required">*</span></label>
        <input type="text" name="name" id="name" required>
        
        <label for="gender">Gender:<span class="required">*</span></label><br />
        <input type="radio" name="gender" id="gender" value="Male" required>Male<br />
        <input type="radio" name="gender" id="gender" value="Female" required>Female
        <br />
        <br />
        <label for="phone">Phone No.:</label>
        <input type="number" name="phone" id="phone" required>
        
        <label for="email">Email:<span class="required">*</span></label>
        <input type="email" name="email" id="email" required>
        
        <label for="opportunity">Select Opportunity:<span class="required">*</span></label>
        <select name="opportunity" id="opportunity" required>
            <option value="community-outreach">Community Outreach Volunteer</option>
            <option value="fundraising-assistant">Fundraising Assistant</option>
            <option value="volunteer-educator">Volunteer Educator</option>
        </select>
        <button type="submit" class="btn">Sign Up</button>
    </form>
</section>

<?php
// Include footer
include 'templates/footer.php';
?>