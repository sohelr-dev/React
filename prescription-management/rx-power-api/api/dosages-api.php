<?php
function getDosages(){
    $Dosages = Dosages::readAll();
    echo json_encode($Dosages);
}
function deleteDosagesId($id){
     $deleteDosages = Dosages :: delete($id);
     echo json_encode($deleteDosages);
}
function createDosages($data){
     // echo "Create Working";
     $Dosages= new Dosages(null,$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($Dosages->create());
     
}
function updateDosagesById($data){
     // echo "Create Working";
     $updateDosages= new Dosages($data['id'],$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($updateDosages->update($data['id']));
     
}
function getDosagesById($_id){
      $DosagesId = Dosages :: readById($_id);
     echo json_encode($DosagesId);
}
// function getSearch($Search){
//       $searchByName = Dosages :: readBySearch($Search);
//      echo json_encode($searchByName);
// }

?>