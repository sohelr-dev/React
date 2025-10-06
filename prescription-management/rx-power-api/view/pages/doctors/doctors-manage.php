
<?php
require_once("models/doctors.class.php");
$msg = "";
if(isset($_POST['delete_id'])) {
  $id = $_POST['delete_id'];
  $msg = Doctors::delete($id);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Manage Doctors</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="doctors-create" class="btn btn-primary mb-3">Add New</a>

<?php if($msg) { ?>
<div class="alert alert-info alert-dismissible fade show" role="alert">
  <?php echo $msg; ?>
  <button type="button" class="btn-close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>

<table class="table table-striped">
  <thead>
  <tr>
    <th>Id</th>
    <th>User Id</th>
    <th>Specialization</th>
    <th>Chamber Name</th>
    <th>Chamber Address</th>
    <th>Bmdc Reg No</th>
    <th>Photo</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  <?php
    $items = Doctors::readAll();
    foreach($items as $item){
      echo "<tr>";
      echo "<td>".$item['id']."</td>";
      echo "<td>".$item['user_id']."</td>";
      echo "<td>".$item['specialization']."</td>";
      echo "<td>".$item['chamber_name']."</td>";
      echo "<td>".$item['chamber_address']."</td>";
      echo "<td>".$item['bmdc_reg_no']."</td>";
      echo "<td>".$item['photo']."</td>";
  ?>
    <td>
      <form action="doctors-details" method="get">
        <input type="hidden" name="id" value="<?php echo $item['id']; ?>">
        <input type="submit" class="btn btn-info" value="Details">
      </form>
      <form action="doctors-edit" method="get">
        <input type="hidden" name="id" value="<?php echo $item['id']; ?>">
        <input type="submit" class="btn btn-primary" value="Edit">
      </form>
      <form method="post">
        <input type="hidden" name="delete_id" value="<?php echo $item['id']; ?>">
        <input type="submit" class="btn btn-danger" value="Delete">
      </form>
    </td>
  <?php
      echo "</tr>";
    }
  ?>
  </tbody>
</table>

    </div>
  </section>
</div>
