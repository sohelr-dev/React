<?php
if ($page == "prescription-tests") {
    include_once('view/pages/prescription-tests/prescription-tests-manage.php');
} elseif ($page == "prescription-tests-create") {
    include_once('view/pages/prescription-tests/prescription-tests-create.php');
} elseif ($page == "prescription-tests-edit") {
    include_once('view/pages/prescription-tests/prescription-tests-edit.php');
} elseif ($page == "prescription-tests-details") {
    include_once('view/pages/prescription-tests/prescription-tests-details.php');
}
?>