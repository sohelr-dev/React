<?php
function getAppointments(){
    $Appointments = Appointments::readAll();
    echo json_encode($Appointments);
}
function deleteAppointmentsId($id){
     $deleteAppointments = Appointments :: delete($id);
     echo json_encode($deleteAppointments);
}
function createAppointments($data){
     // echo "Create Working";
     $Appointments= new Appointments(null,$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($Appointments->create());
     
}
function updateAppointmentsById($data){
     // echo "Create Working";
     $updateAppointments= new Appointments($data['id'],$data["doctor_id"],$data['patient_id'],$data['appointment_date'],$data['status']);
     echo json_encode($updateAppointments->update($data['id']));
     
}
function getAppointmentsById($_id){
      $AppointmentsId = Appointments :: readById($_id);
     echo json_encode($AppointmentsId);
}
function getSearch($Search){
      $searchByName = Appointments :: readBySearch($Search);
     echo json_encode($searchByName);
}

?>