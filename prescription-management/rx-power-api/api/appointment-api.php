<?php
function getAppointments(){
    $Appointments = Appointments::readAll();
    echo json_encode($Appointments);
}
function getAppointmentsToday(){
    $AppointmentsToday = Appointments::readAllTodayAppointments();
    echo json_encode($AppointmentsToday);
}
function deleteAppointmentsId($id){
     $deleteAppointments = Appointments :: delete($id);
     echo json_encode($deleteAppointments);
}
function createAppointments($data){
     // echo "Create Working";
     if(isset($data["phone"])){
          $phone = $data['phone'];
     }else{
          $phone = '';
     }
     $user = new Ofline_users_class (null,$data['name'],$data['role_id'],$phone);
     $user_id = $user->create();
     if (!is_numeric($user_id)) {
        echo json_encode(['success' => false, "message" => $user_id]);
        exit;
     }
     $patients= new Patients(null,$user_id,$data['age'],$data['gender'],$data['address']??"",$phone);
     $patient_id=$patients->create();
     if (!is_numeric($patient_id)) {
        echo json_encode(['success' => false, "message" => $patient_id]);
        exit;
     }
     
     $Appointments= new Appointments(null,$data["doctor_id"],$patient_id,$data['appointment_date'],$data['status']);
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
function getAllByPatient($patient_id){
      $appointments = Appointments :: readAllByPatient($patient_id);
     echo json_encode($appointments);
}
function today_appointment(){
      $today = Appointments :: getTOdayAppointment();
     echo json_encode($today);
}

?>