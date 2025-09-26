const SUPABASE_URL = "https://fdkifsbipdadedlznmyt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2lmc2JpcGRhZGVkbHpubXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MjU0MjcsImV4cCI6MjA3MzEwMTQyN30._ZN2Y1eREXw-xJAM_HM59dxjLyRmMUNkua3JGBXOxI8";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let form = document.getElementById("Form");


form.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log("submited")
  logInfo()

})


async function logInfo() {
  let firstN = document.getElementById("firstN").value
  let lastN = document.getElementById("lastN").value
  let email = document.getElementById("emailInput").value
  let password = document.getElementById("passwordInput").value
  let phone = document.getElementById("phoneInput").value

  const {data,error} = await supabase
  .from("Users")
  .insert([{
    firstN:firstN,
    lastN:lastN,
    email:email,
    password:password,
    phone:phone,
  }])
  .select()

  if (error) {
    console.error("Error inserting user:", error.message);
  } else {
    console.log("User inserted:", data);

    // Save user to localStorage
    localStorage.setItem("currentUser", JSON.stringify(data[0]));

    // Redirect to welcome page
    window.location.href = "../index.html";
  }
}

