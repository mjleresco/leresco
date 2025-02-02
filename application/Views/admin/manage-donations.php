<!-- In manage-donations.php -->
<h2>Manage Donations</h2>
<table>
    <tr>
        <th>User</th>
        <th>Amount</th>
        <th>Donation Date</th>
        <th>Actions</th>
    </tr>
    <?php foreach ($donations as $donation): ?>
    <tr>
        <td><?= htmlspecialchars($donation['user_name']) ?></td> <!-- Assuming you join with user table to get the user's name -->
        <td><?= htmlspecialchars($donation['amount']) ?></td>
        <td><?= htmlspecialchars($donation['date']) ?></td>
        <td>
            <a href="/admin/view-donation/<?= $donation['id'] ?>">View</a> |
            <a href="/admin/delete-donation/<?= $donation['id'] ?>">Delete</a>
        </td>
    </tr>
    <?php endforeach; ?>
</table>