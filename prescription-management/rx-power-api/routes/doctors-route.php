<?php
if ($page == "doctors") {
    include_once('view/pages/doctors/doctors-manage.php');
} elseif ($page == "doctors-create") {
    include_once('view/pages/doctors/doctors-create.php');
} elseif ($page == "doctors-edit") {
    include_once('view/pages/doctors/doctors-edit.php');
} elseif ($page == "doctors-details") {
    include_once('view/pages/doctors/doctors-details.php');
}
?>