
<?php
require_once("models/prescription-history.class.php");
$msg = "";
$res = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $prescription_id = $_POST['prescription_id'];
    $doctor_id = $_POST['doctor_id'];
    $patient_id = $_POST['patient_id'];
    $diagnosis = $_POST['diagnosis'];
    $notes = $_POST['notes'];
    $advice = $_POST['advice'];
    $tests = $_POST['tests'];
    $follow_up_date = $_POST['follow_up_date'];
    $created_at = $_POST['created_at'];
    $obj = new PrescriptionHistory($id, $prescription_id, $doctor_id, $patient_id, $diagnosis, $notes, $advice, $tests, $follow_up_date, $created_at);
    $msg = $obj->update($id);
}
if (isset($_GET['id'])) {
    $res = PrescriptionHistory::readById($_GET['id']);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Edit Prescription History</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescription-history" class="btn btn-primary mb-3">Back to Manage</a>

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
        <label for="doctor_id">Doctor Id</label>
        <input type="text" class="form-control" name="doctor_id" id="doctor_id" value="<?php echo htmlspecialchars($res['doctor_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="patient_id">Patient Id</label>
        <input type="text" class="form-control" name="patient_id" id="patient_id" value="<?php echo htmlspecialchars($res['patient_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="diagnosis">Diagnosis</label>
        <input type="text" class="form-control" name="diagnosis" id="diagnosis" value="<?php echo htmlspecialchars($res['diagnosis']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="notes">Notes</label>
        <input type="text" class="form-control" name="notes" id="notes" value="<?php echo htmlspecialchars($res['notes']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="advice">Advice</label>
        <input type="text" class="form-control" name="advice" id="advice" value="<?php echo htmlspecialchars($res['advice']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="tests">Tests</label>
        <input type="text" class="form-control" name="tests" id="tests" value="<?php echo htmlspecialchars($res['tests']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="follow_up_date">Follow Up Date</label>
        <input type="text" class="form-control" name="follow_up_date" id="follow_up_date" value="<?php echo htmlspecialchars($res['follow_up_date']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="created_at">Created At</label>
        <input type="text" class="form-control" name="created_at" id="created_at" value="<?php echo htmlspecialchars($res['created_at']); ?>">
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
