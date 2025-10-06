<?php

class Doctors {
    public $id;
    public $user_id;
    public $specialization;
    public $chamber_name;
    public $chamber_address;
    public $bmdc_reg_no;
    public $photo;

    public function __construct($_id, $_user_id, $_specialization, $_chamber_name, $_chamber_address, $_bmdc_reg_no, $_photo) {
        $this->id = $_id;
        $this->user_id = $_user_id;
        $this->specialization = $_specialization;
        $this->chamber_name = $_chamber_name;
        $this->chamber_address = $_chamber_address;
        $this->bmdc_reg_no = $_bmdc_reg_no;
        $this->photo = $_photo;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO doctors (id,user_id,specialization,chamber_name,chamber_address,bmdc_reg_no,photo) VALUES ('{$this->id}', '{$this->user_id}', '{$this->specialization}', '{$this->chamber_name}', '{$this->chamber_address}', '{$this->bmdc_reg_no}', '{$this->photo}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM doctors";
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
        $sql = "SELECT * FROM doctors WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE doctors SET id='{$this->id}', user_id='{$this->user_id}', specialization='{$this->specialization}', chamber_name='{$this->chamber_name}', chamber_address='{$this->chamber_address}', bmdc_reg_no='{$this->bmdc_reg_no}', photo='{$this->photo}' WHERE id = $id";
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
        $sql = "DELETE FROM doctors WHERE id = $id";
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
