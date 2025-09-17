// Login form validation script
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Check username length
  if (user.length < 3) {
    alert("Username must be at least 3 characters long");
    return;
  }

  // Check password length
  if (pass.length < 5) {
    alert("Password must be at least 5 characters long");
    return;
  }

  alert("Login successful for user: " + user);
});
