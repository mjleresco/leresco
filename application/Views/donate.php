<?php
// Include header and navigation
include 'templates/header.php';
?>
<section class="donate">
    <h2>Support Our Cause</h2>
    <p>Your generous donations help us to continue our life-changing work. Whether you're giving one-time or through recurring contributions, your support is making a huge impact.</p>

    <h3>Donation Methods</h3>
    <ul>
        <li><strong>One-time Donation:</strong> Make a single donation to support our current initiatives.</li>
        <li><strong>Recurring Donation:</strong> Set up an automatic monthly donation to provide consistent support.</li>
        <li><strong>Corporate Sponsorship:</strong> Companies can partner with us for large-scale donations and support.</li>
    </ul>

    <h3>Donate Now</h3>
    <form action="/donate/submit" method="POST">
        <label for="amount">Donation Amount:<span class="required">*</span></label>
        <input type="number" name="amount" id="amount" placeholder="Amount in Naira" required>
        
        <label for="donation-type">Donation Type:<span class="required">*</span></label>
        <select name="donation-type" id="donation-type" required>
            <option value="one-time">One-Time Donation</option>
            <option value="recurring">Recurring Donation</option>
        </select>

        <div class="recurring-options" style="display:none;">
            <label for="recurring-frequency">Frequency of Donation:<span class="required">*</span></label>
            <select name="recurring-frequency" id="recurring-frequency">
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
            </select>
        </div>

        <label for="name">Full Name:<span class="required">*</span></label>
        <input type="text" name="name" id="name" required>

        <label for="gender">Gender:<span class="required">*</span></label><br />
        <input type="radio" name="gender" id="gender" value="Male" required>Male<br />
        <input type="radio" name="gender" id="gender" value="Female" required>Female
        <br />
        <br />
        <label for="name">Phone No.:</label>
        <input type="number" name="name" id="name" required>

        <label for="email">Email Address:<span class="required">*</span></label>
        <input type="email" name="email" id="email" required>

        <button type="submit" class="btn">Donate Now</button>
    </form>

    <script>
        // Toggle visibility of recurring donation options
        const donationType = document.getElementById("donation-type");
        const recurringOptions = document.querySelector(".recurring-options");

        donationType.addEventListener("change", function() {
            if (donationType.value === "recurring") {
                recurringOptions.style.display = "block";
            } else {
                recurringOptions.style.display = "none";
            }
        });
    </script>
</section>
<?php
// Include footer
include 'templates/footer.php';
?>