const SUPABASE_URL = "https://fdkifsbipdadedlznmyt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2lmc2JpcGRhZGVkbHpubXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MjU0MjcsImV4cCI6MjA3MzEwMTQyN30._ZN2Y1eREXw-xJAM_HM59dxjLyRmMUNkua3JGBXOxI8";
const Glogin = document.getElementById("googleLogin")
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



Glogin.addEventListener("click", async (e) => {
  e.preventDefault()
    login()


})


async function login() {
  const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: "http://localhost:5500/index.html"
  }
  
})
if (error){
    console.log(error.message)
  }
}