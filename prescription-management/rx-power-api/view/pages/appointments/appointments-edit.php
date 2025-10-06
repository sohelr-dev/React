
<?php
require_once("models/appointments.class.php");
$msg = "";
$res = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $doctor_id = $_POST['doctor_id'];
    $patient_id = $_POST['patient_id'];
    $appointment_date = $_POST['appointment_date'];
    $status = $_POST['status'];
    $obj = new Appointments($id, $doctor_id, $patient_id, $appointment_date, $status);
    $msg = $obj->update($id);
}
if (isset($_GET['id'])) {
    $res = Appointments::readById($_GET['id']);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Edit Appointments</h1>
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
  <button type="button" class="btn-close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>
<?php if(!empty($res)) { ?>
<div class="card">
  <form method="post">
    <div class="card-body">
      <input type="hidden" name="id" value="<?php echo $res['id']; ?>">
      <div class="form-group mb-3">
        <label for="doctor_id">Doctor Id</label>
        <input type="text" class="form-control" name="doctor_id" id="doctor_id" value="<?php echo htmlspecialchars($res['doctor_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="patient_id">Patient Id</label>
        <input type="text" class="form-control" name="patient_id" id="patient_id" value="<?php echo htmlspecialchars($res['patient_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="appointment_date">Appointment Date</label>
        <input type="text" class="form-control" name="appointment_date" id="appointment_date" value="<?php echo htmlspecialchars($res['appointment_date']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="status">Status</label>
        <input type="text" class="form-control" name="status" id="status" value="<?php echo htmlspecialchars($res['status']); ?>">
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
