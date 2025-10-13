<?php
function getPatients(){
    $Patients = Patients::readAll();
    echo json_encode($Patients);
}
function deletePatientsId($id){
     $deletePatients = Patients :: delete($id);
     echo json_encode($deletePatients);
}
function createPatients($data){
     // echo "Create Working";
     $Patients= new Patients(null,$data["user_id"],$data['age'],$data['gender'],$data['address'],$data['phone']);
     echo json_encode($Patients->create());
     
}
function updatePatientsById($data){
     // echo "Create Working";
     $updatePatients= new Patients($data['id'],$data["user_id"],$data['age'],$data['gender'],$data['address'],$data['phone']);
     echo json_encode($updatePatients->update($data['id']));
     
}
function getPatientsById($_id){
      $PatientsId = Patients :: readById($_id);
     echo json_encode($PatientsId);
}

?>