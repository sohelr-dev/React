<?php
function getRoles(){
    $Roles = Roles::readAll();
    echo json_encode($Roles);
}
function deleteRolesId($id){
     $deleteRoles = Roles :: delete($id);
     echo json_encode($deleteRoles);
}
function createRoles($data){
     // echo "Create Working";
     $Roles= new Roles(null,$data["role_name"]);
     echo json_encode($Roles->create());
     
}
function updateRolesById($data){
     // echo "Create Working";
     $updateRoles= new Roles($data['id'],$data["role_name"]);
     echo json_encode($updateRoles->update($data['id']));
     
}
function getRolesById($_id){
      $roleId = Roles :: readById($_id);
     echo json_encode($roleId);
}

?>