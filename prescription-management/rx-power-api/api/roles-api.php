<?php
function getRoles(){
     $roles = Roles :: readALl();
     echo json_encode($roles);
}


?>