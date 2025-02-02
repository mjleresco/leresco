<!-- In manage-blog.php -->
<h2>Manage Blog Posts</h2>
<table>
    <tr>
        <th>Title</th>
        <th>Date Published</th>
        <th>Actions</th>
    </tr>
    <?php foreach ($posts as $post): ?>
    <tr>
        <td><?= htmlspecialchars($post['title']) ?></td>
        <td><?= htmlspecialchars($post['published_date']) ?></td>
        <td>
            <a href="/admin/edit-post/<?= $post['id'] ?>">Edit</a> |
            <a href="/admin/delete-post/<?= $post['id'] ?>">Delete</a>
        </td>
    </tr>
    <?php endforeach; ?>
</table>