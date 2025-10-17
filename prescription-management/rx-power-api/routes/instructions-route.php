<?php
if ($page == "instructions") {
    include_once('view/pages/instructions/instructions-manage.php');
} elseif ($page == "instructions-create") {
    include_once('view/pages/instructions/instructions-create.php');
} elseif ($page == "instructions-edit") {
    include_once('view/pages/instructions/instructions-edit.php');
} elseif ($page == "instructions-details") {
    include_once('view/pages/instructions/instructions-details.php');
}
?>