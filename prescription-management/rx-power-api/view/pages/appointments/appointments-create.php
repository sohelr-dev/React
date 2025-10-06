
<?php
require_once("models/appointments.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $doctor_id = $_POST['doctor_id'];
    $patient_id = $_POST['patient_id'];
    $appointment_date = $_POST['appointment_date'];
    $status = $_POST['status'];
    $obj = new Appointments(null, $doctor_id, $patient_id, $appointment_date, $status);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Appointments</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="appointments" class="btn btn-primary mb-3">Back to Manage</a>

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
      <label for="doctor_id">Doctor Id</label>
      <input type="text" class="form-control" name="doctor_id" id="doctor_id">
    </div>
    <div class="form-group mb-3">
      <label for="patient_id">Patient Id</label>
      <input type="text" class="form-control" name="patient_id" id="patient_id">
    </div>
    <div class="form-group mb-3">
      <label for="appointment_date">Appointment Date</label>
      <input type="text" class="form-control" name="appointment_date" id="appointment_date">
    </div>
    <div class="form-group mb-3">
      <label for="status">Status</label>
      <input type="text" class="form-control" name="status" id="status">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
