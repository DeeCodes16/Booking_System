const SUPABASE_URL = "https://fdkifsbipdadedlznmyt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2lmc2JpcGRhZGVkbHpubXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MjU0MjcsImV4cCI6MjA3MzEwMTQyN30._ZN2Y1eREXw-xJAM_HM59dxjLyRmMUNkua3JGBXOxI8";
let test = document.getElementById("test")
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let namer = document.getElementById("name")
let service = document.getElementById("booking-type") 
let selected = service.value
let selectedServiceText = service.selectedOptions[0].text
let submitbtn = document.getElementById("submitbtn")
let phone = document.getElementById("phone")
let startService = document.getElementById("startService")
let table = document.getElementById("table")


submitbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    addBooking()
    showData()
    
    
})

async function addBooking() {
    const {data,error} = await supabase
    .from("Bookings")
    .insert([{
        name: namer.value,
        service: service.selectedOptions[0].text,
        phone:parseInt(phone.value),
        startTime:startService.value

    }])
    .select()

    if (error) {
        console.error("Error inserting:", error.message)
    }else{
        console.log("inserted row:",data)
        showData()
    }
};
async function showData() {
    const {data,error} = await supabase
    .from("Bookings")
    .select()
    table.innerHTML = ""
    data.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${booking.name}</td>
          <td>${booking.service}</td>
          <td>${booking.phone}</td>
          <td>${booking.startTime}</td>
        `;
        table.appendChild(row);
        console.log(row)

        if (error) {
            console.log(error.message)
        }
      });
      

}
showData()




