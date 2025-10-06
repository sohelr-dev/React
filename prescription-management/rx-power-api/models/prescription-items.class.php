<?php

class PrescriptionItems {
    public $id;
    public $prescription_id;
    public $medicine_id;
    public $dosage;
    public $duration;
    public $instructions;

    public function __construct($_id, $_prescription_id, $_medicine_id, $_dosage, $_duration, $_instructions) {
        $this->id = $_id;
        $this->prescription_id = $_prescription_id;
        $this->medicine_id = $_medicine_id;
        $this->dosage = $_dosage;
        $this->duration = $_duration;
        $this->instructions = $_instructions;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO prescription_items (id,prescription_id,medicine_id,dosage,duration,instructions) VALUES ('{$this->id}', '{$this->prescription_id}', '{$this->medicine_id}', '{$this->dosage}', '{$this->duration}', '{$this->instructions}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM prescription_items";
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
        $sql = "SELECT * FROM prescription_items WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE prescription_items SET id='{$this->id}', prescription_id='{$this->prescription_id}', medicine_id='{$this->medicine_id}', dosage='{$this->dosage}', duration='{$this->duration}', instructions='{$this->instructions}' WHERE id = $id";
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
        $sql = "DELETE FROM prescription_items WHERE id = $id";
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
