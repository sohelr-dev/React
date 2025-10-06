
<?php
require_once("models/doctors.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = Doctors::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Doctors</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="doctors" class="btn btn-primary mb-3">Back to Manage</a>

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
    <th>Specialization</th>
    <td><?php echo htmlspecialchars($item['specialization']); ?></td>
  </tr>
  <tr>
    <th>Chamber Name</th>
    <td><?php echo htmlspecialchars($item['chamber_name']); ?></td>
  </tr>
  <tr>
    <th>Chamber Address</th>
    <td><?php echo htmlspecialchars($item['chamber_address']); ?></td>
  </tr>
  <tr>
    <th>Bmdc Reg No</th>
    <td><?php echo htmlspecialchars($item['bmdc_reg_no']); ?></td>
  </tr>
  <tr>
    <th>Photo</th>
    <td><?php echo htmlspecialchars($item['photo']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
