
<?php
require_once("models/prescriptions.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $appointment_id = $_POST['appointment_id'];
    $doctor_id = $_POST['doctor_id'];
    $patient_id = $_POST['patient_id'];
    $diagnosis = $_POST['diagnosis'];
    $notes = $_POST['notes'];
    $advice = $_POST['advice'];
    $tests = $_POST['tests'];
    $follow_up_date = $_POST['follow_up_date'];
    $created_at = $_POST['created_at'];
    $obj = new Prescriptions(null, $appointment_id, $doctor_id, $patient_id, $diagnosis, $notes, $advice, $tests, $follow_up_date, $created_at);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Prescriptions</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescriptions" class="btn btn-primary mb-3">Back to Manage</a>

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
      <label for="appointment_id">Appointment Id</label>
      <input type="text" class="form-control" name="appointment_id" id="appointment_id">
    </div>
    <div class="form-group mb-3">
      <label for="doctor_id">Doctor Id</label>
      <input type="text" class="form-control" name="doctor_id" id="doctor_id">
    </div>
    <div class="form-group mb-3">
      <label for="patient_id">Patient Id</label>
      <input type="text" class="form-control" name="patient_id" id="patient_id">
    </div>
    <div class="form-group mb-3">
      <label for="diagnosis">Diagnosis</label>
      <input type="text" class="form-control" name="diagnosis" id="diagnosis">
    </div>
    <div class="form-group mb-3">
      <label for="notes">Notes</label>
      <input type="text" class="form-control" name="notes" id="notes">
    </div>
    <div class="form-group mb-3">
      <label for="advice">Advice</label>
      <input type="text" class="form-control" name="advice" id="advice">
    </div>
    <div class="form-group mb-3">
      <label for="tests">Tests</label>
      <input type="text" class="form-control" name="tests" id="tests">
    </div>
    <div class="form-group mb-3">
      <label for="follow_up_date">Follow Up Date</label>
      <input type="text" class="form-control" name="follow_up_date" id="follow_up_date">
    </div>
    <div class="form-group mb-3">
      <label for="created_at">Created At</label>
      <input type="text" class="form-control" name="created_at" id="created_at">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
