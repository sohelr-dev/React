<?php
if ($page == "prescription-items") {
    include_once('view/pages/prescription-items/prescription-items-manage.php');
} elseif ($page == "prescription-items-create") {
    include_once('view/pages/prescription-items/prescription-items-create.php');
} elseif ($page == "prescription-items-edit") {
    include_once('view/pages/prescription-items/prescription-items-edit.php');
} elseif ($page == "prescription-items-details") {
    include_once('view/pages/prescription-items/prescription-items-details.php');
}
?>