<?php
function getMedicines(){
    $Medicines = Medicines::readAll();
    echo json_encode($Medicines);
}
function deleteMedicinesId($id){
     $deleteMedicines = Medicines :: delete($id);
     echo json_encode($deleteMedicines);
}
function createMedicines($data){
     // echo "Create Working";
     $Medicines= new Medicines(null,$data["name"],$data['generic_name'],$data['description'],$data['medicine_type_id']);
     echo json_encode($Medicines->create());
     
}
function updateMedicinesById($data){
     // echo "Create Working";
     $updateMedicines= new Medicines($data['id'],$data["name"],$data['generic_name'],$data['description'],$data['medicine_type_id']);
     echo json_encode($updateMedicines->update($data['id']));
     
}
function getMedicinesById($_id){
      $MedicinesId = Medicines :: readById($_id);
     echo json_encode($MedicinesId);
}

?>