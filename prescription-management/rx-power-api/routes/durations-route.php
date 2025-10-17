<?php
if ($page == "durations") {
    include_once('view/pages/durations/durations-manage.php');
} elseif ($page == "durations-create") {
    include_once('view/pages/durations/durations-create.php');
} elseif ($page == "durations-edit") {
    include_once('view/pages/durations/durations-edit.php');
} elseif ($page == "durations-details") {
    include_once('view/pages/durations/durations-details.php');
}
?>