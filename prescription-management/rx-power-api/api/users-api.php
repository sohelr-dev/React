<?php

function getUsers(){
     $users = Users :: readALl();
     echo json_encode($users);
}
function createUser($data,$files){
     $image= imgUpload($files['photo'],'../uploads/users');
     if(isset($image['success'])){
          $photo =$image['success'];
     }else{
          $photo ="";
          echo json_encode(['success' => false, "massage" =>$image['error']]);
          
     }

       $user = new Users (null,$data['name'],$data['email'],"",$data['role_id'],$data['phone'],$photo);
       echo json_encode($user->create());
}
function getUpdateUser($data,$files){
     $photo='';
     if (!empty($files['photo']['name'])) {
        $image = imgUpload($files['photo'], '../uploads/users');
        if (isset($image['success'])) {
            $photo = $image['success'];
        } else {
            echo json_encode(['success' => false, "message" => $image['error']]);
            exit;
        }
    } else {
        $photo = $data['old_photo'] ?? "";
    }
    if (!isset($data['id'])) {
        echo json_encode(['success' => false, 'message' => 'User ID is missing.']);
        exit;
    }

       $user = new Users ($data['id'],$data['name'],$data['email'],"",$data['role_id'],$data['phone'],$photo);
       echo json_encode($user->update($data['id']));
}

function deleteUser($id){
     $deleteUser = Users :: delete($id);
     echo json_encode($deleteUser);
}
function getUserId($id){
     $User = Users :: readById($id);
     echo json_encode($User);
}


?>