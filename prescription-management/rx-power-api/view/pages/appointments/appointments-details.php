
<?php
require_once("models/appointments.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = Appointments::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Appointments</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="appointments" class="btn btn-primary mb-3">Back to Manage</a>

<?php if (!empty($item)) { ?>
<table class="table table-striped">
  <tr>
    <th>Id</th>
    <td><?php echo htmlspecialchars($item['id']); ?></td>
  </tr>
  <tr>
    <th>Doctor Id</th>
    <td><?php echo htmlspecialchars($item['doctor_id']); ?></td>
  </tr>
  <tr>
    <th>Patient Id</th>
    <td><?php echo htmlspecialchars($item['patient_id']); ?></td>
  </tr>
  <tr>
    <th>Appointment Date</th>
    <td><?php echo htmlspecialchars($item['appointment_date']); ?></td>
  </tr>
  <tr>
    <th>Status</th>
    <td><?php echo htmlspecialchars($item['status']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
