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
     $Doctors= new Doctors(null,$data["user_id"],$data['specialization'],$data['chamber_name'],$data['chamber_address'],$data['bmdc_reg_no'],'');
     echo json_encode($Doctors->create());
     
}
function updateDoctorsById($data){
     // echo "Create Working";
     $updateDoctors= new Doctors($data['id'],$data["user_id"],$data['specialization'],$data['chamber_name'],$data['chamber_address'],$data['bmdc_reg_no'],'');
     echo json_encode($updateDoctors->update($data['id']));
     
}
function getDoctorsById($_id){
      $DoctorsId = Doctors :: readById($_id);
     echo json_encode($DoctorsId);
}

?>