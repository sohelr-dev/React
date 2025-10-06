
<?php
require_once("models/prescription-tests.class.php");
$msg = "";
$res = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $prescription_id = $_POST['prescription_id'];
    $test_id = $_POST['test_id'];
    $obj = new PrescriptionTests($id, $prescription_id, $test_id);
    $msg = $obj->update($id);
}
if (isset($_GET['id'])) {
    $res = PrescriptionTests::readById($_GET['id']);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Edit Prescription Tests</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescription-tests" class="btn btn-primary mb-3">Back to Manage</a>

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
        <label for="test_id">Test Id</label>
        <input type="text" class="form-control" name="test_id" id="test_id" value="<?php echo htmlspecialchars($res['test_id']); ?>">
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
