<?php

class Prescriptions {
    public $id;
    public $appointment_id;
    public $doctor_id;
    public $patient_id;
    public $diagnosis;
    public $notes;
    public $advice;
    public $tests;
    public $follow_up_date;
    public $created_at;

    public function __construct($_id, $_appointment_id, $_doctor_id, $_patient_id, $_diagnosis, $_notes, $_advice, $_tests, $_follow_up_date, $_created_at) {
        $this->id = $_id;
        $this->appointment_id = $_appointment_id;
        $this->doctor_id = $_doctor_id;
        $this->patient_id = $_patient_id;
        $this->diagnosis = $_diagnosis;
        $this->notes = $_notes;
        $this->advice = $_advice;
        $this->tests = $_tests;
        $this->follow_up_date = $_follow_up_date;
        $this->created_at = $_created_at;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO prescriptions (id,appointment_id,doctor_id,patient_id,diagnosis,notes,advice,tests,follow_up_date,created_at) VALUES ('{$this->id}', '{$this->appointment_id}', '{$this->doctor_id}', '{$this->patient_id}', '{$this->diagnosis}', '{$this->notes}', '{$this->advice}', '{$this->tests}', '{$this->follow_up_date}', '{$this->created_at}')";
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
