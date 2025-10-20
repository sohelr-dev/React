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
      // Tests
      foreach ($_items["tests"] as $item) {
          $CreatePreTest = new PrescriptionTests(null, $pres_id, $item['test_id']);
          $response = $CreatePreTest->create();
          if (!is_int($response)) {
              return ([
                  "status" => "error",
                  "message" => "Test creation failed",
                  "error" => $response
              ]);
          }
      }
      return ([
          "status" => "success",
          "message" => "Data Save Successful",
          "prescription_id" => $pres_id
      ]);
        

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

    public static function getPrescriptionDetailsById($id) {
        global $db;
        $id = (int)$id;

        $sql = "SELECT 
            p.id AS prescription_id,
            p.appointment_id,
            p.diagnosis,
            p.notes,
            p.advice,
            p.follow_up_date,
            p.created_at,
            -- Doctor info
            d.id AS doctor_id,
            u1.name AS doctor_name,
            d.specialization,
            d.chamber_name,
            d.chamber_address,
            d.bmdc_reg_no,
            -- Patient info
            pt.id AS patient_id,
            u2.name AS patient_name,
            pt.age AS patient_age,
            pt.gender AS patient_gender,
            pt.phone AS patient_phone,
            pt.address AS patient_address,
            -- Appointment info
            a.appointment_date,
            a.status AS appointment_status,
            -- Medicines
            m.name AS medicine_name,
            m.generic_name,
            dg.name AS dosage,
            dr.name AS duration,
            i.text AS instruction,
            -- Tests
            t.name AS test_name,
            t.description AS test_description
        FROM prescriptions AS p
        LEFT JOIN doctors AS d ON p.doctor_id = d.id
        LEFT JOIN users AS u1 ON d.user_id = u1.id
        LEFT JOIN patients AS pt ON p.patient_id = pt.id
        LEFT JOIN users AS u2 ON pt.user_id = u2.id
        LEFT JOIN appointments AS a ON p.appointment_id = a.id
        LEFT JOIN prescription_items AS pi ON p.id = pi.prescription_id
        LEFT JOIN medicines AS m ON pi.medicine_id = m.id
        LEFT JOIN dosages AS dg ON pi.dosage_id = dg.id
        LEFT JOIN durations AS dr ON pi.duration_id = dr.id
        LEFT JOIN instructions AS i ON pi.instruction_id = i.id
        LEFT JOIN prescription_tests AS ptst ON p.id = ptst.prescription_id
        LEFT JOIN tests AS t ON ptst.test_id = t.id
        WHERE p.id = $id;";

        $res = $db->query($sql);
        if (!$res) {
            return ["status" => "error", "message" => $db->error];
        }

        $rows = $res->fetch_all(MYSQLI_ASSOC);
        if (count($rows) === 0) return ["status" => "error", "message" => "Prescription not found"];

        $first = $rows[0];

        // Build structured data
        $data = [
            "prescription_id" => $first["prescription_id"],
            "appointment_id" => $first["appointment_id"],
            "diagnosis" => $first["diagnosis"],
            "notes" => $first["notes"],
            "advice" => $first["advice"],
            "follow_up_date" => $first["follow_up_date"],
            "created_at" => $first["created_at"],
            "doctor" => [
                "id" => $first["doctor_id"],
                "name" => $first["doctor_name"],
                "specialization" => $first["specialization"],
                "chamber_name" => $first["chamber_name"],
                "chamber_address" => $first["chamber_address"],
                "bmdc_reg_no" => $first["bmdc_reg_no"]
            ],
            "patient" => [
                "id" => $first["patient_id"],
                "name" => $first["patient_name"],
                "age" => $first["patient_age"],
                "gender" => $first["patient_gender"],
                "phone" => $first["patient_phone"],
                "address" => $first["patient_address"]
            ],
            "appointment" => [
                "date" => $first["appointment_date"],
                "status" => $first["appointment_status"]
            ],
            "medicines" => [],
            "tests" => []
        ];

        $addedMeds = [];
        $addedTests = [];

        foreach ($rows as $r) {
            // Medicines
            if (!empty($r["medicine_name"])) {
                $key = $r["medicine_name"] . $r["dosage"] . $r["duration"];
                if (!isset($addedMeds[$key])) {
                    $data["medicines"][] = [
                        "name" => $r["medicine_name"],
                        "generic_name" => $r["generic_name"],
                        "dosage" => $r["dosage"],
                        "duration" => $r["duration"],
                        "instruction" => $r["instruction"]
                    ];
                    $addedMeds[$key] = true;
                }
            }

            // Tests
            if (!empty($r["test_name"])) {
                $key2 = $r["test_name"];
                if (!isset($addedTests[$key2])) {
                    $data["tests"][] = [
                        "name" => $r["test_name"],
                        "description" => $r["test_description"]
                    ];
                    $addedTests[$key2] = true;
                }
            }
        }

        return ["status" => "success", "data" => $data];
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
