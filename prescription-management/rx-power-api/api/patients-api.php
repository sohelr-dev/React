<?php
function getPatients(){
     // echo "order Working";
     $patient= Patients::readAll();
     echo json_encode($patient);
}
function CreatePatients($data){
     // echo "Create Working";
     $patient= new Patients(null,$data["user_id"],$data['age'],$data['gender'],$data['address'],$data['phone']);
     echo json_encode($patient->create());
     
}

?>