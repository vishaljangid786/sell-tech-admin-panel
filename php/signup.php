<?php
session_start();
require 'db.php'; // Database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    
    // Basic validation
    if (empty($username) || empty($email) || empty($password)) {
        echo "<script>displayError('All fields are required.');</script>";
        exit;
    }

    // Check if username or email already exists
    $stmt = $conn->prepare("SELECT * FROM admins WHERE username = :username OR email = :email");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo "<script>displayError('Username or email already exists.');</script>";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert the new user into the database
    $stmt = $conn->prepare("INSERT INTO admins (username, email, password) VALUES (:username, :email, :password)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashedPassword);

    if ($stmt->execute()) {
        header("Location: ../views/login.html"); // Redirect to login page
        exit;
    } else {
        echo "<script>displayError('Signup failed. Try again.');</script>";
    }
}
?>
