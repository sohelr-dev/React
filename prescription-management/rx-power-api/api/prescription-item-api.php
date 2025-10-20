<?php
function createPrescriptionItem($d){
     // echo "Create Working";
     $data = $d["medicine"];
     // echo json_encode($data["perscription"]);
     //id,prescription_id,medicine_id,dosage_id,duration_id,instruction_id
     $createPreItem= new PrescriptionItems(null,$data["prescription_id"],$data['medicine_id'],$data['dosage_id'],$data['duration_id'],$data['instruction_id']);
     echo json_encode($createPreItem->create());
     createPrescription();

     
}
?>