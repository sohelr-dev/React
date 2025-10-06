<?php
if ($page == "prescriptions") {
    include_once('view/pages/prescriptions/prescriptions-manage.php');
} elseif ($page == "prescriptions-create") {
    include_once('view/pages/prescriptions/prescriptions-create.php');
} elseif ($page == "prescriptions-edit") {
    include_once('view/pages/prescriptions/prescriptions-edit.php');
} elseif ($page == "prescriptions-details") {
    include_once('view/pages/prescriptions/prescriptions-details.php');
}
?>