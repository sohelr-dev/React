<?php

class PrescriptionHistoryTests {
    public $id;
    public $prescription_history_id;
    public $test_id;

    public function __construct($_id, $_prescription_history_id, $_test_id) {
        $this->id = $_id;
        $this->prescription_history_id = $_prescription_history_id;
        $this->test_id = $_test_id;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO prescription_history_tests (id,prescription_history_id,test_id) VALUES ('{$this->id}', '{$this->prescription_history_id}', '{$this->test_id}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM prescription_history_tests";
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
        $sql = "SELECT * FROM prescription_history_tests WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE prescription_history_tests SET id='{$this->id}', prescription_history_id='{$this->prescription_history_id}', test_id='{$this->test_id}' WHERE id = $id";
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
        $sql = "DELETE FROM prescription_history_tests WHERE id = $id";
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
