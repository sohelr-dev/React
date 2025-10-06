<?php
if ($page == "prescription-history-tests") {
    include_once('view/pages/prescription-history-tests/prescription-history-tests-manage.php');
} elseif ($page == "prescription-history-tests-create") {
    include_once('view/pages/prescription-history-tests/prescription-history-tests-create.php');
} elseif ($page == "prescription-history-tests-edit") {
    include_once('view/pages/prescription-history-tests/prescription-history-tests-edit.php');
} elseif ($page == "prescription-history-tests-details") {
    include_once('view/pages/prescription-history-tests/prescription-history-tests-details.php');
}
?>