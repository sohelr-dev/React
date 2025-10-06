
<?php
require_once("models/prescription-items.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = PrescriptionItems::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Prescription Items</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescription-items" class="btn btn-primary mb-3">Back to Manage</a>

<?php if (!empty($item)) { ?>
<table class="table table-striped">
  <tr>
    <th>Id</th>
    <td><?php echo htmlspecialchars($item['id']); ?></td>
  </tr>
  <tr>
    <th>Prescription Id</th>
    <td><?php echo htmlspecialchars($item['prescription_id']); ?></td>
  </tr>
  <tr>
    <th>Medicine Id</th>
    <td><?php echo htmlspecialchars($item['medicine_id']); ?></td>
  </tr>
  <tr>
    <th>Dosage</th>
    <td><?php echo htmlspecialchars($item['dosage']); ?></td>
  </tr>
  <tr>
    <th>Duration</th>
    <td><?php echo htmlspecialchars($item['duration']); ?></td>
  </tr>
  <tr>
    <th>Instructions</th>
    <td><?php echo htmlspecialchars($item['instructions']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
