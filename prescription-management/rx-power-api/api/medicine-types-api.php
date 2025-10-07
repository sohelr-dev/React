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
function getMedicineTypeById($_id){
      $medicineId = Users :: readById($_id);
     echo json_encode($medicineId);
}

?>