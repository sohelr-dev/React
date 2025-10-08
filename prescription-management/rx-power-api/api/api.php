<?php
// echo "API Working <br>";
require_once('../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');
header('Access-Control-Allow-Headers: Content-Type');


foreach(glob("../models/*.class.php") as $filename){
    include_once($filename);
}
include_once("../helper/img-upload-helper.php");

foreach(glob("*-api.php") as $filename){
    include_once($filename);
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
        // role
        elseif($endpoint =="roles" && $method == 'GET'){
            getRoles();
        }


        else{
            echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
        }
       
}

?>