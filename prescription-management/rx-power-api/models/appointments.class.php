<?php

class Appointments {
    public $id;
    public $doctor_id;
    public $patient_id;
    public $appointment_date;
    public $status;

    public function __construct($_id, $_doctor_id, $_patient_id, $_appointment_date, $_status) {
        $this->id = $_id;
        $this->doctor_id = $_doctor_id;
        $this->patient_id = $_patient_id;
        $this->appointment_date = $_appointment_date;
        $this->status = $_status;
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT 
            a.*,
            d.user_id AS doctor_user_id,
            do.name AS doctor_name,
            d.specialization,
            d.chamber_name,
            p.user_id AS patient_user_id,
            pa.name AS patient_name,
            p.age,
            p.gender,
            p.phone
          FROM 
              appointments a
          JOIN 
              doctors d ON a.doctor_id = d.id
          JOIN 
              users do ON d.user_id = do.id         
          JOIN 
              patients p ON a.patient_id = p.id
          JOIN 
              users pa ON p.user_id = pa.id       
          ORDER BY 
            a.id DESC;
        ";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }
    public static function readAllTodayAppointments() {
        global $db;
        $sql = "SELECT 
            a.id,
            a.doctor_id,
            a.patient_id,
            a.appointment_date,
            a.status,
            d.user_id AS doctor_user_id,
            do.name AS doctor_name,
            d.specialization,
            d.chamber_name,
            p.user_id AS patient_user_id,
            pa.name AS patient_name,
            p.age,
            p.gender,
            p.phone
          FROM 
              appointments a
          JOIN 
              doctors d ON a.doctor_id = d.id
          JOIN 
              users do ON d.user_id = do.id         
          JOIN 
              patients p ON a.patient_id = p.id
          JOIN 
              users pa ON p.user_id = pa.id
          WHERE DATE(a.appointment_date) = CURDATE();
        ";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }
    public static function readAllByPatient($patient_id) {
        global $db;
        $sql = "SELECT 
            a.*,
            d.user_id AS doctor_user_id,
            do.name AS doctor_name,
            d.specialization,
            d.chamber_name,
            p.user_id AS patient_user_id,
            pa.name AS patient_name,
            p.age,
            p.gender,
            p.phone
          FROM 
              appointments a
          JOIN 
              doctors d ON a.doctor_id = d.id
          JOIN 
              users do ON d.user_id = do.id         
          JOIN 
              patients p ON a.patient_id = p.id
          JOIN 
              users pa ON p.user_id = pa.id       
          ORDER BY 
            a.id DESC;
        ";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO appointments (id,doctor_id,patient_id,appointment_date,status) VALUES ('{$this->id}', '{$this->doctor_id}', '{$this->patient_id}', '{$this->appointment_date}', '{$this->status}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readById($id) {
        global $db;
        $id = (int)$id;
        $sql = "SELECT 
            a.*,
            d.user_id AS doctor_user_id,
            do.name AS doctor_name,
            d.specialization,
            d.chamber_name,
            p.user_id AS patient_user_id,
            pa.name AS patient_name,
            p.age,
            p.gender,
            p.phone
        FROM 
            appointments a
        JOIN 
            doctors d ON a.doctor_id = d.id
        JOIN 
            users do ON d.user_id = do.id         
        JOIN 
            patients p ON a.patient_id = p.id
        JOIN 
            users pa ON p.user_id = pa.id
        Where a.id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readBySearch($search) {
      global $db;
      $sql = "SELECT 
          a.*,
          d.user_id AS doctor_user_id,
          do.name AS doctor_name,
          d.specialization,
          d.chamber_name,
          p.user_id AS patient_user_id,
          pa.name AS patient_name,
          p.age,
          p.gender,
          p.phone
        FROM 
            appointments a
        JOIN 
            doctors d ON a.doctor_id = d.id
        JOIN 
            users do ON d.user_id = do.id         
        JOIN 
            patients p ON a.patient_id = p.id
        JOIN 
            users pa ON p.user_id = pa.id       
        WHERE pa.name LIKE '%$search%' 
        OR do.name LIKE '%$search%'
        OR d.chamber_name LIKE '%$search%'
        OR p.age LIKE '%$search%'
        OR a.appointment_date LIKE '%$search%'
        OR a.id LIKE '%$search%'
      ";
      $res = $db->query($sql);
      if ($res) {
        return $res->fetch_all(MYSQLI_ASSOC);
      } else {
            return "Query failed: " . $db->error;
      }
    }


    public function update($id) {
        global $db;
        $sql = "UPDATE appointments SET id='{$this->id}', doctor_id='{$this->doctor_id}', patient_id='{$this->patient_id}', appointment_date='{$this->appointment_date}', status='{$this->status}' WHERE id = $id";
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
        $sql = "DELETE FROM appointments WHERE id = $id";
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
