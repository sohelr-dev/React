<?php
function createPrescription($d){
     // echo "Create Working";
     // $data = $d["prescription"];
     // // echo json_encode($data["perscription"]);
     // //id,appointment_id,doctor_id,patient_id,diagnosis,notes,advice,tests,follow_up_date
     // $CreatePre= new Prescriptions(null,$data["appointment_id"],$data['doctor_id'],$data['patient_id'],$data['diagnosis'],$data['notes'],$data['advice'],$data['follow_up_date']);
     // echo json_encode($CreatePre->create()); 

     echo json_encode(Prescriptions::createPrescriptionDetails($d));
}

function readPrescription($id){
    $prescription = Prescriptions::getPrescriptionDetailsById($id);
    echo json_encode($prescription);
}

?>