<?php
function getInstructions(){
    $Instructions = Instructions::readAll();
    echo json_encode($Instructions);
}
function deleteInstructionsId($id){
     $deleteInstructions = Instructions :: delete($id);
     echo json_encode($deleteInstructions);
}
function createInstructions($data){
     // echo "Create Working";
     $Instructions= new Instructions(null,$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($Instructions->create());
     
}
function updateInstructionsById($data){
     // echo "Create Working";
     $updateInstructions= new Instructions($data['id'],$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($updateInstructions->update($data['id']));
     
}
function getInstructionsById($_id){
      $InstructionsId = Instructions :: readById($_id);
     echo json_encode($InstructionsId);
}
// function getSearch($Search){
//       $searchByName = Instructions :: readBySearch($Search);
//      echo json_encode($searchByName);
// }

?>