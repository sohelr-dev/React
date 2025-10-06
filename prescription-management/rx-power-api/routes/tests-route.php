<?php
if ($page == "tests") {
    include_once('view/pages/tests/tests-manage.php');
} elseif ($page == "tests-create") {
    include_once('view/pages/tests/tests-create.php');
} elseif ($page == "tests-edit") {
    include_once('view/pages/tests/tests-edit.php');
} elseif ($page == "tests-details") {
    include_once('view/pages/tests/tests-details.php');
}
?>