<?php
if ($page == "appointments") {
    include_once('view/pages/appointments/appointments-manage.php');
} elseif ($page == "appointments-create") {
    include_once('view/pages/appointments/appointments-create.php');
} elseif ($page == "appointments-edit") {
    include_once('view/pages/appointments/appointments-edit.php');
} elseif ($page == "appointments-details") {
    include_once('view/pages/appointments/appointments-details.php');
}
?>