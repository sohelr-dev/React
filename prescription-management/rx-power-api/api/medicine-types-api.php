<?php
function getMedicineTypes(){
    $medicineTypes = MedicineTypes::readAll();
    echo json_encode($medicineTypes);
}
function deleteMedicineTypeId($id){
     $deleteMedicineType = MedicineTypes :: delete($id);
     echo json_encode($deleteMedicineType);
}
function createMedicineType($data){
     // echo "Create Working";
     $MedicineType= new MedicineTypes(null,$data["type_name"]);
     echo json_encode($MedicineType->create());
     
}
function updateMedicineTypeById($data){
     // echo "Create Working";
     $updateMedicineType= new MedicineTypes($data['id'],$data["type_name"]);
     echo json_encode($updateMedicineType->update($data['id']));
     
}
function getMedicineTypeById($_id){
      $medicineId = MedicineTypes :: readById($_id);
     echo json_encode($medicineId);
}

?>