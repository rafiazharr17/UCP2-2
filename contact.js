function show() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  alert(
    "Nama :  " +
      name +
      "\nEmail :  " +
      email +
      "\nPesanan : " +
      message +
      "\nTerimakasih banyak atas pesanannya"
  );

  // Pindah ke index.html setelah alert ditutup
  setTimeout(function () {
    window.location.href = "contact.html";
  }, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("contactForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    show();
  });
});
