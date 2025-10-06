<?php
if ($page == "medicines") {
    include_once('view/pages/medicines/medicines-manage.php');
} elseif ($page == "medicines-create") {
    include_once('view/pages/medicines/medicines-create.php');
} elseif ($page == "medicines-edit") {
    include_once('view/pages/medicines/medicines-edit.php');
} elseif ($page == "medicines-details") {
    include_once('view/pages/medicines/medicines-details.php');
}
?>