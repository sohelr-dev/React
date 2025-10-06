<?php
if ($page == "medicine-types") {
    include_once('view/pages/medicine-types/medicine-types-manage.php');
} elseif ($page == "medicine-types-create") {
    include_once('view/pages/medicine-types/medicine-types-create.php');
} elseif ($page == "medicine-types-edit") {
    include_once('view/pages/medicine-types/medicine-types-edit.php');
} elseif ($page == "medicine-types-details") {
    include_once('view/pages/medicine-types/medicine-types-details.php');
}
?>