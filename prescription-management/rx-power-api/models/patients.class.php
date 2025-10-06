<?php

class Patients {
    public $id;
    public $user_id;
    public $age;
    public $gender;
    public $address;
    public $phone;

    public function __construct($_id, $_user_id, $_age, $_gender, $_address, $_phone) {
        $this->id = $_id;
        $this->user_id = $_user_id;
        $this->age = $_age;
        $this->gender = $_gender;
        $this->address = $_address;
        $this->phone = $_phone;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO patients (id,user_id,age,gender,address,phone) VALUES ('{$this->id}', '{$this->user_id}', '{$this->age}', '{$this->gender}', '{$this->address}', '{$this->phone}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM patients";
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
        $sql = "SELECT * FROM patients WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE patients SET id='{$this->id}', user_id='{$this->user_id}', age='{$this->age}', gender='{$this->gender}', address='{$this->address}', phone='{$this->phone}' WHERE id = $id";
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
        $sql = "DELETE FROM patients WHERE id = $id";
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
