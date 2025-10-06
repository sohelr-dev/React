<?php
if ($page == "patients") {
    include_once('view/pages/patients/patients-manage.php');
} elseif ($page == "patients-create") {
    include_once('view/pages/patients/patients-create.php');
} elseif ($page == "patients-edit") {
    include_once('view/pages/patients/patients-edit.php');
} elseif ($page == "patients-details") {
    include_once('view/pages/patients/patients-details.php');
}
?>