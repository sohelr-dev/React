
<?php
require_once("models/prescription-items.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $prescription_id = $_POST['prescription_id'];
    $medicine_id = $_POST['medicine_id'];
    $dosage = $_POST['dosage'];
    $duration = $_POST['duration'];
    $instructions = $_POST['instructions'];
    $obj = new PrescriptionItems(null, $prescription_id, $medicine_id, $dosage, $duration, $instructions);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Prescription Items</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescription-items" class="btn btn-primary mb-3">Back to Manage</a>

<?php if($msg) { ?>
<div class="alert alert-info alert-dismissible fade show" role="alert">
  <?php echo $msg; ?>
  <button type="button" class="btn-close close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>
<form method="post">
  <input type="hidden" name="id">
  <div class="card-body">
    <div class="form-group mb-3">
      <label for="prescription_id">Prescription Id</label>
      <input type="text" class="form-control" name="prescription_id" id="prescription_id">
    </div>
    <div class="form-group mb-3">
      <label for="medicine_id">Medicine Id</label>
      <input type="text" class="form-control" name="medicine_id" id="medicine_id">
    </div>
    <div class="form-group mb-3">
      <label for="dosage">Dosage</label>
      <input type="text" class="form-control" name="dosage" id="dosage">
    </div>
    <div class="form-group mb-3">
      <label for="duration">Duration</label>
      <input type="text" class="form-control" name="duration" id="duration">
    </div>
    <div class="form-group mb-3">
      <label for="instructions">Instructions</label>
      <input type="text" class="form-control" name="instructions" id="instructions">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
