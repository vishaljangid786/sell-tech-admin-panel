<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user'])) {
    header("Location: ../views/login.html");
    exit;
}

$stmt = $conn->prepare("SELECT * FROM users");
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($users);
?>
