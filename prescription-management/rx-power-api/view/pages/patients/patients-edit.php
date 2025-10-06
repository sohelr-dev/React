
<?php
require_once("models/patients.class.php");
$msg = "";
$res = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $user_id = $_POST['user_id'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $obj = new Patients($id, $user_id, $age, $gender, $address, $phone);
    $msg = $obj->update($id);
}
if (isset($_GET['id'])) {
    $res = Patients::readById($_GET['id']);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Edit Patients</h1>
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
  <button type="button" class="btn-close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>
<?php if(!empty($res)) { ?>
<div class="card">
  <form method="post">
    <div class="card-body">
      <input type="hidden" name="id" value="<?php echo $res['id']; ?>">
      <div class="form-group mb-3">
        <label for="user_id">User Id</label>
        <input type="text" class="form-control" name="user_id" id="user_id" value="<?php echo htmlspecialchars($res['user_id']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="age">Age</label>
        <input type="text" class="form-control" name="age" id="age" value="<?php echo htmlspecialchars($res['age']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="gender">Gender</label>
        <input type="text" class="form-control" name="gender" id="gender" value="<?php echo htmlspecialchars($res['gender']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="address">Address</label>
        <input type="text" class="form-control" name="address" id="address" value="<?php echo htmlspecialchars($res['address']); ?>">
      </div>
      <div class="form-group mb-3">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" name="phone" id="phone" value="<?php echo htmlspecialchars($res['phone']); ?>">
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
