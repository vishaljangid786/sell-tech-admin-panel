<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user'])) {
    header("Location: ../views/login.html");
    exit;
}

$stmt = $conn->prepare("SELECT * FROM revenue");
$stmt->execute();
$revenue = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($revenue);
?>
