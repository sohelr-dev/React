<?php
function createPrescriptionTests($d){
     // echo "Create Working";
     $data = $d["tests"];
     // echo json_encode($data["perscription"]);
     //id,prescription_id,test_id
     $CreatePre= new PrescriptionTests(null,$data["prescription_id"],$data['test_id']);
     echo json_encode($CreatePre->create());
     
}
?>