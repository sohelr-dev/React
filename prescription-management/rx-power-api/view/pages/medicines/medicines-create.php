
<?php
require_once("models/medicines.class.php");
$msg = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = null; // Assuming auto-increment
    $name = $_POST['name'];
    $generic_name = $_POST['generic_name'];
    $description = $_POST['description'];
    $medicine_type_id = $_POST['medicine_type_id'];
    $obj = new Medicines(null, $name, $generic_name, $description, $medicine_type_id);
    $msg = $obj->create();
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Create Medicines</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="medicines" class="btn btn-primary mb-3">Back to Manage</a>

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
      <label for="name">Name</label>
      <input type="text" class="form-control" name="name" id="name">
    </div>
    <div class="form-group mb-3">
      <label for="generic_name">Generic Name</label>
      <input type="text" class="form-control" name="generic_name" id="generic_name">
    </div>
    <div class="form-group mb-3">
      <label for="description">Description</label>
      <input type="text" class="form-control" name="description" id="description">
    </div>
    <div class="form-group mb-3">
      <label for="medicine_type_id">Medicine Type Id</label>
      <input type="text" class="form-control" name="medicine_type_id" id="medicine_type_id">
    </div>
  </div>
  <div class="card-footer">
    <button type="submit" class="btn btn-success">Submit</button>
  </div>
</form>

    </div>
  </section>
</div>
