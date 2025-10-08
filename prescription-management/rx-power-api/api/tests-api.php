<?php
function getTests(){
    $Tests = Tests::readAll();
    echo json_encode($Tests);
}
function deleteTestsId($id){
     $deleteTests = Tests :: delete($id);
     echo json_encode($deleteTests);
}
function createTests($data){
     // echo "Create Working";
     $Tests= new Tests(null,$data["name"],$data['description']);
     echo json_encode($Tests->create());
     
}
function updateTestsById($data){
     // echo "Create Working";
     $updateTests= new Tests($data['id'],$data["name"],$data['description']);
     echo json_encode($updateTests->update($data['id']));
     
}
function getTestsById($_id){
      $medicineId = Tests :: readById($_id);
     echo json_encode($medicineId);
}

?>