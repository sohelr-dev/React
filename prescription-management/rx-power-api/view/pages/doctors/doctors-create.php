
<?php
require_once("models/doctors.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $user_id = $_POST['user_id'];
    $specialization = $_POST['specialization'];
    $chamber_name = $_POST['chamber_name'];
    $chamber_address = $_POST['chamber_address'];
    $bmdc_reg_no = $_POST['bmdc_reg_no'];
    $photo = $_POST['photo'];
    $obj = new Doctors(null, $user_id, $specialization, $chamber_name, $chamber_address, $bmdc_reg_no, $photo);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Doctors</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="doctors" class="btn btn-primary mb-3">Back to Manage</a>

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
      <label for="user_id">User Id</label>
      <input type="text" class="form-control" name="user_id" id="user_id">
    </div>
    <div class="form-group mb-3">
      <label for="specialization">Specialization</label>
      <input type="text" class="form-control" name="specialization" id="specialization">
    </div>
    <div class="form-group mb-3">
      <label for="chamber_name">Chamber Name</label>
      <input type="text" class="form-control" name="chamber_name" id="chamber_name">
    </div>
    <div class="form-group mb-3">
      <label for="chamber_address">Chamber Address</label>
      <input type="text" class="form-control" name="chamber_address" id="chamber_address">
    </div>
    <div class="form-group mb-3">
      <label for="bmdc_reg_no">Bmdc Reg No</label>
      <input type="text" class="form-control" name="bmdc_reg_no" id="bmdc_reg_no">
    </div>
    <div class="form-group mb-3">
      <label for="photo">Photo</label>
      <input type="text" class="form-control" name="photo" id="photo">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
