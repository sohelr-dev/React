<?php
// echo "API Working <br>";
require_once('../config/db.php');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


foreach(glob("../models/*.class.php") as $filename){
    include_once($filename);
}
include_once("../helper/img-upload-helper.php");

foreach(glob("*-api.php") as $filename){
    include_once($filename);
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if(isset($_GET['method'])) {
    $endpoint = $_GET['method'];
    $method = $_SERVER['REQUEST_METHOD'];
    // echo $method;
    if($endpoint =='patients'){
            getPatients();
        }elseif($endpoint == 'create-patients' && $_SERVER['REQUEST_METHOD'] =='POST'){
          // echo json_encode($_POST);
          // CreatePatients($data);
          $data = json_decode(file_get_contents("php://input"),true);
          CreatePatients($data);
          // print_r( $data);

          //users
        }elseif($endpoint =="users" && $method == 'GET'){
            getUsers();
        }elseif($endpoint =="create-user" && $method == 'POST'){
            createUser($_POST,$_FILES);
        }elseif($endpoint =="delete-user" && $method == 'DELETE'){
            deleteUser($_GET['id']);
        }elseif($endpoint =="details-user" && $method == 'GET'){
            getUserId($_GET['id']);
        }elseif($endpoint =="edit-user" && $method == 'POST'){
            getUpdateUser($_POST,$_FILES);
        }
        //medicine-types
        elseif($endpoint =="medicine-types" && $method == 'GET'){
            getMedicineTypes();
        }elseif($endpoint =="delete-medicine-type" && $method == 'DELETE'){
            deleteMedicineTypeId($_GET['id']);
        }elseif($endpoint =="create-medicine-type" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createMedicineType($data);
        }elseif($endpoint =="details-medicine-type" && $method == 'GET'){
            getMedicineTypeById($_GET['id']);
        }elseif($endpoint =="edit-medicine-type" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateMedicineTypeById($data);
        }
        //Tests
        elseif($endpoint =="tests" && $method == 'GET'){
            getTests();
        }elseif($endpoint =="delete-test" && $method == 'DELETE'){
            deleteTestsId($_GET['id']);
        }elseif($endpoint =="create-test" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createTests($data);
        }elseif($endpoint =="details-test" && $method == 'GET'){
            getTestsById($_GET['id']);
        }elseif($endpoint =="edit-test" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateTestsById($data);
        }
        // Roles
        elseif($endpoint =="roles" && $method == 'GET'){
            getRoles();
        }elseif($endpoint =="delete-role" && $method == 'DELETE'){
            deleteRolesId($_GET['id']);
        }elseif($endpoint =="create-role" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createRoles($data);
        }elseif($endpoint =="details-role" && $method == 'GET'){
            getRolesById($_GET['id']);
        }elseif($endpoint =="edit-role" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateRolesById($data);
        }
        // Medicines
        elseif($endpoint =="medicines" && $method == 'GET'){
            getMedicines();
        }elseif($endpoint =="delete-medicine" && $method == 'DELETE'){
            deleteMedicinesId($_GET['id']);
        }elseif($endpoint =="create-medicine" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createMedicines($data);
        }elseif($endpoint =="details-medicine" && $method == 'GET'){
            getMedicinesById($_GET['id']);
        }elseif($endpoint =="edit-medicine" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateMedicinesById($data);
        }

        // Doctors
        elseif($endpoint =="doctors" && $method == 'GET'){
            getDoctors();
        }elseif($endpoint =="delete-doctor" && $method == 'DELETE'){
            deleteDoctorsId($_GET['id']);
        }elseif($endpoint =="create-doctor" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createDoctors($data);
        }elseif($endpoint =="details-doctor" && $method == 'GET'){
            getDoctorsById($_GET['id']);
        }elseif($endpoint =="edit-doctor" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateDoctorsById($data);
        }
        // Patients
        elseif($endpoint =="patients" && $method == 'GET'){
            getPatients();
        }elseif($endpoint =="delete-patient" && $method == 'DELETE'){
            deletePatientsId($_GET['id']);
        }elseif($endpoint =="create-patient" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createPatients($data);
        }elseif($endpoint =="details-patient" && $method == 'GET'){
            getPatientsById($_GET['id']);
        }elseif($endpoint =="edit-patient" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updatePatientsById($data);
        }
        // Appointments
        elseif($endpoint =="appointments" && $method == 'GET'){
            if(isset($_GET['search'])){
                getSearch($_GET['search']);
            }else{
                getAppointments();
            }
        }elseif($endpoint =="appointments-today" && $method == 'GET'){
            getAppointmentsToday();
        }elseif($endpoint =="delete-appointment" && $method == 'DELETE'){
            deleteAppointmentsId($_GET['id']);
        }elseif($endpoint =="create-appointment" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createAppointments($data);
        }elseif($endpoint =="details-appointment" && $method == 'GET'){
            getAppointmentsById($_GET['id']);
        }elseif($endpoint =="edit-appointment" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateAppointmentsById($data);
        }elseif($endpoint =="appointments-by-patient" && $method == 'GET'){
            getAllByPatient($_GET['patient_id']);
        }
        // Dosages
        elseif($endpoint =="dosages" && $method == 'GET'){
            getDosages();
        }elseif($endpoint =="delete-dosage" && $method == 'DELETE'){
            deleteDosagesId($_GET['id']);
        }elseif($endpoint =="create-dosage" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createDosages($data);
        }elseif($endpoint =="details-dosage" && $method == 'GET'){
            getDosagesById($_GET['id']);
        }elseif($endpoint =="edit-dosage" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateDosagesById($data);
        }
        // Durations
        elseif($endpoint =="durations" && $method == 'GET'){
            getDurations();
        }elseif($endpoint =="delete-duration" && $method == 'DELETE'){
            deleteDurationsId($_GET['id']);
        }elseif($endpoint =="create-duration" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createDurations($data);
        }elseif($endpoint =="details-duration" && $method == 'GET'){
            getDurationsById($_GET['id']);
        }elseif($endpoint =="edit-duration" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateDurationsById($data);
        }
        // Instructions
        elseif($endpoint =="instructions" && $method == 'GET'){
            getInstructions();
        }elseif($endpoint =="delete-instruction" && $method == 'DELETE'){
            deleteInstructionsId($_GET['id']);
        }elseif($endpoint =="create-instruction" && $method == 'POST'){
            $data = json_decode(file_get_contents("php://input"),true);
            createInstructions($data);
        }elseif($endpoint =="details-instruction" && $method == 'GET'){
            getInstructionsById($_GET['id']);
        }elseif($endpoint =="edit-instruction" && $method == 'PUT'){
            $data = json_decode(file_get_contents("php://input"),true);
            updateInstructionsById($data);
        }
        


        else{
            echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
        }
       
}

?>