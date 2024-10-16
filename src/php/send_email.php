<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    $to = "irfannurroja@gmail.com@example.com"; 
    $subject = "Pesan Baru dari Form Kontak TailwindCSS";
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Pesan telah dikirim!'); window.location.href='#';</script>"; 
    } else {
        echo "<script>alert('Gagal mengirim pesan. Silakan coba lagi.'); window.location.href='#';</script>"; 
    }
} else {
    echo "<script>alert('Metode permintaan tidak valid.'); window.location.href='#';</script>"; 
}
?>
