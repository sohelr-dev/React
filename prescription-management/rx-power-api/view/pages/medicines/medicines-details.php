
<?php
require_once("models/medicines.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = Medicines::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Medicines</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="medicines" class="btn btn-primary mb-3">Back to Manage</a>

<?php if (!empty($item)) { ?>
<table class="table table-striped">
  <tr>
    <th>Id</th>
    <td><?php echo htmlspecialchars($item['id']); ?></td>
  </tr>
  <tr>
    <th>Name</th>
    <td><?php echo htmlspecialchars($item['name']); ?></td>
  </tr>
  <tr>
    <th>Generic Name</th>
    <td><?php echo htmlspecialchars($item['generic_name']); ?></td>
  </tr>
  <tr>
    <th>Description</th>
    <td><?php echo htmlspecialchars($item['description']); ?></td>
  </tr>
  <tr>
    <th>Medicine Type Id</th>
    <td><?php echo htmlspecialchars($item['medicine_type_id']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
