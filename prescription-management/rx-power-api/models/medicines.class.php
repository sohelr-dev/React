<?php

class Medicines {
    public $id;
    public $name;
    public $generic_name;
    public $description;
    public $medicine_type_id;

    public function __construct($_id, $_name, $_generic_name, $_description, $_medicine_type_id) {
        $this->id = $_id;
        $this->name = $_name;
        $this->generic_name = $_generic_name;
        $this->description = $_description;
        $this->medicine_type_id = $_medicine_type_id;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO medicines (id,name,generic_name,description,medicine_type_id) VALUES ('{$this->id}', '{$this->name}', '{$this->generic_name}', '{$this->description}', '{$this->medicine_type_id}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM medicines";
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
        $sql = "SELECT * FROM medicines WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE medicines SET id='{$this->id}', name='{$this->name}', generic_name='{$this->generic_name}', description='{$this->description}', medicine_type_id='{$this->medicine_type_id}' WHERE id = $id";
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
        $sql = "DELETE FROM medicines WHERE id = $id";
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
