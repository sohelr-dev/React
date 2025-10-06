<?php
if ($page == "prescription-history") {
    include_once('view/pages/prescription-history/prescription-history-manage.php');
} elseif ($page == "prescription-history-create") {
    include_once('view/pages/prescription-history/prescription-history-create.php');
} elseif ($page == "prescription-history-edit") {
    include_once('view/pages/prescription-history/prescription-history-edit.php');
} elseif ($page == "prescription-history-details") {
    include_once('view/pages/prescription-history/prescription-history-details.php');
}
?>