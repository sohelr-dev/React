
<?php
require_once("models/prescriptions.class.php");
$item = [];
if (isset($_GET["id"])) {
    $item = Prescriptions::readById($_GET["id"]);
}

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Details of Prescriptions</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="prescriptions" class="btn btn-primary mb-3">Back to Manage</a>

<?php if (!empty($item)) { ?>
<table class="table table-striped">
  <tr>
    <th>Id</th>
    <td><?php echo htmlspecialchars($item['id']); ?></td>
  </tr>
  <tr>
    <th>Appointment Id</th>
    <td><?php echo htmlspecialchars($item['appointment_id']); ?></td>
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
    <th>Diagnosis</th>
    <td><?php echo htmlspecialchars($item['diagnosis']); ?></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td><?php echo htmlspecialchars($item['notes']); ?></td>
  </tr>
  <tr>
    <th>Advice</th>
    <td><?php echo htmlspecialchars($item['advice']); ?></td>
  </tr>
  <tr>
    <th>Tests</th>
    <td><?php echo htmlspecialchars($item['tests']); ?></td>
  </tr>
  <tr>
    <th>Follow Up Date</th>
    <td><?php echo htmlspecialchars($item['follow_up_date']); ?></td>
  </tr>
  <tr>
    <th>Created At</th>
    <td><?php echo htmlspecialchars($item['created_at']); ?></td>
  </tr>
</table>
<?php } else { echo "<p>No data found.</p>"; } ?>

    </div>
  </section>
</div>
