<?php

class Ofline_users_class {
    public $id;
    public $name;
    public $role_id;
    public $created_at;
    public $phone;

    public function __construct($_id=null, $_name, $_role_id, $_phone="") {
        $this->id = $_id;
        $this->name = $_name;
        $this->role_id = $_role_id;
        $this->phone = $_phone;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO users (name,role_id,phone) VALUES ('{$this->name}', '{$this->role_id}', '{$this->phone}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT u.*,r.role_name FROM users u ,roles r where u.role_id = r.id order by u.id desc";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }
    public function update($id) {
        global $db;
        $sql = "UPDATE users SET id='{$this->id}', name='{$this->name}', role_id='{$this->role_id}', phone='{$this->phone}' WHERE id ={$id}";
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

    public static function readById($id) {
        global $db;
        $id = (int)$id;
        $sql = "SELECT u.*,r.role_name FROM users u ,roles r where u.role_id = r.id and u.id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function delete($id) {
        global $db;
        $sql = "DELETE FROM users WHERE id = $id";
        if ($db->query($sql)) {
          if ($db->affected_rows > 0) {
            return "Delete id no. $id successfully.";
          } else {
            return "No record found with ID $id.";
          }
        } else {
          return "Delete failed: " . $db->error;
        }
    }
}
