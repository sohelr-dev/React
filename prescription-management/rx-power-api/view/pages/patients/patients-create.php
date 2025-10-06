
<?php
require_once("models/patients.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $user_id = $_POST['user_id'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $obj = new Patients(null, $user_id, $age, $gender, $address, $phone);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Patients</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="patients" class="btn btn-primary mb-3">Back to Manage</a>

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
      <label for="age">Age</label>
      <input type="text" class="form-control" name="age" id="age">
    </div>
    <div class="form-group mb-3">
      <label for="gender">Gender</label>
      <input type="text" class="form-control" name="gender" id="gender">
    </div>
    <div class="form-group mb-3">
      <label for="address">Address</label>
      <input type="text" class="form-control" name="address" id="address">
    </div>
    <div class="form-group mb-3">
      <label for="phone">Phone</label>
      <input type="text" class="form-control" name="phone" id="phone">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
