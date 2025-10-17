<?php
if ($page == "dosages") {
    include_once('view/pages/dosages/dosages-manage.php');
} elseif ($page == "dosages-create") {
    include_once('view/pages/dosages/dosages-create.php');
} elseif ($page == "dosages-edit") {
    include_once('view/pages/dosages/dosages-edit.php');
} elseif ($page == "dosages-details") {
    include_once('view/pages/dosages/dosages-details.php');
}
?>