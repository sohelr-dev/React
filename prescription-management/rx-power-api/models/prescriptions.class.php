<?php
include_once("prescription-items.class.php");
include_once("prescription-tests.class.php");

class Prescriptions {
    public $id;
    public $appointment_id;
    public $doctor_id;
    public $patient_id;
    public $diagnosis;
    public $notes;
    public $advice;
    // public $tests;
    public $follow_up_date;


    public function __construct($_id, $_appointment_id, $_doctor_id, $_patient_id, $_diagnosis, $_notes, $_advice,  $_follow_up_date) {
        $this->id = $_id;
        $this->appointment_id = $_appointment_id;
        $this->doctor_id = $_doctor_id;
        $this->patient_id = $_patient_id;
        $this->diagnosis = $_diagnosis;
        $this->notes = $_notes;
        $this->advice = $_advice;
        // $this->tests = $_tests;
        $this->follow_up_date = $_follow_up_date;

    }

    public static function createPrescriptionDetails($_items) {
        global $db;

        $data = $_items["prescription"];
        $CreatePre= new Prescriptions(null,$data["appointment_id"],$data['doctor_id'],$data['patient_id'],$data['diagnosis'],$data['notes'],$data['advice'],$data['follow_up_date']);
        $pres_id = $CreatePre->create();

        // return $pres_id;
        $m_data = $_items["medicine"];
        foreach($m_data as $item){
          $createPreItem = new PrescriptionItems(null, $pres_id, $item['medicine_id'], $item['dosage_id'],$item['duration_id'],$item['instruction_id']);
          $createPreItem->create();
        }

        $t_data = $_items["tests"];
        foreach($t_data as $items){
         $CreatePreTest= new PrescriptionTests(null,$pres_id,$items['test_id']);
         $response =$CreatePreTest->create();
         if(is_int($response)){
          $result ="Data Save SuccessFull | " ." pres_id: ". $pres_id;
         }else{
          return $response;
         }
         return $result;

        }
        


        // $sql = "INSERT INTO prescriptions (id,appointment_id,doctor_id,patient_id,diagnosis,notes,advice,follow_up_date) VALUES ('{$this->id}', '{$this->appointment_id}', '{$this->doctor_id}', '{$this->patient_id}', '{$this->diagnosis}', '{$this->notes}', '{$this->advice}','{$this->follow_up_date}')";
        // if ($db->query($sql)) {
        //   $prescriptions_id = $db->insert_id;
        // }else{
        //   return "Query failed: " . $db->error;
        // }
        // print_r($_items);
        // foreach($_items as $item) {
        //   // $createPreItem= new PrescriptionItems(null,$data["prescription_id"],$data['medicine_id'],$data['dosage_id'],$data['duration_id'],$data['instruction_id']);

        //   $createPreItem = new PrescriptionItems(null, $prescriptions_id, $item->medicine_id, $item->dosage_id,$item->duration_id,$item->instruction_id);
        //   $res = $createPreItem->create();

        //   if(is_int($res)) {
        //     $result = "Data saved successfully";
        //   }else{
        //     return $res;
        //   }
        // }
        // return $result;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO prescriptions (id,appointment_id,doctor_id,patient_id,diagnosis,notes,advice,follow_up_date) VALUES ('{$this->id}', '{$this->appointment_id}', '{$this->doctor_id}', '{$this->patient_id}', '{$this->diagnosis}', '{$this->notes}', '{$this->advice}','{$this->follow_up_date}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM prescriptions";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readById($id) {
        global $db;
        $id = (int)$id;
        $sql = "SELECT * FROM prescriptions WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE prescriptions SET id='{$this->id}', appointment_id='{$this->appointment_id}', doctor_id='{$this->doctor_id}', patient_id='{$this->patient_id}', diagnosis='{$this->diagnosis}', notes='{$this->notes}', advice='{$this->advice}', tests='{$this->tests}', follow_up_date='{$this->follow_up_date}', created_at='{$this->created_at}' WHERE id = $id";
        if ($db->query($sql)) {
          if ($db->affected_rows > 0) {
            return "Update successful.";
          } else {
            return "No changes made or record not found.";
          }
        } else {
          return "Update failed: " . $db->error;
        }
    }

    public static function delete($id) {
        global $db;
        $sql = "DELETE FROM prescriptions WHERE id = $id";
        if ($db->query($sql)) {
          if ($db->affected_rows > 0) {
            return "Delete successful.";
          } else {
            return "No record found with ID $id.";
          }
        } else {
          return "Delete failed: " . $db->error;
        }
    }
}
