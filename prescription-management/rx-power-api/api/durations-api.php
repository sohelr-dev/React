<?php
function getDurations(){
    $Durations = Durations::readAll();
    echo json_encode($Durations);
}
function deleteDurationsId($id){
     $deleteDurations = Durations :: delete($id);
     echo json_encode($deleteDurations);
}
function createDurations($data){
     // echo "Create Working";
     $Durations= new Durations(null,$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($Durations->create());
     
}
function updateDurationsById($data){
     // echo "Create Working";
     $updateDurations= new Durations($data['id'],$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($updateDurations->update($data['id']));
     
}
function getDurationsById($_id){
      $DurationsId = Durations :: readById($_id);
     echo json_encode($DurationsId);
}
// function getSearch($Search){
//       $searchByName = Durations :: readBySearch($Search);
//      echo json_encode($searchByName);
// }

?>