<?php
function getDoctors(){
    $Doctors = Doctors::readAll();
    echo json_encode($Doctors);
}
function deleteDoctorsId($id){
     $deleteDoctors = Doctors :: delete($id);
     echo json_encode($deleteDoctors);
}
function createDoctors($data){
     // echo "Create Working";
     $Doctors= new Doctors(null,$data["name"],$data['generic_name'],$data['description'],$data['medicine_type_id']);
     echo json_encode($Doctors->create());
     
}
function updateDoctorsById($data){
     // echo "Create Working";
     $updateDoctors= new Doctors($data['id'],$data["name"],$data['generic_name'],$data['description'],$data['medicine_type_id']);
     echo json_encode($updateDoctors->update($data['id']));
     
}
function getDoctorsById($_id){
      $DoctorsId = Doctors :: readById($_id);
     echo json_encode($DoctorsId);
}

?>