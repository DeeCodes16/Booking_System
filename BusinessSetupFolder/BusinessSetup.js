const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
      document.getElementById("greeting").textContent = `Hello, ${user.firstN}!`;
    } else {
      // If no user, redirect back to login
      window.location.href = "../AdminFolder/adminSignup.html";
    }