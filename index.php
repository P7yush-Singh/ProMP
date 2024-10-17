<?php
$insert = false;
if(isset($_POST['name'])){
    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";
    $db = "users";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password, $db);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // Collect post variables
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    $exists=false;

    if(($password === $cpassword) && $exists==false){
        $sql = "INSERT INTO `accounts` (`name`, `email`, `password`) VALUES ('$name', '$email', '$password');";
        $result = mysqli_query($con, $sql);
        if ($result){
          echo "<script>alert('Account Created!!');</script>";
          header("Location: index.html");
        }
    }
    else{
      echo "<script>alert('Password Doesn't Match');</script>";
    }
}
?>