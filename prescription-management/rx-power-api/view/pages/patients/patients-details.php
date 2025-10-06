
<?php
require_once("models/patients.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = Patients::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Patients</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="patients" class="btn btn-primary mb-3">Back to Manage</a>

<?php if (!empty($item)) { ?>
<table class="table table-striped">
  <tr>
    <th>Id</th>
    <td><?php echo htmlspecialchars($item['id']); ?></td>
  </tr>
  <tr>
    <th>User Id</th>
    <td><?php echo htmlspecialchars($item['user_id']); ?></td>
  </tr>
  <tr>
    <th>Age</th>
    <td><?php echo htmlspecialchars($item['age']); ?></td>
  </tr>
  <tr>
    <th>Gender</th>
    <td><?php echo htmlspecialchars($item['gender']); ?></td>
  </tr>
  <tr>
    <th>Address</th>
    <td><?php echo htmlspecialchars($item['address']); ?></td>
  </tr>
  <tr>
    <th>Phone</th>
    <td><?php echo htmlspecialchars($item['phone']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
