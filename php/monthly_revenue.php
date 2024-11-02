<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user'])) {
    header("Location: ../views/login.html");
    exit;
}

$stmt = $conn->prepare("SELECT MONTHNAME(purchase_date) AS month, SUM(amount) AS revenue FROM revenue GROUP BY MONTH(purchase_date)");
$stmt->execute();
$monthlyRevenue = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($monthlyRevenue);
?>
