<!-- In manage-events.php -->
<h2>Manage Events</h2>
<table>
    <tr>
        <th>Event Name</th>
        <th>Event Date</th>
        <th>Actions</th>
    </tr>
    <?php foreach ($events as $event): ?>
    <tr>
        <td><?= htmlspecialchars($event['event_name']) ?></td>
        <td><?= htmlspecialchars($event['event_date']) ?></td>
        <td>
            <a href="/admin/edit-event/<?= $event['id'] ?>">Edit</a> |
            <a href="/admin/delete-event/<?= $event['id'] ?>">Delete</a>
        </td>
    </tr>
    <?php endforeach; ?>
</table>