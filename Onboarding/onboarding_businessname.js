/*const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
      document.getElementById("greeting").textContent = `Hello, ${user.firstN}!`;
    } else {
      // If no user, redirect back to login
      window.location.href = "../AdminFolder/adminSignup.html";
    }
*/



form.addEventListener("submit", function(e){
  e.preventDefault()
  let bname = document.querySelector(".Bname").value
let webname = document.querySelector(".Webname").value
let form = document.getElementById("form")
let sub = document.getElementById("sub")
  localStorage.setItem("bnameL", bname)
  localStorage.setItem("webnameL", webname)
  console.log(localStorage.getItem("bnameL"), localStorage.getItem("webnameL"))
})

