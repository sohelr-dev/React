
<?php
require_once("models/prescription-items.class.php");
$msg = "";
$res = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $prescription_id = $_POST['prescription_id'];
    $medicine_id = $_POST['medicine_id'];
    $dosage = $_POST['dosage'];
    $duration = $_POST['duration'];
    $instructions = $_POST['instructions'];
    $obj = new PrescriptionItems($id, $prescription_id, $medicine_id, $dosage, $duration, $instructions);
    $msg = $obj->update($id);
}
if (isset($_GET['id'])) {
    $res = PrescriptionItems::readById($_GET['id']);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Edit Prescription Items</h1>
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
  <button type="button" class="btn-close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>
<?php if(!empty($res)) { ?>
<div class="card">
  <form method="post">
    <div class="card-body">
      <input type="hidden" name="id" value="<?php echo $res['id']; ?>">
      <div class="form-group mb-3">
        <label for="prescription_id">Prescription Id</label>
        <input type="text" class="form-control" name="prescription_id" id="prescription_id" value="<?php echo htmlspecialchars($res['prescription_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="medicine_id">Medicine Id</label>
        <input type="text" class="form-control" name="medicine_id" id="medicine_id" value="<?php echo htmlspecialchars($res['medicine_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="dosage">Dosage</label>
        <input type="text" class="form-control" name="dosage" id="dosage" value="<?php echo htmlspecialchars($res['dosage']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="duration">Duration</label>
        <input type="text" class="form-control" name="duration" id="duration" value="<?php echo htmlspecialchars($res['duration']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="instructions">Instructions</label>
        <input type="text" class="form-control" name="instructions" id="instructions" value="<?php echo htmlspecialchars($res['instructions']); ?>">
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" class="btn btn-success">Update</button>
    </div>
  </form>
</div>
<?php } ?>

    </div>
  </section>
</div>
